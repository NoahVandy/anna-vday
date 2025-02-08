import TypewriterComponent from "typewriter-effect"

export const SecondText = () => {
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
          .typeString("yay!!!")
          .pauseFor(1000)
          .deleteAll()
          .typeString("it's a date")
          .pauseFor(500)
          .typeString(" :)")
          .pauseFor(1000)
          .deleteAll()
          .typeString("I will see you on Valentine's then!")
          .pauseFor(1500)
          .deleteAll()
          .typeString("- love\nNoah <3")
          .start()
      }}
    />
  )
}
