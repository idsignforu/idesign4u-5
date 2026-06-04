// All mock/static data for I Design 4 U website
// ============================================================
// HOW TO CHANGE LOGO: /app/HOW_TO_CHANGE_LOGO.md
// HOW TO ADD PORTFOLIO ITEM: /app/HOW_TO_ADD_PORTFOLIO.md
// ============================================================

export const BRAND = {
  name: 'I Design 4 U',
  short: 'iD4U',
  tagline: 'Premium Web Designs',
  subtagline: 'Crafting Digital Identities That Convert',
  phone: '+91 92814 10305',
  phoneRaw: '919281410305',
  email: 'hello@idesign4u.in',
  instagram: '@i_design4.u',
  location: 'Hyderabad, India',
  whatsappBase: 'https://wa.me/919281410305',
  // Update this URL to change site-wide logo
  logo: 'https://customer-assets.emergentagent.com/job_premium-web-builder-20/artifacts/prrsmyaa_image.png',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'services', label: 'Services', icon: 'Sparkles' },
  { id: 'pricing', label: 'Pricing', icon: 'Tag' },
  { id: 'portfolio', label: 'Portfolio', icon: 'LayoutGrid' },
  { id: 'about', label: 'About', icon: 'Info' },
  { id: 'process', label: 'Process', icon: 'Workflow' },
  { id: 'planner', label: 'Planner', icon: 'Compass' },
  { id: 'blog', label: 'Blog', icon: 'BookOpen' },
  { id: 'contact', label: 'Contact', icon: 'MessageCircle' },
];

// ============================================================
// THE REAL DIFFERENCE \u2014 Website ke saath vs binaa
// ============================================================
export const WEBSITE_IMPACT = {
  withWebsite: [
    { icon: 'Globe', title: '24/7 Online Presence', desc: 'Your business sells, books, and converts even while you sleep.' },
    { icon: 'BadgeCheck', title: 'Instant Credibility', desc: 'Customers trust businesses with professional websites 3.2x more.' },
    { icon: 'Search', title: 'Found on Google', desc: 'Get discovered by customers actively searching for what you offer.' },
    { icon: 'TrendingUp', title: 'Scalable Growth', desc: 'Sell to anyone, anywhere \u2014 not just your local 5 km radius.' },
    { icon: 'IndianRupee', title: 'Zero Commission', desc: 'Keep 100% of your earnings \u2014 no Justdial / Zomato cuts.' },
    { icon: 'Megaphone', title: 'Run Powerful Ads', desc: 'Drive Google + Instagram traffic to a website that actually converts.' },
    { icon: 'Mail', title: 'Build a Customer List', desc: 'Capture emails & phones \u2014 own your audience, market for years to come.' },
    { icon: 'Sparkles', title: 'Premium Brand Image', desc: 'Look as professional as the biggest brands in your industry.' },
  ],
  withoutWebsite: [
    { icon: 'EyeOff', title: 'Invisible to 70% of Buyers', desc: 'Most customers search online first \u2014 if you\u2019re not there, you don\u2019t exist.' },
    { icon: 'AlertTriangle', title: 'Low Trust Factor', desc: 'No website = looks unprofessional, customers go to competitors.' },
    { icon: 'Banknote', title: 'Paying 30\u201350% Commission', desc: 'Stuck paying platforms like Justdial, Sulekha & aggregators forever.' },
    { icon: 'MapPin', title: 'Limited to Local Area', desc: 'Can\u2019t expand beyond word-of-mouth and neighborhood reach.' },
    { icon: 'XCircle', title: 'No Brand Control', desc: 'Your reputation lives on other people\u2019s platforms, not yours.' },
    { icon: 'Frown', title: 'Customers Leave Confused', desc: 'No info, no portfolio, no contact \u2014 they bounce to competitors.' },
    { icon: 'Clock', title: 'Closed After Hours', desc: 'No way to capture leads or bookings at 2 AM \u2014 lost forever.' },
    { icon: 'TrendingDown', title: 'Stagnant Revenue', desc: 'Missing the organic compounding effect of being online.' },
  ],
};

// ============================================================
// ABOUT US data
// ============================================================
export const ABOUT_STATS = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Brands Empowered' },
  { value: 30, suffix: '+', label: 'Countries Served' },
  { value: 24, suffix: '/7', label: 'Support Promise' },
];

export const ABOUT_PROMISES = [
  {
    icon: 'Wallet',
    title: 'Truly Affordable',
    desc: 'Premium quality websites at India-friendly prices \u2014 starting just \u20b95,999. No bloated agency fees, no hidden upsells.',
  },
  {
    icon: 'CreditCard',
    title: 'Installment Payments',
    desc: 'Tight on budget? We\u2019ve helped 100+ clients with flexible payment plans \u2014 split into 2 or 3 instalments. Talk to us.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Small Advance to Confirm',
    desc: 'We accept a small advance before starting \u2014 it filters serious clients, protects our designers\u2019 time & keeps prices low for genuine customers.',
  },
  {
    icon: 'Globe2',
    title: 'Worldwide Delivery',
    desc: 'We\u2019ve served clients across UK, USA, UAE, Canada, Australia & 25+ countries. Premium global quality, Indian pricing.',
  },
  {
    icon: 'Headphones',
    title: 'Real Humans, Real Support',
    desc: 'No chatbots, no ticket queues. Direct WhatsApp with our founder & team \u2014 before, during, and after launch.',
  },
  {
    icon: 'Rocket',
    title: '48-Hour Launch Promise',
    desc: 'Most websites delivered in 48 hours flat. Same quality, half the wait of every other agency.',
  },
];

// ============================================================
// SEO RANKING PROCESS \u2014 how we get you to Google #1
// ============================================================
export const SEO_STEPS = [
  { icon: 'Search', title: 'Keyword Research', desc: 'We find the exact phrases your customers type in Google. Long-tail, high-intent, low-competition \u2014 the gold.' },
  { icon: 'FileText', title: 'On-Page SEO', desc: 'Optimized titles, meta descriptions, headings, alt tags, internal linking \u2014 every page crafted to rank.' },
  { icon: 'Code2', title: 'Technical SEO', desc: 'Clean code, lightning-fast load times, mobile-first design, HTTPS, XML sitemap, robots.txt \u2014 Google-ready.' },
  { icon: 'Sparkles', title: 'Schema Markup', desc: 'Structured data (LocalBusiness, FAQ, Product) so Google shows rich snippets \u2014 stars, prices, FAQs in search results.' },
  { icon: 'MapPin', title: 'Google Business Profile', desc: 'We set up & optimize your GBP for \u201cnear me\u201d searches \u2014 the #1 factor for local ranking.' },
  { icon: 'Link2', title: 'Quality Backlinks', desc: 'Listings on 50+ Indian directories (Justdial, Sulekha, IndiaMART) + guest posts to build domain authority.' },
  { icon: 'BookOpen', title: 'Content Strategy', desc: 'Blog setup with SEO-friendly templates \u2014 publish 2\u20134 articles/month to keep climbing.' },
  { icon: 'Star', title: 'Reviews & Ratings', desc: 'We help you collect Google reviews systematically \u2014 social proof that compounds your ranking.' },
  { icon: 'Gauge', title: 'Core Web Vitals', desc: 'LCP, INP, CLS \u2014 we hit Google\u2019s page-experience benchmarks. Faster sites rank higher, period.' },
  { icon: 'BarChart3', title: 'Track & Improve', desc: 'Google Analytics + Search Console setup \u2014 see exactly what works and double down monthly.' },
];

export const SEO_PLACES = [
  { icon: 'Search', label: 'Google Search' },
  { icon: 'MapPin', label: 'Google Maps' },
  { icon: 'Smartphone', label: 'Mobile Search' },
  { icon: 'Mic', label: 'Voice Search' },
  { icon: 'Image', label: 'Image Results' },
  { icon: 'Star', label: 'Rich Snippets' },
];

export const PREMIUM_FEATURES = [
  { title: 'Google Ads Setup', sub: 'Free with every plan', tag: '₹ FREE', icon: 'Megaphone' },
  { title: 'Premium SEO Tools', sub: 'Rank higher on Google', tag: '₹ FREE', icon: 'TrendingUp' },
  { title: 'Firewall Security', sub: 'Protect your data', tag: '₹ FREE', icon: 'ShieldCheck' },
  { title: 'SSL Certificate', sub: 'Secure HTTPS site', tag: '₹ FREE', icon: 'Lock' },
];

export const PRICING = [
  {
    id: 'starter', name: 'Starter Website', tagline: 'Ideal for small businesses & startups',
    price: 5999, strike: 8999, badge: null, cta: 'Get Started',
    features: [
      '5 Pages Website (100% Responsive)', 'Free Domain (.com / .in / .co.in)',
      'Free Cloud Hosting (1 Year)', 'Free SSL Certificate', 'Free Business Email (5 IDs)',
      'Free Logo Design', 'Mobile Responsive Premium UI', 'WhatsApp & Call Button',
      'Contact / Inquiry Form', 'Basic SEO Setup (15+ Keywords)', 'Google Map & Business Listing',
      'Social Media Integration', '48-Hour Delivery', '24/7 Phone / Chat Support',
    ],
  },
  {
    id: 'business', name: 'Business Website', tagline: 'Best for growing brands & service businesses',
    price: 7999, strike: 11999, badge: 'Most Popular', cta: 'Get Started',
    features: [
      '7–10 Pages Website (100% Responsive)', 'Free Premium Domain (.com / .in)',
      'Free Cloud Hosting (1 Year)', 'Free SSL Certificate', 'Free Business Email (Unlimited)',
      'Free Logo + Brand Kit', 'Image Gallery & Portfolio Section', 'Advanced SEO (25–40 Keywords)',
      'Google Analytics & Search Console', 'Blog / News Module', 'Admin Panel (Full Access)',
      'WhatsApp Chat Integration', 'Cloudflare Security + Firewall', '48-Hour Auto Backup',
      '48-Hour Delivery', '24/7 Priority Support',
    ],
  },
  {
    id: 'ecommerce', name: 'Pro E-Commerce', tagline: 'For online stores with unlimited products',
    price: 11999, strike: 16999, badge: 'Best Value', cta: 'Get Started',
    features: [
      '10+ Pages Website (100% Responsive)', 'Unlimited Products Listing',
      'Free Domain (.com / .in / .co.in)', 'Free Cloud Hosting (1 Year)',
      'Full Cart, Checkout & Order Tracking', 'Razorpay & UPI Payment Gateway',
      'Customer Login Dashboard', 'Order & Inventory Management',
      'Coupons & Discount Engine', 'Multi-Image Product Galleries',
      'Advanced SEO + Schema Markup', 'Email & SMS Notifications',
      'Admin Panel (Full Access)', 'SSL + Cloudflare Security',
      '48-Hour Delivery', '24/7 Priority Support',
    ],
  },
];

// Custom Quote feature list shown in modal
export const CUSTOM_QUOTE_FEATURES = [
  { id: 'pages', label: 'Number of Pages', icon: 'FileText', options: ['1–5', '5–10', '10–20', '20+'] },
  { id: 'type', label: 'Website Type', icon: 'Layout', options: ['Business / Service', 'Ecommerce / Online Store', 'Portfolio', 'Landing Page', 'Booking / Appointment', 'School / Institution', 'Restaurant / Food', 'Clinic / Healthcare', 'Real Estate', 'Other'] },
  { id: 'logo', label: 'Need Logo Design?', icon: 'Sparkles', options: ['Yes', 'No — I have logo'] },
  { id: 'seo', label: 'SEO Optimization', icon: 'Search', options: ['Basic (Free)', 'Advanced – 25 keywords', 'Premium – 40+ keywords + Schema'] },
  { id: 'marketing', label: 'Digital Marketing Add-on', icon: 'Megaphone', options: ['Not now', 'Google Ads Setup', 'Social Media Setup', 'Both'] },
  { id: 'cms', label: 'Need Admin Panel / CMS?', icon: 'Settings', options: ['Yes — self editable', 'No — static site'] },
  { id: 'timeline', label: 'Timeline', icon: 'Clock', options: ['ASAP / 48 hours', '1 week', '2–4 weeks', 'Flexible'] },
  { id: 'budget', label: 'Budget Range', icon: 'Wallet', options: ['Under ₹10k', '₹10k–₹25k', '₹25k–₹50k', '₹50k–₹1L', '₹1L+'] },
];

export const SERVICES = [
  { icon: 'Code2', title: 'Website Development', desc: 'Fast, secure & scalable websites built for performance and conversions.' },
  { icon: 'ShoppingBag', title: 'Ecommerce Development', desc: 'High-conversion ecommerce stores with smooth checkout and payments.' },
  { icon: 'Palette', title: 'Website Design', desc: 'Modern UI/UX designs that reflect your brand and engage users.' },
  { icon: 'Megaphone', title: 'Digital Marketing', desc: 'SEO, Google Ads & campaigns that generate real leads and ROI.' },
  { icon: 'Workflow', title: 'Business Automations', desc: 'Automate CRM, WhatsApp, emails & workflows to save time and cost.' },
  { icon: 'Sparkles', title: 'Logo Design', desc: 'Professional logos that build trust, recognition and authority.' },
  { icon: 'Search', title: 'SEO Optimization', desc: 'Websites built with SEO best practices to help you rank higher on Google.' },
  { icon: 'Smartphone', title: 'Mobile-First Design', desc: 'Pixel-perfect designs that look stunning on every screen and device.' },
];

export const WHY_US = [
  { icon: 'Trophy', title: 'Award-Winning Team', desc: 'Recognized designers and developers delivering industry-leading experiences.' },
  { icon: 'Globe', title: 'Global Clientele', desc: 'Trusted by businesses across 30+ countries worldwide.' },
  { icon: 'TrendingUp', title: 'Result-Oriented', desc: 'Every solution built to drive traffic, leads, and measurable ROI.' },
  { icon: 'Zap', title: 'Fast Turnaround', desc: 'Agile process — most websites delivered in just 48 hours.' },
  { icon: 'ShieldCheck', title: 'Secure & Scalable', desc: 'Built with security, performance, and scalability at the core.' },
  { icon: 'BrainCircuit', title: 'Strategy First', desc: 'We understand your business before we design or code anything.' },
  { icon: 'Headphones', title: 'Dedicated Support', desc: 'Real humans, real support — before, during, and after delivery.' },
  { icon: 'Handshake', title: 'Long-Term Partnership', desc: 'We grow with you, offering continuous optimization and support.' },
];

export const TECHNOLOGIES = [
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', letter: 'JS' },
  { name: 'React JS', slug: 'react', color: '61DAFB', letter: 'R' },
  { name: 'Next JS', slug: 'nextdotjs', color: 'FFFFFF', letter: 'N' },
  { name: 'WordPress', slug: 'wordpress', color: 'A855F7', letter: 'W' },
  { name: 'WooCommerce', slug: 'woocommerce', color: '96588A', letter: 'Wc' },
  { name: 'Shopify', slug: 'shopify', color: '7AB55C', letter: 'S' },
  { name: 'HTML5', slug: 'html5', color: 'E34F26', letter: '5' },
  { name: 'CSS3', slug: 'css3', color: '1572B6', letter: '3' },
  { name: 'TailwindCSS', slug: 'tailwindcss', color: '06B6D4', letter: 'T' },
  { name: 'Node JS', slug: 'nodedotjs', color: '339933', letter: 'N' },
  { name: 'PHP', slug: 'php', color: '777BB4', letter: 'P' },
  { name: 'Laravel', slug: 'laravel', color: 'FF2D20', letter: 'L' },
  { name: 'Python', slug: 'python', color: '3776AB', letter: 'Py' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E', letter: 'F' },
  { name: 'Canva', slug: 'canva', color: '00C4CC', letter: 'C', fallbackUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Bootstrap', slug: 'bootstrap', color: '7952B3', letter: 'B' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248', letter: 'M' },
  { name: 'Google Ads', slug: 'googleads', color: '4285F4', letter: 'G' },
];

export const PROCESS_STEPS = [
  { no: '01', title: 'Discovery', desc: 'We understand your business goals, audience, and exact requirements.', icon: 'MessageSquare' },
  { no: '02', title: 'Planning', desc: 'We define structure, user flow, content direction, and conversion path.', icon: 'Network' },
  { no: '03', title: 'Design', desc: 'We craft a premium interface that feels modern, clean, and trustworthy.', icon: 'PenTool' },
  { no: '04', title: 'Development', desc: 'We build your website with responsive layouts, speed, and SEO readiness.', icon: 'Code2' },
  { no: '05', title: 'Launch', desc: 'After testing and approval, we go live and support your growth journey.', icon: 'Rocket' },
];

export const TESTIMONIALS = [
  { name: 'Rahul Sharma', role: 'Startup Founder, Hyderabad', initials: 'RS', text: 'iDesign4U delivered our website in just 48 hours and the quality blew us away. Their team was responsive, strategic, and truly focused on our growth.', rating: 5 },
  { name: 'Anita Verma', role: 'Marketing Head, Mumbai', initials: 'AV', text: 'Professional team with deep technical expertise. Our leads increased within weeks of the website going live. Worth every rupee.', rating: 5 },
  { name: 'Michael Ross', role: 'Business Owner, UK', initials: 'MR', text: 'One of the best website development agencies we have worked with. Highly recommended for international quality at affordable price.', rating: 5 },
  { name: 'Arjun Patel', role: 'Ecommerce Brand, Surat', initials: 'AP', text: 'Their ecommerce setup helped us dominate local search results. Order management is seamless and support is top-notch.', rating: 5 },
  { name: 'Neha Kapoor', role: 'Consultant, Delhi', initials: 'NK', text: 'Clean design, fast loading website, and excellent post-launch support. The website planner quiz helped me choose the right plan.', rating: 5 },
  { name: 'Saurabh Mehta', role: 'Restaurant Owner, Pune', initials: 'SM', text: 'From logo to launch — everything was handled. Online orders started flowing in within a week of going live.', rating: 5 },
];

export const FAQS = [
  { q: 'How long does it take to build a website?', a: 'Most business websites are completed within 48 hours to 7 days, depending on number of pages, features, and content readiness. Ecommerce stores may take up to 2 weeks.' },
  { q: 'Is domain and hosting included in your plans?', a: 'Yes — all plans include a free domain (.com / .in / .co.in) and free cloud hosting for the first year. Renewal applies yearly at standard rates.' },
  { q: 'Will my website be mobile responsive?', a: 'Absolutely. Every website we build works flawlessly across mobile, tablet, and desktop devices. Mobile-first design is our standard.' },
  { q: 'Do you create SEO-friendly websites?', a: 'Yes. We follow SEO-friendly structure, clean code, optimized layouts, schema markup, and proper on-page setup so your website ranks better on Google.' },
  { q: 'Can you redesign my existing website?', a: 'Yes, we can revamp outdated websites with a fresh modern design, better performance, mobile responsiveness, and improved conversion flow.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. We provide 24/7 phone, chat & email support for updates, bug fixes, and guidance so your website continues to run smoothly.' },
  { q: 'What do you need from me to get started?', a: 'Just your business details, logo (if any), basic content, and goals. If you do not have everything ready, our team will guide you through every step.' },
  { q: 'Can I contact you directly on WhatsApp?', a: 'Yes! Tap any WhatsApp button on the site to chat with us instantly for quick quotes, demos, and consultation.' },
  { q: 'Do you offer payment plans?', a: 'Yes — we accept 50% advance and 50% on delivery for one-time plans. UPI, cards, and bank transfer all accepted via Razorpay.' },
  { q: 'What if I am not satisfied with the design?', a: 'Every plan includes multiple revisions per page. We work with you until the design perfectly matches your vision.' },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Websites Launched' },
  { value: 4.9, suffix: '★', label: 'Google Rating', decimals: 1 },
  { value: 48, suffix: 'hr', label: 'Avg. Delivery' },
  { value: 30, suffix: '+', label: 'Countries Served' },
];

export const BUSINESS_TYPES = [
  { id: 'salon', label: 'Salon / Beauty', icon: 'Scissors' },
  { id: 'ecom', label: 'Ecommerce / Online Store', icon: 'ShoppingBag' },
  { id: 'home', label: 'AC Repair / Home Service', icon: 'Wrench' },
  { id: 'doctor', label: 'Doctor / Clinic', icon: 'Stethoscope' },
  { id: 'food', label: 'Restaurant / Cafe', icon: 'UtensilsCrossed' },
  { id: 'gym', label: 'Gym / Fitness Studio', icon: 'Dumbbell' },
  { id: 'photo', label: 'Photography / Videography', icon: 'Camera' },
  { id: 'realestate', label: 'Real Estate / Property', icon: 'Home' },
  { id: 'edu', label: 'Education / Coaching', icon: 'GraduationCap' },
  { id: 'other', label: 'Other', icon: 'Briefcase' },
];

export const PRIMARY_GOALS = [
  { id: 'leads', label: 'Get More Leads', icon: 'Target' },
  { id: 'bookings', label: 'Online Bookings', icon: 'Calendar' },
  { id: 'brand', label: 'Build Trust / Brand', icon: 'Award' },
  { id: 'sell', label: 'Sell Products Online', icon: 'ShoppingCart' },
  { id: 'enquiries', label: 'Customer Enquiries', icon: 'MessageCircle' },
];

export const PAGE_OPTIONS = [
  { id: 'small', label: '1–5 Pages', sub: 'Simple business site' },
  { id: 'medium', label: '5–10 Pages', sub: 'Service business' },
  { id: 'large', label: '10+ Pages', sub: 'Ecommerce / Portal' },
];

export const TIMELINES = [
  { id: 'asap', label: 'ASAP / 1 Week', icon: 'Zap' },
  { id: 'medium', label: '2–4 Weeks', icon: 'Calendar' },
  { id: 'flex', label: 'No Rush', icon: 'Clock' },
];

// ============================================================
// PORTFOLIO (mirrored + extended with placeholder demos)
// To add new portfolio items see: /app/HOW_TO_ADD_PORTFOLIO.md
// ============================================================
export const PORTFOLIO = [
  { id: 1, no: '01', category: 'Fitness & Health', title: 'Fitness Studio Website',
    desc: 'A modern, energetic website for a premium fitness studio featuring class schedules, trainer profiles, and membership options.',
    tags: ['UI/UX', 'React', 'Animation'], url: 'https://gym.idesign4u.in/', domain: 'gym.idesign4u.in',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1280&h=800&fit=crop&q=90' },
  { id: 2, no: '02', category: 'Events & Services', title: 'Event Organising Services',
    desc: 'Elegant website for a luxury event planning company showcasing their portfolio of high-end celebrations and corporate events.',
    tags: ['Landing Page', 'Luxury', 'Booking'], url: 'https://event.idesign4u.in/', domain: 'event.idesign4u.in',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1280&h=800&fit=crop&q=90' },
  { id: 3, no: '03', category: 'Real Estate', title: 'Real Estate Platform',
    desc: 'Feature-rich real estate platform with property listings, EMI calculator, and advanced search functionality.',
    tags: ['Full Stack', 'Calculator', 'Search'], url: 'https://realestate.idesign4u.in/', domain: 'realestate.idesign4u.in',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1280&h=800&fit=crop&q=90' },
  { id: 4, no: '04', category: 'Automotive', title: 'Car Detailing Services',
    desc: 'Sleek and professional website for premium car detailing with booking system and service packages showcase.',
    tags: ['Booking', 'Premium', 'Services'], url: 'https://shine-elite.preview.emergentagent.com/', domain: 'shine-elite.com',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1280&h=800&fit=crop&q=90' },
  { id: 5, no: '05', category: 'Interior Design', title: 'Interior Design Showcase',
    desc: 'Modern interior design company website showcasing premium interior services and project portfolio.',
    tags: ['Portfolio', 'Gallery', 'Elegant'], url: 'https://interior.idesign4u.in/', domain: 'interior.idesign4u.in',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1280&h=800&fit=crop&q=90' },
  { id: 6, no: '06', category: 'Technology & IT', title: 'IT Services Technology',
    desc: 'Professional IT services website showcasing technology solutions, support services, and digital expertise.',
    tags: ['Corporate', 'Tech', 'SaaS'], url: 'https://smile-tech-hub-1.preview.emergentagent.com/', domain: 'smile-tech-hub.com',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=800&fit=crop&q=90' },
  { id: 7, no: '07', category: 'Beauty & Skincare', title: 'Beauty & Skincare Brand',
    desc: 'Elegant beauty and skincare brand website showcasing services, products, and client experiences.',
    tags: ['Brand', 'Products', 'Elegant'], url: 'https://modest-elegance-24.preview.emergentagent.com/', domain: 'modest-elegance.com',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1280&h=800&fit=crop&q=90' },
  { id: 8, no: '08', category: 'Healthcare & Clinic', title: 'Clinic & Doctor Website',
    desc: 'Trustworthy clinic website with doctor profiles, online appointment booking, services, and patient testimonials.',
    tags: ['Booking', 'Healthcare', 'Trust'], url: '#', domain: 'demo.clinic',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1280&h=800&fit=crop&q=90' },
  { id: 9, no: '09', category: 'Education — School', title: 'School Website',
    desc: 'Modern school website with admission inquiry forms, faculty profiles, calendar, gallery, and parent portal.',
    tags: ['Admissions', 'Gallery', 'Portal'], url: '#', domain: 'demo.school',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1280&h=800&fit=crop&q=90' },
  { id: 10, no: '10', category: 'Education — College', title: 'College Website',
    desc: 'Comprehensive college website featuring courses, faculty, campus tours, placements, and online admissions.',
    tags: ['Admissions', 'Courses', 'Campus'], url: '#', domain: 'demo.college',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1280&h=800&fit=crop&q=90' },
  { id: 11, no: '11', category: 'Education — Institute', title: 'Coaching Institute Website',
    desc: 'High-converting coaching institute site with batch info, fee structure, mock tests, and student dashboard.',
    tags: ['Batches', 'Dashboard', 'Lead Gen'], url: '#', domain: 'demo.institute',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1280&h=800&fit=crop&q=90' },
  { id: 12, no: '12', category: 'Restaurant & Food', title: 'Restaurant Website',
    desc: 'Mouth-watering restaurant website with online menu, table reservations, food gallery, and online ordering.',
    tags: ['Menu', 'Reservations', 'Ordering'], url: '#', domain: 'demo.restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1280&h=800&fit=crop&q=90' },
];

// ============================================================
// BLOG — 30 SEO-optimized posts (9 per page, 4 pages)
// ============================================================
export const BLOG_CATEGORIES = ['All', 'Affordable Websites', 'Small Business Websites', 'Website Design Tips', 'Startup Websites', 'Online Business Growth', 'SEO Tips', 'Ecommerce', 'Digital Marketing'];

const BLOG_IMAGES = [
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=600&fit=crop&q=85',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&h=600&fit=crop&q=85',
];

export const BLOG_POSTS = [
  { id: 1,  category: 'Affordable Websites',      title: 'Cheap Website Design in India for Small Businesses',         desc: 'Affordable website design services for startups and small businesses without compromising quality.' },
  { id: 2,  category: 'Small Business Websites',  title: 'Why Every Small Business Needs a Website in 2026',           desc: 'A professional website helps small businesses grow faster, build trust, and reach more customers online.' },
  { id: 3,  category: 'Startup Websites',         title: 'How to Build a Low-Cost Website in India',                   desc: 'A practical guide to launching a professional website without spending too much. Domain, hosting, design — all covered.' },
  { id: 4,  category: 'Website Design Tips',      title: '10 Web Design Trends That Convert in 2026',                  desc: 'From glass morphism to micro-animations — discover the design patterns that boost conversions and user trust.' },
  { id: 5,  category: 'SEO Tips',                 title: 'SEO Checklist to Rank #1 on Google in 2026',                 desc: 'Step-by-step on-page and technical SEO checklist used by top-ranking sites to dominate Google search.' },
  { id: 6,  category: 'Online Business Growth',   title: 'From Zero to 1,000 Customers Online — The Playbook',         desc: 'A founder’s blueprint for acquiring your first thousand paying customers using your website and digital marketing.' },
  { id: 7,  category: 'Affordable Websites',      title: 'Domain + Hosting + SSL — What’s Actually Free?',             desc: 'Cutting through the marketing fluff: a transparent breakdown of what’s really free in budget website plans.' },
  { id: 8,  category: 'Small Business Websites',  title: 'WhatsApp + Website = Lead Magnet for Local Businesses',      desc: 'How integrating WhatsApp on your website 3x’d enquiries for our local clients. Real numbers, real tactics.' },
  { id: 9,  category: 'SEO Tips',                 title: 'Local SEO: How to Show Up in “Near Me” Searches',             desc: 'Google Business Profile + on-page local SEO + reviews — the trio that puts your business on the map.' },
  { id: 10, category: 'Website Design Tips',      title: 'Mobile-First Design: Why It’s Non-Negotiable Today',         desc: '70% of Indian web traffic is mobile. Here’s how to design websites that win on the smallest screen first.' },
  { id: 11, category: 'Ecommerce',                title: 'Razorpay vs Stripe vs PayU: Which is Best for India?',       desc: 'A detailed comparison of payment gateways for Indian ecommerce stores — fees, settlements, integration.' },
  { id: 12, category: 'Startup Websites',         title: 'Founder’s Guide: Building Your MVP Website in 7 Days',        desc: 'Move fast, validate fast. Here’s the lean website strategy every early-stage founder should follow.' },
  { id: 13, category: 'Digital Marketing',        title: 'Google Ads for Local Businesses — ₹500/day Strategy',         desc: 'How to run profitable Google Ads with a tiny budget. Keywords, ad copy, landing pages — all explained.' },
  { id: 14, category: 'SEO Tips',                 title: 'Schema Markup: The Secret Ranking Factor Most Sites Miss',  desc: 'Add 5 lines of schema.org JSON-LD and watch your CTR explode in Google search results. Templates included.' },
  { id: 15, category: 'Ecommerce',                title: '10 Conversion Killers on Indian Ecommerce Sites',            desc: 'From slow checkout to missing trust badges — fix these before launching your next online store.' },
  { id: 16, category: 'Affordable Websites',      title: 'Free Website vs Paid Website — The Real Difference',         desc: 'Wix free vs WordPress vs custom — we break down where you actually save and lose money long term.' },
  { id: 17, category: 'Website Design Tips',      title: 'Color Psychology: Choosing Colors That Sell',                desc: 'Why Razorpay uses blue, Zomato uses red, and how to pick brand colors that align with customer emotion.' },
  { id: 18, category: 'Online Business Growth',   title: 'How to Get Your First 100 Customers from Instagram',         desc: 'Instagram + Website = lead engine. Here’s our proven funnel that converts followers to buyers.' },
  { id: 19, category: 'Digital Marketing',        title: 'WhatsApp Business API: The Ultimate Growth Tool',            desc: 'Why every Indian business should use the official WhatsApp Business API and how to get started cheaply.' },
  { id: 20, category: 'Small Business Websites',  title: 'GST Invoice + Website: Automate Billing for Small Business', desc: 'Connect your website to invoicing tools and never write a manual invoice again. Save 10 hours/week.' },
  { id: 21, category: 'SEO Tips',                 title: 'Long-Tail Keywords That Bring Cheap, Hot Leads',             desc: 'Why ranking for “cheap website design Hyderabad” beats “web design” any day. Real strategy + tools.' },
  { id: 22, category: 'Ecommerce',                title: 'Shopify vs WooCommerce: Which is Cheaper Long-Term?',        desc: 'Real cost comparison for Indian sellers including transaction fees, themes, plugins, and scaling cost.' },
  { id: 23, category: 'Startup Websites',         title: 'Pre-Launch Website Checklist for Indian Founders',           desc: 'From legal pages to analytics, do not launch without this 17-point checklist. Free download included.' },
  { id: 24, category: 'Website Design Tips',      title: 'Typography Tips: Fonts That Build Trust',                    desc: 'Why most premium brands use only 2 fonts. A breakdown of how to pick fonts that convert.' },
  { id: 25, category: 'Online Business Growth',   title: 'Subscription Model: Recurring Revenue for Local Services',   desc: 'Stop chasing one-time customers. Here’s how to package services into monthly subscriptions.' },
  { id: 26, category: 'Digital Marketing',        title: 'Meta Ads for Indian SMBs: Where to Start',                   desc: 'Facebook + Instagram ads guide for businesses with a ₹5k–10k/month budget. Targeting, creative, scaling.' },
  { id: 27, category: 'Affordable Websites',      title: 'Hidden Costs of “Free” Website Builders — Beware',            desc: 'That free Wix site might cost you ₹50k/year in lost SEO and limitations. Read before you build.' },
  { id: 28, category: 'SEO Tips',                 title: 'Core Web Vitals: Pass Google’s Speed Test in 2026',           desc: 'LCP, INP, CLS — what they mean and exactly how to optimize them. Tools, plugins, and benchmarks.' },
  { id: 29, category: 'Ecommerce',                title: 'Cash on Delivery: Should Your Store Offer It?',              desc: 'COD is still king in tier-2/3 India. The pros, cons, RTO costs, and how to handle it smartly.' },
  { id: 30, category: 'Small Business Websites',  title: 'Reviews + Testimonials: The Conversion Hack You Need',      desc: 'How displaying real Google reviews on your website can lift conversions by 35%. Plugin + setup guide.' },
].map((p, i) => ({
  ...p,
  readTime: `${4 + (i % 6)} min read`,
  date: `2026-0${1 + (i % 3)}-${String(1 + (i % 28)).padStart(2, '0')}`,
  image: BLOG_IMAGES[i % BLOG_IMAGES.length],
}));
