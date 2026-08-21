import { useEffect, useRef } from 'react'
import type { ExposureStop } from '../exposure/stops'

type Props = {
  label: string
  stops: readonly ExposureStop[]
  selectedId: string
  onSelect: (id: string) => void
}

export function ExposureLadder({ label, stops, selectedId, onSelect }: Props) {
  const selectedRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    selectedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [selectedId])

  return (
    <section className="ladder-block">
      <div className="section-label">{label}</div>
      <div className="ladder" role="group" aria-label={label}>
        {stops.map((stop) => {
          const selected = stop.id === selectedId
          return (
            <button
              ref={selected ? selectedRef : undefined}
              className={selected ? 'ladder-stop selected' : 'ladder-stop'}
              key={stop.id}
              onClick={() => onSelect(stop.id)}
              aria-pressed={selected}
            >
              {stop.label}
            </button>
          )
        })}
      </div>
    </section>
  )
}
