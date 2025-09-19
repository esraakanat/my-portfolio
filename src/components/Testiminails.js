import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderProps } from '../sliderProps'

const Testiminails = () => {
  return (
    <section className='section gray-bg'>
      <div className='container'>
        <div className='row sm-m-25px-b m-35px-b'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h3 className='dark-color text-uppercase'>Testimonials</h3>
              <p className='text-uppercase small'>
                Junior Frontend Web Developer.
              </p>
            </div>
          </div>
        </div>
        <Swiper {...sliderProps.testimonial}>
          {/* testimonials */}
          <SwiperSlide className='testimonial-col-01'>
            <div className='media'>
              <div className='media-body p-25px-l'>
                <p>
                  Awesome developer!! Very knowledgeable and quick but also
                  careful and articulate. Will hire again!!!!
                </p>
                <div className='tc-info'>
                  <h6 className='font-alt dark-color font-w-600'>Rmai</h6>
                  <span>Lebanon</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className='testimonial-col-01'>
            <div className='media'>
              <div className='media-body p-25px-l'>
                <p>
                  Excellent service ! Easy to deal with. Definitely recommend to
                  anyone who needs a mock up app exactly match to the design !
                </p>
                <div className='tc-info'>
                  <h6 className='font-alt dark-color font-w-600'>Mohammad</h6>
                  <span>Syria</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className='testimonial-col-01'>
            <div className='media'>
              <div className='media-body p-25px-l'>
                <p>
                  Great communication, patience, professional and fast response
                  is the experience I received from seller. I recommend this
                  seller to anyone looking for a competent developer. Great
                  experience. Thank you!
                </p>
                <div className='tc-info'>
                  <h6 className='font-alt dark-color font-w-600'>Ahmad</h6>
                  <span>Jordan</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className='testimonial-col-01'>
            <div className='media'>
              <div className='media-body p-25px-l'>
                <p>Excellent work, great reactivity, very happy.</p>
                <div className='tc-info'>
                  <h6 className='font-alt dark-color font-w-600'>
                    Mariam
                  </h6>
                  <span>Syria</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          <div className='owl-dots'></div>
        </Swiper>
      </div>
    </section>
  )
}
export default Testiminails
