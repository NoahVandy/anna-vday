import TypewriterComponent from "typewriter-effect"

interface FirstTextProps {
  onComplete: () => void
}

export const FirstText = ({ onComplete }: FirstTextProps) => {
  return (
    <TypewriterComponent
      options={{
        autoStart: true,
        delay: 100,
        loop: false,
      }}
      data-testid="first-typewriter"
      onInit={(typewriter) => {
        typewriter
          .pauseFor(3000)
          .typeString("Hi babe :)")
          .pauseFor(1500)
          .deleteAll()
          .typeString("I have been meaning to ask you")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Valentine's day is right around the corner")
          .pauseFor(1500)
          .typeString("\nand I was wondering...")
          .pauseFor(1500)
          .callFunction(() => {
            onComplete()
          })
          .start()
      }}
    />
  )
}
