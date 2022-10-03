import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/logo'
import SocialIcon from '../components/social-icon'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top position-relative">
        <img
          className="footer-shape"
          src={'/images/footer/1.png'}
          alt="shape"
        />
        <div className="container">
          <div className="row mb-n7">
            <div className="col-lg-3 col-sm-6 mb-7">
              <div className="footer-widget">
                <Logo
                  classOption="footer-logo mb-9"
                  image={`/images/logo/logo-footer.svg`}
                />
                <p>
                  Pleasure rationally encounter consequences that extremely
                  painful. Nor again is there
                </p>
                <ul className="footer-social-links">
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://www.facebook.com/"
                      icon="icofont-facebook"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://www.instagram.com/"
                      icon="icofont-instagram"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://twitter.com/"
                      icon="icofont-twitter"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      classOption="footer-social-link"
                      path="https://www.whatsapp.com/"
                      icon="icofont-whatsapp"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
              <div className="footer-widget">
                <h4 className="title">Quick Link</h4>
                <ul className="footer-menu">
                  <li>
                    <Link className="footer-link" to={'/about'}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to={'/service'}>
                      Pricing Plan
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="footer-link" to={'/blog'}>
                      Blog Post
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="footer-link" to={'/team'}>
                      Our Clients
                    </Link>
                  </li> */}
                  <li>
                    <Link className="footer-link" to={'/contact'}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Services</h4>
                <ul className="footer-menu">
                  <li>
                    <Link className="footer-link" to={`/service-details/2`}>
                      Tokenomics
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to={`/service-details/3`}>
                      Web3 Business Plans
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to={`/service-details/1`}>
                      Full-Stack Devlopment
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to={`/service-details/1`}>
                      Audits
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to={`/service-details/1`}>
                      Protocol Devlopment
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to={`/service-details/1`}>
                      SEO & Socials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Contact info</h4>
                <p>PO Box 281, El Segundo, CA 90245, USA</p>
                <ul className="address">
                  <li>
                    <a className="address-link" href="tel:+13233622236">
                      +1 (323) 362-2236
                    </a>
                  </li>
                  <li>
                    <a
                      className="address-link"
                      href="mailto:info@fudgylabs.com"
                    >
                      info@fudgylabs.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="address-link"
                      href="mailto:abel.canza@fudgylabs.com"
                    >
                      abel.canza@fudgylabs.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-info text-center">
                <p>Copyright &copy; 2022 Fudgy Labs Ltd, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
