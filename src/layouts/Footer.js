const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://web.facebook.com/soos.lnt/">
                <i className="fab fa-facebook-f" />
              </a>
              {/* <a href="#">
                <i className="fab fa-twitter" />
              </a> */}
              {/* <a href="#">
                <i className="fab fa-instagram" />
              </a> */}
              <a href="https://www.linkedin.com/in/esraa-knt/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/esraakanat">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="col-md-6 m-10px-tb text-center text-md-right">
            <p>© {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
