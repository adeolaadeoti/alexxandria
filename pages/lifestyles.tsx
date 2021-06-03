import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

interface lifestyleProps {}
const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const lifestyle: React.FC<lifestyleProps> = ({}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  // React.useEffect(() => {
  //   import('locomotive-scroll').then(locomotiveModule => {
  //     // @ts-ignore
  //     const scroll = new locomotiveModule.default({
  //       el: scrollRef.current,
  //       smooth: true,
  //     })
  //   })
  // }, [])

  return (
    <motion.div
      ref={scrollRef}
      className='container'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}>
      <Head>
        <title>Alexxandria Forsque &mdash; lifestyles</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
        className='brand-logo'>
        <img src={'/images/brand-logo.svg'} alt='alexxandria forsque logo' />
      </motion.div>
      <header className='gallery-header'>
        <div className='gallery-header__details'>
          <h1 className='gallery-header__h1'>Lifestyles</h1>
          <div className="gallery-header__image"></div>
          <h1 className='gallery-header__h1'>Lifestyles</h1>
        </div>
      </header>
    </motion.div>
  )
}

export default lifestyle
