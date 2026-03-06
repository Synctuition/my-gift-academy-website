export const heroContent = {
  headline: ['Discover the Gift', 'That Only You Can Bring'],
  emphasis: 'In the age of artificial intelligence, choose awakened individuality.',
  subheadline:
    'My Gift Academy is a transformational program for those ready to reconnect with their deepest clarity, purpose, and creative power.',
  cta: 'Apply to Join the Academy',
  ctaHref: '#apply',
}

/* ─── From Confusion to Clarity ─── */

export const confusionToClarityContent = {
  eyebrow: 'The Challenge',
  title: 'From Confusion to Clarity',
  before: {
    heading: 'The noise you feel',
    points: [
      'Information overload drowning out your inner signal',
      'AI answers arriving before you finish the question',
      'A growing sense that something essential is being lost',
      'Outsourcing your thinking without even realising it',
    ],
  },
  after: {
    heading: 'The clarity that awaits',
    points: [
      'A deep, unshakeable knowing of who you are',
      'The courage to think, feel, and create originally',
      'Inner stillness that no algorithm can replicate',
      'A gift the world has never seen — fully awakened',
    ],
  },
}

/* ─── About the Academy ─── */

export const aboutContent = {
  eyebrow: 'The Academy',
  title: 'What Is My Gift Academy?',
  subtitle:
    'A sanctuary for those who refuse to outsource their inner world. Where ancient wisdom meets modern methodology — designed for those ready to do the deepest work of their lives.',
  pillars: [
    {
      title: 'Inner Confrontation',
      description:
        'No algorithm can access the full depth of your lived experience. We guide you through the inner work that no machine can do for you — facing your own questions, your own shadows, your own untapped potential.',
      icon: 'eye',
    },
    {
      title: 'Living Community',
      description:
        'Individuality is not isolation. Connect with a global network of sovereign minds — people who have chosen reflection over automation, depth over convenience.',
      icon: 'users',
    },
    {
      title: 'Timeless Methodology',
      description:
        'Socrates declared "Know yourself" twenty-four centuries ago. We carry that flame forward with science-backed practices fused with the wisdom traditions that have survived every age.',
      icon: 'compass',
    },
    {
      title: 'Awakened Clarity',
      description:
        'In an age of constant noise, we choose clarity. Not the clarity that is downloaded from without, but the clarity that is cultivated from within.',
      icon: 'brain',
    },
  ],
}

/* ─── Our Mission (condensed from manifesto) ─── */

export type BeatVariant = 'statement' | 'emphasis' | 'whisper' | 'declaration'

export interface ManifestoBeat {
  text: string
  variant: BeatVariant
}

export const missionBeats: ManifestoBeat[] = [
  {
    text: 'For the first time in history, humanity has created something that can think faster than we do.',
    variant: 'statement',
  },
  {
    text: 'But when intelligence becomes externalized — something subtle begins to weaken inside the human being.',
    variant: 'emphasis',
  },
  {
    text: 'The muscle of reflection.\nThe discipline of doubt.\nThe courage of original thought.',
    variant: 'declaration',
  },
  {
    text: 'You already sense it.',
    variant: 'whisper',
  },
  {
    text: 'And somewhere beneath it all — a quiet knowing that you carry something the world hasn\'t seen yet.',
    variant: 'emphasis',
  },
  {
    text: 'We are not anti-technology. We are pro-consciousness.\nWe are not fighting machines. We are reminding humans who they are.',
    variant: 'statement',
  },
  {
    text: 'Temet Nosce — Know Yourself.',
    variant: 'declaration',
  },
]

/* ─── The Rebirth Process (was Journey / Three Thresholds) ─── */

export const rebirthContent = {
  eyebrow: 'The Process',
  title: 'The Rebirth Process',
  subtitle:
    'A structured path from self-discovery to purposeful action — designed to unfold at your own pace, on your own terms.',
  steps: [
    {
      number: '01',
      title: 'Know Yourself',
      description:
        'Peel back the layers of conditioning. Through guided reflection and deep assessment, rediscover the authentic self beneath the noise — the person you were before the world told you who to be.',
    },
    {
      number: '02',
      title: 'Strengthen the Muscle',
      description:
        'Individuality is not efficient. It is sacred. Cultivate the discipline of doubt, the courage of original thought, and the intimacy with your own intuition through structured practice.',
    },
    {
      number: '03',
      title: 'Carry Your Gift Forward',
      description:
        'The most original creations in history were not optimized — they were born from struggle, contradiction, and soul. Bring your awakened gifts into the world with a purpose that is unmistakably yours.',
    },
  ],
}

/* ─── What's Inside ─── */

export const whatsInsideContent = {
  eyebrow: 'What\'s Inside',
  title: 'Everything You Need to Awaken Your Gift',
  subtitle:
    'A complete ecosystem of transformation — film, books, live guidance, and community — designed to work together.',
  features: [
    {
      title: 'The My Gift Film',
      description: 'A cinematic experience that opens the door to self-discovery. Watch, feel, and let the journey begin.',
      icon: 'film',
    },
    {
      title: 'The My Gift Book',
      description: 'The foundational text behind the Academy — a deep companion for the work of knowing yourself.',
      icon: 'book',
    },
    {
      title: 'Workbooks & Exercises',
      description: 'Structured journaling, reflective exercises, and inner-work practices that build the muscle of self-knowledge.',
      icon: 'pen',
    },
    {
      title: 'The Clarity Test',
      description: 'A guided self-assessment that reveals where you stand on your path — and what your next threshold looks like.',
      icon: 'sparkle',
    },
    {
      title: 'Audio Journeys',
      description: 'Immersive guided meditations and contemplation tracks designed to take you beneath the surface.',
      icon: 'headphones',
    },
    {
      title: 'Podcasts & Conversations',
      description: 'In-depth dialogues with thinkers, seekers, and guides who have walked the path of awakened individuality.',
      icon: 'mic',
    },
    {
      title: 'Live Guidance',
      description: 'Weekly live sessions with expert facilitators — real-time reflection, breakthroughs, and community.',
      icon: 'broadcast',
    },
  ],
}

/* ─── Imagine ─── */

export const imagineContent = {
  eyebrow: 'Imagine',
  lines: [
    'Imagine waking up knowing exactly who you are.',
    'Imagine the noise falling away — and your own signal becoming unmistakable.',
    'Imagine carrying a gift into the world that no algorithm could have predicted, no machine could have generated.',
    'Imagine a life built not on optimisation, but on truth.',
  ],
  closing: 'This is what awaits on the other side of the work.',
}

/* ─── Who It's For ─── */

export const whoItsForContent = {
  eyebrow: 'Who It\'s For',
  title: 'Is This Your Path?',
  subtitle:
    'My Gift Academy is not for everyone. It is for those who are ready to stop scrolling and start searching — inward.',
  profiles: [
    {
      title: 'Leaders & Founders',
      description:
        'You build, you decide, you carry others. But who carries you? This is the space where you stop performing leadership and start embodying it.',
    },
    {
      title: 'Creators & Artists',
      description:
        'The world is full of content. You want to make something that matters. Reconnect with the source of original creation that no prompt can reach.',
    },
    {
      title: 'Seekers & Lifelong Learners',
      description:
        'You\'ve read the books, done the courses, collected the certificates. Now you\'re ready for the one thing they never taught — how to know yourself.',
    },
    {
      title: 'Professionals in Transition',
      description:
        'Between who you were and who you are becoming, there is a threshold. We help you cross it with clarity, not confusion.',
    },
  ],
}

/* ─── Application Process ─── */

export const applicationContent = {
  eyebrow: 'How to Join',
  title: 'The Application Process',
  subtitle:
    'We keep our cohorts intentionally small. Every member is personally welcomed.',
  steps: [
    {
      number: '01',
      title: 'Apply',
      description: 'Share a little about yourself and why this path calls to you.',
    },
    {
      number: '02',
      title: 'Connect',
      description: 'A short personal conversation to ensure the Academy is right for you.',
    },
    {
      number: '03',
      title: 'Prepare',
      description: 'Receive your welcome materials and meet your cohort before day one.',
    },
    {
      number: '04',
      title: 'Begin',
      description: 'Step across the threshold into the deepest work of your life.',
    },
  ],
}
