import { ModuleItem, Testimonial, DayChallenge, FaqItem } from '../types';

export const BOOTCAMP_INFO = {
  title: "AI CONTENT CREATOR BOOTCAMP",
  tagline: "Learn AI. Create Better Content. Build Your Portfolio. Start Putting Your Skills to Work.",
  subheading: "You don't need to be a professional designer, video editor or tech expert to start creating impressive content with AI.",
  description: "In this practical bootcamp, I'll show you how to use AI tools to create engaging videos, branded graphics and marketing content — then help you turn what you learn into a portfolio you can actually show potential clients.",
  regularPrice: "₦15,000",
  regularPriceNumber: 15000,
  launchPrice: "₦10,000",
  launchPriceNumber: 10000,
  discountPercentage: "33% OFF",
  whatsappNumber: "+2348039868928",
  whatsappDisplay: "+234 8039868928",
  whatsappLink: "https://wa.link/0949x0",
  organizer: "ZoeDigital",
  brandSubtitle: "AI • Content • Automation",
  brandMission: "Helping people use AI to create, market and build digital opportunities.",
  launchBadge: "🔥 LIMITED LAUNCH OFFER",
  spotsLeft: 14,
  bankDetails: {
    bankName: "Moniepoint MFB / Zenith Bank",
    accountNumber: "8123456789",
    accountName: "ZoeDigital Innovations / Collins O.",
    note: "Use your Full Name as transfer narration and send payment receipt on WhatsApp for instant onboarding access."
  }
};

export const CORE_PILLARS = [
  {
    id: "video",
    icon: "Video",
    emoji: "🎬",
    title: "AI Video Creation",
    subtitle: "Turn text & prompts into viral videos without cameras",
    tag: "Module 01",
    color: "from-rose-500/20 to-pink-500/5",
    border: "border-rose-500/30"
  },
  {
    id: "graphics",
    icon: "Palette",
    emoji: "🎨",
    title: "AI Graphics with Canva",
    subtitle: "High-converting brand visuals in minutes, not hours",
    tag: "Module 02",
    color: "from-amber-500/20 to-orange-500/5",
    border: "border-amber-500/30"
  },
  {
    id: "portfolio",
    icon: "Globe",
    emoji: "🌐",
    title: "Your Own Portfolio Website",
    subtitle: "A live showcase link ready to send to prospective clients",
    tag: "Module 03",
    color: "from-blue-500/20 to-cyan-500/5",
    border: "border-blue-500/30"
  },
  {
    id: "challenge",
    icon: "Smartphone",
    emoji: "📱",
    title: "14-Day Content & Visibility Challenge",
    subtitle: "From passive learner to visible, client-ready creator",
    tag: "Module 04",
    color: "from-emerald-500/20 to-teal-500/5",
    border: "border-emerald-500/30"
  }
];

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "module-01",
    number: "01",
    title: "AI VIDEO CREATION",
    subtitle: "Produce studio-grade, engaging videos without expensive equipment or advanced editing skills.",
    description: "Learn how to use AI-powered tools to create engaging videos without needing expensive gear, high-end PCs, or years of editing experience. The goal isn't simply to learn another AI tool—it's to learn how to create content businesses and clients can actually use and pay for.",
    icon: "Video",
    deliverable: "3 Full Video Assets: 1 UGC Ad, 1 Explainer Reel, 1 Promotional Product Video",
    topics: [
      "Marketing videos for brands and small businesses",
      "Product & service showcase video generation",
      "AI-generated social media content & viral hooks",
      "UGC-style (User Generated Content) video ads",
      "High-converting promotional videos",
      "Short-form content (Reels, TikToks, Shorts) workflows"
    ],
    toolsCovered: ["CapCut AI", "ElevenLabs Voice AI", "HeyGen / Runway AI", "ChatGPT Scripting"],
    keyTakeaway: "Stop being intimidated by camera setups. Generate realistic voiceovers, AI avatars, b-roll footage, and dynamic captions in minutes."
  },
  {
    id: "module-02",
    number: "02",
    title: "CREATE BRANDED GRAPHICS WITH AI + CANVA",
    subtitle: "Combine AI generative power with Canva's design systems to produce agency-level visuals.",
    description: "You don't need to spend hours designing from scratch or struggle with complex Photoshop layers. Learn how to combine AI prompt generation with Canva's workflow to create cohesive, eye-catching branded materials. You'll learn the strategic design process behind content — not just where to click.",
    icon: "Palette",
    deliverable: "Complete Brand Kit & 5 Ready-to-Publish Graphic Packages",
    topics: [
      "Scroll-stopping social media graphics & feed layouts",
      "High-converting promotional designs & event banners",
      "Multi-slide educational carousels with high save rates",
      "Professional business flyers & client proposal sheets",
      "Corporate marketing materials and pitch deck assets",
      "Branded color palettes, typography pairs & aesthetic themes"
    ],
    toolsCovered: ["Canva Magic Studio", "Midjourney / DALL-E", "ChatGPT Prompt Engineering", "Vector Art Generators"],
    keyTakeaway: "Master the principles of visual balance, typography hierarchy, and branded aesthetics that attract paying clients."
  },
  {
    id: "module-03",
    number: "03",
    title: "BUILD YOUR OWN PORTFOLIO WEBSITE",
    subtitle: "One of the biggest problems beginners face is: 'I know how to do it, but I don't have anything to show people.' We're fixing that.",
    description: "When prospective clients or employers ask 'Can I see your work?', you will never have to say 'I'm still learning' or send a messy Google Drive folder. You'll build an elegant, fast-loading portfolio website showcasing your videos, graphics, sample projects, services, and direct contact details.",
    icon: "Globe",
    deliverable: "Live, Custom-Branded Portfolio Link (Works on Mobile & Desktop)",
    topics: [
      "No-code portfolio setup (100% free hosting options)",
      "Curating and organizing your videos, carousels & flyers",
      "Structuring high-converting Services & Pricing packages",
      "Embedding interactive video embeds and Canva mockups",
      "Direct WhatsApp & Email booking buttons",
      "SEO basics so clients can discover your profile online"
    ],
    toolsCovered: ["Carrd / Notion Sites / Bento", "Loom Embeds", "Canva Mockup Studio", "WhatsApp API Direct Links"],
    keyTakeaway: "A live portfolio instantly sets you apart from 95% of other creators who only have theoretical knowledge."
  },
  {
    id: "module-04",
    number: "04",
    title: "THE 14-DAY CONTENT & VISIBILITY CHALLENGE",
    subtitle: "Stop hiding behind the 'I'm still learning' phase. Put your skills out there and get seen.",
    description: "This is where theory transforms into market reality. For 14 days, you will follow a daily prompt system designed to create and publish content around your new skills. You'll learn how to position your content so people understand: What you do, Who you can help, and How they can work with you.",
    icon: "Smartphone",
    deliverable: "14 Published Content Pieces + Inbound Inquiries & Network Growth",
    topics: [
      "Behind-the-scenes content documenting your skill journey",
      "Sample project case studies solving business problems",
      "Educational value posts that establish your authority",
      "Direct-response promotional offers & client calls-to-action",
      "Client-focused positioning that drives inbound DMs",
      "Overcoming posting anxiety and building creative consistency"
    ],
    toolsCovered: ["Content Calendar Notion Template", "Hook & Caption Vault", "Hashtag & Audience Strategy"],
    keyTakeaway: "Learning the skill is only half the journey. You also need to be seen by the people who have budgets to pay you."
  }
];

export const BY_THE_END_LIST = [
  "AI video creation skills (reels, UGC, marketing promos, voiceovers)",
  "AI + Canva graphic design mastery (carousels, flyers, branding assets)",
  "Multiple finished content pieces and real-world sample projects",
  "A live, professional portfolio website ready to send to prospective clients",
  "A crystal-clear understanding of how to package and price your skills",
  "14 days of structured content ideas, templates, and execution blueprints",
  "A tangible body of work you can proudly showcase to businesses and brands",
  "A practical, repeatable starting point for offering AI content creation services"
];

export const WHO_IS_THIS_FOR = [
  {
    title: "Absolute Beginners",
    description: "You want to learn AI without getting overwhelmed by tech jargon or complicated coding tutorials.",
    icon: "Sparkles",
    badge: "No experience needed"
  },
  {
    title: "Content Creators",
    description: "You are tired of spending 8+ hours on a single video or graphic and want to create 5x faster with AI.",
    icon: "Zap",
    badge: "Scale production"
  },
  {
    title: "Freelancers & Virtual Assistants",
    description: "You want to add high-income AI content and video services to your current service offerings.",
    icon: "Briefcase",
    badge: "Increase retainers"
  },
  {
    title: "Students & Young Professionals",
    description: "You want an in-demand, monetizable digital skill that gives you financial leverage and creative freedom.",
    icon: "GraduationCap",
    badge: "Career leverage"
  },
  {
    title: "Business Owners & Founders",
    description: "You need professional marketing videos, ads, and flyers for your own business without hiring costly agencies.",
    icon: "TrendingUp",
    badge: "Cut marketing costs"
  },
  {
    title: "The 'Tool Hoarders'",
    description: "You've tried ChatGPT, Midjourney, and 20 other tools, but still don't know how to turn them into client-ready deliverables.",
    icon: "Layers",
    badge: "Monetize knowledge"
  }
];

export const OFFER_STACK = [
  {
    title: "🎬 AI Video Creation Training",
    description: "Full masterclass on creating marketing reels, UGC clips, and AI voiceover videos.",
    value: "₦25,000"
  },
  {
    title: "🎨 AI + Canva Graphics Masterclass",
    description: "Step-by-step branding, carousel design, and flyer creation workflows.",
    value: "₦20,000"
  },
  {
    title: "🌐 Portfolio Website Workshop & Templates",
    description: "Launch your own live portfolio site in under 60 minutes with zero code.",
    value: "₦15,000"
  },
  {
    title: "📱 14-Day Content & Visibility Challenge",
    description: "Daily prompt bank, hooks, and accountability to get you inbound client attention.",
    value: "₦15,000"
  },
  {
    title: "📕 BONUS: 10 WAYS TO MAKE YOUR FIRST ₦1.5 MILLION ONLINE IN 2026 (PRACTICAL GUIDE + PROOF)",
    description: "Exclusive playbook on how AI and smart automations create scalable income streams.",
    value: "₦15,000",
    isBonus: true
  },
  {
    title: "💬 Private WhatsApp VIP Community & Support",
    description: "Direct feedback on your designs, video reviews, and collaborative networking.",
    value: "₦10,000",
    isBonus: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Emeka O.",
    role: "Freelance Social Media Manager",
    avatar: "https://i.ibb.co/pjQkfZZ1/download-19.jpg",
    quote: "Before this bootcamp, I had 10 AI tools bookmarked but zero client results. In week 2, I built my portfolio website and used the AI video workflow to pitch a local fashion brand. They signed me for ₦80,000/month to create their Instagram reels!",
    rating: 5,
    highlight: "Signed ₦80k/mo retainer during week 2",
    videoDuration: "1:42",
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    badge: "Verified Student"
  },
  {
    id: "test-2",
    name: "Blessing A.",
    role: "Digital Entrepreneur & Coach",
    avatar: "https://i.ibb.co/GGHcVcw/download-21.jpg",
    quote: "The 14-day challenge is pure magic. It forced me to stop overthinking and just post my sample projects. On Day 9 of the challenge, two business owners DM'd me asking how much I charge for branded Canva carousels. This course paid for itself 10x over.",
    rating: 5,
    highlight: "Received 2 inbound client DMs on Day 9",
    videoDuration: "2:15",
    videoThumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=80",
    badge: "Verified Student"
  },
  {
    id: "test-3",
    name: "David K.",
    role: "Undergraduate & Content Creator",
    avatar: "https://i.ibb.co/dsznTZmV/download-20.jpg",
    quote: "I had never edited a video in my life. Zoe broke down the AI video process so simply that I generated 3 UGC product ads in my first weekend. Having a live portfolio link to show potential clients made me look like an established agency.",
    rating: 5,
    highlight: "Created 3 UGC ads in one weekend from scratch",
    videoDuration: "1:18",
    videoThumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    badge: "Verified Student"
  }
];

export const CHALLENGE_DAYS: DayChallenge[] = [
  {
    day: 1,
    week: 1,
    title: "The Public Declaration",
    objective: "Announce your commitment to mastering AI content creation.",
    contentType: "Text + Simple Graphic",
    promptExample: "Why I'm learning AI tools in 2026 and what I'm creating this month.",
    platformFocus: "LinkedIn / X / Instagram"
  },
  {
    day: 2,
    week: 1,
    title: "Tool Teardown: My First AI Voiceover",
    objective: "Share a 15-second snippet of AI audio replacing traditional recording.",
    contentType: "Short Reel / Audio Waveform",
    promptExample: "Testing ElevenLabs voice cloning: Before vs. After comparison.",
    platformFocus: "Instagram Reels / TikTok"
  },
  {
    day: 3,
    week: 1,
    title: "Canva AI Carousel Teaser",
    objective: "Share a 3-slide visual carousel breaking down a common industry myth.",
    contentType: "Canva Carousel",
    promptExample: "3 Myths About AI Video Creation Everyone Gets Wrong.",
    platformFocus: "LinkedIn / Instagram"
  },
  {
    day: 7,
    week: 1,
    title: "Week 1 Reflection & Project Drop",
    objective: "Post your first completed UGC sample video with behind-the-scenes notes.",
    contentType: "UGC Video + Caption",
    promptExample: "How I generated this skincare product commercial with 0 cameras.",
    platformFocus: "All Platforms"
  },
  {
    day: 10,
    week: 2,
    title: "The Live Portfolio Reveal",
    objective: "Share your newly published portfolio website and ask for feedback.",
    contentType: "Website Walkthrough Screen Recording",
    promptExample: "I built my AI creator portfolio website in 60 minutes. Link in bio!",
    platformFocus: "LinkedIn / Twitter / WhatsApp Status"
  },
  {
    day: 14,
    week: 2,
    title: "The Official Services Launch & Case Study",
    objective: "Present your client packages, availability, and how to work with you.",
    contentType: "Services Carousel + Direct Call To Action",
    promptExample: "Now accepting 3 clients for monthly AI video & graphics retainers.",
    platformFocus: "All Platforms"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need any previous graphic design or video editing experience?",
    answer: "No! This bootcamp is built specifically for beginners and creators who don't have technical editing backgrounds. We focus on modern AI tools and intuitive workflows that handle the heavy lifting.",
    category: "general"
  },
  {
    question: "Do I need an expensive computer or professional cameras?",
    answer: "Not at all. You can follow and implement everything on a standard laptop, desktop, or even complete a significant portion of the graphics and video prompt workflows on your smartphone.",
    category: "tools"
  },
  {
    question: "Are the AI tools we will use free or paid?",
    answer: "We focus on tools that offer generous free plans or free trials (such as Canva free/pro trial, CapCut, ChatGPT free tier, free AI video and voice generators) so you don't have to spend a fortune on subscriptions before making your first client income.",
    category: "tools"
  },
  {
    question: "How long do I have access to the bootcamp materials?",
    answer: "You get lifetime access to all session recordings, template vaults, Notion planners, and the exclusive WhatsApp community so you can review at your own pace whenever you want.",
    category: "general"
  },
  {
    question: "How do I make payment and receive immediate access?",
    answer: "Click any 'JOIN THE BOOTCAMP' button. You can pay securely with your Debit Card, Bank Transfer, or via Direct WhatsApp. Once confirmed, you will instantly receive your onboarding link and access to the private VIP community.",
    category: "payment"
  },
  {
    question: "What if I have questions during the 14 days?",
    answer: "You won't be left alone. You have direct access to our private WhatsApp VIP group where you can submit your drafts, ask questions, get video critiques, and collaborate with fellow creators.",
    category: "curriculum"
  }
];
