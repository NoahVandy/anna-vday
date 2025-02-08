import { useState } from "react"
import ConfettiExplosion from "react-confetti-explosion"

interface StickyNoteProps {
  onConfettiComplete: () => void
}

type Position = {
  top: number
  left: number
}

export default function StickyNote({ onConfettiComplete }: StickyNoteProps) {
  const [checkedBox, setCheckedBox] = useState<number>()
  const [isExploding, setIsExploding] = useState(false)
  const [position, setPosition] = useState<Position>()

  const handleCheckMark = (num: number) => {
    setCheckedBox((prev) => (prev === num ? undefined : num))
    if (num === 0 || num === 1) {
      setIsExploding(true)
    }
  }
  return (
    <div>
      {isExploding && (
        <ConfettiExplosion
          duration={5000}
          onComplete={() => {
            onConfettiComplete()
          }}
        />
      )}
      <div className="font-sans text-5xl background bg-yellow-200 size-80 text-black text-center p-3 m-8 grid grid-cols-1 grid-rows-4 gap-4">
        <h1>Will you be my Valentine?</h1>
        <div
          className="flex justify-start items-baseline flex-row"
          onClick={() => handleCheckMark(0)}
        >
          <div className="w-10 h-10 m-2 bg-yellow-200 border border-black">
            {checkedBox === 0 && "X"}
          </div>
          Yes!!!
        </div>
        <div
          className="flex justify-start items-baseline flex-row"
          onClick={() => handleCheckMark(1)}
        >
          <div className="w-10 h-10 m-2 bg-yellow-200 border border-black">
            {" "}
            {checkedBox === 1 && "X"}
          </div>
          <div>Absolutely 1000x yes</div>
        </div>
        <div
          className={`flex justify-start items-baseline flex-row ${
            position && "absolute"
          } w-fit h-fit`}
          onClick={() => {
            const newTop = Math.random() * (window.innerHeight - 50) // Ensure button stays within viewport
            const newLeft = Math.random() * (window.innerWidth - 100)
            setPosition({ top: newTop, left: newLeft })
          }}
          style={
            position && {
              top: position.top,
              left: position.left,
            }
          }
        >
          <div className={`w-10 h-10 m-2 bg-yellow-200 border border-black`}>
            {checkedBox === 2 && "X"}
          </div>
          No :(
        </div>
      </div>
    </div>
  )
}
