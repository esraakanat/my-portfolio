import Isotope from 'isotope-layout'
import { useEffect, useRef, useState } from 'react'

const Work = () => {
  // Isotope
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.portfolio-content', {
        itemSelector: '.grid-item',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item'
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      })
    }, 1000)
    //     return () => isotope.current.destroy();
  }, [])
  return (
    <section id='work' className='section'>
      <div className='container'>
        <div className='row sm-m-25px-b m-35px-b'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h3 className='dark-color text-uppercase'>LATEST WORKS</h3>
              <p className='text-uppercase small'>
               Junior Frontend WEB DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>

        
        <div className='portfolio-content lightbox-gallery'>
        <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/ecommerce.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a href='https://ecommerce-website-rho-blue.vercel.app/' target='_blank'>
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>
        <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/club.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a href='https://club-web-main.vercel.app/' target='_blank'>
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/bloom1.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://perfume-website-eta.vercel.app/'
                    target='_blank'
                  >
                   <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                      src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/Fast-route.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                {/* <a
                    href='https://play.google.com/store/apps/details?id=com.myguiltydog'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a> */}
                  <a
                    href='https://furniture-moving-company.vercel.app/'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/vista.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                <a
                    href='https://training-consulting.vercel.app/'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/koozina.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a href='https://koozina.vercel.app/' target='_blank'>
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/biaa.png' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://baiaalsaadah.vercel.app/'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
         
          
          
          {/* grid item */}
        </div>{' '}
        {/* portfolio-content */}
      </div>
    </section>
  )
}
export default Work
