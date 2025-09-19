const About = () => {
  return (
    <section id='about' className='section gray-bg'>
      <div className='container'>
        <div className='row sm-m-25px-b m-35px-b'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h3 className='dark-color text-uppercase'>ABOUT ME</h3>
              <p className='text-uppercase small'>
                Junior Frontend Web Developer
              </p>
            </div>
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-lg-5 m-15px-tb'>
            <div className='about-me-img box-shadow'>
              <img src='static/img/esraa-about3.jpg' alt='image' />
              <div className='nav social-icon'>
                <a href='https://www.facebook.com/soos.knt/'>
                  <i className='fab fa-facebook-f' />
                </a>
                
                <a href='https://github.com/esraakanat'>
                  <i className='fab fa-github' />
                </a>
                <a href='https://www.linkedin.com/in/esraa-knt/'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-7 m-15px-tb'>
            <div className='about-me'>
              <h4>I'M Esraa kanat</h4>
              <h6>
                Junior <span className='theme-color'>Frontend Web </span> 
                developer
              </h6>
              <p>
                
           I specialize in designing and developing modern, responsive,
            and user-friendly websites for clients worldwide.
             With a strong portfolio of successful web projects, 
             I have created various websites ranging from personal portfolios
              and business landing pages to e-commerce stores and educational platforms,
              always focusing on delivering seamless 
              user experiences and visually appealing interfaces.
              </p>
              <div className='row about-list'>
                <div className='col-md-6'>
                  <div className='media'>
                    <label>Birthday</label>
                    <p>5th june 2000</p>
                  </div>
                  <div className='media'>
                    <label>Age</label>
                    <p>25 Yr</p>
                  </div>
                  <div className='media'>
                    <label>Residence</label>
                    <p>Syria</p>
                  </div>
                  <div className='media'>
                    <label>Address</label>
                    <p>Damascus,Syria</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <label>E-mail</label>
                    <p>kntesraa82@gmail.com</p>
                  </div>
                  <div className='media'>
                    <label>Phone</label>
                    <p>+963968579126</p>
                  </div>
                  <div className='media'>
                    <label>Github</label>
                    <p>/esraakanat</p>
                  </div>
                  <div className='media'>
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className='btn-bar'>
                <a
                  className='m-btn m-btn-theme'
                  target='_blank'
                  href="https://drive.google.com/file/d/1KWRlNFRtoc-RF5maPTsK1mEmNjVgEosg/view?usp=drivesdk"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
