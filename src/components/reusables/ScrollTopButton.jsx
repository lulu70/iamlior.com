import React from "react"
import debounce from "lodash/debounce"
import styled from "styled-components"

const StyledButton = styled.button`
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 2000;
  animation: fadeIn 0.5s linear;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`
const StyledArrowSvg = styled.svg`
  transform: rotateX(180deg);
`
const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = React.useState(false)
  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }
    const handleScroll = debounce(() => {
      checkScrollTop()
    }, 100)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return showScroll ? (
    <StyledButton className="btn btn-dark" onClick={scrollTop}>
      <StyledArrowSvg
        width="30"
        height="30"
        viewBox="0 0 56 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.2 1.4L53.8 0L27.9 26.5L1.4 0.599998L0 2L27.9 29.3L55.2 1.4Z"
          fill="white"
        />
      </StyledArrowSvg>
    </StyledButton>
  ) : (
    ""
  )
}

export default ScrollTopButton
