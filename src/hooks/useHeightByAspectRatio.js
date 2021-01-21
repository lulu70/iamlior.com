import React from 'react'

const useHeightByAspectRatio = (aspectRatio = 4 / 3) => {
  const ref = React.useRef()
  const [height, setHeight] = React.useState(0)
  React.useEffect(() => {
    const width = ref.current.offsetWidth
    const height = width / aspectRatio
    setHeight(height)
  }, [aspectRatio])
  return { ref, height }
}
export default useHeightByAspectRatio
