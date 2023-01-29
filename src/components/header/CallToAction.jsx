import React from 'react'
import Resume from '../../assets/KEVINBLANCO_RESUME.pdf'

const CallToAction = () => {
  return (
    <div className='CallToAction'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CallToAction