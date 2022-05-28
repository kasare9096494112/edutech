import React from "react";

function Header() {
  return (
    <div>
      <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><a href="index.html">EduTech</a></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="active" href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/trainers">Trainers</a></li>
              <li><a href="/events">Events</a></li>
              <li className="dropdown"><a href="/"><span>Standards</span> 
              <i className="bi bi-chevron-down" /></a>
                <ul>
                  <li><a href="">Class 5</a></li>
                  <li className="dropdown"><a href="/"><span>&nbsp;&nbsp;&nbsp;&nbsp; Subject</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="https://jobscaptain.com/basic-maths-formulas-pdf/">Math</a></li>
                      <li><a href="/">Science</a></li>
                    </ul>
                  </li>
                  <li><a href="">Class 6</a></li>
                  <li className="dropdown"><a href="/"><span>&nbsp;&nbsp;&nbsp;&nbsp; Subject</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="http://sarkariresult.schools360.in/download/maths-formulas-for-class-6-pdf/">Math</a></li>
                      <li><a href="/">Science</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Class 7</a></li>
                  <li className="dropdown"><a href="/"><span>&nbsp;&nbsp;&nbsp;&nbsp; Subject</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="http://sarkariresult.schools360.in/download/maths-formulas-for-class-8-pdf/">Math</a></li>
                      <li><a href="/">Science</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Class 8</a></li>
                  <li className="dropdown"><a href="/"><span>&nbsp;&nbsp;&nbsp;&nbsp; Subject</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="http://sarkariresult.schools360.in/download/maths-formulas-for-class-8-pdf/">Math</a></li>
                      <li><a href="/">Science</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Class 9</a></li>
                  <li className="dropdown"><a href="/"><span>&nbsp;&nbsp;&nbsp;&nbsp; Subject</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="https://drive.google.com/file/d/1qmbfLtIVixo2jRvyCpWRjoHjoScsnKst/view?usp=sharing">Math</a></li>
                      <li><a href="http://ktbs.kar.nic.in/New/website%20textbooks/class9/9th%20standard/9th-english-maths-1.pdf">Science</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Class 10</a></li>
                  <li className="dropdown"><a href="/"><span>&nbsp;&nbsp;&nbsp;&nbsp; Subject</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="https://drive.google.com/file/d/1qG0ogL81uDxaaMXfjgO2XRdOIjRkuSy-/view?usp=sharing">Math</a></li>
                      <li><a href="/">Science</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/contect">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
          <a href="courses.html" className="get-started-btn">Get Started</a>
        </div>
      </header>
      </>
     
    </div>
  );
}

export default Header;
