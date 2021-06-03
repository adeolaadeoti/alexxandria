import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

interface indexProps {}
const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}
const firstName: { initial: any; animate: any } = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}
const secondName: { initial: any; animate: any } = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    delay: 0.8,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}
const letter: { initial: any; animate: any } = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition },
  },
}

const index: React.FC<indexProps> = ({}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [addClip, setAddClip] = React.useState<boolean>(false)
  const [clip, setClip] = React.useState<number>(1)

  React.useEffect(() => {
    import('locomotive-scroll').then(locomotiveModule => {
      // @ts-ignore
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
      })
    })
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setAddClip(true)
    }, 3000)
  }, [])

  function changeBackground(e: any) {
    const clipId = parseInt(e.target.getAttribute('data-clip'))
    setClip(clipId)
  }

  return (
    <motion.div
      ref={scrollRef}
      className='container'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}>
      <Head>
        <title>Alexxandria Forsque</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
        className='brand-logo'>
        <img src={'/images/brand-logo.svg'} alt='alexxandria forsque logo' />
      </motion.div>
      <header className='home-header'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, ...transition } }}
          className={`home-header__bg ${addClip && 'clippy'}`}></motion.div>

        <div className='home-header__text'>
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.4, ...transition } }}
            className='heading-3'>
            ALEXXANDRIA FORSQUE
          </motion.h3>

          <motion.div className='hero-text'>
            <motion.span variants={firstName}>
              <motion.span className='hero-text__h1' variants={letter}>
                CAPTURING
              </motion.span>
              <motion.small className='hero-text__h1--small' variants={letter}>
                &nbsp; the
              </motion.small>
            </motion.span>
          </motion.div>

          <motion.div className='hero-text'>
            <motion.span variants={secondName}>
              <motion.small className='hero-text__h1--small' variants={letter}>
                pure &nbsp;
              </motion.small>
              <motion.span className='hero-text__h1' variants={letter}>
                essence
              </motion.span>
            </motion.span>
          </motion.div>

          <motion.div className='hero-text'>
            <motion.span variants={firstName}>
              <motion.small className='hero-text__h1--small' variants={letter}>
                &mdash; of life
              </motion.small>
            </motion.span>
          </motion.div>
        </div>
      </header>

      <section className='section-projects'>
        <div className={`screen-full ${`clip-${clip}`} `}></div>
        <div className={`screen-clip ${`clip-${clip}`}`}></div>
        <div className='screen-details'>
          <h5 className='heading-5'>projects</h5>
          <ul className='screen-details__list'>
            <li data-clip='1' onMouseEnter={changeBackground} className='screen-details__item'>
              <Link href='/lifestyles'>Lifestyles</Link>
            </li>
            <li data-clip='2' onMouseEnter={changeBackground} className='screen-details__item'>
              <Link href='/cultures'>Cultures</Link>
            </li>
            <li data-clip='3' onMouseEnter={changeBackground} className='screen-details__item'>
              <Link href='/fitness'>Fitness</Link>
            </li>
            <li data-clip='4' onMouseEnter={changeBackground} className='screen-details__item'>
              <Link href='/automotives'>Automotives</Link>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  )
}

export default index
