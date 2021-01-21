import React from 'react'
import isBrowser from '../helpers/isBrowser'

const useElementPosition = () => {
  const elementRef = React.useRef()
  const [elementPosition, setElementPosition] = React.useState(null)

  React.useEffect(() => {
    if (isBrowser()) {
      const handleResize = () => {
        setElementPosition(elementRef.current.getBoundingClientRect())
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [setElementPosition])

  return [elementRef, elementPosition]
}

export default useElementPosition
