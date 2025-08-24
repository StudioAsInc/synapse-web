export type SiteMeta = {
  title: string
  tagline: string
  description: string
}

export type CtaLinks = {
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export type NavItem = {
  label: string
  href: string
}

export type Feature = {
  title: string
  description: string
  icon?: string
}

export const siteMeta: SiteMeta = {
  title: 'Synapse',
  tagline: 'Express yourself in a better way',
  description:
    'Synapse is a social app to share posts, join interest-based groups, and connect in real time—fast, modern, and community-driven.'
}

export const ctaLinks: CtaLinks = {
  primary: {
    label: 'Download',
    href: 'https://github.com/StudioAsInc/synapse/releases/download/debug/synapse-alpha.apk'
  },
  secondary: {
    label: 'Release notes',
    href: '#features'
  }
}

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Download', href: '#download' }
]

export const features: Feature[] = [
  {
    title: 'Real-time conversations',
    description:
      'Connect instantly with friends and communities. Low-latency messaging and intuitive threads keep the conversation flowing.'
  },
  {
    title: 'Creator-first tools',
    description:
      'Share text, images, and links with smart embeds. Your audience sees beautiful previews without extra effort.'
  },
  {
    title: 'Thoughtful design',
    description:
      'Clean, accessible UI with light/dark themes, responsive layout, and smooth interactions on every device.'
  }
]

