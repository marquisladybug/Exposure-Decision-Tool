import type { Scene } from '../data/scenes'

type Props = {
  scenes: readonly Scene[]
  selectedId: string
  onSelect: (scene: Scene) => void
}

export function SceneSelector({ scenes, selectedId, onSelect }: Props) {
  return (
    <section className="scene-selector" aria-labelledby="scene-label">
      <div className="section-label" id="scene-label">SCENE</div>
      <div className="scene-list">
        {scenes.map((scene) => (
          <button
            className={scene.id === selectedId ? 'scene-chip selected' : 'scene-chip'}
            key={scene.id}
            onClick={() => onSelect(scene)}
            aria-pressed={scene.id === selectedId}
          >
            <span>{scene.name}</span><span>EV {scene.ev100}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
