import React from 'react'
import { motion } from 'framer-motion'

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <motion.h1 animate={{ x: 200 }}>Hello boy</motion.h1>
      <div className='cont' data-scroll-container>
        <div className='section' data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div className='section' data-scroll-section>
          <h2 data-scroll data-scroll-speed='1'>
            What's up?
          </h2>
          <p data-scroll data-scroll-speed='2'>
            😬
          </p>
        </div>
      </div>
    </>
  )
}

export default index
