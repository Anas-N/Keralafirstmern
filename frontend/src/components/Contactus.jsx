import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    let isValid = true;
    setErrors({ name: '', email: '', message: '' }); // Clear previous errors

    // Basic validation
    if (!name.trim()) {
      isValid = false;
      setErrors({ ...errors, name: 'Please enter your name.' });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      setErrors({ ...errors, email: 'Please enter a valid email address.' });
    }

    if (!message.trim()) {
      isValid = false;
      setErrors({ ...errors, message: 'Please enter your message.' });
    }

    if (isValid) {
      // Handle form submission logic here
      // (e.g., send data to server using a library like Axios)
      console.log('Form submitted successfully!', formData);
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    }
  };
  return (
    <>
      <main>
        <section
          id="contact-form"
          className="position-relative overflow-hidden pt-0 pt-md-5"
        >
          <figure className="position-absolute top-0 start-0 ms-0 d-none d-xl-block mt-3">
            <svg enable-background="new 0 0 253.7 138">
              <path
                className="fill-info"
                d="m96.5 118.2c0 0.2 0.1 0.4 0.1 0.5l3-0.9c0-0.1-0.1-0.3-0.1-0.4-1 0.3-2 0.5-3 0.8m112-114v-0.4c-5.4-0.3-10.7-0.5-16.1-0.8v0.5c5.4 0.2 10.8 0.5 16.1 0.7m-87.7 89.2c23.1-3.7 45.7-8.8 67.4-17.7-22 7.6-44.5 13.4-67.4 17.7m-7.5-7.7c0 0.2 0.1 0.3 0.1 0.5 5.3-1 10.6-1.9 15.8-3 13.9-2.8 27.8-5.8 41.4-9.7 5.5-1.6 11-3.4 16.4-5.2 2.8-0.9 5.5-2 8.2-3 1.1-0.4 2.1-0.7 3.2-1.1-0.1-0.2-0.1-0.4-0.2-0.6-27.5 9.9-56 16.8-84.9 22.1m74.2-0.4c-0.1-0.2-0.2-0.3-0.3-0.5-2.1 1.1-4.2 2.4-6.3 3.4-5 2.4-10 4.7-15.1 6.9-6.1 2.6-12.2 5-18.3 7.3-1 0.4-2 1.5-3.2 0.3 0 0-0.4 0.3-0.6 0.4-0.7 0.5-1.3 1.2-2 1.4-11.5 3.6-23.1 7.2-34.6 10.8l-5.1 1.5c1 0.1 1.9 0 2.8-0.3 12.3-3.7 24.6-7.4 36.9-11.2 1.2-0.4 1.8-0.3 1.6 1.2-0.1 0.5 0.3 1 0.4 1.5 0.3-0.5 0.6-0.9 0.8-1.4 0.5-1.1 0.3-2.4 1.9-3 6.2-2.3 12.4-4.7 18.5-7.2 4.1-1.7 8-3.6 12-5.5 2.6-1.2 5.2-2.4 7.7-3.7 0.9-0.4 1.9-1.2 2.9-1.9m-162.4-10.9c0.1 0.1 0.1 0.3 0.2 0.4 2.3-1.5 4.7-3.1 7-4.5 8.5-5.1 17.2-9.6 26.5-13.1 8.1-3.1 16.3-6.2 24.6-8.5 10.5-2.9 21.2-5.2 31.8-7.4 4.5-1 9.1-1.2 13.6-1.8 2.7-0.3 5.3-0.6 8-0.9s5.4-0.5 8.1-0.8c-2.1-0.2-4.2-0.4-6.2-0.2-6.2 0.7-12.3 1.6-18.5 2.5-16.1 2.4-32 5.7-47.3 11.2-9.1 3.2-18 6.9-26.9 10.7-7.5 3.1-14.5 7.2-20.9 12.4m135.8-71.8c-24.3-0.3-62.8 5.2-107 27.8-11.3 5.6-21.9 12.4-31.7 20.4 41.8-29.7 88.1-46.3 138.7-48.2m64.4 8.6c-0.3 0.3-0.6 0.8-0.8 0.8-2.4-0.3-4.7-0.7-7.1-1.1-0.4-0.1-0.9 0-1.4 0 0.3 0.3 0.5 0.7 0.9 1 2.1 1.4 4.3 2.6 6.3 4.1 6.9 4.9 11.1 11.5 12.3 19.8 0.3 2.3 0 4.6 0 7.4 5-3.7 9-7.5 11.4-12.8 1.1-2.6 1.3-5.4-0.5-7.9-3.8-5-9.4-6.7-14.9-8.8-2.1-0.8-4.7-0.4-6.2-2.5m-98.8 33.2c0.3-0.4 0.6-0.8 1-1.2-0.5-0.1-0.8-0.2-1.1-0.1-0.7 0.2-1.3 0.5-2 0.7 0.8 0.2 1.5 0.4 2.1 0.6-0.4 0.3-0.8 0.8-1.3 0.9-0.9 0.1-1.9-0.3-2.7-0.1-1.3 0.3-2.4 1-3.7 1.3-9.6 2-19.3 3.8-29 6-3.8 0.9-7.5 2.3-11.1 3.7-6.1 2.3-12.7 3.6-18.7 6.6-0.5 0.3-1.2 0.2-1.7 0.4-1.9 0.9-3.9 1.8-5.8 2.7-1.8 0.9-3.4 2-5.2 2.8-1.7 0.8-3.6 1.4-5.3 2.1-4.7 2-8.5 5.4-12.4 8.5-2.2 1.7-4 3.9-5.9 6-1 1.1-1.7 2.4-2.5 3.7-0.8 1.4-0.1 2.1 1.3 2.3 4.1 0.5 8.1 1.2 12.2 1.2 19.1 0 38-2.7 56.9-5.5 10.6-1.6 21-3.5 31.5-5.5 17.3-3.3 34.6-7.1 51.5-12.1 11.9-3.5 23.7-7.4 35.2-12.1 1.5-0.6 1.3-1.2 0.4-2.1-2.9-3.2-6.6-5.2-10.5-6.6-4.9-1.8-10.2-2.6-15.3-3.8-0.4-0.1-0.6-0.6-0.9-0.9-0.4-0.3-0.9-0.6-1.3-0.9-0.2 0.2-0.3 0.4-0.5 0.6 0.5 0.1 0.9 0.2 1.4 0.3-0.1 0.1-0.2 0.3-0.3 0.4-0.9-0.2-1.9-0.6-2.7-0.4-2.7 0.4-5.4-0.5-8.1-0.5-4.6 0-9.2-0.4-13.8-0.7l-3.6-0.3c-1.1 0-2.2 0.2-3.2 0.2-0.8 0.1-1.6 0.1-2.4 0.2s-1.7 0.5-2.2 0.2c-1.5-0.9-2.8-0.3-4.2 0-1.2 0.3-2.3 0.8-3-0.7-0.1-0.3-0.7-0.3-1-0.4 0 0-0.3 0.3-0.3 0.4 0.7 1.4-0.5 0.8-0.9 0.9-0.6 0.2-1.2 0.2-1.8 0.3-1 0.2-2 0.3-3 0.4-1.2 0.2-2.6 0-3.6 0.5-1.1 0.9-1.7 0.5-2.5 0m-77.3 0.7c-2 0.9-4.2 1.7-6.1 2.8-9 4.9-17.2 11-24.5 18.1-2.5 2.5-4.5 5.6-6.7 8.4-2.8 3.4-4.3 7.3-4.5 11.6-0.1 1.3 0.2 2.9 1 3.8 1.8 2 4.2 3.2 7.1 3.9-2-3.6-2.8-7.1-0.7-10.6 1.4-2.4 3.2-4.7 5.2-6.6 6.1-5.9 13.4-10 20.9-13.9 11.7-6.1 24-10.8 36.5-14.7 16.3-5.1 32.9-8.8 49.8-10.6 5.9-0.6 11.8-1.1 17.7-1.5 12-0.8 23.9-0.3 35.8 1.5 6.5 1 12.8 2.3 19 4.7 6.3 2.5 11.9 5.4 15 11.8 0.4 0.8 0.8 1 1.7 0.6 2-1.1 4.1-2 6.1-3.1 1.6-0.9 3.5-1.7 4.7-3 2.6-3 4.2-6.6 4.5-10.7 0.2-3.2-0.3-6.4-2.2-8.9-2.2-3-4.5-6.2-8-7.8-1.7-0.8-2.4-3.1-4.6-2.9-0.2 0-0.4-0.6-0.6-0.9-0.7-0.9-2.3-0.6-2.7-1.8-0.1 0-0.2 0.1-0.3 0.1-0.5 0.1-1 0.3-1.4 0.2-4.9-1.7-9.8-3.6-15-4.6-4.7-1-9.4-1.5-14.3-1.2-3 0.2-6.1 1.2-9.2 0.1-0.6-0.2-1.5 0.7-2.3 0.8-5.3 0.7-10.6 1.4-15.9 1.8-5.2 0.4-10.2 2.4-15.5 1.8-1.2-0.1-2.9-0.2-4 1.3-0.5 0.6-2-0.2-3.2 0.4-1.3 0.7-3.1 0.4-4.6 0.6-0.1 0-0.1 0.1-0.2 0.1-3.4 0.8-6.8 2.1-10.1 3-12.8 3.6-25.5 7.4-37.9 12.2-2.8 1.1-5.5 2.3-8.4 3.2-3.8 1.2-7.7 1.9-11.1 4.3-1.3 0.9-2.9 1.2-4.4 1.9-0.6 0.2-1 0.7-1.6 1-1.9 1-3.4 1.9-5 2.8m114 46c-0.5 0.3-0.9 0.7-1.4 0.9-8.8 2.1-17.5 4.5-26.4 6.2-11.3 2.2-22.7 3.9-34 5.7-2.9 0.5-5.8 0.5-8.7 0.8-1.8 0.2-3.6 0.7-5.5 0.9-4.8 0.5-9.6 0.9-14.3 1.3-0.8 0.1-1.7-0.3-2.5-0.3-0.5 0-1 0.6-1.5 0.6-4.5 0.1-9 0.3-13.5 0.3-6.1-0.1-12.2 0-18.3-0.6-9.3-0.8-18.5-2.3-26.3-7.8-5.3-3.6-9.8-7.7-10.6-14.6-0.6-4.9 0.7-9.4 3.3-13.4 2-3 4.4-5.8 6.5-8.8 0.6-0.8 0.8-1.9 1.4-2.7 0.9-1.3 1.7-2.7 2.8-3.8 6.3-6 13.3-11.2 20.6-15.8 5.4-3.4 11-6.8 16.7-9.8 18.2-9.6 37.1-17.4 57.1-22.4 13.4-3.3 26.9-5.8 40.7-6.6 8.3-0.5 16.7-0.1 25-0.1 6.7 0 13.5 0.2 20.2 0.2 12.4 0.1 24.6 1.5 36.5 5.1 5.9 1.8 11.5 4.4 15.9 9 5.1 5.3 6.7 14.6 3.4 21.2-2.7 5.3-6.5 9.7-11.4 13.2-2.6 1.8-5.3 3.5-7.7 5.5-2 1.7-3.6 4-5.7 5.7-3.2 2.7-6.6 5.2-9.7 7.9-1 0.9-1.6 2.2-2.5 3.2-2.5 2.8-4.8 5.8-7.6 8.1-4.4 3.5-9.1 6.6-13.8 9.8-2.5 1.7-5.2 3.1-7.8 4.6-1.9 0.1-3.5 0.8-4.6 2.4-3 1.4-6.1 2.8-9.1 4.1-0.7 0.3-1.4 0.5-2 0.7-2.4 1-4.9 2-7.4 2.9-0.8 0.5-1.6 1.3-2.4 1.6-17.9 6.8-36.1 12.5-54.8 17-11.7 2.8-23.4 5.8-35.3 8.2-10.4 2.1-20.9 3.3-31.4 4.9-1.7 0.3-3.4 0.1-5.1 0.2-2 0.1-3.6-0.5-5.1-1.8-0.2-0.2-0.4-0.3-0.6-0.4-0.5-0.3-1.1-0.5-1.6-0.8 0.5-0.3 0.9-0.7 1.5-1.1-0.1-0.1-0.2-0.2-0.4-0.3-0.5-0.3-1.1-0.5-1.6-0.8 0.6-0.4 1.2-1 1.8-1 21-1.4 41.2-6.9 61.4-12 23.7-6 47-13 69.8-21.9 5.2-2 10.4-4.3 15.6-6.6 3.7-1.7 7.4-3.7 10.9-5.9-1.8 0.6-3.7 1.3-5.5 1.9-3.9 1.2-7.8 2.4-11.7 3.7-0.5 0.2-1 0.6-1.4 0.9-0.8 0.3-1.3 0.5-1.9 0.6"
              ></path>
            </svg>
          </figure>

          <div className="container">
            <div className="row g-4 g-sm-5 align-items-center mt-4">
              <div className="col-lg-6">
                <h2 id="cvb5">Access the right service for your kid today!!</h2>
                <p className="clod">
                  Claim your free 10-minute phone call to see if we are right
                  for your kid.
                </p>

                <div className="row mt-5">
                  <div className="col-sm-6 col-lg-12 col-xl-6 mb-5">
                    <div className="card card-body shadow">
                      <div className="icon-lgp bg-warning text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-k6">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <h6>Email</h6>
                      <p className="h6 mb-0">
                        <NavLink
                          to="#"
                          className="clod hhjj text-primary-hover fw-light stretched-link"
                        >
                          example@gmail.com
                        </NavLink>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-12 col-xl-6 mb-5">
                    <div className="card card-body shadow">
                      <div className="icon-lgp bg-success text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-k6">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <h6>WhatsApp number</h6>
                      <p className="h6 mb-0">
                        <NavLink
                          to="#"
                          className="clod   hhjj text-primary-hover fw-light stretched-link"
                        >
                          +256 359 556
                        </NavLink>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-12 col-xl-6 mb-5 mb-xl-0 mg">
                    <div className="card card-body shadow">
                      <div className="icon-lgp bg-purple text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-k6">
                        <i className="fas fa-tty"></i>
                      </div>
                      <h6>Telephone</h6>
                      <p className="h6 mb-0">
                        <NavLink
                          to="#"
                          className="clod   hhjj text-primary-hover fw-light stretched-link"
                        >
                          +123 456 789
                        </NavLink>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-12 col-xl-6 mb-5 mb-xl-0">
                    <div className="card card-body shadow">
                      <div className="icon-lg bg-orange text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                        <i className="fas fa-globe"></i>
                      </div>
                      <h6>Website</h6>
                      <p className="h6 mb-0">
                        <NavLink
                          to="#"
                          className=" clod   hhjj text-primary-hover fw-light stretched-link"
                        >
                          http://example.com
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card card-body shadow p-4 p-sm-5 position-relative">
                  <figure className="position-absolute top-0 start-100 mt-55 ms-auto">
                    <svg enable-background="new 0 0 167 107">
                      <path
                        className="fill-danger"
                        d="m87.1 1c-0.4 0.5-0.8 1-1.3 1.5l-3 2.7c-2.6 2.3-5.1 4.7-7.8 6.8-13.4 10.5-26.8 21-40.1 31.5l-25.8 20.4c-0.4 0.3-0.8 0.6-1.1 0.9-0.7 0.6-1.5 1-2.4 0.2-0.8-0.7-0.6-1.7-0.1-2.4 0.6-1 1.4-2 2.2-2.8 0.5-0.4 1-0.9 1.5-1.3 2.8-2.6 5.7-5.2 8.6-7.5 21.6-16.6 43.3-33.1 65.8-48.5 1.2-0.9 2.5-1.7 3.8-2.5 0 0 0.1 0.1 0.4 0.2-0.2 0.3-0.5 0.6-0.7 0.8zm78.9 20.9c-0.4 0.2-0.7 0.4-1.1 0.6-0.3 0.2-0.7 0.5-1.1 0.7-14.6 8.6-29 17.5-43.1 27-21.6 14.4-43 29.2-63.4 45.2-3.8 3-7.5 6-11.2 9-0.6 0.5-1.1 0.9-1.7 1.3-0.8 0.6-1.6 0.9-2.4 0.2s-0.6-1.7-0.1-2.4c0.6-1 1.3-2 2.2-2.8l0.1-0.1c2.5-2.3 5-4.6 7.7-6.6 30.4-23 61.6-44.5 94.9-63 3.8-2.1 7.7-4.1 11.6-6 1.9-1 3.9-2 5.8-3 0.5-0.2 1-0.4 1.4-0.6 0.2 0.1 0.3 0.3 0.4 0.5zm-66.1-13.4c0.7-0.5 1.3-1.1 1.9-1.7-0.1-0.1-0.2-0.2-0.5-0.3-0.7 0.5-1.4 1-2.1 1.6-0.7 0.5-1.4 1.1-2.1 1.6-4 2.9-8.1 5.8-12.1 8.7-19.3 13.8-38.6 27.7-57.8 41.8-5.4 3.9-10.5 8.1-15.6 12.3-2.1 1.7-4.2 3.5-6.3 5.2-1.5 1.2-2.8 2.6-4.1 4-0.5 0.5-1 1.1-1.2 1.8-0.1 0.5 0.1 1.2 0.4 1.5s1.1 0.4 1.5 0.2c0.8-0.4 1.5-0.9 2.2-1.5l7.2-6c4.2-3.6 8.5-7.1 12.8-10.5 10.6-8.2 21.3-16.4 31.9-24.5l23.4-18c6.9-5.4 13.7-10.8 20.5-16.2zm0.5 13.5c-1.1 1-2.2 2-3.4 2.9-3.3 2.6-6.7 5.2-10 7.8-11 8.5-22 17-32.9 25.6-6.4 5.1-12.8 10.3-19.1 15.4-3.5 2.8-7 5.7-10.5 8.5-0.8 0.7-1.6 1.4-2.5 1.9-0.5 0.3-1.6 0.3-1.9 0-0.4-0.4-0.5-1.4-0.2-1.9 0.4-0.8 1-1.6 1.7-2.3 0.7-0.6 1.4-1.3 2.1-1.9 1.7-1.6 3.4-3.2 5.2-4.7 20-15.8 40.2-31.3 61.3-45.6 2.3-1.6 4.7-3.1 7.1-4.6 0.5-0.3 1-0.7 1.5-1 0.4-0.2 0.8-0.4 1.2-0.7 0.1 0.1 0.1 0.2 0.2 0.3s0.2 0.2 0.2 0.3zm7 13.4 0.6-0.6c-0.3-0.2-0.4-0.3-0.4-0.3-1.5 1.1-3 2.2-4.5 3.2-16.7 11.1-32.8 23-48.7 35.1-4.7 3.5-9.3 7.1-13.9 10.7-0.9 0.7-1.7 1.5-2.4 2.3-0.6 0.7-0.9 1.6-0.2 2.4 0.7 0.9 1.6 0.8 2.4 0.3 1.1-0.6 2.2-1.3 3.2-2.1 1.8-1.4 3.5-2.8 5.2-4.3 1.7-1.4 3.5-2.8 5.2-4.3 12.1-9.5 24.3-19 36.5-28.4l15-12c0.6-0.4 1.3-1.2 2-2z"
                      ></path>
                    </svg>
                  </figure>

                  <form className="row g-3 position-relative" id="contactForm" onSubmit={handleSubmit}>
                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <label className="form-label">First name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-label="First name"
                        value={formData.name}
                  onChange={handleChange}
                  required
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <label className="form-label">Last name *</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Last name"
                      />
                    </div>

                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-control" id="email" value={formData.email}
                  onChange={handleChange}
                  required/>
                  {errors.email && <span className="error-message">{errors.email}</span>}
              
                    </div>

                    <div className="col-md-6 col-lg-12 col-xl-6">
                      <label className="form-label">Phone number *</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message *</label>
                      <textarea className="form-control" rows="3" id="message"  value={formData.name} // Update typo to `formData.message`
                  onChange={handleChange}
                  required></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
             
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary mb-0">
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contactus;
