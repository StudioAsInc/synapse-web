import Header from './components/Header'
import Hero from './components/Hero'
import FeaturesSection from './components/Features'
import Footer from './components/Footer'
import { ctaLinks, features, navItems, siteMeta } from './content/siteContent'

function App() {
  return (
    <div className="app-root">
      <Header title={siteMeta.title} navItems={navItems} />
      <main>
        <Hero
          title={siteMeta.title}
          tagline={siteMeta.tagline}
          description={siteMeta.description}
          ctas={ctaLinks}
        />
        <FeaturesSection features={features} />
        <section id="download" className="section">
          <div className="container cta-banner">
            <div className="cta-text">
              <h2 className="section-title">Get {siteMeta.title}</h2>
              <p className="muted">Fast, modern, and community‑driven.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href={ctaLinks.primary.href} target="_blank" rel="noreferrer">
                {ctaLinks.primary.label}
              </a>
              {ctaLinks.secondary ? (
                <a className="btn btn-secondary" href={ctaLinks.secondary.href}>
                  {ctaLinks.secondary.label}
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer title={siteMeta.title} />
    </div>
  )
}

export default App
