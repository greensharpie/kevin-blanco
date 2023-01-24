import React from 'react'
import KEVINBLANCO_RESUME from '../../assets/KEVINBLANCO_RESUME.pdf'

const CallToAction = () => {
  return (
    <div className='CallToAction'>
      <a href={KEVINBLANCO_RESUME} download>Download Resume</a>
      <a href='#contact'>Let's Chat</a>
    </div>
  )
}

export default CallToAction