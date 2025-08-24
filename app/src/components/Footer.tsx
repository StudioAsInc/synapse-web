type FooterProps = {
  title: string
}

function Footer({ title }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {title}. All rights reserved.
        </p>
        <a id="download" className="btn btn-quiet" href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer

