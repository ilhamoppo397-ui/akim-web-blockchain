import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import { BLOCKCHAIN_CONFIG } from './blockchain';

// ============================================
// TYPES
// ============================================

export interface CertificatePDFData {
  certificateId: string;
  recipientName: string;
  certificateType: string;
  issuer: string;
  issuedAt: number;
  certificateHash: string;
  revoked: boolean;
}

export interface CertificatePDFOptions {
  txHash?: string | null;
  verifyUrl?: string;
}

// ============================================
// MAIN
// ============================================

export async function generateCertificatePDF(
  cert: CertificatePDFData,
  options: CertificatePDFOptions = {}
): Promise<void> {
  const { txHash, verifyUrl } = options;

  const verificationUrl =
    verifyUrl ||
    `https://certificate.akim.web.id/certificate/verify?id=${encodeURIComponent(cert.certificateId)}`;

  // ============================================
  // GENERATE QR
  // ============================================
  let qrDataUrl = '';
  try {
    qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 400,
      margin: 1,
      color: { dark: '#111827', light: '#ffffff' },
    });
  } catch (e) {
    console.warn('QR generation failed:', e);
  }

  // ============================================
  // FORMAT DATA
  // ============================================
  const issuedDate = new Date(cert.issuedAt * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const networkLabel = BLOCKCHAIN_CONFIG.network === 'sepolia'
    ? 'Ethereum Sepolia Testnet'
    : BLOCKCHAIN_CONFIG.network;

  const contract = BLOCKCHAIN_CONFIG.contractAddress;
  const contractShort = contract.length > 30
    ? `${contract.slice(0, 14)}...${contract.slice(-10)}`
    : contract;

  const txShort = txHash
    ? (txHash.length > 30
        ? `${txHash.slice(0, 14)}...${txHash.slice(-10)}`
        : txHash)
    : 'Not available';

  const statusText = cert.revoked ? 'REVOKED' : 'VALID';
  const statusColor = cert.revoked ? '#d97706' : '#059669';

  // Recipient font size dynamic
  const recipientUpper = cert.recipientName.trim().toUpperCase();
  let recipientFontSize = 32;
  if (recipientUpper.length > 28) recipientFontSize = 26;
  if (recipientUpper.length > 38) recipientFontSize = 22;
  if (recipientUpper.length > 48) recipientFontSize = 18;

  // ============================================
  // BUILD HTML CERTIFICATE
  // Ukuran: 1123 x 794px (A4 Landscape @ 96 DPI)
  // ============================================
  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-99999px';
  wrapper.style.top = '0';
  wrapper.style.width = '1123px';
  wrapper.style.height = '794px';
  wrapper.style.background = '#ffffff';
  wrapper.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
  wrapper.style.color = '#111827';

  wrapper.innerHTML = `
    <div style="
      position: relative;
      width: 1123px;
      height: 794px;
      box-sizing: border-box;
      background: #ffffff;
      overflow: hidden;
    ">
      <!-- OUTER BORDER -->
      <div style="
        position: absolute;
        inset: 28px;
        border: 2px solid #2563eb;
        pointer-events: none;
      "></div>

      <!-- INNER BORDER -->
      <div style="
        position: absolute;
        inset: 38px;
        border: 1px solid #bfdbfe;
        pointer-events: none;
      "></div>

      <!-- CONTENT -->
      <div style="
        position: relative;
        z-index: 2;
        padding: 60px 70px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      ">

        <!-- HEADER -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="
              width: 38px;
              height: 38px;
              background: #2563eb;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              font-weight: 700;
              font-size: 20px;
            ">A</div>
            <div style="font-size: 18px; font-weight: 700; color: #111827; letter-spacing: 0.5px;">AKIM</div>
          </div>
          <div style="
            font-size: 11px;
            font-weight: 500;
            color: #6b7280;
            letter-spacing: 3px;
            text-transform: uppercase;
          ">Digital Certificate</div>
        </div>

        <!-- TITLE -->
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="
            font-size: 44px;
            font-weight: 700;
            color: #2563eb;
            letter-spacing: 1px;
            line-height: 1;
            margin-bottom: 10px;
          ">CERTIFICATE</div>
          <div style="
            font-size: 16px;
            font-weight: 400;
            color: #1e40af;
            letter-spacing: 6px;
            text-transform: uppercase;
          ">Of Achievement</div>
        </div>

        <!-- This is to certify -->
        <div style="
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          font-style: italic;
          margin-bottom: 10px;
        ">This is to certify that</div>

        <!-- RECIPIENT -->
        <div style="text-align: center; margin-bottom: 14px;">
          <div style="
            font-size: ${recipientFontSize}px;
            font-weight: 700;
            color: #111827;
            letter-spacing: 1px;
            line-height: 1.15;
            margin-bottom: 10px;
          ">${recipientUpper}</div>
          <div style="
            width: 50%;
            margin: 0 auto;
            height: 1px;
            background: #2563eb;
          "></div>
        </div>

        <!-- DESCRIPTION -->
        <div style="
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 6px;
        ">has successfully received this certificate for</div>

        <!-- CERT TITLE -->
        <div style="
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 22px;
        ">${cert.certificateType}</div>

        <!-- DIVIDER -->
        <div style="
          height: 1px;
          background: #bfdbfe;
          margin-bottom: 18px;
        "></div>

        <!-- INFO ROW — 4 KOLOM -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr auto;
          gap: 24px;
          align-items: start;
          margin-bottom: 22px;
        ">
          <div>
            <div style="
              font-size: 9px;
              font-weight: 600;
              color: #6b7280;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 5px;
            ">Issued</div>
            <div style="
              font-size: 13px;
              font-weight: 600;
              color: #111827;
            ">${issuedDate}</div>
          </div>

          <div>
            <div style="
              font-size: 9px;
              font-weight: 600;
              color: #6b7280;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 5px;
            ">Issuer</div>
            <div style="
              font-size: 13px;
              font-weight: 600;
              color: #111827;
            ">${cert.issuer}</div>
          </div>

          <div>
            <div style="
              font-size: 9px;
              font-weight: 600;
              color: #6b7280;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 5px;
            ">Certificate ID</div>
            <div style="
              font-size: 13px;
              font-weight: 600;
              color: #111827;
              font-family: 'Courier New', monospace;
            ">${cert.certificateId}</div>
          </div>

          <div>
            <div style="
              font-size: 9px;
              font-weight: 600;
              color: #6b7280;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 5px;
            ">Status</div>
            <div style="
              display: inline-block;
              background: ${statusColor};
              color: #ffffff;
              padding: 3px 12px;
              border-radius: 4px;
              font-size: 10px;
              font-weight: 700;
              letter-spacing: 1px;
            ">${statusText}</div>
          </div>
        </div>

        <!-- SPACER -->
        <div style="flex: 1;"></div>

        <!-- BOTTOM ROW — 2 KOLOM -->
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          padding-top: 16px;
          border-top: 1px solid #bfdbfe;
        ">
          <!-- LEFT — BLOCKCHAIN + SIGNATURE -->
          <div style="flex: 1; min-width: 0;">
            <div style="
              font-size: 10px;
              font-weight: 700;
              color: #2563eb;
              letter-spacing: 2px;
              margin-bottom: 8px;
            ">BLOCKCHAIN VERIFIED</div>

            <div style="
              display: grid;
              grid-template-columns: 70px 1fr;
              gap: 3px 12px;
              font-size: 11px;
              margin-bottom: 14px;
            ">
              <div style="color: #6b7280;">Network</div>
              <div style="color: #111827; font-weight: 600;">${networkLabel}</div>

              <div style="color: #6b7280;">Contract</div>
              <div style="color: #111827; font-family: 'Courier New', monospace; font-size: 10px;">${contractShort}</div>

              <div style="color: #6b7280;">Transaction</div>
              <div style="color: #111827; font-family: 'Courier New', monospace; font-size: 10px;">${txShort}</div>
            </div>

            <!-- AUTHORIZED BY -->
            <div style="margin-top: 4px;">
              <div style="
                font-size: 9px;
                font-weight: 600;
                color: #6b7280;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 3px;
              ">Authorized by</div>
              <div style="
                font-size: 14px;
                font-weight: 700;
                color: #111827;
                border-bottom: 1px solid #6b7280;
                padding-bottom: 2px;
                display: inline-block;
                min-width: 130px;
              ">${cert.issuer}</div>
              <div style="
                font-size: 10px;
                color: #6b7280;
                margin-top: 3px;
              ">Certificate Issuer</div>
            </div>
          </div>

          <!-- RIGHT — QR -->
          <div style="text-align: center; flex-shrink: 0;">
            ${qrDataUrl ? `
              <img src="${qrDataUrl}" style="
                width: 95px;
                height: 95px;
                display: block;
                margin: 0 auto 6px;
              " alt="QR" />
            ` : ''}
            <div style="
              font-size: 9px;
              color: #6b7280;
              font-weight: 600;
            ">Scan to verify</div>
            <div style="
              font-size: 8px;
              color: #9ca3af;
              margin-top: 2px;
            ">akim.web.id/certificate/verify</div>
          </div>
        </div>

        <!-- FOOTER -->
        <div style="
          text-align: center;
          font-size: 9px;
          color: #9ca3af;
          margin-top: 14px;
        ">Generated from akim.web.id • Certificate ${cert.certificateId}</div>

      </div>
    </div>
  `;

  document.body.appendChild(wrapper);

  try {
    // ============================================
    // RENDER HTML → CANVAS
    // ============================================
    const canvas = await html2canvas(wrapper, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
    });

    // ============================================
    // CONVERT → PDF
    // ============================================
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // ============================================
    // SAVE
    // ============================================
    const fileName = `certificate-${sanitizeFileName(cert.certificateId)}.pdf`;
    pdf.save(fileName);
  } catch (e) {
    console.error('PDF generation failed:', e);
    throw e;
  } finally {
    document.body.removeChild(wrapper);
  }
}

// ============================================
// HELPER
// ============================================

function sanitizeFileName(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}