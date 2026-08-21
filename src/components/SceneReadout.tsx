import type { Scene } from '../data/scenes'
import { findAperture, findShutter } from '../exposure/stops'

export function SceneReadout({ scene }: { scene: Scene }) {
  const aperture = findAperture(scene.anchor.apertureId)
  const shutter = findShutter(scene.anchor.shutterId)

  return (
    <header className="scene-readout">
      <p className="eyebrow">SELECTED SCENE</p>
      <h1>{scene.displayName}</h1>
      <div className="ev-readout"><span>EV<sub className="ev100-sub">100</sub></span> {scene.ev100}</div>
      <div className="anchor-readout">
        <div className="anchor-title">
          {scene.mnemonic ? `${scene.mnemonic} · ` : 'ANCHOR · '}ISO {scene.anchor.iso}
        </div>
        <div className="anchor-values">
          <span>{aperture.label}</span><span>{shutter.label}</span>
        </div>
      </div>
    </header>
  )
}
