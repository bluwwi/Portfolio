const img = (slug: string, file: string) => `/projects/${slug}/${file}`;

export interface Project {
  id: number;
  type: 'image' | 'video';
  title: string;
  subtitle: string;
  image: string;
  link: string;
  locked?: boolean;
  textColor?: string;
  logoImage?: boolean;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'natural';
  gridColumn?: string;
  gridRow?: string;
}

export interface LinkEntry {
  link: string;
  text: string;
}

export interface GalleryItem {
  image: string;
  description?: string;
}

export interface ProjectCard {
  gridOrder: number;
  type: 'image' | 'video';
  title: string;
  subtitle: string;
  preview: string;
  textColor?: string;
  logoImage?: boolean;
  aspectRatio?: Project['aspectRatio'];
  locked?: boolean;
  link?: string;
}

export interface ProjectPage {
  title: string;
  subtitle: string;
  poster: string;
  about: string[];
  role: string[];
  collaborators: string[];
  techStack: string[];
  timeline: string;
  links: LinkEntry[];
  gallery: GalleryItem[];
}

export interface ProjectEntry {
  slug: string
  card: ProjectCard;
  page?: ProjectPage;
}

export interface ProjectPageData {
  link: string;
  title: string;
  poster: string;
  subtitle: string;
  description1: string;
  description2: string;
  role: string[];
  collaborators: string[];
  techStack: string[];
  timeline: string;
  rlinks: LinkEntry[];
  data: GalleryItem[];
}

export const PROJECTS: ProjectEntry[] = [
  {
    slug: 'blu3',
    card: {
      gridOrder: 0,
      type: 'video',
      title: 'blu3',
      subtitle: 'listen together with friends in real-time.',
      preview: '/preview/blu3.mp4',
      textColor: '#010101ff',
      logoImage: true,
    },
    page: {
      title: 'blu3',
      subtitle: 'REAL-TIME COLLABORATIVE MUSIC LISTENING',
      poster: img('blu3', '0.png'),
      about: [
        'Blu3 is a real-time collaborative music listening platform — create rooms, queue songs, and listen together with perfectly synchronized playback. It has 150+ users and it is completely free, no ads, no tracking, no analytics.↗',
        'The open-source frontend client is a Next.js app powering the entire UI — multi-source search (YouTube & JioSaavn), collaborative playlists, real-time chat with GIF support, and a custom audio engine with waveform visualizers. It talks to a separate open-source blu3-server backend over REST + WebSocket.↗',
      ],
      role: ['Full Stack Developer.'],
      collaborators: ['Solo'],
      techStack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'WebSocket', 'Tone.js', 'YouTube IFrame API', 'better-auth'],
      timeline: '2025',
      links: [
        { link: 'https://blu3.in', text: 'MAIN WEBSITE' },
        { link: 'https://github.com/bluwwi/blu3', text: 'FRONTEND GITHUB' },
        { link: 'https://github.com/bluwwi/blu3-server', text: 'BACKEND GITHUB' },
      ],
      gallery: [
        { image: img('blu3', '1.png') },
        { image: img('blu3', '2.png') },
        { image: img('blu3', '3.png') },
        { image: img('blu3', '4.png') },
        { image: img('blu3', '5.png') },
        { image: img('blu3', '6.png') },
        { image: img('blu3', '7.png') },
      ],
    },
  },
  {
    slug: 'vaayujewels',
    card: {
      gridOrder: 1,
      type: 'video',
      title: 'Vaayu jewels',
      subtitle: 'E-COMMERCE JEWELRY WEBSITE',
      preview: '/preview/vaayujewelsv.mp4',
      textColor: '#333333',
      logoImage: true,
    },
    page: {
      title: 'Vaayu Jewels',
      subtitle: 'E-COMMERCE JEWELRY WEBSITE',
      poster: img('vaayujewels', '1.png'),
      about: [
        "I (He/Him) build digital experiences. I crafted VaayuJewels.com end to end — from frontend flows to backend logic. I thrive where design meets engineering, and I'm always up for shaping beautiful, functional web products. Got something cool in mind? Let’s connect↗",
        "I (He/Him) design and develop websites. I built VaayuJewels.com from scratch—full-stack architecture↗",
      ],
      role: ['Full Stack Developer.', 'Designer.'],
      collaborators: ['Harshil Madaliye'],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      timeline: '(SEP-NOV) 2024',
      links: [
        { link: 'https://vaayujewels.com', text: 'MAIN WEBSITE' },
        { link: 'https://www.google.com/search?q=vaayu+jewels&oq=vaayu+jewels&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDINCAEQABiGAxiABBiKBTIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIKCAUQABiABBiiBDIKCAYQABiABBiiBNIBCDc0NzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8', text: 'SEO' },
      ],
      gallery: [
        { image: img('vaayujewels', '2.png') },
        { image: img('vaayujewels', '3.webp') },
        { image: img('vaayujewels', '4.jpg') },
        { image: img('vaayujewels', '5.png') },
      ],
    },
  },
  {
    slug: 'gluwi',
    card: {
      gridOrder: 2,
      type: 'video',
      title: 'gluwi',
      subtitle: 'Ai-code editor like opencode',
      preview: '/preview/gluwi.mp4',
      textColor: '#010101ff',
      logoImage: true,
    },
    page: {
      title: 'gluwi',
      subtitle: 'DESKTOP AI CODING AGENT',
      poster: img('gluwi', '0.png'),
      about: [
        'Gluwi is a desktop AI coding agent built with Wails v3 on a Go backend and React 19 frontend. Chat with an agent that can read/write files, run shell commands, search code, fetch URLs, manage todos, spawn subagents, and run background services — all scoped to a selected workspace folder.↗',
        'It supports 12+ LLM providers with 80+ models, Plan/Build safety modes, MCP server integration, multi-key failover with automatic cooldown, SSRF protection, SQLite-backed session history, themes, i18n, and a SHA-256 verified auto-updater.↗',
      ],
      role: ['Full Stack Developer.'],
      collaborators: ['Solo'],
      techStack: ['Go', 'Wails v3', 'React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'SQLite'],
      timeline: '2025',
      links: [
        { link: 'https://github.com/bluwwi/gluwi', text: 'GITHUB' },
      ],
      gallery: [
        { image: img('gluwi', '1.png') },
        { image: img('gluwi', '2.png') },
        { image: img('gluwi', '3.png') },
        { image: img('gluwi', '4.png') },
      ],
    },
  },
  {
    slug: 'vcron',
    card: {
      gridOrder: 3,
      type: 'image',
      title: 'vcron',
      subtitle: 'self-hosted cron job scheduler for HTTP endpoints',
      preview: '/preview/vcron.png',
      textColor: '#010101ff',
      logoImage: true,
    },
    page: {
      title: 'vcron',
      subtitle: 'SELF-HOSTED CRON JOB SCHEDULER',
      poster: img('vcron', '0.png'),
      about: [
        'Vcron is a lightweight, self-hosted cron job scheduler for HTTP endpoints. Register your APIs as apps, define jobs with cron expressions or sub-minute intervals, and let vcron hit your endpoints on time — every time. Reactive retries, run history, and a real-time dashboard included.↗',
        "Full-stack build: a Rust backend on Axum + Tokio + SQLite where the scheduler ticks every 5 seconds, spawns due jobs, and executes HTTP requests with exponential-backoff retries — logging status codes, response bodies, and durations into a Next.js 16 + React 19 dashboard with JWT cookie auth.↗",
      ],
      role: ['Full Stack Developer.'],
      collaborators: ['Solo'],
      techStack: ['Rust', 'Axum', 'Tokio', 'SQLite/sqlx', 'JWT + bcrypt', 'Next.js', 'React 19', 'Tailwind CSS v4'],
      timeline: '2025',
      links: [
        { link: 'https://vcron.bluwi.xyz', text: 'LIVE APP' },
        { link: 'https://github.com/bluwwi/vcron', text: 'GITHUB' },
      ],
      gallery: [
        { image: img('vcron', '1.png') },
        { image: img('vcron', '2.png') },
        { image: img('vcron', '3.png') },
        { image: img('vcron', '4.png') },
      ],
    },
  },
  {
    slug: 'magic-mail',
    card: {
      gridOrder: 4,
      type: 'image',
      title: 'Magic Mail',
      subtitle: 'COMING SOON',
      preview: '/preview/magic-mail.png',
      textColor: '#010101ff',
      logoImage: true,
      locked: true,
    },
  },
  {
    slug: 'kafinao',
    card: {
      gridOrder: 5,
      type: 'image',
      title: 'Kafinao',
      subtitle: 'NewYork times paper about COffee',
      preview: '/preview/kafinao.png',
      textColor: '#333333',
      logoImage: true,
    },
    page: {
      title: 'Kafinao',
      subtitle: 'YOUR COFFEE SHOP\'S NFT COLLECTION',
      poster: img('kafinao', '0.png'),
      about: [
        "Kafinao is my ongoing passion project—a live NFT gallery that captures the warmth and character of cafés from Seoul to São Paulo, all animated with buttery‑smooth GSAP magic. its based on world wide coffee shops↗",
        "I’m building Kafinao from the ground up: a full‑stack NFT showcase inspired by coffee shops worldwide↗",
      ],
      role: ['Full Stack Developer.', 'Designer.'],
      collaborators: ['Solo'],
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Framer-motion'],
      timeline: 'JAN 2025',
      links: [
        { link: 'https://kafinao.realblue.lol/', text: 'MAIN WEBSITE' },
        { link: 'https://www.google.com/search?q=kafinao.store', text: 'SEO' },
      ],
      gallery: [
        { image: img('kafinao', '1.png') },
        { image: img('kafinao', '2.png') },
        { image: img('kafinao', '3.png') },
        { image: img('kafinao', '4.png') },
        { image: img('kafinao', '5.png') },
        { image: img('kafinao', '6.png') },
        { image: img('kafinao', '7.png') },
      ],
    },
  },
]

const withPage = PROJECTS.filter(
  (entry): entry is ProjectEntry & { page: ProjectPage } => entry.page !== undefined
);

export const projectData: Project[] = [...PROJECTS]
  .sort((a, b) => a.card.gridOrder - b.card.gridOrder)
  .map((entry, index) => ({
    id: index,
    type: entry.card.type,
    title: entry.card.title,
    subtitle: entry.card.subtitle,
    image: entry.card.preview,
    link: entry.card.link ?? entry.slug,
    locked: entry.card.locked,
    textColor: entry.card.textColor,
    logoImage: entry.card.logoImage,
    aspectRatio: entry.card.aspectRatio,
  }));

export const projectPageData: ProjectPageData[] = withPage.map(({
  slug,
  page: { title, subtitle, poster, about, role, collaborators, techStack, timeline, links, gallery },
}) => ({
  link: slug,
  title,
  subtitle,
  poster,
  description1: about[0] ?? '',
  description2: about[1] ?? '',
  role,
  collaborators,
  techStack,
  timeline,
  rlinks: links,
  data: gallery,
}));
