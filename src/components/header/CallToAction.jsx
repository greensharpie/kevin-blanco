import React from 'react'
import Resume from '../../assets/KEVINBLANCO_RESUME.pdf'

const CallToAction = () => {
  return (
    <div className='CallToAction'>
      {/* <a href={Resume} download className='btn'>Download Resume</a> */}
      <a href='https://docs.google.com/document/d/e/2PACX-1vSqJ-v7f3kM_yS0ol2FQJA6iJ2jY9cI6zIPEdhDI_Aj_EtF6Z7QtCmCMkJmd0xLx2XAKf2IoDhV_GTM/pub' download className='btn' target='_blank'>View Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CallToAction