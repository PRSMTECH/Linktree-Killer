'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Twitch,
  Youtube,
  Instagram,
  ExternalLink,
  Globe,
  Sparkles,
  Github,
  Zap,
  Star,
  Heart
} from 'lucide-react'

// PRSMTECH Logo from Supabase Storage
const PRSMTECH_LOGO = 'https://eiflgtwltjapsgjvhzxf.supabase.co/storage/v1/object/public/media/images/prsmtech-logo-favicon.jpeg'

// Typing animation titles
const typingTitles = [
  'Tech Entrepreneur',
  'Content Creator',
  'Software Developer',
  'Streamer',
  'CEO of PRSMTECH'
]

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
    username: '@MrJPTech_',
    url: 'https://instagram.com/MrJPTech_',
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
  {
    platform: 'GitHub',
    username: '@MrJPTech',
    url: 'https://github.com/MrJPTech',
    color: '#181717',
    icon: Github,
    description: 'Personal projects & code',
    label: 'Personal',
  },
  {
    platform: 'GitHub',
    username: '@PRSMTECH',
    url: 'https://github.com/PRSMTECH',
    color: '#181717',
    icon: Github,
    description: 'Company repositories',
    label: 'PRSMTECH',
  },
]

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-prsmtech-accent/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Animated background stars
function AnimatedStars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <Star
            className="text-prsmtech-light/40"
            style={{ width: star.size * 8, height: star.size * 8 }}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  )
}

// Typing text animation hook
function useTypingAnimation(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

// 3D tilt card component
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Ripple effect on click
function useRipple() {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const addRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples(prev => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id))
    }, 1000)
  }, [])

  return { ripples, addRipple }
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const glowVariants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(99, 102, 241, 0.3)',
      '0 0 40px rgba(139, 92, 246, 0.4)',
      '0 0 20px rgba(168, 85, 247, 0.3)',
      '0 0 40px rgba(99, 102, 241, 0.4)',
      '0 0 20px rgba(99, 102, 241, 0.3)',
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const pulseRingVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
}

export default function Home() {
  const typingText = useTypingAnimation(typingTitles, 80, 40, 1500)
  const { ripples, addRipple } = useRipple()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clickedLink, setClickedLink] = useState<string | null>(null)

  // Handle link click with animation
  const handleLinkClick = (url: string) => {
    setClickedLink(url)
    setTimeout(() => setClickedLink(null), 300)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedStars />
      <FloatingParticles />

      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-prsmtech-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-prsmtech-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-prsmtech-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <motion.div
        className="w-full max-w-md z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          variants={floatVariants}
          animate="animate"
        >
          {/* Avatar with PRSMTECH Logo */}
          <TiltCard className="mx-auto mb-6">
            <motion.div
              className="w-28 h-28 sm:w-32 sm:h-32 mx-auto relative"
              variants={itemVariants}
            >
              {/* Animated ring around avatar */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-prsmtech-accent/50"
                variants={pulseRingVariants}
                animate="animate"
              />
              <motion.div
                className="absolute -inset-2 rounded-full border border-prsmtech-primary/30"
                variants={pulseRingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
              />

              {/* Glowing border */}
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-br from-prsmtech-primary via-prsmtech-secondary to-prsmtech-accent p-1"
                variants={glowVariants}
                animate="animate"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-prsmtech-dark relative">
                  <Image
                    src={PRSMTECH_LOGO}
                    alt="Jordan Ward - PRSMTECH"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -translate-x-full hover:translate-x-full" />
                </div>
              </motion.div>

              {/* Online indicator with pulse */}
              <motion.div
                className="absolute bottom-2 right-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-prsmtech-dark"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(34, 197, 94, 0.7)',
                    '0 0 0 10px rgba(34, 197, 94, 0)',
                    '0 0 0 0 rgba(34, 197, 94, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </TiltCard>

          {/* Name & Title */}
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-2 relative inline-block"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-prsmtech-light to-white bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Jordan Ward
            </span>
            <motion.span
              className="absolute -right-6 -top-1"
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-prsmtech-light/80 mb-2 flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-prsmtech-accent" />
            </motion.span>
            CEO of PRSMTECH
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-prsmtech-accent" />
            </motion.span>
          </motion.p>

          {/* Typing animation */}
          <motion.div
            className="h-6 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-sm text-gray-400">
              {typingText}
              <motion.span
                className="inline-block w-0.5 h-4 bg-prsmtech-accent ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8"
          variants={containerVariants}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            const isHovered = hoveredIndex === index
            const isClicked = clickedLink === link.url

            return (
              <TiltCard key={`${link.platform}-${link.username}`}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card glass flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl w-full group cursor-pointer relative overflow-hidden"
                  data-platform={link.platform.toLowerCase()}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={(e) => {
                    addRipple(e)
                    handleLinkClick(link.url)
                  }}
                  animate={isClicked ? { scale: [1, 0.95, 1] } : {}}
                >
                  {/* Ripple effects */}
                  {ripples.map((ripple) => (
                    <motion.span
                      key={ripple.id}
                      className="absolute bg-white/30 rounded-full pointer-events-none"
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 10,
                        height: 10,
                        marginLeft: -5,
                        marginTop: -5,
                      }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 20, opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  ))}

                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${link.color}15 0%, transparent 50%)`,
                    }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={isHovered ? { x: '100%' } : { x: '-100%' }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Icon with platform color */}
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10"
                    style={{ backgroundColor: `${link.color}20` }}
                    animate={isHovered ? {
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      style={{ color: link.color }}
                      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    >
                      <Icon />
                    </motion.div>
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {link.platform}
                      </span>
                      {link.label && (
                        <motion.span
                          className="text-xs px-2 py-0.5 rounded-full bg-prsmtech-primary/20 text-prsmtech-light"
                          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                        >
                          {link.label}
                        </motion.span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">{link.username}</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="relative z-10"
                    animate={isHovered ? { x: 3, scale: 1.1 } : { x: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </motion.div>
                </motion.a>
              </TiltCard>
            )
          })}
        </motion.div>

        {/* Website CTA */}
        <TiltCard>
          <motion.a
            href="https://prsmtechweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-3 sm:p-4 rounded-xl bg-gradient-to-r from-prsmtech-primary to-prsmtech-secondary text-white font-semibold text-center transition-all duration-300 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addRipple}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-prsmtech-secondary via-prsmtech-accent to-prsmtech-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ backgroundSize: '200% 200%' }}
            />

            {/* Ripple effects */}
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                className="absolute bg-white/30 rounded-full pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 10,
                  height: 10,
                  marginLeft: -5,
                  marginTop: -5,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 20, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            ))}

            <div className="flex items-center justify-center gap-2 relative z-10">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.span>
              <span className="text-sm sm:text-base">Visit PRSMTECH Website</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.span>
            </div>
          </motion.a>
        </TiltCard>

        {/* Footer */}
        <motion.footer
          className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-gray-500"
          variants={itemVariants}
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &copy; 2025 PRSMTECH. All rights reserved.
          </motion.p>
          <motion.p
            className="mt-1 text-xs flex items-center justify-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Made with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 text-prsmtech-accent fill-prsmtech-accent inline" />
            </motion.span>
            {' '}in the USA
          </motion.p>
        </motion.footer>
      </motion.div>
    </main>
  )
}
