import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** React Router muda o hash, mas não rola até o elemento — este helper faz o scroll. */
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))

    const scroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // espera a página da rota montar (ex.: vindo de /comunidade → /#noticias)
    const frame = requestAnimationFrame(() => {
      setTimeout(scroll, 0)
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
