import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutContainer from "../containers/about";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
//import Footer from "../layouts/footer";
//import Header from "../layouts/header";
//import Layout from "../layouts/index";

const AboutPage = () => {
  return (
    <div>
      <SEO title="Fudgy Labs - About" />
      <div className="wrapper" style={{alignSelf: "start"}}>
        {/* <Header /> */}
        <PageBanner
          title="About us"
          excerpt="“ Engineering solves problems people never new they had in ways they couldn't possibly understand ”
          <br/>
          - Charles Taylor"
          image="./images/banner/1.png"
        />
        {/* <IconBoxContainer classOption="section-pt" /> */}
        {/* <BrandContainer /> */}
        <AboutContainer />
        {/* <ServiceListContainer /> */}
        {/* <TestimonialReverse /> */}
        {/* <FunFactContainer classOption="mt-0 mt-lg-0" /> */}
        {/* <NewsletterArea /> */}
        {/* <Footer /> */}
        <ScrollToTop />
      </div>
    </div>
  );
};

export default AboutPage;
