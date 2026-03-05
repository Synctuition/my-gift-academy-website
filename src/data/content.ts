export const heroContent = {
  headline: ['The danger is not that', 'machines become conscious.'],
  emphasis: 'The danger is that humans become automatic.',
  subheadline:
    'My Gift Academy exists to defend and awaken the sovereign human mind — so that no generation forgets how to think, feel, create, and become who they were meant to be.',
  cta: 'Begin the Journey',
  ctaHref: '#manifesto',
}

export type BeatVariant = 'statement' | 'emphasis' | 'whisper' | 'declaration'

export interface ManifestoBeat {
  text: string
  variant: BeatVariant
}

export const manifestoBeats: ManifestoBeat[] = [
  {
    text: 'For the first time in history, humanity has created something that can think faster than we do.',
    variant: 'statement',
  },
  {
    text: 'It is not evil. It is not the enemy. It is one of the greatest achievements of human ingenuity.',
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
    text: 'The noise getting louder. The attention getting shorter. The answers arriving before you even finish the question.',
    variant: 'statement',
  },
  {
    text: 'And somewhere beneath it all — a quiet knowing that you carry something the world hasn\'t seen yet.',
    variant: 'emphasis',
  },
  {
    text: 'Something no algorithm can predict or generate.',
    variant: 'declaration',
  },
  {
    text: 'That is your gift.\nAnd it is waiting.',
    variant: 'declaration',
  },
  {
    text: 'We are not anti-technology. We are pro-consciousness.',
    variant: 'statement',
  },
  {
    text: 'We are not fighting machines.\nWe are reminding humans who they are.',
    variant: 'emphasis',
  },
  {
    text: 'Temet Nosce — Know Yourself.',
    variant: 'declaration',
  },
]

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

export const journeyContent = {
  eyebrow: 'How It Works',
  title: 'The Three Thresholds',
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
