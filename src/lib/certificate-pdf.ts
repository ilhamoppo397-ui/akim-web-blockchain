import { jsPDF } from 'jspdf';
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
// COLORS
// ============================================

const COLOR = {
  primary: '#2563eb',
  primaryDark: '#1e40af',
  primaryLight: '#93c5fd',
  text: '#0f172a',
  textMuted: '#64748b',
  textLight: '#94a3b8',
  success: '#059669',
  warning: '#d97706',
  white: '#ffffff',
};

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

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const centerX = pageWidth / 2;

  // ============================================
  // BORDER
  // ============================================
  // Outer
  doc.setDrawColor(COLOR.primary);
  doc.setLineWidth(0.7);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16);

  // Inner (subtle)
  doc.setDrawColor(COLOR.primaryLight);
  doc.setLineWidth(0.35);
  doc.rect(11, 11, pageWidth - 22, pageHeight - 22);

  // Corner accents
  const cornerSize = 6;
  doc.setDrawColor(COLOR.primary);
  doc.setLineWidth(1.2);
  // Top-left
  doc.line(8, 8 + cornerSize, 8, 8);
  doc.line(8, 8, 8 + cornerSize, 8);
  // Top-right
  doc.line(pageWidth - 8, 8 + cornerSize, pageWidth - 8, 8);
  doc.line(pageWidth - 8, 8, pageWidth - 8 - cornerSize, 8);
  // Bottom-left
  doc.line(8, pageHeight - 8 - cornerSize, 8, pageHeight - 8);
  doc.line(8, pageHeight - 8, 8 + cornerSize, pageHeight - 8);
  // Bottom-right
  doc.line(pageWidth - 8, pageHeight - 8 - cornerSize, pageWidth - 8, pageHeight - 8);
  doc.line(pageWidth - 8, pageHeight - 8, pageWidth - 8 - cornerSize, pageHeight - 8);

  // ============================================
  // HEADER — Logo mark + Brand (left) + DIGITAL CERTIFICATE (right)
  // ============================================
  const headerY = 20;

  // Logo mark "A"
  doc.setFillColor(COLOR.primary);
  doc.roundedRect(18, headerY, 9, 9, 1.3, 1.3, 'F');
  doc.setTextColor(COLOR.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('A', 22.5, headerY + 6.3, { align: 'center' });

  // Brand
  doc.setTextColor(COLOR.text);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('AKIM', 30, headerY + 6.3);

  // Right header — geser ke dalam border (32mm dari kanan)
  doc.setTextColor(COLOR.textMuted);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setCharSpace(0.8);
  doc.text('DIGITAL CERTIFICATE', pageWidth - 32, headerY + 6.3, { align: 'right' });
  doc.setCharSpace(0);

  // ============================================
  // TITLE
  // ============================================
  const titleY = 48;

  doc.setTextColor(COLOR.primary);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text('CERTIFICATE', centerX, titleY, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(COLOR.primaryDark);
  doc.setCharSpace(1);
  doc.text('OF ACHIEVEMENT', centerX, titleY + 7, { align: 'center' });
  doc.setCharSpace(0);

  // ============================================
  // "THIS IS TO CERTIFY THAT" — NORMAL
  // ============================================
  doc.setTextColor(COLOR.textMuted);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text('This is to certify that', centerX, 68, { align: 'center' });

  // ============================================
  // RECIPIENT — dynamic font size
  // ============================================
  const recipient = cert.recipientName.trim();
  const recipientUpper = recipient.toUpperCase();

  let recipientFontSize = 26;
  if (recipientUpper.length > 28) recipientFontSize = 22;
  if (recipientUpper.length > 38) recipientFontSize = 18;
  if (recipientUpper.length > 48) recipientFontSize = 15;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(recipientFontSize);
  doc.setTextColor(COLOR.text);

  const maxWidth = pageWidth * 0.65;
  const recipientLines = doc.splitTextToSize(recipientUpper, maxWidth);

  const recipientY = 82;
  const lineHeight = recipientFontSize * 0.42;
  const totalHeight = recipientLines.length * lineHeight;

  recipientLines.forEach((line: string, i: number) => {
    const y = recipientY + i * lineHeight;
    doc.text(line, centerX, y, { align: 'center' });

    if (i === recipientLines.length - 1) {
      const lineWidth = doc.getTextWidth(line);
      const underlineY = y + 1.5;
      doc.setDrawColor(COLOR.primary);
      doc.setLineWidth(0.4);
      doc.line(
        centerX - lineWidth / 2,
        underlineY,
        centerX + lineWidth / 2,
        underlineY
      );
    }
  });

  // ============================================
  // CERTIFICATE TYPE
  // ============================================
  const typeY = recipientY + totalHeight + 6;

  doc.setTextColor(COLOR.textMuted);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text('has successfully received this certificate for', centerX, typeY, { align: 'center' });

  doc.setTextColor(COLOR.text);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text(cert.certificateType, centerX, typeY + 8, { align: 'center' });

  // ============================================
  // INFO SECTION
  // ============================================
  const infoY = 132;
  const infoLeftX = 24;
  const infoLineHeight = 6.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);

  const drawInfo = (label: string, value: string, y: number) => {
    doc.setTextColor(COLOR.textMuted);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(label, infoLeftX, y);

    doc.setTextColor(COLOR.text);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(value, infoLeftX + 30, y);
  };

  const issuedDate = new Date(cert.issuedAt * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  drawInfo('Issued:', issuedDate, infoY);
  drawInfo('Issuer:', cert.issuer, infoY + infoLineHeight);
  drawInfo('Certificate ID:', cert.certificateId, infoY + infoLineHeight * 2);

  // Status badge
  const statusText = cert.revoked ? 'REVOKED' : 'VALID';
  const statusColor = cert.revoked ? COLOR.warning : COLOR.success;

  doc.setTextColor(COLOR.textMuted);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Status:', infoLeftX, infoY + infoLineHeight * 3);

  doc.setFillColor(statusColor);
  doc.roundedRect(infoLeftX + 30, infoY + infoLineHeight * 3 - 4, 20, 6, 1, 1, 'F');
  doc.setTextColor(COLOR.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(statusText, infoLeftX + 40, infoY + infoLineHeight * 3, { align: 'center' });

  // ============================================
  // QR CODE
  // ============================================
  const qrSize = 34;
  const qrX = pageWidth - 24 - qrSize;
  const qrY = infoY - 4;

  try {
    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 400,
      margin: 1,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    });

    doc.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);

    doc.setTextColor(COLOR.textMuted);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text('Scan to verify', qrX + qrSize / 2, qrY + qrSize + 4.5, { align: 'center' });

    const shortUrl = verificationUrl.replace(/^https?:\/\//, '');
    const displayUrl = shortUrl.length > 40 ? shortUrl.slice(0, 37) + '...' : shortUrl;
    doc.setFontSize(6.5);
    doc.setTextColor(COLOR.textLight);
    doc.text(displayUrl, qrX + qrSize / 2, qrY + qrSize + 8, { align: 'center' });

  } catch (e) {
    console.warn('QR generation failed:', e);
    doc.setTextColor(COLOR.textMuted);
    doc.setFontSize(8);
    doc.text('Verify at:', qrX, qrY + 10);
    doc.setFontSize(7);
    doc.text(verificationUrl, qrX, qrY + 15);
  }

  // ============================================
  // DIVIDER
  // ============================================
  const dividerY = 168;
  doc.setDrawColor(COLOR.primaryLight);
  doc.setLineWidth(0.3);
  doc.line(24, dividerY, pageWidth - 24, dividerY);

  // ============================================
  // BLOCKCHAIN SECTION
  // ============================================
  const bcY = dividerY + 7;

  doc.setTextColor(COLOR.primary);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setCharSpace(0.5);
  doc.text('BLOCKCHAIN VERIFIED', 24, bcY);
  doc.setCharSpace(0);

  doc.setTextColor(COLOR.textMuted);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);

  const networkLabel = BLOCKCHAIN_CONFIG.network === 'sepolia'
    ? 'Ethereum Sepolia Testnet'
    : BLOCKCHAIN_CONFIG.network;

  const contract = BLOCKCHAIN_CONFIG.contractAddress;
  const contractShort = contract.length > 34
    ? `${contract.slice(0, 16)}...${contract.slice(-12)}`
    : contract;

  const txShort = txHash
    ? (txHash.length > 34
        ? `${txHash.slice(0, 16)}...${txHash.slice(-12)}`
        : txHash)
    : null;

  doc.text(`Network: ${networkLabel}`, 24, bcY + 5);
  doc.text(`Contract: ${contractShort}`, 24, bcY + 9.5);

  if (txShort) {
    const rightColX = pageWidth / 2 + 10;
    doc.text(`Transaction: ${txShort}`, rightColX, bcY + 5);
  }

  // ============================================
  // FOOTER
  // ============================================
  doc.setTextColor(COLOR.textLight);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.text(
    `Generated from akim.web.id • Certificate ${cert.certificateId}`,
    centerX,
    pageHeight - 14,
    { align: 'center' }
  );

  // ============================================
  // SAVE
  // ============================================
  const fileName = `certificate-${sanitizeFileName(cert.certificateId)}.pdf`;
  doc.save(fileName);
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