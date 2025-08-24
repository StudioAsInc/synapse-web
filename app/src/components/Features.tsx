import type { Feature } from '../content/siteContent'

type FeaturesProps = {
  id?: string
  title?: string
  features: Feature[]
}

function FeaturesSection({ id = 'features', title = 'Features', features }: FeaturesProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <article key={idx} className="feature-card">
              {f.icon ? (
                <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              ) : null}
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

