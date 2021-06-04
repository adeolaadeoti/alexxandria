import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

interface fitnessProps {}
const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

// Map number x from range [a, b] to [c, d]
const map = (x: any, a: number, b: number, c: number, d: number) =>
  ((x - a) * (d - c)) / (b - a) + c

const clamp = (num: number, min: number, max: number) => (num <= min ? min : num >= max ? max : num)

const fitness: React.FC<fitnessProps> = ({}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [addClip, setAddClip] = React.useState<boolean>(false)

  React.useEffect(() => {
    import('locomotive-scroll').then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
      })

      scroll.on('scroll', (obj: any) => {
        for (const key of Object.keys(obj.currentElements)) {
          if (obj.currentElements[key].el.classList.contains('section-showcase__img')) {
            let progress = obj.currentElements[key].progress
            const saturateVal =
              progress < 0.5
                ? clamp(map(progress, 0, 0.5, 0, 1), 0, 1)
                : clamp(map(progress, 0.5, 1, 1, 0), 0, 1)
            const brightnessVal =
              progress < 0.5
                ? clamp(map(progress, 0, 0.5, 0, 1), 0, 1)
                : clamp(map(progress, 0.5, 1, 1, 0), 0, 1)
            obj.currentElements[
              key
            ].el.style.filter = `saturate(${saturateVal}) brightness(${brightnessVal})`
          }
        }
      })
      scroll.update()
    })
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setAddClip(true)
    }, 1000)
  }, [])

  return (
    <motion.div
      data-scroll-container
      ref={scrollRef}
      className='container'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}>
      <Head>
        <title>Alexxandria Forsque &mdash; Fitness</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header data-scroll-section className='gallery-header'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
          className='brand-logo'>
          <img src={'/images/brand-logo.svg'} alt='alexxandria forsque logo' />
        </motion.div>
        <div className='gallery-header__details'>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, ...transition } }}
            className='gallery-header__text1'>
            Fitness
          </motion.h1>
          <div className={`gallery-header__image gallery-header__image--fitness ${addClip && 'project-clippy'}`}></div>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, ...transition } }}
            className='gallery-header__text2'>
            Fitness
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2, ...transition } }}
            className='gallery-header__info'>
            <p className='gallery-header__info--p'>2020</p>
            <p className='gallery-header__info--p'>personal</p>
          </motion.div>
        </div>
      </header>
      <section data-scroll-section className='section-showcase'>
        <div data-scroll data-scroll-speed='1' className='section-showcase__img'>
          &nbsp;
        </div>
        <div data-scroll data-scroll-speed='-1' className='section-showcase__img'>
          &nbsp;
        </div>
        <div
          data-scroll
          data-scroll-speed='1'
          data-scroll-direction='horizontal'
          className='section-showcase__img'>
          &nbsp;
        </div>
        <div data-scroll data-scroll-speed='2' className='section-showcase__img'>
          &nbsp;
        </div>
        <div
          data-scroll
          data-scroll-speed='1'
          data-scroll-direction='horizontal'
          className='section-showcase__img'>
          &nbsp;
        </div>
      </section>
      <footer data-scroll-section className='footer'>
        <p className='footer__p'>
          Alexxandria Forsque - is an observer. Her sensitivity and natural intuition make her the
          perfect woman to direct and capture life’s real characters.
        </p>
        <img className='footer__copyright' src='/images/adeola-credit.svg' alt='designed and developed by adeola' />
      </footer>
    </motion.div>
  )
}

export default fitness
