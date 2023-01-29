import React from 'react'
import KEVINBLANCO_RESUME from '../../assets/KEVINBLANCO_RESUME.pdf'

const CallToAction = () => {
  return (
    <div className='CallToAction'>
      <a href={KEVINBLANCO_RESUME} className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CallToAction