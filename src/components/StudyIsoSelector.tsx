import { useEffect, useRef } from 'react'
import { ISO_STOPS } from '../exposure/stops'

type Props = {
  selectedId: string
  onSelect: (id: string) => void
}

export function StudyIsoSelector({ selectedId, onSelect }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const selectedRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const selected = selectedRef.current
    if (!track || !selected) return

    const left = selected.offsetLeft - track.clientWidth / 2 + selected.clientWidth / 2
    track.scrollTo({ left: Math.max(0, left), behavior: 'smooth' })
  }, [selectedId])

  return (
    <div className="study-iso-picker">
      <div className="study-iso-label">ISO</div>
      <div className="study-iso-track" ref={trackRef} role="group" aria-label="Study ISO">
        {ISO_STOPS.map((iso) => {
          const selected = iso.id === selectedId
          return (
            <button
              ref={selected ? selectedRef : undefined}
              className={selected ? 'study-iso-stop selected' : 'study-iso-stop'}
              key={iso.id}
              onClick={() => onSelect(iso.id)}
              aria-pressed={selected}
            >
              {iso.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
