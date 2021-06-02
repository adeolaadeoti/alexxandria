import React from 'react'
import { motion } from 'framer-motion'

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
  const [addClip, setAddClip] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTimeout(() => {
      setAddClip(true)
    }, 3000)
  }, [])

  return (
    <motion.div initial='initial' animate='animate' exit='exit'>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
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
    </motion.div>
  )
}

export default index
