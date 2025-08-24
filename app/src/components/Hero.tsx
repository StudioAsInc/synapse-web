import type { CtaLinks } from '../content/siteContent'

type HeroProps = {
  title: string
  tagline: string
  description: string
  ctas: CtaLinks
}

function Hero({ title, tagline, description, ctas }: HeroProps) {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <h1 className="hero-title">
          <span className="gradient-text">{title}</span>
          <span className="hero-subtitle">{tagline}</span>
        </h1>
        <p className="hero-desc">{description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={ctas.primary.href} target="_blank" rel="noreferrer">
            {ctas.primary.label}
          </a>
          {ctas.secondary ? (
            <a className="btn btn-secondary" href={ctas.secondary.href}>
              {ctas.secondary.label}
            </a>
          ) : null}
        </div>
      </div>
      <div className="hero-bg" aria-hidden="true" />
    </section>
  )
}

export default Hero

