export const usePortfolio = () => {
  const baseURL = useRuntimeConfig().app.baseURL || '/'
  const withBase = (path: string) => `${baseURL.replace(/\/$/, '')}${path}`
  const bio = {
    name: 'Sarah Toledo',
    title: 'Développeuse Web & Graphiste',
    description: 'Passionnée par le code et le design, je crée des expériences digitales qui allient esthétique et performance. Spécialisée en développement web moderne et design graphique, je transforme vos idées en réalité.',
    skills: {
      dev: ['Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      design: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Branding']
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sarahtld',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sarah',
      icon: 'linkedin'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/sarah',
      icon: 'dribbble'
    },
    {
      name: 'Behance',
      url: 'https://behance.net/sarah',
      icon: 'behance'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/sarah',
      icon: 'instagram'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'ClésEnMain - Agence Immobilière',
      description: 'Site web moderne pour une agence immobilière avec système de gestion de biens',
      image: withBase('/images/clesenmain-projet.png'),
      link: 'https://sarahtld.github.io/clesenmain-agence-immobiliere/',
      category: 'web',
      stacks: ['Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      year: 2024
    },
    {
      id: 2,
      title: 'Drop The Mouse',
      description: 'Site vitrine pour une agence web avec portfolio et présentation des services',
      image: withBase('/images/drop-the-mouse.png'),
      link: '#',
      category: 'web',
      stacks: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'],
      year: 2024
    },
    {
      id: 3,
      title: 'Memory Game',
      description: 'Jeu de mémoire interactif avec animations fluides',
      image: withBase('/images/memory-game.png'),
      link: '#',
      category: 'web',
      stacks: ['Vue.js', 'Nuxt.js', 'CSS3'],
      year: 2024
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      description: 'Jeu de morpion moderne avec interface intuitive',
      image: withBase('/images/tic-tac-toe-game.png'),
      link: '#',
      category: 'web',
      stacks: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
      year: 2024
    },
    {
      id: 5,
      title: 'Identité Visuelle - Branding',
      description: 'Création d\'identité visuelle complète pour une startup tech',
      image: withBase('/images/branding-project.png'),
      link: '#',
      category: 'design',
      stacks: ['Figma', 'Illustrator', 'Photoshop'],
      year: 2024
    },
    {
      id: 6,
      title: 'UI/UX Design - App Mobile',
      description: 'Design d\'interface utilisateur pour une application mobile de fitness',
      image: withBase('/images/mobile-app-design.png'),
      link: '#',
      category: 'design',
      stacks: ['Figma', 'Adobe XD', 'Prototyping'],
      year: 2024
    }
  ]

  return {
    bio,
    socialLinks,
    projects
  }
}

