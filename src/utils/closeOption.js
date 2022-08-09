import { useEffect } from 'react'

export const useCloseOption = (ref, setOption) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setTimeout(() => {
          setOption(false)
        }, 100)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [ref, setOption])
}
