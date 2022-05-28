import React from "react";

function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <h2>We are team of students to help students with their Students</h2>
          <a href="courses.html" className="btn-get-started">
            Get Started
          </a>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <img
                  src="https://www.mumbailive.com/images/media/images/images_1590914638896_students.jpg?bg=d1d1d2&crop=1940%2C1050%2C0%2C0&fit=fill&fm=webp&h=432.2807017543859&height=1050&w=770&width=1940"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>All teachers teach. Greatest teachers inspire</h3>
                <p className="fst-italic">
                  Achieve more with Vedantu, get Free online counselling now
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" />
                    From Top-tier colleges with many years of experience
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    Specially-trained teachers to bring out the best in every
                    student.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Teaching experience of
                    over 4.5 crore hours to 10 lakh students in 1000+ cities in
                    57 countries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className=" d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose EduTech?</h3>
                  <p>
                    The best after-school learning for your child. Your child
                    gets to learn form the best. You need not worry about the
                    logistics of commute, pick and drop, safety, etc. Instant
                    doubt resolution, one-on-one attention and the option to
                    select a class.
                  </p>
                  <div className="text-center">
                    <a href="about.html" className="more-btn">
                      Learn More <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Hero;
