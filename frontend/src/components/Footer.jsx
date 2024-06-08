import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="pt-5 bg-light mt-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-3">
              <NavLink class="me-0" to="https://keralafirst.in/">
                <img
                  class="light-mode-item h-40px"
                  src="logo.webp"
                  alt="logo"
                  style={{ width: "60px" }}
                />
              </NavLink>
              <p class="clod my-3">
                The Premier tuition institute in kerala for science and
                mathematics.
              </p>

              <ul class="list-inline mb-0 mt-3">
                <li class="list-inline-item">
                  <NavLink
                    class="btn btn-white btn-sm shadow px-2 text-facebook"
                    to="#"
                  >
                    <i class="fab fa-fw fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li class="list-inline-item">
                  <NavLink
                    class="btn btn-white btn-sm shadow px-2 text-instagram"
                    to="#"
                  >
                    <i class="fab fa-fw fa-instagram"></i>
                  </NavLink>
                </li>
                <li class="list-inline-item">
                  <NavLink
                    class="btn btn-white btn-sm shadow px-2 text-twitter"
                    to="#"
                  >
                    <i class="fab fa-fw fa-twitter"></i>
                  </NavLink>
                </li>
                <li class="list-inline-item">
                  <NavLink
                    class="btn btn-white btn-sm shadow px-2 text-linkedin"
                    to="#"
                  >
                    <i class="fab fa-fw fa-linkedin-in"></i>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col-lg-6">
              <div class="row g-4">
                <div class="col-6 col-md-4">
                  <h5 class="mb-2 mb-md-4 fw-bold">Quick Links</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <NavLink
                        class="clod nav-link"
                        to="https://keralafirst.in/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        class="clod nav-link"
                        to="https://keralafirst.in/contact"
                      >
                        Contact US
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        class="clod nav-link"
                        to="https://keralafirst.in/register"
                      >
                        Register
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        class="clod nav-link"
                        to="https://keralafirst.in/"
                      >
                        Sitemap
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-md-4">
                  <h5 class="mb-2 mb-md-4 fw-bold">Branches</h5>
                  <ul class="clod nav flex-column">
                    <li class="nav-item">
                      <NavLink class="clod nav-link" to="#">
                        Kollam
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="clod nav-link" to="#">
                        Ernakulam
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="clod nav-link" to="#">
                        Thiroor
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="clod nav-link" to="#">
                        Chalakudi
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <h5 class="mb-2 mb-md-4 fw-bold">Contact</h5>

              <p class="clod mb-2">
                Toll free:
                <span class="clod h6 fw-light ms-2">+1234 568 963</span>
                <span class="d-block small">(9:AM to 8:PM IST)</span>
              </p>

              <p class="clod mb-0">
                Email:
                <span class="clod h6 fw-light ms-2">example@gmail.com</span>
              </p>
              <p class="clod mb-0">
                Address:
                <span class="clod h6 fw-light ms-2">
                  Kerala First Tuition Academy
                </span>
                <br />
                Opposite Students Book Stall <br />
                ChurchStop, Chalakudy South Junction
              </p>
            </div>
          </div>

          <hr class="mt-4 mb-0" />

          <div class="py-3">
            <div class="container px-0">
              <div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
                <div class="clod text-body text-primary-hover">
                  Copyrights ©2023 Kerala First. Build by
                  <NavLink
                    style={{ "text-decoration": "none" }}
                    to="https://www.mashuptech.in/"
                    target="_blank"
                    class="text-body"
                  >
                    MashupTech
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
