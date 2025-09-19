import { useEffect } from "react";
import { tony } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    tony.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                Frontend Web Developer
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 m-15px-tb">
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">React js | Next js</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={92}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill-lt">
              <h6 className="dark-color">React Query </h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>82%</span>
                </div>
              </div>
            </div>
            <div className="skill-lt">
              <h6 className="dark-color">Redux </h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">HTML | CSS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={72}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="skill-lt">
              <h6 className="dark-color">JavaScripts /Es6</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill-lt">
              <h6 className="dark-color">Rest APIs</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Material-UI </h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* /skill */}
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Tailwind CSS</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
             
            
            {/* end skill */}
          </div>
          <div className="col-lg-5 m-15px-tb">
            <div className="row">
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-compact-disc" />
                  </div>
                  <div className="media-body">
                    <h5>20+ Clients</h5>
                  </div>
                </div>
              </div>
              
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-mug-hot" />
                  </div>
                  <div className="media-body">
                    <h5>25+ Website</h5>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
