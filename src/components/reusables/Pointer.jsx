import React from "react"
import throttle from "lodash/throttle"
import { gsap } from "gsap"

const Pointer = () => {
  const pointerWrapperRef = React.useRef()
  const pointerRef = React.useRef()
  const [mousePosition, setMousePosition] = React.useState({ x: null, y: null })
  const [mouseMoves, setMouseMove] = React.useState(false)
  // getting mouse position state
  React.useEffect(() => {
    let interval
    const updateMousePosition = ev => {
      setMousePosition({
        x: ev.offsetX - 64,
        y: ev.offsetY - 64,
      })
      clearInterval(interval)
      setMouseMove(true)
      interval = setInterval(() => {
        setMouseMove(false)
      }, 500)
    }
    const currentElement = pointerWrapperRef.current
    currentElement.addEventListener(
      "mousemove",
      throttle(updateMousePosition, 30, {
        trailing: false,
      })
    )
    return () => {
      currentElement.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  // animate based on mouse position
  React.useEffect(() => {
    gsap
      .timeline()
      .addLabel("start")
      .to(pointerRef.current, {
        duration: 0.1,
        y: mousePosition.y,
        x: mousePosition.x,
      })
      .to(
        pointerRef.current,
        {
          duration: 0.5,
          autoAlpha: mouseMoves ? 1 : 0,
          scale: mouseMoves ? 0.8 : 0,
        },
        "start"
      )
  }, [mousePosition, mouseMoves])

  return (
    <div
      ref={pointerWrapperRef}
      className="absolute inset-0 w-full h-full z-40"
    >
      <div
        ref={pointerRef}
        className={`absolute w-32 h-32 transform scale-0 rounded-full backdrop-filter backdrop-invert pointer-events-none opacity-0`}
      ></div>
    </div>
  )
}

export default Pointer
