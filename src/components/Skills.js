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
            <div className="row">
              <div className="col-6 m-15px-tb">
                {/* skill */}
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fab fa-react text-primary"></i>
                    React js | Next js
                  </h6>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fas fa-database text-info"></i>
                    React Query
                  </h6>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fas fa-layer-group text-purple"></i>
                    Redux
                  </h6>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fab fa-html5 text-danger"></i>
                    HTML | CSS
                  </h6>
                </div>
                {/* end skill */}
              </div>
              <div className="col-6 m-15px-tb">
                {/* skill */}
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fab fa-js-square text-warning"></i>
                    JavaScripts /Es6
                  </h6>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fas fa-cloud text-success"></i>
                    Rest APIs
                  </h6>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fas fa-palette text-primary"></i>
                    Material-UI
                  </h6>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">
                    <i className="fas fa-wind text-cyan"></i>
                    Tailwind CSS
                  </h6>
                </div>
                {/* end skill */}
              </div>
            </div>
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

