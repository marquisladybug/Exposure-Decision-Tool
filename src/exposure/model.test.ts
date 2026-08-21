import { describe, expect, it } from 'vitest'
import { exposureValue, requiredIso } from './model'
import { findAperture, findIso, findShutter } from './stops'

const calculate = (ev: number, aperture: string, shutter: string) =>
  requiredIso(ev, findAperture(aperture).value, findShutter(shutter).value)

describe('requiredIso', () => {
  it.each([
    [14, 'f8', '1/1000', 400],
    [13, 'f11', '1/250', 400],
    [11, 'f5.6', '1/250', 400],
    [9, 'f5.6', '1/60', 400],
    [6, 'f2.8', '1/30', 400],
    [9, 'f5.6', '1/125', 800],
    [9, 'f8', '1/125', 1600],
  ])('EV%s, %s, %s requires ISO%s', (ev, aperture, shutter, iso) => {
    expect(calculate(ev, aperture, shutter)).toBe(iso)
  })
})

describe('study matrix EV', () => {
  it.each([
    ['400', 'f11', '1/250', 13],
    ['800', 'f11', '1/500', 13],
    ['1600', 'f11', '1/1000', 13],
    ['400', 'f5.6', '1/60', 9],
    ['800', 'f5.6', '1/125', 9],
  ])('ISO%s, %s, %s is EV%s', (iso, aperture, shutter, ev) => {
    expect(exposureValue(
      findAperture(aperture).value,
      findShutter(shutter).value,
      findIso(iso).value,
    )).toBe(ev)
  })
})
