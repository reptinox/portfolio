import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Footer, Header, sections } from './components/SiteChrome'
import { profile } from './content/profile'
import { projects } from './content/projects'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function currentRoute() {
  return window.location.hash.slice(1) || '/'
}

function positionPage(route: string, moveFocus: boolean) {
  const section = sections.find(item => route === '/' + item.id)
  const target = document.getElementById(section?.id ?? 'main-content')
  if (moveFocus) target?.focus({ preventScroll: true })
  if (section) target?.scrollIntoView({ block: 'start' })
  else window.scrollTo(0, 0)
}

// Hash routes keep case-study URLs shareable on static hosts without rewrite rules.
export default function App() {
  const [route, setRoute] = useState(currentRoute)
  const [visibleSection, setVisibleSection] = useState('work')
  const project = projects.find(item => route === '/work/' + item.slug)
  const home = route === '/' || sections.some(item => route === '/' + item.id)
  const lastRoute = useRef(route)

  useEffect(() => {
    const update = () => setRoute(currentRoute())
    // Selecting the same hash twice should still return to the requested section.
    const revisit = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      const anchor = event.target instanceof Element ? event.target.closest('a[href^="#/"]') : null
      if (anchor?.getAttribute('href') === '#' + currentRoute()) positionPage(currentRoute(), true)
    }
    window.addEventListener('hashchange', update)
    document.addEventListener('click', revisit)
    return () => {
      window.removeEventListener('hashchange', update)
      document.removeEventListener('click', revisit)
    }
  }, [])

  useLayoutEffect(() => {
    document.title = `${project?.title ?? (home ? profile.role : 'Page unavailable')} — ${profile.name}`
    positionPage(route, route !== lastRoute.current)
    lastRoute.current = route
  }, [route, home, project])

  useEffect(() => {
    if (!home) return
    let frame = 0
    const update = () => {
      frame = 0
      const threshold = Math.min(window.innerHeight * 0.35, 220)
      const current = [...sections].reverse().find(({ id }) => {
        const element = document.getElementById(id)
        return element && element.getBoundingClientRect().top <= threshold
      })
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      setVisibleSection(atBottom ? 'skills' : current?.id ?? 'work')
    }
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [home])

  return <>
    <a className="skip-link" href="#main-content" onClick={event => {
      event.preventDefault()
      document.getElementById('main-content')?.focus()
    }}>Skip to content</a>
    <Header active={home ? visibleSection : project ? 'work' : ''} />
    <main id="main-content" tabIndex={-1}>
      {home ? <HomePage /> : project ? <ProjectPage project={project} /> :
        <section className="container missing-page"><h1>Page unavailable</h1><p>This portfolio page may have moved.</p><a href="#/work" className="text-link">Browse projects</a></section>}
    </main>
    <Footer />
  </>
}
