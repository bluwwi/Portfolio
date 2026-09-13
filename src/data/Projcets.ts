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
    slug: 'sunflower',
    card: {
      gridOrder: 3,
      type: 'image',
      title: 'Sunflower',
      subtitle: 'find All about your music Artist',
      preview: '/preview/sunflower.png',
      textColor: '#010101ff',
      logoImage: true,
    },
    page: {
      title: 'sunflower',
      subtitle: 'Find Your Favorite Spotify Artist',
      poster: img('sunflower', '0.png'),
      about: [
        "Sunflower is a platform that allows users to find their favorite Spotify artists. user can see their albums and on new album release user get notified about new tracks↗",
        "I’m building Sunflower from the ground up: a full‑stack platform that allows users to find their favorite Spotify artists with spotify apis↗",
      ],
      role: ['Full Stack Developer.'],
      collaborators: ['Solo'],
      techStack: ['Next.js', 'Express.js', 'BetterAuth', 'SpotifyAPI', 'JWT-OAUTH-GOOGLE', 'TypeScript'],
      timeline: 'JAN 2026',
      links: [
        { link: 'https://www.sunflower.realblue.lol/', text: 'MAIN WEBSITE' },
        { link: 'https://github.com/xrealblue/sunflower', text: 'FRONTEND GITHUB' },
        { link: 'https://github.com/xrealblue/sunflower-backend', text: 'BACKEND GITHUB' },
      ],
      gallery: [
        { image: img('sunflower', '1.png') },
        { image: img('sunflower', '2.png') },
        { image: img('sunflower', '3.png') },
        { image: img('sunflower', '4.png') },
        { image: img('sunflower', '5.png') },
        { image: img('sunflower', '6.png') },
        { image: img('sunflower', '7.png') },
        { image: img('sunflower', '8.png') },
        { image: img('sunflower', '9.png') },
      ],
    },
  },
  {
    slug: 'midway',
    card: {
      gridOrder: 4,
      type: 'image',
      title: 'midway',
      subtitle: 'Your cross-chain payment solution',
      preview: '/preview/midway.png',
      textColor: '#333333',
      logoImage: true,
    },
    page: {
      title: 'midway',
      subtitle: ' your cross-chain payment solution.',
      poster: img('midway', '2.png'),
      about: [
        "Midway is a revolutionary cross-chain payment infrastructure that enables users to deposit funds on any supported blockchain and have them instantly available on the core network. Built on LayerZero's omnichain protocol, Midway eliminates the friction of managing multiple wallets and bridging funds across different chains.↗",
        "Midway is deployed on Optimism, Ethereum, Unichain, Zora, Base, World Chain, Polygon, and Ink Ethereum, with Optimism serving as the core network while the others act as client networks.↗",
      ],
      role: ['Developer.'],
      collaborators: ['Solo'],
      techStack: ['OpenZeppelin', 'LayerZero V2', 'Wagmi', 'Viem', 'Hardhat v3', 'TypeScript'],
      timeline: '2025',
      links: [
        { link: 'https://midway.heet.pro/', text: 'MAIN WEBSITE' },
        { link: 'https://github.com/heetprox/Midway-contracts', text: 'Contracts' },
        { link: 'https://github.com/heetprox/Midway', text: 'Frontend' },
      ],
      gallery: [
        { image: img('midway', '1.png'), description: 'get some test tokens from optimsim console.↗' },
        { image: img('midway', '4.png'), description: 'First Mint FUSD for your chosen network and after deposit your funds it will sent message in layer zero and add to your wallet in 1 min..' },
        { image: img('midway', '5.png'), description: 'this are the networks that are supported by midway.' },
      ],
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
      timeline: 'JAN   2025',
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
  {
    slug: 'mewswap',
    card: {
      gridOrder: 6,
      type: 'image',
      title: 'Mewswap Dex',
      subtitle: 'You can trade my MEW and Cat token',
      preview: '/preview/mewswap.png',
      textColor: '#333333',
      logoImage: true,
    },
    page: {
      title: 'Mewswap',
      subtitle: 'The Trading Newspaper',
      poster: img('mewswap', '0.png'),
      about: [
        'Mewswap dex is about you can swap MEW token and CAT token on UniswapV2 that i have not you :) ',
        'Just Visit Github.↗',
      ],
      role: ['Full Stack Developer.'],
      collaborators: ['Solo'],
      techStack: ['Next.js', 'UniswapV2', 'Solidity', 'Foundry', 'TypeScript', 'TailwindCSS'],
      timeline: 'DEC 2025',
      links: [
        { link: 'https://www.mewswap.realblue.lol/', text: 'MAIN WEBSITE' },
        { link: 'https://github.com/xrealblue/MewDex', text: 'GITHUB' },
      ],
      gallery: [],
    },
  },
  {
    slug: 'speedcast',
    card: {
      gridOrder: 7,
      type: 'image',
      title: 'SpeedCast',
      subtitle: 'better api client than axios',
      preview: '/preview/speedcast.gif',
      textColor: '#333333',
      logoImage: true,
    },
    page: {
      title: 'SPEEDCAST API',
      subtitle: ' blazing fast API client with built-in caching',
      poster: img('speedcast', '1.gif'),
      about: [
        "I (He/Him) built SpeedCast in TypeScript—a blazing‑fast API client with smart caching and built‑in rate limiting, so your modern JS apps stay snappy and resilient without you breaking a sweat↗",
        "SpeedCast is my TypeScript‑powered API client crafted for speed: it handles request caching, rate limits itself automatically, and gives you rock‑solid typing out of the box—perfect for today’s JavaScript ecosystems↗",
      ],
      role: ['Developer.'],
      collaborators: ['Solo'],
      techStack: ['TypeScript'],
      timeline: '2025',
      links: [
        { link: 'https://speedcast.heet.pro/', text: 'MAIN WEBSITE' },
      ],
      gallery: [
        { image: img('speedcast', '2.png'), description: 'install api client.' },
        { image: img('speedcast', '3.png'), description: 'A blazing fast API client with built-in caching, rate limiting, and TypeScript support for modern JavaScript applications.' },
        { image: img('speedcast', '4.png'), description: "With Speedcast API, you can focus on building your application while it handles the complex tasks like caching, rate limiting, and retry logic for you. Whether you're working on a frontend React app, Next.js project or a backend Node.js server, Speedcast API provides a consistent, powerful solution for API management." },
        { image: img('speedcast', '5.png'), description: 'BETTER THAN AXIOS' },
        { image: img('speedcast', '6.png'), description: 'Just import Speedcast Api.' },
        { image: img('speedcast', '7.png'), description: 'Rate-limiting is now easy with speedcast api.' },
      ],
    },
  },
  {
    slug: 'unipay',
    card: {
      gridOrder: 8,
      type: 'image',
      title: 'unipay Exchange',
      subtitle: 'made in ETHGlobal',
      preview: '/preview/unipay.png',
      textColor: '#333333',
      logoImage: true,
    },
    page: {
      title: 'unipay Exchange',
      subtitle: 'made in ETHGlobal',
      poster: img('unipay', '0.png'),
      about: [
        "Unipay.Exchange is the 1st FIAT to DeFi onramp using UPI payments to make the vast liquidity available to the masses. The platform allows users to purchase cryptocurrencies directly in their native form by just scanning a UPI QR code and making an INR payment—no complicated onboarding, no centralized custody.↗",
        "The platform leverages Uniswap V4 hooks to facilitate the transaction via a treasury and Pyth Network’s real-time price feeds to ensure transparent INR-to-crypto conversion rates verified on-chain!↗",
      ],
      role: ['Full Stack Developer.'],
      collaborators: ['Yagna RDK', 'Vaibhav Huddle01'],
      techStack: ['UniswapV4', 'Solidity', 'Next.js', 'Foundry', 'Pyth Network', 'TypeScript', 'TailwindCSS'],
      timeline: 'SEP 2025',
      links: [
        { link: 'https://unipay-final.vercel.app/', text: 'MAIN WEBSITE' },
        { link: 'https://ethglobal.com/showcase/unipay-exchange-ev92h', text: 'ETHGLOBAL 2025' },
      ],
      gallery: [
        { image: img('unipay', '1.png') },
        { image: img('unipay', '2.png') },
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
