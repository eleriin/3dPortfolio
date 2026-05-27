import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Want to work with someone
             motivated to learn and improve? 
             <br className='sm:block hidden' />
             I’m ready for new challenges and opportunities.
        </p>
        <Link to="/contact" className='btn'>
            Contact 
        </Link>
    </section>
  )
}

export default CTA