
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// New hook to check if a media query matches
export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    
    // Set initial state
    setMatches(mediaQuery.matches)
    
    // Define the event listener
    const onChange = () => {
      setMatches(mediaQuery.matches)
    }
    
    // Add event listener for the media query changes
    mediaQuery.addEventListener("change", onChange)
    
    // Clean up function
    return () => {
      mediaQuery.removeEventListener("change", onChange)
    }
  }, [query]) // Re-run when query changes

  return matches
}
