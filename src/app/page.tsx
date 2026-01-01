'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Twitch,
  Youtube,
  Instagram,
  MessageCircle,
  ExternalLink,
  Globe,
  Sparkles
} from 'lucide-react'

// PRSMTECH Logo from Supabase Storage
const PRSMTECH_LOGO = 'https://eiflgtwltjapsgjvhzxf.supabase.co/storage/v1/object/public/media/images/prsmtech-logo-favicon.jpeg'

// Social media links data
const socialLinks = [
  {
    platform: 'Twitch',
    username: '@MrJPTech',
    url: 'https://twitch.tv/MrJPTech',
    color: '#9146FF',
    icon: Twitch,
    description: 'Live streams & gaming',
  },
  {
    platform: 'YouTube',
    username: '@MrJPTechy',
    url: 'https://youtube.com/@MrJPTechy',
    color: '#FF0000',
    icon: Youtube,
    description: 'Videos & shorts',
  },
  {
    platform: 'TikTok',
    username: '@MrJPTech',
    url: 'https://tiktok.com/@MrJPTech',
    color: '#000000',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    description: 'Short-form content',
  },
  {
    platform: 'Instagram',
    username: '@MrJPTech',
    url: 'https://instagram.com/MrJPTech',
    color: '#E4405F',
    icon: Instagram,
    description: 'Personal updates & reels',
    label: 'Personal',
  },
  {
    platform: 'Instagram',
    username: '@prsmtech',
    url: 'https://instagram.com/prsmtech',
    color: '#E4405F',
    icon: Instagram,
    description: 'Company updates',
    label: 'PRSMTECH',
  },
  {
    platform: 'X',
    username: '@MrJPTech',
    url: 'https://twitter.com/MrJPTech',
    color: '#000000',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    description: 'Thoughts & threads',
  },
  {
    platform: 'Threads',
    username: '@mrjptech_',
    url: 'https://threads.com/@mrjptech_',
    color: '#000000',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.85-.706 2.017-1.12 3.378-1.2.957-.056 1.845.021 2.654.231.012-.487-.003-.948-.046-1.38-.13-1.327-.576-2.324-1.324-2.962-.788-.672-1.943-1.013-3.432-.982-1.378.028-2.443.418-3.166 1.158-.755.773-1.187 1.922-1.285 3.416l-2.12-.124c.126-1.974.74-3.542 1.825-4.663 1.123-1.16 2.676-1.765 4.618-1.801 2.012-.037 3.65.476 4.872 1.521 1.26 1.078 1.903 2.595 2.078 4.637.056.65.064 1.337.024 2.057.548.217 1.04.483 1.47.798 1.322.968 2.163 2.392 2.36 4.005.198 1.613-.313 3.2-1.437 4.462-1.387 1.558-3.462 2.454-5.838 2.524-.113.003-.225.004-.338.004zm-.675-9.358c-1.024.06-1.81.323-2.342.78-.468.402-.686.89-.65 1.45.034.514.306.96.787 1.29.533.367 1.241.546 2.104.532 1.2-.021 2.18-.476 2.91-1.352.454-.545.776-1.255.964-2.125-.59-.142-1.213-.22-1.865-.22-.315 0-.623.016-.908.048v-.003z"/>
      </svg>
    ),
    description: 'Text updates',
  },
  {
    platform: 'Reddit',
    username: 'u/MrJPTech',
    url: 'https://reddit.com/u/MrJPTech',
    color: '#FF4500',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    description: 'Community discussions',
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-prsmtech-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-prsmtech-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-prsmtech-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div
        className="w-full max-w-md z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.div
          className="text-center mb-10"
          variants={floatVariants}
          animate="animate"
        >
          {/* Avatar with PRSMTECH Logo */}
          <motion.div
            className="w-32 h-32 mx-auto mb-6 relative"
            variants={itemVariants}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-prsmtech-primary via-prsmtech-secondary to-prsmtech-accent p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-prsmtech-dark">
                <Image
                  src={PRSMTECH_LOGO}
                  alt="Jordan Ward - PRSMTECH"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-prsmtech-dark animate-pulse" />
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            className="text-3xl font-bold mb-2 bg-gradient-to-r from-white via-prsmtech-light to-white bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Jordan Ward
          </motion.h1>
          <motion.p
            className="text-lg text-prsmtech-light/80 mb-2 flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 text-prsmtech-accent" />
            CEO of PRSMTECH
            <Sparkles className="w-4 h-4 text-prsmtech-accent" />
          </motion.p>
          <motion.p
            className="text-sm text-gray-400"
            variants={itemVariants}
          >
            Tech Entrepreneur • Content Creator • Developer
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="space-y-3 mb-8"
          variants={containerVariants}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={`${link.platform}-${link.username}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card glass flex items-center gap-4 p-4 rounded-xl w-full group cursor-pointer"
                data-platform={link.platform.toLowerCase()}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon with platform color */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${link.color}20` }}
                >
                  <div style={{ color: link.color }}>
                    <Icon />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">
                      {link.platform}
                    </span>
                    {link.label && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-prsmtech-primary/20 text-prsmtech-light">
                        {link.label}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{link.username}</p>
                </div>

                {/* Arrow */}
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Website CTA */}
        <motion.a
          href="https://prsmtechweb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full p-4 rounded-xl bg-gradient-to-r from-prsmtech-primary to-prsmtech-secondary text-white font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-prsmtech-primary/30 hover:scale-[1.02]"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Globe className="w-5 h-5" />
            Visit PRSMTECH Website
            <ExternalLink className="w-4 h-4" />
          </div>
        </motion.a>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>&copy; 2025 PRSMTECH. All rights reserved.</p>
          <p className="mt-1 text-xs">
            Made with <span className="text-prsmtech-accent">♥</span> in the USA
          </p>
        </motion.footer>
      </motion.div>
    </main>
  )
}
