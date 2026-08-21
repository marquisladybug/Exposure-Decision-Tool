export type Scene = {
  id: string
  name: string
  displayName: string
  ev100: number
  anchor: {
    iso: 400
    apertureId: string
    shutterId: string
  }
  mnemonic?: string
}

export const SCENES: readonly Scene[] = [
  {
    id: 'sunny', name: 'Sunny', displayName: 'SUNNY', ev100: 14,
    anchor: { iso: 400, apertureId: 'f8', shutterId: '1/1000' }, mnemonic: 'センパチ',
  },
  {
    id: 'bright-cloud', name: 'Bright / Slight Cloud', displayName: 'BRIGHT / SLIGHT CLOUD', ev100: 13,
    anchor: { iso: 400, apertureId: 'f11', shutterId: '1/250' },
  },
  {
    id: 'shade', name: 'Shade', displayName: 'SHADE', ev100: 11,
    anchor: { iso: 400, apertureId: 'f5.6', shutterId: '1/250' },
  },
  {
    id: 'vermeer', name: 'Vermeer Line', displayName: 'VERMEER LINE', ev100: 9,
    anchor: { iso: 400, apertureId: 'f5.6', shutterId: '1/60' },
  },
  {
    id: 'magic-hour', name: 'Magic Hour / Table', displayName: 'MAGIC HOUR / TABLE', ev100: 6,
    anchor: { iso: 400, apertureId: 'f2.8', shutterId: '1/30' },
  },
]
