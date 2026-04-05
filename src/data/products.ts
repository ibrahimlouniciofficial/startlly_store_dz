export type PricingOption = {
  duration: string;
  price: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  icon: string;
  color: string;
  prices: PricingOption[];
  features: string[];
  forWho: string;
};

export const products: Product[] = [
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'Design & Creative',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    icon: 'Palette',
    color: 'from-blue-400 to-purple-500',
    prices: [
      { duration: '1 ans (عام كامل)', price: '500 DA' },
      { duration: '2 ans (عامين)', price: '700 DA' },
      { duration: '3 ans (3 سنوات)', price: '800 DA' }
    ],
    features: ['Premium templates', 'Background remover', 'Brand kit', 'Magic Resize'],
    forWho: 'Designers, Content Creators, Marketers'
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro',
    category: 'Design & Creative',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    icon: 'Video',
    color: 'from-gray-700 to-gray-900',
    prices: [
      { duration: '1 mois (شهر)', price: '700 DA' },
      { duration: '3 mois (3 أشهر)', price: '1900 DA' },
      { duration: '6 mois (6 أشهر)', price: '3500 DA' }
    ],
    features: ['Pro transitions & effects', 'No watermark', 'Advanced editing tools', 'Cloud storage'],
    forWho: 'Video Editors, TikTokers, YouTubers'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    icon: 'Bot',
    color: 'from-emerald-400 to-teal-600',
    prices: [
      { duration: '1 mois (Go)', price: '700 DA' },
      { duration: '1 mois (Plus)', price: '1000 DA' },
      { duration: '1 mois (Pro)', price: '1500 DA' }
    ],
    features: ['GPT-4 Access', 'Faster response speed', 'Priority access to new features', 'Advanced data analysis'],
    forWho: 'Students, Developers, Writers, Professionals'
  },
  {
    id: 'adobe-cc',
    name: 'Adobe Creative Cloud',
    category: 'Design & Creative',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
    icon: 'PenTool',
    color: 'from-red-500 to-orange-600',
    prices: [
      { duration: '1 mois (+100GB)', price: '1500 DA' },
      { duration: '3 mois (+100GB)', price: '3500 DA' },
      { duration: '12 mois (+1TB)', price: '15000 DA' }
    ],
    features: ['Photoshop, Illustrator, Premiere Pro', 'All Adobe Apps', 'Cloud Storage', 'Adobe Fonts'],
    forWho: 'Professional Designers, Photographers, Agencies'
  },
  {
    id: 'linkedin-premium',
    name: 'LinkedIn Premium',
    category: 'Growth Hub',
    image: 'https://images.unsplash.com/photo-1611944274309-d6731da2998e?q=80&w=800&auto=format&fit=crop',
    icon: 'Briefcase',
    color: 'from-blue-600 to-blue-800',
    prices: [
      { duration: '12 mois (Career)', price: '10000 DA' },
      { duration: '12 mois (Business)', price: '16000 DA' }
    ],
    features: ['InMail messages', 'Who viewed your profile', 'Premium insights', 'LinkedIn Learning'],
    forWho: 'Job Seekers, Recruiters, B2B Professionals'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    icon: 'Sparkles',
    color: 'from-blue-400 to-purple-500',
    prices: [
      { duration: '12 mois (Invitation)', price: '1900 DA' },
      { duration: '12 mois (Personal)', price: '4000 DA' }
    ],
    features: ['Advanced reasoning', 'Coding assistance', 'Creative writing', 'Google Workspace integration'],
    forWho: 'Researchers, Developers, Content Creators'
  },
  {
    id: 'claude-ai',
    name: 'Claude AI',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    icon: 'BrainCircuit',
    color: 'from-orange-400 to-amber-600',
    prices: [
      { duration: '1 mois', price: '4000 DA' },
      { duration: '6 mois', price: '24000 DA' }
    ],
    features: ['Large context window', 'Nuanced writing', 'Complex analysis', 'Coding capabilities'],
    forWho: 'Writers, Analysts, Developers'
  },
  {
    id: 'filmora',
    name: 'Filmora',
    category: 'Design & Creative',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop',
    icon: 'Film',
    color: 'from-teal-400 to-emerald-500',
    prices: [
      { duration: '6 mois', price: '2000 DA' },
      { duration: '12 mois', price: '4500 DA' }
    ],
    features: ['Easy video editing', 'Built-in effects', 'Audio tools', 'Color correction'],
    forWho: 'Beginner Video Editors, YouTubers'
  },
  {
    id: 'coursera-plus',
    name: 'Coursera Plus',
    category: 'Growth Hub',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    icon: 'GraduationCap',
    color: 'from-blue-500 to-indigo-600',
    prices: [
      { duration: '1 mois', price: '1000 DA' },
      { duration: '6 mois', price: '4500 DA' }
    ],
    features: ['Unlimited certificates', '7000+ courses', 'Top university content', 'Job-ready skills'],
    forWho: 'Students, Lifelong Learners, Career Changers'
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=800&auto=format&fit=crop',
    icon: 'LayoutGrid',
    color: 'from-blue-600 to-cyan-500',
    prices: [
      { duration: '12 mois (Personal)', price: '1400 DA' },
      { duration: '12 mois (Family)', price: '12000 DA' }
    ],
    features: ['Word, Excel, PowerPoint', '1TB OneDrive Storage', 'Premium security', 'Cross-device sync'],
    forWho: 'Students, Professionals, Families'
  },
  {
    id: 'office-lifetime',
    name: 'Office 19/21/24',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
    icon: 'FileText',
    color: 'from-red-600 to-orange-500',
    prices: [
      { duration: 'Lifetime', price: '1400 DA' }
    ],
    features: ['One-time purchase', 'Classic Office apps', 'No monthly fees', 'Offline access'],
    forWho: 'Students, Home Users'
  },
  {
    id: 'windows',
    name: 'Windows 10/11 Pro',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=800&auto=format&fit=crop',
    icon: 'Monitor',
    color: 'from-blue-400 to-blue-600',
    prices: [
      { duration: 'Lifetime', price: '1200 DA' }
    ],
    features: ['Genuine License', 'BitLocker', 'Remote Desktop', 'Hyper-V'],
    forWho: 'PC Builders, Professionals'
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    category: 'Growth Hub',
    image: 'https://images.unsplash.com/photo-1546410531-bea4d4b67060?q=80&w=800&auto=format&fit=crop',
    icon: 'Languages',
    color: 'from-green-400 to-emerald-600',
    prices: [
      { duration: '6 mois (Super)', price: '2500 DA' },
      { duration: '6 mois (Max)', price: '4500 DA' }
    ],
    features: ['No ads', 'Unlimited hearts', 'Personalized practice', 'Roleplay (Max)'],
    forWho: 'Language Learners'
  },
  {
    id: 'n8n',
    name: 'N8N',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    icon: 'Workflow',
    color: 'from-rose-400 to-red-600',
    prices: [
      { duration: '1 mois', price: '1500 DA' },
      { duration: '12 mois', price: '15000 DA' }
    ],
    features: ['Workflow automation', 'Custom integrations', 'Self-hosted power', 'No-code/low-code'],
    forWho: 'Developers, Automators, Businesses'
  },
  {
    id: 'telegram-premium',
    name: 'Telegram Premium',
    category: 'Growth Hub',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    icon: 'Send',
    color: 'from-sky-400 to-blue-500',
    prices: [
      { duration: '3 mois', price: '4500 DA' },
      { duration: '6 mois', price: '7000 DA' },
      { duration: '12 mois', price: '12000 DA' }
    ],
    features: ['Doubled limits', '4GB uploads', 'Faster downloads', 'No ads', 'Premium stickers'],
    forWho: 'Power Users, Community Managers'
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'Growth Hub',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
    icon: 'Youtube',
    color: 'from-red-500 to-red-700',
    prices: [
      { duration: '1 mois', price: '600 DA' },
      { duration: '3 mois', price: '1500 DA' },
      { duration: '12 mois', price: '5000 DA' }
    ],
    features: ['Ad-free videos', 'Background play', 'Downloads', 'YouTube Music Premium'],
    forWho: 'Everyone'
  },
  {
    id: 'figma-pro',
    name: 'Figma Pro',
    category: 'Design & Creative',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop',
    icon: 'Figma',
    color: 'from-purple-400 to-pink-500',
    prices: [
      { duration: '1 ans', price: '3500 DA' },
      { duration: '2 ans', price: 'Contact Us' }
    ],
    features: ['Unlimited projects', 'Team libraries', 'Advanced prototyping', 'Dev mode'],
    forWho: 'UI/UX Designers, Product Teams'
  },
  {
    id: 'digital-pack',
    name: 'Digital Products Pack',
    category: 'Growth Hub',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop',
    icon: 'Package',
    color: 'from-amber-400 to-orange-500',
    prices: [
      { duration: 'Lifetime Access', price: 'Contact Us' }
    ],
    features: [
      '90 Landing Pages', 
      '50GB Editing Pack', 
      '+400k E-books', 
      '+7000 WordPress Templates',
      '250 Shopify Themes',
      '+50000 Ready-to-post Videos'
    ],
    forWho: 'Entrepreneurs, Dropshippers, Content Creators'
  }
];
