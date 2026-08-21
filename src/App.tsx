import { useState } from 'react'
import { SCENES, type Scene } from './data/scenes'
import { DecideView } from './components/DecideView'
import { SceneReadout } from './components/SceneReadout'
import { SceneSelector } from './components/SceneSelector'
import { StudyMatrix } from './components/StudyMatrix'

type View = 'decide' | 'study'

export default function App() {
  const [view, setView] = useState<View>('decide')
  const [scene, setScene] = useState<Scene>(SCENES[0])
  const [apertureId, setApertureId] = useState(scene.anchor.apertureId)
  const [shutterId, setShutterId] = useState(scene.anchor.shutterId)
  const [studyIsoId, setStudyIsoId] = useState('400')

  const selectScene = (next: Scene) => {
    setScene(next)
    setApertureId(next.anchor.apertureId)
    setShutterId(next.anchor.shutterId)
  }

  return (
    <main className="app-shell">
      <nav className="view-tabs" aria-label="View">
        {(['decide', 'study'] as const).map((item) => (
          <button key={item} className={view === item ? 'active' : ''} onClick={() => setView(item)} aria-pressed={view === item}>
            {item.toUpperCase()}
          </button>
        ))}
      </nav>

      <SceneReadout scene={scene} />
      <SceneSelector scenes={SCENES} selectedId={scene.id} onSelect={selectScene} />

      {view === 'decide' ? (
        <DecideView
          scene={scene}
          apertureId={apertureId}
          shutterId={shutterId}
          onApertureChange={setApertureId}
          onShutterChange={setShutterId}
        />
      ) : (
        <StudyMatrix
          scene={scene}
          isoId={studyIsoId}
          onIsoChange={setStudyIsoId}
        />
      )}
    </main>
  )
}
