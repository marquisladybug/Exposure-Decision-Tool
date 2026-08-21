export function exposureValue(av: number, tv: number, sv: number): number {
  return av + tv - sv
}

export function requiredSensitivityValue(ev100: number, av: number, tv: number): number {
  return av + tv - ev100
}

export function requiredIso(ev100: number, av: number, tv: number): number {
  return 100 * 2 ** requiredSensitivityValue(ev100, av, tv)
}
