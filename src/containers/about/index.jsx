import { useEffect, useRef } from "react";
import Button from "../../components/button";
import SectionTitle from "../../components/section-title";
import Parallax from "parallax-js";

const AboutContainer = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="about-us position-relative">
      <div className="container">
        <div className="row mb-n7 align-items-center">
          <div className="col-xl-5 col-md-6 offset-xl-1 mb-7">
            <div className="about-content">
              <SectionTitle
                classOption="title-section"
                subTitle="ABOUT US"
                title="Best <span class='text-primary'>
                                    Blockchain Contractors</span>
                                <br className='d-none d-xl-block' />
                                around"
              />
              <span className="date-meta">
                Since 2018 <span className="hr"></span>
              </span>
              <p className="mb-5">
                Fudgy Labs was Est. 2018
                <br />
                After nearly a decade as full stack software contracting our CEO felt it was time to take some junior devs under his wing, and so he established Fudgy Labs.
              </p>
              <p className="mb-5">
                With the market ripe with easy oportunities we began our design approach with frontend design and simple EVM smart contract.
                <br />
                As we took on more clients are devs slowly became seasoned veterans and pursued their own projects.
                <br />
                We remain here to help educate up imcoming web3 devs and help connect customers achieve real backend functionality.
              </p>
              <p className="high-light mb-8">
                We will have our own bootcamp soon after some more testing
              </p>
              <Button
                classOption="btn btn-lg btn-dark btn-hover-dark"
                text="Learn more"
                path="/about"
              />
            </div>
          </div>
          <div className="col-xl-6 order-lg-first col-md-6 mb-7">
            <div
              className="about-photo scene text-center text-lg-left"
              id="scene"
              ref={sceneEl}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
