import type { Scene } from '../data/scenes'
import { requiredIso } from '../exposure/model'
import { APERTURES, findAperture, findShutter, SHUTTERS } from '../exposure/stops'
import { ExposureLadder } from './ExposureLadder'

type Props = {
  scene: Scene
  apertureId: string
  shutterId: string
  onApertureChange: (id: string) => void
  onShutterChange: (id: string) => void
}

function formatIso(iso: number) {
  if (iso >= 1) return iso.toLocaleString('en-US', { maximumFractionDigits: 0 })
  return iso.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

export function DecideView(props: Props) {
  const aperture = findAperture(props.apertureId)
  const shutter = findShutter(props.shutterId)
  const iso = requiredIso(props.scene.ev100, aperture.value, shutter.value)

  return (
    <div className="decide-view">
      <ExposureLadder label="APERTURE" stops={APERTURES} selectedId={props.apertureId} onSelect={props.onApertureChange} />
      <ExposureLadder label="MIN SHUTTER" stops={SHUTTERS} selectedId={props.shutterId} onSelect={props.onShutterChange} />
      <section className="required-iso" aria-live="polite">
        <div className="section-label">REQUIRED ISO</div>
        <output>{formatIso(iso)}</output>
      </section>
    </div>
  )
}
