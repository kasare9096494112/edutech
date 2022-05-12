import React from 'react'

function footer() {
  return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>EduTech</h3>
            <p>
              Radhika Sabhu <br />
              SGGS, Vishnupuri, Nanded,<br /> Maharashtra 431606<br /><br />
              <strong>Phone:</strong>&gt;+91 84218 80369<br />
              <strong>Email:</strong> Info@EduTech.gmail.com<br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="/">About us</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="/">Services</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="/">Terms of service</a></li>
            </ul></div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="https://www.matematica.pt/en/useful/math-formulas.php">Mathmatics</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="/">Science</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Team </h4>
            <p>we are the team to macking</p>
            <form action method="post">
              <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          © Copyright <strong><span>EduTech</span></strong>. All Rights Reserved
        </div>
        <div className="credits">

          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/EduTech-free-education-bootstrap-theme/ */}
          Designed by <a href="https://bootstrapmade.com/">Surykant Kasare</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="/" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="/" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="/" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="/" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="/" className="linkedin"><i className="bx bxl-linkedin" /></a>
      </div>
    </div>
  </footer>
  )
}

export default footer