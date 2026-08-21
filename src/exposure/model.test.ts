import { describe, expect, it } from 'vitest'
import { exposureValue, requiredIso } from './model'
import { findAperture, findIso, findShutter } from './stops'

const calculate = (sceneEv100: number, aperture: string, shutter: string) =>
  requiredIso(sceneEv100, findAperture(aperture).value, findShutter(shutter).value)

describe('requiredIso', () => {
  it.each([
    [14, 'f8', '1/1000', 400],
    [13, 'f11', '1/250', 400],
    [11, 'f5.6', '1/250', 400],
    [9, 'f5.6', '1/60', 400],
    [6, 'f2.8', '1/30', 400],
    [9, 'f5.6', '1/125', 800],
    [9, 'f8', '1/125', 1600],
  ])('EV100 %s, %s, %s requires ISO%s', (sceneEv100, aperture, shutter, iso) => {
    expect(calculate(sceneEv100, aperture, shutter)).toBe(iso)
  })
})

describe('study matrix EV100', () => {
  it.each([
    ['400', 'f11', '1/250', 13],
    ['800', 'f11', '1/500', 13],
    ['1600', 'f11', '1/1000', 13],
    ['400', 'f5.6', '1/60', 9],
    ['800', 'f5.6', '1/125', 9],
  ])('ISO%s, %s, %s is EV100 %s', (iso, aperture, shutter, expectedEv100) => {
    expect(exposureValue(
      findAperture(aperture).value,
      findShutter(shutter).value,
      findIso(iso).value,
    )).toBe(expectedEv100)
  })
})
