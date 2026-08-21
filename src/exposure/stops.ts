export type ExposureStop = {
  id: string
  label: string
  value: number
}

export const APERTURES = [
  { id: 'f1', label: 'F1', value: 0 },
  { id: 'f1.4', label: 'F1.4', value: 1 },
  { id: 'f2', label: 'F2', value: 2 },
  { id: 'f2.8', label: 'F2.8', value: 3 },
  { id: 'f4', label: 'F4', value: 4 },
  { id: 'f5.6', label: 'F5.6', value: 5 },
  { id: 'f8', label: 'F8', value: 6 },
  { id: 'f11', label: 'F11', value: 7 },
  { id: 'f16', label: 'F16', value: 8 },
  { id: 'f22', label: 'F22', value: 9 },
  { id: 'f32', label: 'F32', value: 10 },
] as const satisfies readonly ExposureStop[]

export const SHUTTERS = [
  { id: '1s', label: '1s', value: 0 },
  { id: '1/2', label: '1/2', value: 1 },
  { id: '1/4', label: '1/4', value: 2 },
  { id: '1/8', label: '1/8', value: 3 },
  { id: '1/15', label: '1/15', value: 4 },
  { id: '1/30', label: '1/30', value: 5 },
  { id: '1/60', label: '1/60', value: 6 },
  { id: '1/125', label: '1/125', value: 7 },
  { id: '1/250', label: '1/250', value: 8 },
  { id: '1/500', label: '1/500', value: 9 },
  { id: '1/1000', label: '1/1000', value: 10 },
  { id: '1/2000', label: '1/2000', value: 11 },
  { id: '1/4000', label: '1/4000', value: 12 },
] as const satisfies readonly ExposureStop[]

export const ISO_STOPS = [
  { id: '25', label: '25', value: -2 },
  { id: '50', label: '50', value: -1 },
  { id: '100', label: '100', value: 0 },
  { id: '200', label: '200', value: 1 },
  { id: '400', label: '400', value: 2 },
  { id: '800', label: '800', value: 3 },
  { id: '1600', label: '1600', value: 4 },
  { id: '3200', label: '3200', value: 5 },
  { id: '6400', label: '6400', value: 6 },
  { id: '12800', label: '12800', value: 7 },
  { id: '25600', label: '25600', value: 8 },
] as const satisfies readonly ExposureStop[]

export function findAperture(id: string) {
  const stop = APERTURES.find((item) => item.id === id)
  if (!stop) throw new Error(`Unknown aperture: ${id}`)
  return stop
}

export function findShutter(id: string) {
  const stop = SHUTTERS.find((item) => item.id === id)
  if (!stop) throw new Error(`Unknown shutter: ${id}`)
  return stop
}
