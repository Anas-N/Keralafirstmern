import React from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <main className="container mt-5">
        <section className="position-relative">
          <div className="container position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 position-relative">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-md bg-body rounded-circle shadow fs-5 text-warning">
                    <i className="fa-solid fa-lightbulb rounded-circle"></i>
                  </div>
                  <span className="h6 ms-3 mb-0">
                    <strong>
                      Nurturing Knowledge &amp; Cultivating Excellence
                    </strong>
                  </span>
                </div>

                <h1 id="cvb">
                  Kerala's Pioneering
                  <span> Tuition Center</span>
                </h1>

                <p className="mb-4 lead clod fs-5">
                  Unlocking the door to academic excellence, one lesson at
                  NavLink time.
                </p>

                <div className="ms-3">
                  <img
                    className="klj avatar avatar-group"
                    src="avatar1.webp"
                    alt="avatar1"
                  />
                  <img
                    className="klj avatar avarar-group"
                    src="avatar2.webp"
                    alt="avatar2"
                  />
                  <img
                    className="klj avatar avarar-group"
                    src="avatar3.webp"
                    alt="avatar3"
                  />

                  <img
                    className="klj avatar avarar-group"
                    src="avatar4.webp"
                    alt="avatar4"
                  />
                  <span className="ms-3 fw-bold">
                    Trusted by over 65K Students Since 2022
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <img className="dddd" src="08.webp" alt="dd" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section className="container mt-5">
          <div className="row">
            <div className="col-md-3 mt-5">
              <br />
              <br />
              <br />
              <br />
              <div>
                <img src="05.webp" alt="kk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h1 id="cvb2">
                  The Premier Tuition Center For Science & Maths
                </h1>
                <br />
                <p className="clod">
                  The best cost-efficient choice for parents looking for
                  high-quality education, Dedicated Timetabled Lessons Offered
                  with qualified Staff.
                </p>
              </div>
              <br />

              <div className="row text-center">
                <div className="col-md-4">
                  <i className="dfg icon-lg bd-body shadow rounded-circle fas fa-user-graduate fa-fw"></i>
                  &nbsp;&nbsp;&nbsp;<span className="vbn">1K</span> <br />
                  <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-7 mx-0">
                      <div className="clod">Total Students</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <i className="dfg2 icon-lg bd-body shadow rounded-circle fas fa-chalkboard-teacher fa-fw"></i>
                  &nbsp;&nbsp;&nbsp;<span className="vbn">105</span> <br />
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8 mx-0">
                      <div className="clod">Total Instroctors</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <i className="dfg3 icon-lg bd-body shadow rounded-circle fas fa-chalkboard-teacher fa-fw"></i>
                  &nbsp;&nbsp;&nbsp;<span className="vbn">2K+</span> <br />
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8 mx-0">
                      <div className="clod">Total Activities</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5 text-center">
                <div className="col-md-6">
                  <NavLink
                    to="/Register"
                    className="btn btn-lg btn-primary mb-3 mb-sm-0"
                  >
                    Book now
                  </NavLink>
                </div>
                <div className="col-md-6">
                  <div className="col-md-10">
                    <div className="d-flex justify-content-center align-items-center text-start">
                      <h2 className="fw-bold me-2 mb-0">4.5</h2>
                      <div>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                        <p className="mb-0 clod">Students Love Us!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            <div className="col-md-3 mx-0">
              <div className="mt-5">
                <img className="werr" src="04.webp" alt="jj" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <h1 id="cvb3">
                Find Out Why,
                <span style={{ color: "rgb(12, 188, 135)" }}> Kerala</span>
                First.
              </h1>
              <img className="bnm image-responsive" src="03.webp" alt="ss" />
            </div>

            <div className="col-md-4">
              <i
                className="fas fa-user-tie fs-1"
                style={{ color: "orangered" }}
              ></i>
              <br />
              <div className="row mt-2">
                <h3 id="gjj">Personalized Tutoring</h3>
              </div>
              <div className="row mt-1">
                <div className="col-md-12">
                  <p className="clod">
                    Our experienced tutors offer one-on-one or small group
                    sessions to provide personalized support and address
                    individual learning needs
                  </p>
                </div>

                <div className="row mt-5">
                  <i
                    className="fas fa-clock fs-1"
                    style={{ color: "rgb(12, 188, 135)" }}
                  ></i>
                  <br />
                  <div className="row mt-2">
                    <h3 id="gjj">Exam Preparation</h3>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12">
                      <p className="clod">
                        Whether it's standardized tests, school exams, or
                        college entrance exams, we offer specialized courses to
                        help students excel and achieve their academic goals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <i
                className="fas fa-book fs-1"
                style={{ color: "rgb(23, 162, 184)" }}
              ></i>
              <br />
              <div className="row mt-2">
                <h3 id="gjj">Subject Expertise</h3>
              </div>
              <div className="row mt-1">
                <div className="col-md-12">
                  <p className="clod">
                    We cover NavLink broad spectrum of subjects, including
                    mathematics, science, language arts, and more. Our tutors
                    are subject-matter experts.
                  </p>
                </div>

                <div className="row mt-5">
                  <i
                    className="fas fa-university fs-1"
                    style={{ color: "rgb(111, 66, 193)" }}
                  ></i>
                  <br />
                  <div className="row mt-2">
                    <h3 id="gjj">Academic Enrichment</h3>
                  </div>
                  <div className="row mt-1">
                    <div className="col-md-12">
                      <p className="clod">
                        Our programs go beyond the standard curriculum,
                        providing enrichment opportunities for students who want
                        to deepen their understanding and excel in their studies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-3">
                    <h1 id="cvb2">
                      Power in NavLink Thoughtful Education Professional Team
                    </h1>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="clod">
                      A robust force, our expert educators form NavLink
                      thoughtful team, delivering impactful education with
                      strength and unity.
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-1">
                    <div className="dfd ms-0">
                      <i className="fas fa-check fs-0"></i>
                    </div>
                  </div>
                  <div className="col-md-11">
                    <h5 className="cvb3">
                      Experienced and Passionate Educators
                    </h5>
                    <div className="row mt-1">
                      <div className="col-md-12">
                        <p className="clod">
                          At the core of our success lies NavLink team of
                          seasoned and enthusiastic educators. Their wealth of
                          knowledge and expertise forms the bedrock of our
                          educational approach, ensuring NavLink high standard
                          of instruction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-md-1">
                    <div className="dfd ms-0">
                      <i className="fas fa-check fs-0"></i>
                    </div>
                  </div>
                  <div className="col-md-11">
                    <h5 className="cvb3">Bringing Learning to Life</h5>
                    <div className="row mt-1">
                      <div className="col-md-12">
                        <p className="clod">
                          Going beyond conventional tutoring, our educators
                          excel at making complex concepts come alive. Through
                          innovative teaching methods, they transform learning
                          into NavLink vibrant and easily understandable
                          experience, fostering engagement and comprehension.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-md-1">
                    <div className="dfd ms-0">
                      <i className="fas fa-check fs-0"></i>
                    </div>
                  </div>
                  <div className="col-md-11">
                    <h5 className="cvb3">
                      Mentors, Motivators, and Educational Partners
                    </h5>
                    <div className="row mt-1">
                      <div className="col-md-12">
                        <p className="clod">
                          We transcend the role of mere tutors, embracing
                          positions as mentors, motivators, and active partners
                          in your child's educational journey. Our commitment
                          extends beyond the classroom as we collaborate to
                          inspire and guide students toward continuous growth
                          and success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md=5">
                    <NavLink to="index.html">
                      <button type="button" className="btn btn-dark">
                        Read More
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bnm2">
                <img src="24.webp" alt="sss" />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        <section className="container position-relative">
          <div className="row mt-5">
            <section className="container bg-light position-relative">
              <figure className="position-absolute bottom-0 start-0 d-none d-lg-block">
                <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
                  <path
                    className="fill-warning"
                    d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
                  ></path>
                </svg>
              </figure>

              <figure className="position-absolute top-0 end-0">
                <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
                  <path
                    className="fill-primary"
                    d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
                  ></path>
                </svg>
              </figure>

              <figure className="position-absolute bottom-0 start-50 translate-middle-x ms-n9 mb-5">
                <svg width="23px" height="23px">
                  <path
                    className="fill-primary"
                    d="M23.003,11.501 C23.003,17.854 17.853,23.003 11.501,23.003 C5.149,23.003 -0.001,17.854 -0.001,11.501 C-0.001,5.149 5.149,-0.000 11.501,-0.000 C17.853,-0.000 23.003,5.149 23.003,11.501 Z"
                  ></path>
                </svg>
              </figure>

              <figure className="position-absolute bottom-0 end-0 me-5 mb-5">
                <svg width="22px" height="22px">
                  <path
                    className="fill-warning"
                    d="M22.003,11.001 C22.003,17.078 17.077,22.003 11.001,22.003 C4.925,22.003 -0.001,17.078 -0.001,11.001 C-0.001,4.925 4.925,-0.000 11.001,-0.000 C17.077,-0.000 22.003,4.925 22.003,11.001 Z"
                  ></path>
                </svg>
                <figure className="position-absolute top-0 end-0">
                  <svg
                    width="822.2px"
                    height="301.9px"
                    viewBox="0 0 822.2 301.9"
                  >
                    <path
                      className="fill-primary"
                      d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
                    ></path>
                  </svg>
                </figure>
              </figure>

              <div className="container position-relative">
                <div className="row justify-content-between align-items-center my-5">
                  <div className="col-lg-5 position-relative">
                    <figure className="position-absolute top-0 start-0 translate-middle mt-n5">
                      <svg width="29px" height="29px">
                        <path
                          className="fill-orange"
                          d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z"
                        ></path>
                      </svg>
                    </figure>

                    <h2 className="h1">
                      Study whenever you want, from any place in the world.
                    </h2>
                  </div>

                  <div className="col-lg-5 position-relative mt-4 mt-lg-0">
                    <img
                      src="12.webp"
                      className="bnm border border-5 border-white rounded-2"
                      alt="re"
                    />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <NavLink
                        to="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn text-danger btn-round btn-white-shadow btn-lg mb-0"
                        data-glightbox=""
                        data-gallery="video-tour"
                      >
                        <i className="fa fa-play"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="row mt-5">
          <section className="position-relative">
            <div className="position-absolute bottom-0 end-0">
              <img src="30.svg" className="h-300px" alt="" />
            </div>

            <div className="container">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4">
                  <h2>Why choose our classes</h2>
                  <p className="mb-0">
                    Choose us for an unmatched educational experience. Our
                    dedicated team, rich expertise, and personalized approach
                    ensure transformative learning, empowering you to thrive
                    academically and personally. Your success starts here.
                  </p>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="card card-body bg-light p-4 h-100">
                    <figure>
                      <svg
                        className="fill-primary"
                        width="63.28px"
                        height="47.41px"
                        viewBox="0 0 63.28 47.41"
                        style={{ "enable-background": "new 0 0 63.28 47.41" }}
                      >
                        <path d="M61.99,43.13c-0.11,0-0.22-0.02-0.32-0.05l-13.04-4.35c-0.42-0.14-0.7-0.53-0.7-0.97V24.41c0-0.44,0.28-0.83,0.7-0.97 l13.04-4.35c0.31-0.11,0.66-0.05,0.93,0.14c0.27,0.19,0.43,0.5,0.43,0.83V42.1c0,0.33-0.16,0.64-0.43,0.83 C62.41,43.06,62.2,43.13,61.99,43.13z M49.97,37.01l10.99,3.66V21.49l-10.99,3.66V37.01z"></path>
                        <path d="M41.25,37.73H2.4c-0.57,0-1.03-0.46-1.03-1.03v-5.28c0-0.57,0.46-1.03,1.03-1.03h38.85c2.02,0,3.67,1.65,3.67,3.67 S43.27,37.73,41.25,37.73z M3.43,35.68h37.82c0.89,0,1.62-0.72,1.62-1.62c0-0.89-0.72-1.62-1.62-1.62H3.43V35.68z"></path>
                        <path d="M57.02,33.7c-0.57,0-1.03-0.46-1.03-1.03V21.72c0-0.57,0.46-1.03,1.03-1.03c0.57,0,1.03,0.46,1.03,1.03v10.95 C58.05,33.24,57.59,33.7,57.02,33.7z"></path>
                        <path d="M15.11,24.9c-6.2,0-11.24-5.04-11.24-11.24S8.91,2.41,15.11,2.41s11.24,5.04,11.24,11.24S21.3,24.9,15.11,24.9z  M15.11,4.47c-5.07,0-9.19,4.12-9.19,9.19c0,5.07,4.12,9.19,9.19,9.19s9.19-4.12,9.19-9.19C24.29,8.59,20.17,4.47,15.11,4.47z"></path>
                        <path d="M15.11,18.8c-2.84,0-5.14-2.31-5.14-5.14c0-2.84,2.31-5.14,5.14-5.14c2.84,0,5.14,2.31,5.14,5.14 C20.25,16.49,17.94,18.8,15.11,18.8z M15.11,10.57c-1.7,0-3.09,1.39-3.09,3.09c0,1.7,1.39,3.09,3.09,3.09 c1.7,0,3.09-1.39,3.09-3.09C18.19,11.95,16.81,10.57,15.11,10.57z"></path>
                        <path d="M35.54,18.8c-2.84,0-5.14-2.31-5.14-5.14c0-2.84,2.31-5.14,5.14-5.14c2.84,0,5.14,2.31,5.14,5.14 C40.68,16.49,38.37,18.8,35.54,18.8z M35.54,10.57c-1.7,0-3.09,1.39-3.09,3.09c0,1.7,1.39,3.09,3.09,3.09 c1.7,0,3.09-1.39,3.09-3.09C38.62,11.95,37.24,10.57,35.54,10.57z"></path>
                        <path d="M35.54,24.9c-6.2,0-11.24-5.04-11.24-11.24S29.34,2.41,35.54,2.41s11.24,5.04,11.24,11.24S41.73,24.9,35.54,24.9z  M35.54,4.47c-5.07,0-9.19,4.12-9.19,9.19c0,5.07,4.12,9.19,9.19,9.19s9.19-4.12,9.19-9.19C44.72,8.59,40.6,4.47,35.54,4.47z"></path>
                        <path d="M47.15,44.93H4.2c-1.56,0-2.83-1.27-2.83-2.83V20.06c0-1.56,1.27-2.83,2.83-2.83H6c0.57,0,1.03,0.46,1.03,1.03 c0,0.57-0.46,1.03-1.03,1.03H4.2c-0.43,0-0.77,0.35-0.77,0.77V42.1c0,0.43,0.35,0.77,0.77,0.77h42.95c0.43,0,0.77-0.35,0.77-0.77 V20.06c0-0.43-0.35-0.77-0.77-0.77h-2.51c-0.57,0-1.03-0.46-1.03-1.03c0-0.57,0.46-1.03,1.03-1.03h2.51c1.56,0,2.83,1.27,2.83,2.83 V42.1C49.97,43.66,48.71,44.93,47.15,44.93z"></path>
                      </svg>
                    </figure>
                    <h5>Flexible Scheduling</h5>
                    <p className="mb-0">
                      We understand the busy lives of both students and parents.
                      That's why we offer flexible scheduling options to
                      accommodate your needs.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="card card-body bg-light p-4 h-100">
                    <figure>
                      <svg
                        className="fill-orange"
                        width="54.22px"
                        height="58.19px"
                        viewBox="0 0 54.22 58.19"
                        style={{ "enable-background": "new 0 0 54.22 58.19" }}
                      >
                        <path d="M27.11,9.75c-2.32,0-4.21-1.89-4.21-4.21c0-2.32,1.89-4.21,4.21-4.21c2.32,0,4.21,1.89,4.21,4.21 C31.32,7.86,29.43,9.75,27.11,9.75z M27.11,3.05c-1.37,0-2.49,1.12-2.49,2.49s1.12,2.49,2.49,2.49s2.49-1.12,2.49-2.49 S28.48,3.05,27.11,3.05z"></path>
                        <path d="M31.61,27.21H22.6c-0.48,0-0.86-0.39-0.86-0.86c0-0.48,0.39-0.86,0.86-0.86h9.01c0.48,0,0.86,0.39,0.86,0.86 C32.48,26.82,32.09,27.21,31.61,27.21z"></path>
                        <path d="M22.31,27.21c-1.51,0-1.68-0.03-1.75-0.05c-1.14-0.22-1.96-1.25-1.96-2.45v-8.63c0-2.79,2.09-5.14,4.87-5.46 c0.85-0.1,2.08-0.14,3.66-0.12c1.55-0.02,2.79,0.02,3.64,0.12c2.78,0.32,4.87,2.66,4.87,5.46v8.63c0,1.2-0.83,2.23-1.96,2.45 c-0.08,0.02-0.26,0.05-2.05,0.05c-0.48,0-0.86-0.39-0.86-0.86v-8.72c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v7.86 c0.44,0,0.81-0.01,0.91-0.02c0.28-0.05,0.52-0.38,0.52-0.75v-8.63c0-1.92-1.44-3.53-3.34-3.75c-0.78-0.09-1.94-0.13-3.44-0.11 c-1.52-0.02-2.68,0.02-3.46,0.11c-1.9,0.22-3.34,1.83-3.34,3.75v8.63c0,0.37,0.24,0.7,0.56,0.76c0.07,0.01,0.43,0.01,0.86,0.01 v-7.86c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v8.72c0,0.48-0.38,0.86-0.86,0.86C22.5,27.21,22.4,27.21,22.31,27.21 z"></path>
                        <path d="M13.31,56.75c-0.48,0-0.86-0.39-0.86-0.86v-4.11c0-0.48,0.39-0.86,0.86-0.86s0.86,0.39,0.86,0.86v4.11 C14.17,56.37,13.79,56.75,13.31,56.75z"></path>
                        <path d="M9.51,43.26c-2.27,0-4.12-1.85-4.12-4.12s1.85-4.12,4.12-4.12c2.27,0,4.12,1.85,4.12,4.12S11.78,43.26,9.51,43.26z  M9.51,36.75c-1.32,0-2.39,1.07-2.39,2.39c0,1.32,1.07,2.39,2.39,2.39c1.32,0,2.39-1.07,2.39-2.39 C11.9,37.83,10.83,36.75,9.51,36.75z"></path>
                        <path d="M5.7,56.75c-0.48,0-0.86-0.39-0.86-0.86v-4.11c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v4.11 C6.57,56.37,6.18,56.75,5.7,56.75z"></path>
                        <path d="M30.91,56.75c-0.48,0-0.86-0.39-0.86-0.86v-4.11c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v4.11 C31.77,56.37,31.39,56.75,30.91,56.75z"></path>
                        <path d="M27.11,43.26c-2.27,0-4.12-1.85-4.12-4.12s1.85-4.12,4.12-4.12c2.27,0,4.12,1.85,4.12,4.12S29.38,43.26,27.11,43.26z  M27.11,36.75c-1.32,0-2.39,1.07-2.39,2.39c0,1.32,1.07,2.39,2.39,2.39s2.39-1.07,2.39-2.39C29.5,37.83,28.43,36.75,27.11,36.75z"></path>
                        <path d="M23.31,56.75c-0.48,0-0.86-0.39-0.86-0.86v-4.11c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v4.11 C24.17,56.37,23.78,56.75,23.31,56.75z"></path>
                        <path d="M48.51,56.75c-0.48,0-0.86-0.39-0.86-0.86v-4.11c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v4.11 C49.38,56.37,48.99,56.75,48.51,56.75z"></path>
                        <path d="M44.71,43.26c-2.27,0-4.12-1.85-4.12-4.12s1.85-4.12,4.12-4.12s4.12,1.85,4.12,4.12S46.98,43.26,44.71,43.26z M44.71,36.75 c-1.32,0-2.39,1.07-2.39,2.39c0,1.32,1.07,2.39,2.39,2.39c1.32,0,2.39-1.07,2.39-2.39C47.1,37.83,46.03,36.75,44.71,36.75z"></path>
                        <path d="M40.91,56.75c-0.48,0-0.86-0.39-0.86-0.86v-4.11c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v4.11 C41.77,56.37,41.38,56.75,40.91,56.75z"></path>
                        <path d="M51.78,31.77H2.44C1.64,31.77,1,31.13,1,30.34v-3.42c0-0.79,0.64-1.44,1.44-1.44h49.35c0.79,0,1.44,0.64,1.44,1.44v3.42 C53.22,31.13,52.57,31.77,51.78,31.77z M2.72,30.05H51.5v-2.84H2.72V30.05z"></path>
                        <path d="M3.01,38.35c-0.48,0-0.86-0.39-0.86-0.86v-6.58c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v6.58 C3.87,37.97,3.48,38.35,3.01,38.35z"></path>
                        <path d="M51.21,38.35c-0.48,0-0.86-0.39-0.86-0.86v-6.58c0-0.48,0.39-0.86,0.86-0.86c0.48,0,0.86,0.39,0.86,0.86v6.58 C52.07,37.97,51.69,38.35,51.21,38.35z"></path>
                        <path d="M16.95,56.75H2.07c-0.48,0-0.86-0.39-0.86-0.86v-6.5c0-2.73,2.04-5.02,4.75-5.33c0.47-0.06,0.9,0.28,0.95,0.76 s-0.29,0.9-0.76,0.95c-1.84,0.21-3.23,1.77-3.23,3.62v5.63h13.16V49.4c0-1.85-1.39-3.41-3.23-3.62c-0.47-0.05-0.81-0.48-0.76-0.95 c0.05-0.47,0.49-0.81,0.95-0.76c2.71,0.31,4.75,2.6,4.75,5.33v6.5C17.81,56.37,17.42,56.75,16.95,56.75z"></path>
                        <path d="M34.55,56.75H19.67c-0.48,0-0.86-0.39-0.86-0.86v-6.5c0-2.73,2.04-5.02,4.75-5.33c0.47-0.06,0.9,0.28,0.95,0.76 c0.05,0.47-0.29,0.9-0.76,0.95c-1.84,0.21-3.23,1.77-3.23,3.62v5.63h13.16V49.4c0-1.85-1.39-3.41-3.23-3.62 c-0.47-0.05-0.81-0.48-0.76-0.95c0.05-0.47,0.49-0.81,0.95-0.76c2.71,0.31,4.75,2.6,4.75,5.33v6.5 C35.41,56.37,35.02,56.75,34.55,56.75z"></path>
                        <path d="M52.15,56.75H37.27c-0.48,0-0.86-0.39-0.86-0.86v-6.5c0-2.73,2.04-5.02,4.75-5.33c0.47-0.06,0.9,0.28,0.95,0.76 s-0.29,0.9-0.76,0.95c-1.84,0.21-3.23,1.77-3.23,3.62v5.63h13.15V49.4c0-1.85-1.39-3.41-3.23-3.62c-0.47-0.05-0.81-0.48-0.76-0.95 c0.05-0.47,0.49-0.81,0.95-0.76c2.71,0.31,4.75,2.6,4.75,5.33v6.5C53.01,56.37,52.63,56.75,52.15,56.75z"></path>
                      </svg>
                    </figure>
                    <h5>Revision through Online Mobile App</h5>
                    <p className="mb-0">
                      In addition to in-person tutoring, we provide the
                      convenience of online learning, allowing students to
                      access our expertise from the comfort of their own homes.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="card card-body bg-light p-4 h-100">
                    <figure>
                      <svg
                        className="fill-purple"
                        width="54.22px"
                        height="52.86px"
                        viewBox="0 0 54.22 52.86"
                        style={{ "enable-background": "new 0 0 54.22 52.86" }}
                      >
                        <path d="M32.48,50.83H15.21c-0.45,0-0.82-0.37-0.82-0.82v-2.73c0-1.21-0.91-2.24-2.11-2.39L9.9,44.58 c-2.02-0.26-3.54-1.99-3.54-4.03V34.8l-2.94,0.02c-0.59,0-1.11-0.3-1.41-0.81C1.72,33.5,1.72,32.9,2,32.39l2.63-4.63 c1.46-2.58,2.24-5.51,2.23-8.47c0-4.95,2.25-9.62,6.02-12.49c3.77-2.87,8.47-4.09,13.22-3.44c0.67,0.09,1.35,0.22,2,0.39 c0.44,0.11,0.7,0.56,0.59,1c-0.11,0.44-0.57,0.71-1,0.59c-0.59-0.15-1.2-0.27-1.81-0.36c-4.32-0.59-8.58,0.52-12,3.12 c-3.36,2.56-5.37,6.74-5.37,11.18c0,3.25-0.85,6.46-2.45,9.28L3.44,33.2l2.94-0.03C7.28,33.17,8,33.9,8,34.8v5.76 c0,1.21,0.91,2.24,2.11,2.39l2.38,0.31c2.02,0.26,3.54,1.99,3.54,4.03v1.9h15.62l-0.02-9.33c0-2.73,1.15-5.4,3.16-7.35 c0.66-0.64,1.27-1.33,1.81-2.07c0.27-0.37,0.78-0.45,1.15-0.18c0.37,0.27,0.45,0.79,0.18,1.15c-0.6,0.81-1.27,1.58-1.99,2.28 c-1.72,1.66-2.67,3.85-2.66,6.16l0.02,10.15c0,0.22-0.09,0.43-0.24,0.58C32.91,50.75,32.7,50.83,32.48,50.83z"></path>
                        <path d="M43.22,50.83H2.18c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h41.04c0.45,0,0.82,0.37,0.82,0.82 C44.05,50.47,43.68,50.83,43.22,50.83z"></path>
                        <path d="M43.81,27.69H29.1c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h14.72c0.45,0,0.82,0.37,0.82,0.82 C44.64,27.32,44.27,27.69,43.81,27.69z"></path>
                        <path d="M45.79,18.58H31.84c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h13.95c0.45,0,0.82,0.37,0.82,0.82 C46.61,18.21,46.24,18.58,45.79,18.58z"></path>
                        <path d="M43.81,9.46H26.68c-0.45,0-0.82-0.37-0.82-0.82c0-0.45,0.37-0.82,0.82-0.82h17.13c0.45,0,0.82,0.37,0.82,0.82 C44.64,9.09,44.27,9.46,43.81,9.46z"></path>
                        <path d="M46.59,12.23c-1.98,0-3.6-1.61-3.6-3.6s1.61-3.6,3.6-3.6s3.6,1.61,3.6,3.6S48.57,12.23,46.59,12.23z M46.59,6.69 c-1.07,0-1.95,0.87-1.95,1.95c0,1.07,0.87,1.95,1.95,1.95c1.07,0,1.95-0.87,1.95-1.95C48.54,7.56,47.66,6.69,46.59,6.69z"></path>
                        <path d="M48.56,21.35c-1.98,0-3.6-1.61-3.6-3.6s1.61-3.6,3.6-3.6s3.6,1.61,3.6,3.6S50.55,21.35,48.56,21.35z M48.56,15.8 c-1.07,0-1.95,0.87-1.95,1.95c0,1.07,0.87,1.95,1.95,1.95c1.07,0,1.95-0.87,1.95-1.95C50.51,16.68,49.64,15.8,48.56,15.8z"></path>
                        <path d="M46.59,30.46c-1.98,0-3.6-1.61-3.6-3.6s1.61-3.6,3.6-3.6s3.6,1.61,3.6,3.6S48.57,30.46,46.59,30.46z M46.59,24.92 c-1.07,0-1.95,0.87-1.95,1.95s0.87,1.95,1.95,1.95c1.07,0,1.95-0.87,1.95-1.95S47.66,24.92,46.59,24.92z"></path>
                      </svg>
                    </figure>
                    <h5>Progress Monitoring</h5>
                    <p className="mb-0">
                      We keep track of students' progress, providing regular
                      feedback and assessments to ensure they are on the right
                      path to success.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="card card-body bg-light p-4 h-100">
                    <figure>
                      <svg
                        className="fill-warning"
                        width="60.77px"
                        height="52.15px"
                        viewBox="0 0 60.77 52.15"
                        style={{ "enable-background": "new 0 0 60.77 52.15" }}
                      >
                        <path d="M49.74,35.57c-3.93,0-7.13-3.2-7.13-7.13c0-3.93,3.2-7.13,7.13-7.13s7.13,3.2,7.13,7.13 C56.87,32.37,53.67,35.57,49.74,35.57z M49.74,23c-3,0-5.44,2.44-5.44,5.44c0,3,2.44,5.44,5.44,5.44c3,0,5.44-2.44,5.44-5.44 C55.19,25.44,52.74,23,49.74,23z"></path>
                        <path d="M49.74,38.55c-5.57,0-10.11-4.53-10.11-10.11c0-5.57,4.53-10.11,10.11-10.11c5.57,0,10.11,4.53,10.11,10.11 C59.85,34.01,55.32,38.55,49.74,38.55z M49.74,20.02c-4.64,0-8.42,3.78-8.42,8.42c0,4.64,3.78,8.42,8.42,8.42 c4.64,0,8.42-3.78,8.42-8.42C58.17,23.8,54.39,20.02,49.74,20.02z"></path>
                        <path d="M49.74,50.93c-1.52,0-2.76-1.24-2.76-2.76V37.51c0-0.25,0.11-0.49,0.31-0.65c0.2-0.16,0.46-0.22,0.7-0.17 c1.15,0.24,2.33,0.24,3.48,0c0.25-0.05,0.51,0.01,0.7,0.17c0.2,0.16,0.31,0.4,0.31,0.65v10.66C52.5,49.69,51.26,50.93,49.74,50.93z  M48.67,38.49v9.68c0,0.59,0.48,1.07,1.07,1.07c0.59,0,1.07-0.48,1.07-1.07v-9.68C50.1,38.57,49.39,38.57,48.67,38.49z"></path>
                        <path d="M55.2,21.79c-0.47,0-0.84-0.38-0.84-0.84V9.1c0-0.53-0.44-0.97-0.97-0.97h-1.13v11.15c0,0.47-0.38,0.84-0.84,0.84 s-0.84-0.38-0.84-0.84V7.29c0-0.47,0.38-0.84,0.84-0.84h1.97c1.46,0,2.65,1.19,2.65,2.66v11.85C56.04,21.42,55.66,21.79,55.2,21.79 z"></path>
                        <path d="M45.66,37.6H5.24c-1.46,0-2.65-1.19-2.65-2.65V9.1c0-1.46,1.19-2.66,2.65-2.66H7.2c0.47,0,0.84,0.38,0.84,0.84v25.35 c0,0.47-0.38,0.84-0.84,0.84s-0.84-0.38-0.84-0.84V8.13H5.24c-0.53,0-0.97,0.44-0.97,0.97v25.85c0,0.53,0.44,0.97,0.97,0.97h40.42 c0.47,0,0.84,0.38,0.84,0.84C46.5,37.23,46.13,37.6,45.66,37.6z"></path>
                        <path d="M29.31,33.47c-0.47,0-0.84-0.38-0.84-0.84V5.72c0-0.47,0.38-0.84,0.84-0.84c0.47,0,0.84,0.38,0.84,0.84v26.91 C30.15,33.1,29.78,33.47,29.31,33.47z"></path>
                        <path d="M31.4,37.6h-4.18c-1.13,0-2.05-0.92-2.05-2.05c0-1.15-0.93-2.08-2.08-2.08H7.2c-0.47,0-0.84-0.38-0.84-0.84V4.51 c0-0.47,0.38-0.84,0.84-0.84h12.2c2.67,0,5.35,0.27,7.97,0.8l1.93,0.39l1.93-0.39c2.62-0.53,5.3-0.8,7.97-0.8h12.21 c0.47,0,0.84,0.38,0.84,0.84v14.77c0,0.47-0.38,0.84-0.84,0.84s-0.84-0.38-0.84-0.84V5.35H39.21c-2.56,0-5.13,0.26-7.63,0.77 l-2.1,0.43c-0.11,0.02-0.22,0.02-0.33,0l-2.1-0.43c-2.51-0.51-5.08-0.77-7.64-0.77H8.05v26.44h15.04c2.07,0,3.76,1.69,3.76,3.76 c0,0.2,0.16,0.37,0.37,0.37h4.18c0.2,0,0.37-0.16,0.37-0.37c0-2.07,1.69-3.76,3.76-3.76h5.95c0.47,0,0.84,0.38,0.84,0.84 c0,0.47-0.38,0.84-0.84,0.84h-5.95c-1.15,0-2.08,0.93-2.08,2.08C33.45,36.68,32.53,37.6,31.4,37.6z"></path>
                        <path d="M23.35,10.56H12.01c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h11.34c0.47,0,0.84,0.38,0.84,0.84 C24.19,10.18,23.82,10.56,23.35,10.56z"></path>
                        <path d="M23.35,15.25H12.01c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h11.34c0.47,0,0.84,0.38,0.84,0.84 C24.19,14.87,23.82,15.25,23.35,15.25z"></path>
                        <path d="M23.35,19.93H12.01c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h11.34c0.47,0,0.84,0.38,0.84,0.84 C24.19,19.56,23.82,19.93,23.35,19.93z"></path>
                        <path d="M23.35,24.62H12.01c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h11.34c0.47,0,0.84,0.38,0.84,0.84 C24.19,24.24,23.82,24.62,23.35,24.62z"></path>
                        <path d="M46.61,10.56H35.27c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h11.34c0.47,0,0.84,0.38,0.84,0.84 C47.45,10.18,47.08,10.56,46.61,10.56z"></path>
                        <path d="M46.61,15.25H35.27c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h11.34c0.47,0,0.84,0.38,0.84,0.84 C47.45,14.87,47.08,15.25,46.61,15.25z"></path>
                        <path d="M49.28,19.93H35.27c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h14.01c0.47,0,0.84,0.38,0.84,0.84 C50.13,19.56,49.75,19.93,49.28,19.93z"></path>
                        <path d="M41.74,24.62h-6.47c-0.47,0-0.84-0.38-0.84-0.84c0-0.47,0.38-0.84,0.84-0.84h6.47c0.47,0,0.84,0.38,0.84,0.84 C42.58,24.24,42.2,24.62,41.74,24.62z"></path>
                      </svg>
                    </figure>
                    <h5>A Supportive Learning Environment</h5>
                    <p className="mb-0">
                      we foster NavLink positive and encouraging atmosphere
                      where students can feel comfortable asking questions and
                      building confidence in their abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />

          <section className="row mt-5">
            <section className="pb-0 pb-lg-5">
              <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                  <div className="col-lg-6 position-relative order-2 ms-auto">
                    <figure className="position-relative position-absolute top-50 start-50 translate-middle ms-n8 d-none d-sm-block">
                      <svg
                        width="625.8px"
                        height="550px"
                        viewBox="0 0 625.8 630.8"
                        style={{ "enable-background": "new 0 0 625.8 630.8" }}
                      >
                        <path
                          className="fill-primary1 opacity-1"
                          d="M445.8,133.5c59.7,50.3,122.9,96,149.7,161c26.5,64.6,15.9,148.6-29.9,197.7C520.3,541,439,555,364.9,578.1 c-74.5,23.1-142.1,55.2-200.4,42.3S57.2,549.7,32.6,487.3c-24.2-62-24.2-128.9-17.8-199.6C21.7,217,34.5,142.6,78.7,89.6 S198.6,5,264.4,16.7S386.1,83.2,445.8,133.5z"
                        ></path>
                      </svg>
                    </figure>

                    <img
                      src="run.svg"
                      className="fff3 position-relative ms-auto"
                      alt="vv"
                    />
                  </div>

                  <div className="col-lg-6 position-relative order-1 order-lg-2">
                    <h2 id="cvb2">EVERYONE IS ABLE TO SHARPEN THEIR SKILLS</h2>
                    <p className="clod mb-2">
                      we believe that education is the key to unlocking the full
                      potential of every student. We are Kerala's premier
                      tuition center, dedicated to providing top-notch
                      educational support and guidance to students of all
                      levels. Our commitment to excellence has made us NavLink
                      trusted name in the world of education.
                    </p>

                    <ul className="list-group list-group-borderless mb-2">
                      <li className="list-group-item d-flex align-items-center px-0">
                        <p className="mb-0 h6 fw-light">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          Experienced Faculty
                        </p>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0">
                        <p className="mb-0 h6 fw-light">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          Online Mobile App Facility
                        </p>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0">
                        <p className="mb-0 h6 fw-light">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          24x7 Doubt clearance Session
                        </p>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0">
                        <p className="mb-0 h6 fw-light">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          Offline Theoy + Live Sessions
                        </p>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0">
                        <p className="mb-0 h6 fw-light">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          Weekly Model Exams
                        </p>
                      </li>
                      <li className="list-group-item d-flex align-items-center px-0">
                        <p className="mb-0 h6 fw-light">
                          <i className="fa fa-arrow-right text-primary me-2"></i>
                          Convenience of paying fees in monthly installments
                        </p>
                      </li>
                    </ul>

                    <NavLink to="/Home" className="btn btn-info mb-0">
                      More about us
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
