import { useEffect, useState } from 'react'
import type { NavItem } from '../content/siteContent'

type HeaderProps = {
  title: string
  navItems: NavItem[]
}

function Header({ title, navItems }: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) return stored
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${title} home`}>
          <span className="brand-gradient">{title}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {navItems.map(item => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀︎' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header

