import React from "react";

function About() {
  return (
    <div>
      {" "}
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>About Us</h2>
            <p> </p>
          </div>
          This is a one stop website for students to revise the concepts of
          their respective class, we provide a downloadble file which can be
          store in their local storage device.
        </div>
        {/* End Breadcrumbs */}
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
                  src="https://imgs.search.brave.com/7pqn6dNLMBAeefcZAEuJT4GxP2Eqpnv3eQXf3fhhvqY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/c2JzLmNvbS5hdS95/b3VybGFuZ3VhZ2Uv/c2l0ZXMvc2JzLmNv/bS5hdS55b3VybGFu/Z3VhZ2UvZmlsZXMv/aW5kaWFuX3Byb2Zl/c3Npb25hbHMuanBn"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>All teachers teachs, Greatest teacher "Inspires".</h3>
                <p className="fst-italic"></p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" />
                    We provide all our courses at most reasonable prices.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    A team of well qualifiedd mentors.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    Helping the youth to shape their careers.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />
                    One stop for Revision.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts section-bg">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={0}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Students</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={0}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Courses</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={0}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Events</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={4}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </div>
  );
}

export default About;
