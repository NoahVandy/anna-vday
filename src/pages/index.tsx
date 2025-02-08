import { useState } from "react"
import StickyNote from "./sticky-note"
import FirstText from "./first-text"
import SecondText from "./second-text"

export default function Home() {
  const [showStickyNote, setShowStickyNote] = useState(false)
  const [sheSaidYes, setSheSaidYes] = useState(false)

  return (
    <>
      <main
        className={
          "items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        }
      >
        <div className="whitespace-pre-wrap text-3xl self-center text-center pt-16">
          {sheSaidYes === false && (
            <FirstText onComplete={() => setShowStickyNote(true)} />
          )}
          {sheSaidYes && <SecondText />}
        </div>
        {showStickyNote && (
          <StickyNote
            onConfettiComplete={() => {
              setShowStickyNote(false)
              setSheSaidYes(true)
            }}
          />
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  )
}
