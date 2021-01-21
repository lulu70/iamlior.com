import React from 'react'
import isBrowser from '../helpers/isBrowser'

const useMediaQuery = query => {
  const mediaQueries = {
    lg: '(min-width: 992px)',
  }
  const [mediaQuery, setMediaQuery] = React.useState(
    isBrowser() ? window.matchMedia(mediaQueries[query]).matches : ''
  )
  React.useEffect(() => {
    if (isBrowser()) {
      const handleResize = () => {
        const match = window.matchMedia(mediaQueries[query]).matches
        setMediaQuery(match)
      }
      window.addEventListener('resize', handleResize)
      return () => {
        console.log('cleanup')
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [mediaQueries, query])
  return mediaQuery
}

export default useMediaQuery
