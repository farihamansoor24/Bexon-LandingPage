import React, { useState, useEffect,useRef } from "react";
// import Swiper core and required modules
import { FaArrowRight, FaAward } from "react-icons/fa6";
import { CiCirclePlus,CiCircleMinus  } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "animate.css";
import { IoCubeSharp } from "react-icons/io5";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import  './App.css'
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
// Data for Header Mobile Menu & Navigation Demos
const demoItems = [
  {
    id: 1,
    name: "Homepage - 01",
    img: "/home-1.webp",
    link: "https://themejunction.net/html/bexon/demo/",
  },
  {
    id: 2,
    name: "Homepage - 02",
    img: "/home-2.webp",
    link: "https://themejunction.net/html/bexon/demo/index-2.html",
  },
  {
    id: 3,
    name: "Homepage - 03",
    img: "/home-3.webp",
    link: "https://themejunction.net/html/bexon/demo/index-3.html",
  },
  {
    id: 4,
    name: "Homepage - 04",
    img: "/home-4.webp",
    link: "https://themejunction.net/html/bexon/demo/index-4.html",
  },
  {
    id: 5,
    name: "Homepage - 05",
    img: "/home-5.webp",
    link: "https://themejunction.net/html/bexon/demo/index-5.html",
  },
  {
    id: 6,
    name: "Homepage - 06",
    img: "/comming-soon.webp",
    link: "#",
  },
 
];

const marqueeItems = [
  "Founders and Vision",
  "Growth and Impact",
  "Team and Values",
  "Innovation and Future",
  "Success and Impact",
];

export default function BexonLanding() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Preloader handler
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


const heroRef = useRef(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    // 1. Wait for fonts to load to ensure correct letter metrics/bounding boxes
    document.fonts.ready.then(() => {
      // 2. Wrap initialization in requestAnimationFrame for reliable DOM rendering in Vite
      requestAnimationFrame(() => {
        
        // 3. Hero section text animation (Yeh sirf hero title ke liye chalega)
        const splitHero = new SplitText(heroRef.current, {
          type: "chars, words",
        });

        gsap.from(splitHero.chars, {
          x: -10,
          autoAlpha: 0,
          duration: 2,
          stagger: 0.1,
          delay: 1,
        });

        // 4. Sabhi .text-anim elements ke liye loop (Jo bhi aapke component mein hain)
        const textAnimElements = gsap.utils.toArray(".text-anim");

        textAnimElements.forEach((el) => {
          const splitTextInstance = new SplitText(el, {
            type: "chars, words",
          });

          gsap.from(splitTextInstance.chars, {
            x: -10,
            autoAlpha: 0,
            stagger: 0.05,
            scrollTrigger: {
              trigger: el, 
              start: "top 80%",    
              toggleActions: "play none play reverse", 
            },
          });
        });

      });
    });

  }, []);
const faqData = [
  {
    id: "1",
    num: "01.",
    question: "What is included with my purchase?",
    answer: (
      <ul>
        <li>A copy of the WordPress theme</li>
        <li>Access to import any of the demos included in the theme</li>
        <li>6 months free of professional support (can be extended after)</li>
        <li>All future updates are free, including all new features, templates, and fixes!</li>
      </ul>
    ),
    expanded: false,
    delay: "0.1s"
  },
  {
    id: "2",
    num: "02.",
    question: "Are there any recurring fees?",
    answer: (
      <p>
        No. This one-time purchase offers you lifetime updates at no extra cost. You can choose to purchase a support extension after the initial six months of support has expired – however, this is entirely optional. There are no recurring fees to continue using our themes.
      </p>
    ),
    expanded: true,
    delay: "0.3s"
  },
  {
    id: "3",
    num: "03.",
    question: "Do I need any premium plugin?",
    answer: (
      <p>No, you don't need any premium plugin or PRO version of Elementor.</p>
    ),
    expanded: false,
    delay: "0.3s"
  },
  {
    id: "4",
    num: "04.",
    question: "What kind of support do you offer?",
    answer: (
      <p>
        We’re offering premium support through:{' '}
        <a href="https://support.themejunction.net/" target="_blank" rel="noreferrer">
          https://support.themejunction.net/
        </a>
      </p>
    ),
    expanded: false,
    delay: "0.3s"
  },
  {
    id: "5",
    num: "05.",
    question: "Do you provide customization?",
    answer: (
      <p>
        Yes, we do provide PAID customization service. We can design/ develop your site based on the designs provided with Solvior. We’re also open to provide you a completely unique design for your site.
      </p>
    ),
    expanded: false,
    delay: "0.3s"
  },
  {
    id: "6",
    num: "06.",
    question: "Is this RTL theme?",
    answer: (
      <p>No this is not a RTL theme.</p>
    ),
    expanded: false,
    delay: "0.3s"
  },
  {
    id: "7",
    num: "07.",
    question: "Can I translate Solvior?",
    answer: (
      <p>Yes, Solvior is a fully translatable theme, so you can use polylang or wpml to translate the theme.</p>
    ),
    expanded: false,
    delay: "0.3s"
  },
  {
    id: "8",
    num: "08.",
    question: "Why should I trust Theme Junction?",
    answer: (
      <p>
        We’re a passionate team of experienced developers who greatly care about our products. Since our launch in 2020, we’ve seen consistent evolution and incredible customer feedback. People keep coming back to use our themes for more projects because of the quality we bring and the results they can achieve.
      </p>
    ),
    expanded: false,
    delay: "0.3s"
  }
];
  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="tj-preloader is-loading">
          <div className="tj-preloader-inner">
            <div className="tj-preloader-ball-wrap">
              <div className="tj-preloader-ball-inner-wrap">
                <div className="tj-preloader-ball-inner">
                  <div className="tj-preloader-ball"></div>
                </div>
                <div className="tj-preloader-ball-shadow"></div>
              </div>
              <div id="tj-weave-anim" className="tj-preloader-text">
                Loading...
              </div>
            </div>
          </div>
          <div className="tj-preloader-overlay"></div>
        </div>
      )}

      {/* Back to Top */}
      <div
        id="tj-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span id="tj-back-to-top-percentage"></span>
      </div>

      {/* Header Area (Main) */}
      <header className="tj-header-area header-absolute">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <div className="tj-header-wrapper">
                <div className="tj-header-logo">
                  <a href="index.html">
                    <img src="/logo.webp" alt="logo" />
                  </a>
                </div>

                {/* Desktop Navigation */}
                <div className="tj-header-menu d-none d-lg-block">
                  <ul>
                    <li className="menu-item">
                      <button
                        className="tj-scroll-btn"
                        onClick={() => scrollToSection("#demos")}
                      >
                        Demos
                      </button>
                    </li>
                    <li className="menu-item">
                      <button
                        className="tj-scroll-btn"
                        onClick={() => scrollToSection("#inner-pages")}
                      >
                        Inner Pages
                      </button>
                    </li>
                    <li className="menu-item">
                      <button
                        className="tj-scroll-btn"
                        onClick={() => scrollToSection("#feature")}
                      >
                        Features
                      </button>
                    </li>
                    <li className="menu-item">
                      <button
                        className="tj-scroll-btn"
                        onClick={() => scrollToSection("#testimonial")}
                      >
                        Testimonials
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                  <div className="tj-header-menu d-lg-none" id="headerMenu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="https://themejunction.net/html/bexon/">Home</a>
                        <ul className="sub-menu">
                          {demoItems.map((demo) => (
                            <li
                              key={demo.id}
                              className={
                                demo.id === 1 ? "current-menu-item" : ""
                              }
                            >
                              <a href={demo.link}>{demo.name}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="https://themejunction.net/html/bexon/demo/service.html">
                          Services
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/service.html">
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/service-details.html">
                              Service details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="#!">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/about.html">
                              About us
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/team.html">
                              Team
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/team-details.html">
                              Team details
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/pricing.html">
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/faq.html">
                              Faq
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="https://themejunction.net/html/bexon/demo/portfolio.html">
                          Portfolio
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/portfolio.html">
                              Portfolio
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/portfolio-details">
                              Portfolio details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="https://themejunction.net/html/bexon/blog/">
                          Blog
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/blog.html">
                              Blog standard
                            </a>
                          </li>
                          <li>
                            <a href="https://themejunction.net/html/bexon/demo/blog-details.html">
                              Blog details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://themejunction.net/html/bexon/demo/contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="mobile-menu d-lg-none"></div>

                <div className="tj-header-button icon_main d-none d-sm-inline-flex">
                  <a
                    href="https://themeforest.net/item/bexon-corporate-business-html-template/58004483"
                    className="tj-btn sm-btn tj-btn-purchase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="btn_inner">
                      <span className="btn_text">
                        <span>Buy now on</span>
                      </span>
                      <span className="btn_img">
                        <img src="/envato_logo.png" alt="Envato Logo" />
                      </span>
                    </span>
                  </a>
                </div>

                <div
                  className="menu_bar d-lg-none d-inline-flex hamburgerBtn"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa fa-times"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Duplicate / Sticky Header */}
      <header
        className={`tj-header-area header-duplicate header-sticky ${isSticky ? "sticky" : "sticky-out"}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <div className="tj-header-wrapper">
                <div className="tj-header-logo">
                  <a href="index.html">
                    <img src="/logo.webp" alt="logo" />
                  </a>
                </div>
                <div className="tj-header-menu d-none d-lg-block">
                  <nav>
                    <ul>
                      <li className="menu-item">
                        <button
                          className="tj-scroll-btn"
                          onClick={() => scrollToSection("#demos")}
                        >
                          Demos
                        </button>
                      </li>
                      <li className="menu-item">
                        <button
                          className="tj-scroll-btn"
                          onClick={() => scrollToSection("#inner-pages")}
                        >
                          Inner Pages
                        </button>
                      </li>
                      <li className="menu-item">
                        <button
                          className="tj-scroll-btn"
                          onClick={() => scrollToSection("#feature")}
                        >
                          Features
                        </button>
                      </li>
                      <li className="menu-item">
                        <button
                          className="tj-scroll-btn"
                          onClick={() => scrollToSection("#testimonial")}
                        >
                          Testimonials
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="mobile-menu d-lg-none"></div>
                <div className="tj-header-button icon_main d-none d-sm-inline-flex">
                  <a
                    href="https://themeforest.net/item/bexon-corporate-business-html-template/58004483"
                    className="tj-btn sm-btn tj-btn-purchase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="btn_inner">
                      <span className="btn_text">
                        <span>Buy now on</span>
                      </span>
                      <span className="btn_img">
                        <img src="/envato_logo.png" alt="Envato Logo" />
                      </span>
                    </span>
                  </a>
                </div>
                <div
                  className="menu_bar d-lg-none d-inline-flex hamburgerBtn"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa fa-times"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15"></div>

            {/* Hero Section */}
            <section className="tj-hero-area">
              <div className="tj-hero-demo">
                <div className="tj-hero-demo-img  animate__animated animate__fadeInLeft animate__delay-1s">
                  <img src="/hero-domo-1.webp" alt="Hero Demo 1" />
                </div>
                <div className="tj-hero-demo-img  animate__animated animate__fadeInRight animate__delay-1s">
                  <img src="./hero-domo-2.webp" alt="Hero Demo 2" />
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="tj-hero-top-wrapper text-center">
                      <div className="hero-title">
                        <span className="tj-section-subtitle animate__animated animate__fadeInDown animate__delay-2s">
                          <FaAward className="icons" /> Recognized for
                          Excellence
                        </span>
                        <h1 ref={heroRef} className="title hero-text-anim">
                          Prestige Corporate Business HTML Template
                        </h1>
                        <button
                          className="tj-btn tj-scroll-btn  animate__animated animate_fadeInUp animate__delay-5s"
                          onClick={() => scrollToSection("#demos")}
                        >
                          <span className="btn-text">
                            <span>Explore Demos</span>
                          </span>
                          <span className="btn-icon">
                            {/* <i className="tji-arrow-right-long"></i> */}
                            <FaArrowRight className="icons" />
                          </span>
                        </button>
                      </div>

                      <div className="tj-hero-service animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="services_wrap">
                          <div className="tj-service-wrapper">
                            <div className="tj-service-icon">
                              <span>
                                <img
                                  src="/icons/service-icon1.svg"
                                  alt="Fast load performance"
                                />
                              </span>
                            </div>
                            <div className="tj-service-content">
                              <h6 className="tj-service-title">
                                Fast load performance
                              </h6>
                            </div>
                          </div>

                          <div className="tj-service-wrapper active  animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="tj-service-icon">
                              <span>
                                <img
                                  src="/icons/service-icon2.svg"
                                  alt="Fresh & clean design"
                                />
                              </span>
                            </div>
                            <div className="tj-service-content">
                              <h6 className="tj-service-title">
                                Fresh & clean design
                              </h6>
                            </div>
                          </div>

                          <div className="tj-service-wrapper  animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="tj-service-icon">
                              <span>
                                <img
                                  src="/icons/service-icon3.svg"
                                  alt="Quick & friendly support"
                                />
                              </span>
                            </div>
                            <div className="tj-service-content">
                              <h6 className="tj-service-title">
                                Quick & friendly support
                              </h6>
                            </div>
                          </div>

                          <div
                            className="tj-service-wrapper  animate__animated animate__fadeInUp animate__delay-2s"
                            
                          >
                            <div className="tj-service-icon">
                              <span>
                                <img
                                  src="/icons/service-icon4.svg"
                                  alt="RTL Support"
                                />
                              </span>
                            </div>
                            <div className="tj-service-content">
                              <h6 className="tj-service-title">
                                RTL Language Support
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Marquee Area */}
            <section className="h5-maquee z-2">
              <div className="h5-maquee-inner">
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  speed={5000}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  slidesPerView="3"
                  centeredSlides={true}
                  allowTouchMove={false} // User drag na kar sake, ticker ki tarah chale
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="h5-maquee-slider h5-maquee-slider-wrapper"
                >
                  {marqueeItems
                    .concat(marqueeItems, marqueeItems)
                    .map((title, index) => (
                      <SwiperSlide
                        key={index}
                        className="h5-maquee-slider-item"
                      >
                        <div className="marquee-box">
                          <div className="marquee-icon-wrapper">
                            <div className="marquee-icon">
                              {/* <i className="tji-box"></i> */}
                              <IoCubeSharp />
                            </div>
                          </div>
                          <div className="marquee-title">
                            <h4 className="title">{title}</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </section>

            {/* Demo Area */}
            <section className="tj-demo-area" id="demos">
              <div className="container-fluid gap-30-30">
                <div className="row">
                  <div className="col">
                    <div className="tj-section-wrapper tj-section-wrapper-centered text-center">
                      <span
                        className="tj-section-subtitle  animate__animated animate__fadeInRight animate__delay-3s"
                        
                      >
                        <IoCubeSharp className='icons' /> Pre-Built Homepages
                      </span>
                      <h2 className="tj-section-title text-anim">
                        Explore{" "}
                        <span
                          className="tj-section-title-badge  animate__animated animate__zoomIn animate__delay-7s"
                        >
                          11+
                        </span>{" "}
                        ready-to-use websites for Corporate Business
                      </h2>
                      <p
                        className="tj-section-desc animate__animated animate__fadeInUp animate__delay-1s"
                      >
                        Experience a clean, modern design built for business
                        success. Intuitive navigation ensures every decision is
                        effortless.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="tj-demo-wrapper">
                      <div className="row">
                        {demoItems.map((demo) => (
                          <div key={demo.id} className="col-xl-4 col-lg-6">
                            <div
                              className="tj-demo-thumb animate__animated animate__fadeInUp animate__delay-.5s"
                            >
                              <div className="image">
                                <img src={demo.img} alt={demo.name} />
                                {demo.isNew && (
                                  <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                    New
                                  </h6>
                                )}
                                <div className="tj-demo-button">
                                  <a
                                    className="tj-btn tj-btn-white"
                                    href={demo.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <span className="btn-text">
                                      <span>Explore Demo</span>
                                    </span>
                                    <span className="btn-icon">
                                      <FaArrowRight className="icons" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <a
                                  href={demo.link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {demo.name}
                                </a>
                              </h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



      {/* start: Project Area */}
      <section className="tj-project-area" id="inner-pages">
        <div className="tj-project-area-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <div className="tj-section-wrapper tj-section-wrapper-centered text-center">
                  <span className="tj-section-subtitle animate__animated animate__fadeInLeft animate__delay-.5s">
                    <IoCubeSharp className="icons" /> Pre-Built INNERPAGES
                  </span>
                  <h2 className="tj-section-title text-anim">
                    Build faster with{' '}
                    <span className="tj-section-title-badge  animate__animated animate__zoomIn animate__delay-7s">
                      27+
                    </span>{' '}
                    Pre-Made inner page layouts
                  </h2>
                  <p className="tj-section-desc animate__animated animate__fadeInUp animate__delay-.5s">
                    Build faster using 25+ pre-made inner page layouts, saving time and effort while ensuring a consistent, professional website design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tj-project-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="tj-project-slider-box">
                  <div className="tj-project-active swiper-container mb-30 animate__animated animate__fadeInUp">
                    
                     <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  speed={5000}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  slidesPerView="3"
                  centeredSlides={true}
                  allowTouchMove={false} // User drag na kar sake, ticker ki tarah chale
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="h5-maquee-slider h5-maquee-slider-wrapper"
                >
                   {[1,2,3,4,5,6,7].map((num, idx) => (
                        <SwiperSlide key={`slide-ltr-${idx}`}>
                          <div className="tj-project-thumb">
                            <img src={`/inner-pages/inner-${num}.webp`} alt={`Inner Page ${num}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                </Swiper>
                    
                  </div>
                  <div dir="rtl" className="tj-project-active swiper-container animate__animated animate__fadeInUp animate__delay-.5s">
                   

                    <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  speed={5000}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  slidesPerView="3"
                  centeredSlides={true}
                  allowTouchMove={false} // User drag na kar sake, ticker ki tarah chale
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="h5-maquee-slider h5-maquee-slider-wrapper"
                >
                   {[8, 9, 10, 11, 12, 13, 14].map((num, idx) => (
                        <SwiperSlide key={`slide-rtl-${idx}`}>
                          <div className="tj-project-thumb">
                            <img src={`/inner-pages/inner-${num}.webp`} alt={`Inner Page ${num}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Project Area */}

      {/* start: Feature Area */}
      <section className="tj-feature-area section-gap-x" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col">
                <div className="tj-section-wrapper">
                  <div className="tj-section-heading-left">
                    <span className="tj-section-subtitle animate__animated animate__fadeInLeft animate__delay-.5s">
                      <IoCubeSharp className="icons" /> KEY FEATURES
                    </span>
                    <h2 className="tj-section-title text-anim">
                      Packed with powerful features for seamless website building
                    </h2>
                  </div>
                  <div className="tj-section-heading-right">
                    <p className="tj-section-desc animate__animated animate__fadeInUp animate__delay-.5s">
                      Build stunning, responsive websites effortlessly with powerful features designed for speed, flexibility, and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="features_wrap">
                {[
                  { title: 'Friendly support', desc: 'Our goal is customer satisfaction. For any query, contact Theme Junction', delay: '.1s', icon: 'feature-icon1.svg' },
                  { title: 'Lifetime updates', desc: 'You will get lifetime updates to the theme. Updates may include various.', delay: '.2s', icon: 'feature-icon2.svg' },
                  { title: 'Colors board', desc: 'Feel free to rearrange entire color palette, whether static or gradient colors.', delay: '.3s', icon: 'feature-icon3.svg' },
                  { title: 'Template customize', desc: 'Our template provides the flexibility to customize various elements with ease.', delay: '.4s', icon: 'feature-icon4.svg' },
                  { title: 'SEO friendly', desc: 'Get more visitors making your website content fully visible to search engines.', delay: '.5s', icon: 'feature-icon5.svg' },
                  { title: 'Font management', desc: 'You customize the font style with Google Webfont, Typekit, Dafont, Myfont.', delay: '.6s', icon: 'feature-icon6.svg' },
                  { title: 'Browsers support', desc: 'Template support major browsers and will behave identically on Google Chrome.', delay: '.7s', icon: 'feature-icon7.svg' },
                  { title: 'Fast performance', desc: 'Theme Junction is using the best coding practices and top quality code ensure.', delay: '.8s', icon: 'feature-icon8.svg' }
                ].map((item, idx) => (
                  <div className="tj-service-wrapper tj-feature-wrapperanimate__animated animate__fadeInUp animate__delay-.5s" data-wow-delay={item.delay} key={idx}>
                    <div className="tj-feature-icon">
                      <span><img src={`/icons/${item.icon}`} alt={item.title} /></span>
                    </div>
                    <div className="tj-service-content">
                      <h4 className="tj-service-title">{item.title}</h4>
                      <div className="tj-service-desc">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Feature Area */}

  

      {/* start: Testimonial Area */}
      <section className="tj-testimonial-section section-gap-x" id="testimonial">
        <div className="container gap-0-30">
          <div className="row">
            <div className="col-12">
              <div className="tj-section-wrapper tj-section-wrapper-centered tj-section-wrapper-centered-sm text-center">
                <h6 className="tj-section-subtitle animate__animated animate__fadeInUp animate__delay-.5s">
                  <IoCubeSharp className="icons" /> Client feedback
                </h6>
                <h2 className="tj-section-title text-anim">
                  Client testimonials that speak for themselves
                </h2>
              </div>
            </div>
          </div>
          <div className="testimonial_wrap">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-.5s">
                  <div className="testimonial-rating">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{ width: '100%' }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      "Taylor is a <b>professional designer</b> really helps my business by providing value to my business . Taylor is a professional Designer he helps"
                    </p>
                  </div>
                  <div className="testimonial-auother">
                    <div className="author-images">
                      <img src="/icons/test-auother.svg" alt="Author Marvin McKinney" />
                    </div>
                    <div className="auother-name">
                      <h6 className="title">Marvin McKinney</h6>
                      <p className="desig">Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-.5s">
                  <div className="testimonial-rating">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{ width: '100%' }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      "Their willingness to reach out and resolve the issues I had originally was exceptional <b>really helps my business</b> by providing value to my business "
                    </p>
                  </div>
                  <div className="testimonial-auother">
                    <div className="author-images">
                      <img src="/icons/test-auother.svg" alt="Author Flawlessmedianl" />
                    </div>
                    <div className="auother-name">
                      <h6 className="title">Flawlessmedianl</h6>
                      <p className="desig">Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-.5s">
                  <div className="testimonial-rating">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{ width: '100%' }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      "I recently bought the theme, and it's The design and resolve the issues I had originally functionality design is top-notch. <b>Highly recommend.</b>"
                    </p>
                  </div>
                  <div className="testimonial-auother">
                    <div className="author-images">
                      <img src="/icons/test-auother.svg" alt="Author Developeromar01" />
                    </div>
                    <div className="auother-name">
                      <h6 className="title">Developeromar01</h6>
                      <p className="desig">Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-1s">
                  <div className="testimonial-rating">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{ width: '100%' }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      "<b>Very good support</b>. They help me the settings. Taylor is a professional Designer Overall a very good template and quality support."
                    </p>
                  </div>
                  <div className="testimonial-auother">
                    <div className="author-images">
                      <img src="/icons/test-auother.svg" alt="Author Kniiakweiaddo1" />
                    </div>
                    <div className="auother-name">
                      <h6 className="title">Kniiakweiaddo1</h6>
                      <p className="desig">Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-item animate__animated animate__fadeInUp animate__delay-1s">
                  <div className="testimonial-rating">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{ width: '100%' }}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="desc">
                   <p>"<b>Awesome customer </b>highly recommended Designer really helps
                        providing value
                        to my
                        business. Taylor a professional Designer he really helps"</p>
                  </div>
                  <div className="testimonial-auother">
                    <div className="author-images">
                      <img src="/icons/test-auother.svg" alt="Author Customer" />
                    </div>
                    <div className="auother-name">
                      <h6 className="title">Satisfied Client</h6>
                      <p className="desig">Customer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                  <div className="testimonial-item wow fadeInUp" data-wow-delay=".5s">
                    <div className="testimonial-rating">
                      <div className="star-ratings">
                        <div className="fill-ratings" style={{ width: '100%' }}>
                          <span>★★★★★</span>
                        </div>
                        <div className="empty-ratings">
                          <span>★★★★★</span>
                        </div>
                      </div>
                    </div>
                    <div className="desc">
                      <p>"<b>Great quality</b>, even better support team. Highly illingness to
                        reach out
                        and
                        resolve the support issues I had originally was recommend!"</p>
                    </div>
                    <div className="testimonial-auother">
                      <div className="author-images">
                        <img src="/icons/test-auother.svg" alt="" />
                      </div>
                      <div className="auother-name">
                        <h6 className="title">Aartirawat7</h6>
                        <p className="desig">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Testimonial Area */}
      {/* start: FAQ Area */}
      <section className="tj-faq-area" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-section-wrapper tj-section-wrapper-centered tj-section-wrapper-centered-2 text-center">
                <h6 className="tj-section-subtitle animate__animated animate__fadeInUp animate__delay-.5s">
                  <i className="tji-box"></i> COMMON QUESTIONS
                </h6>
                <h2 className="tj-section-title text-anim">
                  Quick solutions to Frequently asked questions
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="tj-faq">
              <div className="accordion tj-faq-style h7-faq-style" id="accordionExample">
                {faqData.map((item) => {
                  const targetId = `collapseOne-${item.id}`;
                  return (
                    <div className="accordion-item animate__animated animate__fadeInUp" data-wow-delay={item.delay} key={item.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${!item.expanded ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${targetId}`}
                          aria-expanded={item.expanded ? "true" : "false"}
                          aria-controls={targetId}
                        >
                          <span>{item.num}</span> {item.question}
                        </button>
                      </h2>
                      <div
                        id={targetId}
                        className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: FAQ Area */}


      </main>
            {/* start: Footer & CTA Section */}
      <footer className="tj-footer-section section-gap-x">
        {/* start: Cta Area */}
        <div className="tj-cta-section style-2">
          <div className="tj-footer-img-wrapper">
            <img src="/footer/footer-left.webp" alt="Footer Decoration Left" className="tj-footer-img animate__animated animate__fadeInUp animate__delay-.5s" />
            <img src="/footer/footer-right.webp" alt="Footer Decoration Right" className="tj-footer-img animate__animated animate__fadeInUp animate__delay-1s" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-wrapper text-center">
                  <div className="cta-content text-center">
                    <span className="tj-section-subtitle animate__animated animate__fadeInUp animate__delay-.5s">
                      <IoCubeSharp className="tji-box icons" /> YOUR NEXT CORPORATE BUSINESS THEME
                    </span>
                    <h2 className="title text-anim">
                      Life-time license, free updates and{' '}
                      <span className="title-badge wow animate__animated animate__zoomIn animate__delay-1.5s">
                        6
                      </span>{' '}
                      months of free support.
                    </h2>
                  </div>
                  <div className="cta-button animate__animated animate__fadeInUp animate__delay-.5s">
                    <a
                      href="https://themeforest.net/item/bexon-corporate-business-html-template/58004483"
                      className="tj-btn sm-btn tj-btn-purchase tj-btn-purchase-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="btn_inner">
                        <span className="btn_text">
                          <span>Buy now on</span>
                        </span>
                        <span className="btn_img">
                          <img src="/envato_logo.png" alt="Envato Logo" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end: Cta Area */}

        <div className="tj-footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright text-center">
                  <p>
                    &copy; All rights reserved by{' '}
                    <a href="#" >
                     Fareeha Mansoor
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end: Footer & CTA Section */}
        </div>
      </div>
    </>
  );
}
