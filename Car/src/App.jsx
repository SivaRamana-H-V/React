import React from 'react';
import './assets/css/responsive.css';
import './assets/css/style.css';
import './assets/css/plugins/animate.min.css';
import './assets/css/plugins/headline.css';
import './assets/css/plugins/magnific-popup.css';
import './assets/css/plugins/meanmenu.css';
import './assets/css/plugins/owl.carousel.min.css';
import './assets/css/vendors/bootstrap.min.css';
import './assets/css/vendors/et-line-icon.css';
import './assets/css/vendors/font-awesome.min.css';
import './assets/css/vendors/ionicons.min.css';
import './assets/css/vendors/jquery-ui.min.css';
import './assets/css/vendors/material-design-iconic-font.min.css';
import './assets/css/vendors/pe-icon-7-stroke.css';
import './assets/css/vendors/themify-icons.css';
// import"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

// javascripy
// import './assets/js/main.js';
// import './assets/js/plugins/jquery.countdown.min.js';
// import './assets/js/plugins/jquery.magnific-popup.min.js';
// import './assets/js/plugins/jquery.meanmenu.js';
// import './assets/js/plugins/jquery.parallax-1.1.3.js';
// import './assets/js/plugins/jquery.scrollUp.mi/n.js';
// import './assets/js/plugins/waypoints.min.js';
// import './assets/js/plugins/wow.min.js';
// import './assets/js/plugins/owl.carousel.min.js';


class HeaderComponent extends React.Component {
  render() {
    return (
      <html className="no-js" lang="zxx">
        <head>
          <meta charset="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Home-One || shiksha Educational Html5 Template</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <header>
            {/* header-top-area-start */}
            <div className="header-top-area gray-bg-1 section-fluid-255">
              <div className="container-fluid">
                <div className="row flex-column flex-md-row justify-content-md-between justify-content-center align-items-center">
                  <div className="col-auto">
                    <div className="header-left-wrapper">
                      <ul className="header-top-text d-flex flex-column flex-md-row justify-content-center">
                        <li>E-mail Address : tutoring@mail.com</li>
                        <li>Contact Number : +003457289</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="header-right-wrapper">
                      <ul className="header-right-text">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
            {/* header-top-area-end */}
            <div className="main-menu-area section-fluid-255">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-auto">
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-auto">
              <div className="main-menu text-center">
                <nav>
                  <ul>
                    <li className="active"><a href="index.html">Home</a>
                      <ul className="sub-menu text-left">
                        <li><a href="index.html">Home 01</a></li>
                        <li><a href="index-2.html">Home 02</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="courses-grid.html">Courses</a></li>
                    <li><a href="event-layout.html">Event</a></li>
                    <li><a href="#">Pages</a>
                      <ul className="sub-menu text-left">
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="courses-list.html">Courses List</a></li>
                        <li><a href="courses-details.html">Courses Details</a></li>
                        <li><a href="event-details.html">Event Details</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                      </ul>
                    </li>
                    <li><a href="blog-grid.html">Blog</a>
                      <ul className="sub-menu text-left">
                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                        <li><a href="blog-details-no-sidebar.html">Blog Details No Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-search">
                <div className="search-wrapper">
                  <a href="javascript:void(0);" className="search-open">
                    <span className="ti-search"></span>
                  </a>
                  <div className="search-inside animated bounceInUp">
                    <i className="icon-close search-close fa fa-times"></i>
                    <div className="search-overlay"></div>
                    <div className="position-center-center">
                      <div className="search">
                        <form>
                          <input type="search" placeholder="Search Here" />
                          <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-button d-none d-xl-inline-block">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-area">
        <div className="slider-active owl-carousel">
          <div className="slider-wrapper pt-215 pb-430 bg-opacity" style={{backgroundImage: "url(https://htmldemo.net/shiksha/shiksha/assets/img/slider/5.jpg)"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="slider-text slider-text-animaion">
                    <h1>Bone Of Nation Education</h1>
                    <div className="slider-info">
                      <p>Lorem ipsum consecteadipisicing elit, Im sed do eiusmo magna aliqua. siconsectetur adipisicing elit, seUt enim ad minim.</p>
                    </div>
                    <a href="courses-grid.html" className="button">Start A Course</a>
                  </div>	
                </div>
              </div>						
            </div>
          </div>
        </div>
      </div>
      <div className="campus-area">
        <div className="container">
          <div className="inner-campus">
            <div className="campus">
              <div className="row">					
                <div className="col-lg-6 col-12 p-0">
                  <div className="campus-video-wrapper ptb-180" style={{backgroundImage: "url(https://htmldemo.net/shiksha/shiksha/assets/img/campus/1.jpg)"}}>
                    <div className="campus-text text-center">
                      <div className="campus-icon">
                        <a className="video-popup" href="https://www.youtube.com/watch?v=5IfKTuUH0HU"><i className="fa fa-play"></i></a>
                      </div>
                      <h4>Take a Video Tour of Our Campus</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 p-0">
                  <div className="tab-wrapper">
                    <div>
                      {/* Nav tabs */}
                      <ul className="campus-tab nav">
                        <li className="nav-item">
                          <button className="nav-link active" data-bs-target="#home" data-bs-toggle="tab">
                            <h4>about us</h4>
                          </button>
                        </li>
                        <li className="nav-item">
                          <button className="nav-link" data-bs-target="#profile" data-bs-toggle="tab">
                            <h4>mission</h4>
                          </button>
                        </li>
                        <li className="nav-item">
                          <button className="nav-link" data-bs-target="#messages" data-bs-toggle="tab">
                            <h4>vision</h4>
                          </button>
                        </li>
                      </ul>
                    </div>					
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="home">
                        <div className="campus-wrapper">
                          <div className="campus-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, naised do eiusmod tempor incididunba t ut laboraliqua. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, naised do eiusmod tempor incididuLorem ipsum dolor siconsectetur adipisicing elit, sed do eiusmod tempor idunt ut labore et dolore magna aliqua. Ut enim ad minim.  </p>
                            <a href="about.html">read more</a>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="profile">
                        <div className="campus-wrapper">
                          <div className="campus-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, naised do eiusmod tempor incididunba t ut laboraliqua. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, naised do eiusmod tempor incididuLorem siconsectetur adipisicing elit, sed do eiusmod tempor idunt ut labore et dolore magna aliqua. Ut enim ad minim.  </p>
                            <a href="about.html">read more</a>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="messages">
                        <div className="campus-wrapper">
                          <div className="campus-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, naised do eiusmod tempor incididunba t ut laboraliqua. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, eiusmod tempor incididuLorem ipsum dolor siconsectetur adipisicing elit, sed do eiusmod tempor idunt ut labore et dolore magna aliqua. Ut enim ad minim.  </p>
                            <a href="#">read more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-area pt-130 pb-100">
        <div className="container">
          <div className="section-title mb-45">
            <h4>our courses</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="courses-wrapper mb-30">
                <div className="courses-img">
                  <a href="courses-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/courses/1.jpg" alt="" />
                    <span>Engineering</span>
                  </a>
                </div>
                <div className="courses-content">
                  <h4><a href="courses-details.html">Aeronautical Engineering</a></h4>
                  <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
                  <a href="courses-details.html">apply now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="courses-wrapper mb-30">
                <div className="courses-img">
                  <a href="courses-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/courses/2.jpg" alt="" />
                    <span>Engineering</span>
                  </a>
                </div>
                <div className="courses-content">
                  <h4><a href="courses-details.html">Complet Guied of Business</a></h4>
                  <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
                  <a href="courses-details.html">apply now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="courses-wrapper mb-30">
                <div className="courses-img">
                  <a href="courses-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/courses/3.jpg" alt="" />
                    <span>Engineering</span>
                  </a>
                </div>
                <div className="courses-content">
                  <h4><a href="courses-details.html">Learning Ui&Ux Design</a></h4>
                  <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
                  <a href="courses-details.html">apply now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 p-0 col-7 col-md">
              <div className="choose-wrapper blue-bg">
                <div className="section-title mb-40 white-text">
                  <h4>why choose us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className="row custom-row">
                  <div className="col-md-6 choose-space">
                    <div className="choose-content-wrapper mb-50 text-center">
                      <div className="choose-categories-img">
                        <img src="https://htmldemo.net/shiksha/shiksha/assets/img/categories/5.png" alt="" />
                      </div>
                      <div className="choose-categories-content">
                        <h5>Technology</h5>
                        <p>Lorem ipsum dolor sit amet, conadipng elit, sed do eiusmod tempor incidilabore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 choose-space">
                    <div className="choose-content-wrapper mb-50 text-center">
                      <div className="choose-categories-img">
                        <img src="https://htmldemo.net/shiksha/shiksha/assets/img/categories/6.png" alt="" />
                      </div>
                      <div className="choose-categories-content">
                        <h5>design</h5>
                        <p>Lorem ipsum dolor sit amet, conadipng elit, sed do eiusmod tempor incidilabore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 choose-space">
                    <div className="choose-content-wrapper mb-50 text-center">
                      <div className="choose-categories-img">
                        <img src="https://htmldemo.net/shiksha/shiksha/assets/img/categories/7.png" alt="" />
                      </div>
                      <div className="choose-categories-content">
                        <h5>music</h5>
                        <p>Lorem ipsum dolor sit amet, conadipng elit, sed do eiusmod tempor incidilabore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 choose-space">
                    <div className="choose-content-wrapper mb-50 text-center">
                      <div className="choose-categories-img">
                        <img src="https://htmldemo.net/shiksha/shiksha/assets/img/categories/8.png" alt="" />
                      </div>
                      <div className="choose-categories-content">
                        <h5>languagfe</h5>
                        <p>Lorem ipsum dolor sit amet, conadipng elit, sed do eiusmod tempor incidilabore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-5 p-0 col-md choose-img ptb-100" style={{backgroundImage: "url(https://htmldemo.net/shiksha/shiksha/assets/img/bg/1.jpg)"}}></div>
          </div>
        </div>
      </div>
      <div className="upcoming-event-area pt-100 pb-100">
        <div className="container">
          <div className="section-title mb-45">
            <h4>upcoming event</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="upcoming-event-wrapper mb-30">
                <div className="upcoming-event-img">
                  <a href="#"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/event/13.jpg" alt="" /></a>
                </div>
                <div className="upcoming-content">
                  <div className="upcoming-info">
                    <h6 className="upcoming-left"><span>16</span>th</h6>
                    <h6 className="upcoming-right">Oct ,2022</h6>
                  </div>
                  <h4><a href="#">Motivational Workshop for Gender discrimination</a></h4>
                  <p>Lorem ipsum dolor sadipisicing elit, seeius moid tempor incididunt ut laboag.</p>
                  <div className="upcoming-event-meta">
                    <span> <i className="ti-timer"></i> 9.00 am - 5.00 pm</span>
                    <span> <i className="ti-location-pin"></i> Bosundhora city</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="upcoming-event-wrapper mb-30">
                <div className="upcoming-event-img">
                  <a href="#"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/event/14.jpg" alt="" /></a>
                </div>
                <div className="upcoming-content">
                  <div className="upcoming-info">
                    <h6 className="upcoming-left"><span>18</span>th</h6>
                    <h6 className="upcoming-right">Oct ,2022</h6>
                  </div>
                  <h4><a href="#">Motivational Workshop for Gender discrimination</a></h4>
                  <p>Lorem ipsum dolor sadipisicing elit, seeius moid tempor incididunt ut laboag.</p>
                  <div className="upcoming-event-meta">
                    <span> <i className="ti-timer"></i> 9.00 am - 5.00 pm</span>
                    <span> <i className="ti-location-pin"></i> Bosundhora city</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="upcoming-event-wrapper mb-30">
                <div className="upcoming-event-img">
                  <a href="#"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/event/15.jpg" alt="" /></a>
                </div>
                <div className="upcoming-content">
                  <div className="upcoming-info">
                    <h6 className="upcoming-left"><span>20</span>th</h6>
                    <h6 className="upcoming-right">Oct ,2022</h6>
                  </div>
                  <h4><a href="#">Motivational Workshop for Gender discrimination</a></h4>
                  <p>Lorem ipsum dolor sadipisicing elit, seeius moid tempor incididunt ut laboag.</p>
                  <div className="upcoming-event-meta">
                    <span> <i className="ti-timer"></i> 9.00 am - 5.00 pm</span>
                    <span> <i className="ti-location-pin"></i> Bosundhora city</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-blog-area pb-100">
        <div className="container">
          <div className="section-title mb-45">
            <h4>news blog</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-blog-wrapper mb-30">
                <div className="news-blog-img">
                  <a href="blog-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/blog/1.jpg" alt="" /></a>
                </div>
                <div className="news-blog-content">
                  <h4><a href="blog-details.html">Support Girl’s Education</a></h4>
                  <div className="news-blog-meta">
                    <span>By : Halen Alone</span>
                    <span>16 th Sep, 2022</span>
                  </div>
                  <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua ad minim.</p>
                  <a href="blog-details.html">read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-blog-wrapper mb-30">
                <div className="news-blog-img">
                  <a href="blog-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/blog/4.jpg" alt="" /></a>
                </div>
                <div className="news-blog-content">
                  <h4><a href="blog-details.html">The Value of Education</a></h4>
                  <div className="news-blog-meta">
                    <span>By : Halen Alone</span>
                    <span>16 th Sep, 2022</span>
                  </div>
                  <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua ad minim.</p>
                  <a href="blog-details.html">read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="news-blog-wrapper mb-30">
                <div className="news-blog-img">
                  <a href="blog-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/blog/3.jpg" alt="" /></a>
                </div>
                <div className="news-blog-content">
                  <h4><a href="blog-details.html">Bone of Nation Education</a></h4>
                  <div className="news-blog-meta">
                    <span>By : Halen Alone</span>
                    <span>16 th Sep, 2022</span>
                  </div>
                  <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua ad minim.</p>
                  <a href="blog-details.html">read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-top-area pt-100 pb-70 bg-opacity-5" style={{backgroundImage: "url(https://htmldemo.net/shiksha/shiksha/assets/img/bg/2.jpg)"}}>
          <div className="container">
            <div className="border-bottom">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="footer-wrapper mb-30">
                    <h2 className="footer-title">About Poralikha</h2>
                    <div className="footer-content">
                      <p>Lorem ipsum dolor sit cnr adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. </p>
                    </div>
                    <ul className="footer-link">
                      <li><i className="zmdi zmdi-pin"></i>California Street san Francisco, CA</li>
                      <li><i className="fa fa-phone"></i>Phone : +660 256 24857 </li>
                      <li><i className="fa fa-envelope"></i>Email : username@email.com,</li>
                    </ul>
                  </div>
                </div>
                <div className="footer-1 col-lg-3 col-md-6 col-12">
                  <div className="footer-wrapper mb-30">
                    <h2 className="footer-title">Useful Link</h2>
                    <ul className="footer-menu">
                      <li><a href="about.html">About tutoring</a></li>
                      <li><a href="index.html">Homepage</a></li>
                      <li><a href="courses-list.html">Class Schedule</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                      <li><a href="courses-list.html">Term & Condition</a></li>
                      <li><a href="courses-list.html">Our mission</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="footer-wrapper mb-30">
                    <h2 className="footer-title">Latest News</h2>
                    <ul className="latest-news">
                      <li>
                        <div className="latest-news-info">
                          <div className="latest-news-img">
                            <a href="blog-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/1.jpg" alt="" /></a>
                          </div>
                          <div className="latest-news-content">
                            <span>16 th Sep, 2022</span>
                            <h5><a href="blog-details.html">Sports Day is near ready soon</a></h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="latest-news-info">
                          <div className="latest-news-img">
                            <a href="blog-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/2.jpg" alt="" /></a>
                          </div>
                          <div className="latest-news-content">
                            <span>16 th Sep, 2022</span>
                            <h5><a href="blog-details.html">Sports Day is near ready soon</a></h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="latest-news-info">
                          <div className="latest-news-img">
                            <a href="blog-details.html"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/4.jpg" alt="" /></a>
                          </div>
                          <div className="latest-news-content">
                            <span>16 th Sep, 2022</span>
                            <h5><a href="blog-details.html">Sports Day is near ready soon</a></h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="footer-wrapper mb-30">
                    <h2 className="footer-title">Instagram Feed</h2>
                    <ul className="insta-img">
                      <li><a href="#/"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/5.jpg" alt="" /></a></li>
                      <li><a href="#/"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/8.jpg" alt="" /></a></li>
                      <li><a href="#/"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/9.jpg" alt="" /></a></li>
                      <li><a href="#/"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/4.jpg" alt="" /></a></li>
                      <li><a href="#/"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/5.jpg" alt="" /></a></li>
                      <li><a href="#/"><img src="https://htmldemo.net/shiksha/shiksha/assets/img/footer/6.jpg" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribes-area pt-50">
              <div className="row justify-content-between align-items-lg-center flex-column flex-lg-row mb-n30">
                <div className="col-md-auto col-lg-6 mb-30">
                  <div className="subscribe-wrapper">
                    <div className="row align-items-sm-center flex-column flex-sm-row">
                      <div className="col-auto">
                        <div className="subscribe-title">
                          <h5>Contact With Us :</h5>
                        </div>
                      </div>
                      <div className="col">
                        <div className="social-icon">
                          <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                          <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                          <a href="https://www.pinterest.com"><i className="fa fa-pinterest-p"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-lg-6 mb-30">
                  <div className="subscribe-wrapper">
                    <div className="row align-items-sm-center flex-column flex-sm-row">
                      <div className="col-auto">
                        <div className="subscribe-title">
                          <h5>Subscribe Now :</h5>
                        </div>
                      </div>
                      <div className="col col-lg">
                        <div className="subscribe-form">
                          <input type="email" className="email" placeholder="Enter Your Email" required />
                          <button className="subscriber-btn">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area bg-opacity-8 ptb-25" style={{backgroundImage: "url(https://htmldemo.net/shiksha/shiksha/assets/img/bg/18.jpg)"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="copyright">
                  <p><i className="fa fa-copyright"></i>Copyright, 2021 <a href="https://hasthemes.com/">HasThemes</a></p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <ul className="footers-link floatright">
                  <li><a href="#">Home</a></li>
                  <li><a href="#"> FAQ</a></li>
                  <li><a href="#"> Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </body>
      </html>
    );
  }
}

export default HeaderComponent;
