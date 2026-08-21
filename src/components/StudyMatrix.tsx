import type { Scene } from '../data/scenes'
import { exposureValue } from '../exposure/model'
import { APERTURES, findIso, SHUTTERS } from '../exposure/stops'
import { StudyIsoSelector } from './StudyIsoSelector'

type Props = {
  scene: Scene
  isoId: string
  onIsoChange: (id: string) => void
}

export function StudyMatrix({ scene, isoId, onIsoChange }: Props) {
  const iso = findIso(isoId)

  return (
    <section className="study-view">
      <div className="study-heading">
        <div className="study-heading-row">
          <div className="section-label">EXPOSURE MATRIX</div>
          <div className="legend">
            <span><i className="legend-line" />EV100 {scene.ev100}</span>
            <span><i className="legend-anchor" />ANCHOR</span>
          </div>
        </div>
        <StudyIsoSelector selectedId={isoId} onSelect={onIsoChange} />
      </div>
      <div className="matrix-container">
        <table className="matrix">
          <thead>
            <tr>
              <th className="matrix-corner">S / A</th>
              {APERTURES.map((aperture) => <th key={aperture.id} scope="col">{aperture.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {SHUTTERS.map((shutter) => (
              <tr key={shutter.id}>
                <th scope="row">{shutter.label}</th>
                {APERTURES.map((aperture) => {
                  const cellEv100 = exposureValue(aperture.value, shutter.value, iso.value)
                  const isSceneEvLine = cellEv100 === scene.ev100
                  const isAnchor = aperture.id === scene.anchor.apertureId && shutter.id === scene.anchor.shutterId
                  const className = [isSceneEvLine && 'ev-line', isAnchor && 'anchor-cell'].filter(Boolean).join(' ')
                  return (
                    <td key={aperture.id} className={className}>
                      <span>{cellEv100}</span>{isAnchor && <i aria-label="Scene anchor" />}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
