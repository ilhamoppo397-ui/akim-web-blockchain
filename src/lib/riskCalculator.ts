// ============================================
// Risk Calculator — Logic
// ============================================

export interface RiskInput {
  balance: number;
  riskPercent: number;
  entry: number;
  stopLoss: number;
  takeProfit?: number;
  direction: 'BUY' | 'SELL';
  contractSize: number;
  minimumLot?: number;
  lotStep?: number;
}

export interface RiskResult {
  valid: boolean;
  error?: string;

  riskAmount: number;       // $ yang siap dirugiin
  slDistance: number;       // jarak harga ke SL (nilai absolut)
  slDistancePercent: number; // persen jarak SL dari entry

  positionUnits: number;    // ukuran dalam unit (oz / units / koin)
  positionLots: number;     // konversi ke lot (units / contractSize)
  notionalValue: number;    // nilai nominal posisi ($)

  // Take profit
  tpDistance?: number;
  rewardAmount?: number;
  riskReward?: number;      // rasio (1 : N)

  // Broker check
  brokerMinimum?: number;
  theoreticalBelowMinimum?: boolean;
  actualRiskAtMinLot?: number;
  actualRiskExceedsTarget?: boolean;
}

export function calculateRisk(input: RiskInput): RiskResult {
  const {
    balance,
    riskPercent,
    entry,
    stopLoss,
    takeProfit,
    direction,
    contractSize,
    minimumLot = 0.01,
    lotStep = 0.01,
  } = input;

  // ============ VALIDASI ============
  if (!isFinite(balance) || balance <= 0) {
    return invalid('Modal harus lebih dari 0.');
  }
  if (!isFinite(riskPercent) || riskPercent <= 0 || riskPercent > 100) {
    return invalid('Risiko harus antara 0 dan 100 persen.');
  }
  if (!isFinite(entry) || entry <= 0) {
    return invalid('Harga entry harus lebih dari 0.');
  }
  if (!isFinite(stopLoss) || stopLoss <= 0) {
    return invalid('Stop loss harus lebih dari 0.');
  }
  if (direction === 'BUY' && stopLoss >= entry) {
    return invalid('Stop Loss tidak valid untuk posisi BUY. SL harus di bawah entry.');
  }
  if (direction === 'SELL' && stopLoss <= entry) {
    return invalid('Stop Loss tidak valid untuk posisi SELL. SL harus di atas entry.');
  }
  if (takeProfit != null && isFinite(takeProfit) && takeProfit > 0) {
    if (direction === 'BUY' && takeProfit <= entry) {
      return invalid('Take Profit tidak valid untuk posisi BUY. TP harus di atas entry.');
    }
    if (direction === 'SELL' && takeProfit >= entry) {
      return invalid('Take Profit tidak valid untuk posisi SELL. TP harus di bawah entry.');
    }
  }
  if (!isFinite(contractSize) || contractSize <= 0) {
    return invalid('Contract size harus lebih dari 0.');
  }

  // ============ RISK AMOUNT ============
  const riskAmount = balance * (riskPercent / 100);

  // ============ SL DISTANCE ============
  const slDistance = Math.abs(entry - stopLoss);
  const slDistancePercent = (slDistance / entry) * 100;

  // ============ POSITION SIZE ============
  const positionUnits = riskAmount / slDistance;
  const positionLots = positionUnits / contractSize;
  const notionalValue = positionUnits * entry;

  // ============ TAKE PROFIT ============
  let tpDistance: number | undefined;
  let rewardAmount: number | undefined;
  let riskReward: number | undefined;

  if (takeProfit != null && isFinite(takeProfit) && takeProfit > 0) {
    tpDistance = Math.abs(takeProfit - entry);
    rewardAmount = positionUnits * tpDistance;
    riskReward = tpDistance / slDistance;
  }

  // ============ BROKER CHECK ============
  let theoreticalBelowMinimum = false;
  let actualRiskAtMinLot: number | undefined;
  let actualRiskExceedsTarget = false;

  if (minimumLot > 0 && positionLots < minimumLot) {
    theoreticalBelowMinimum = true;
    // Risk jika pakai minimum lot
    actualRiskAtMinLot = minimumLot * contractSize * slDistance;
    actualRiskExceedsTarget = actualRiskAtMinLot > riskAmount;
  }

  return {
    valid: true,
    riskAmount,
    slDistance,
    slDistancePercent,
    positionUnits,
    positionLots,
    notionalValue,
    tpDistance,
    rewardAmount,
    riskReward,
    brokerMinimum: minimumLot,
    theoreticalBelowMinimum,
    actualRiskAtMinLot,
    actualRiskExceedsTarget,
  };
}

function invalid(error: string): RiskResult {
  return {
    valid: false,
    error,
    riskAmount: 0,
    slDistance: 0,
    slDistancePercent: 0,
    positionUnits: 0,
    positionLots: 0,
    notionalValue: 0,
  };
}

// ============================================
// Konstanta — Contract Size Default
// ============================================

export const INSTRUMENT_PRESETS = {
  XAUUSD: {
    label: 'XAUUSD (Gold)',
    contractSize: 100,      // 1 lot = 100 troy oz
    unit: 'oz',
    minimumLot: 0.01,
    lotStep: 0.01,
  },
  FOREX: {
    label: 'Forex (Standard)',
    contractSize: 100000,   // 1 lot = 100,000 units
    unit: 'units',
    minimumLot: 0.01,
    lotStep: 0.01,
  },
  CRYPTO: {
    label: 'Crypto (Spot)',
    contractSize: 1,        // 1 lot = 1 coin
    unit: 'coin',
    minimumLot: 0.00001,
    lotStep: 0.00001,
  },
  CUSTOM: {
    label: 'Custom',
    contractSize: 1,
    unit: 'unit',
    minimumLot: 0.01,
    lotStep: 0.01,
  },
} as const;

export type InstrumentKey = keyof typeof INSTRUMENT_PRESETS;