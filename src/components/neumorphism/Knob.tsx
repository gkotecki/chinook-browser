import { useEffect, useMemo } from "react"

type Props = {
  value: number
  onChange: (value: number) => void
}

export function Knob({ value = 100, onChange }: Props) {
  const equivalentValue = (value / 100) * 270 - 135

  return (
    <div
      className="relative h-8 w-8 rounded-full border border-blue-500"
      style={{ transform: `rotate(${equivalentValue}deg)` }}
    >
      <div className="absolute left-[14px] top-0 h-3 w-px bg-white"></div>
    </div>
  )
}
