import React from 'react'

function Events() {
  return (
    <main id="main">
    {/* ======= Breadcrumbs ======= */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Events</h2>
        <p> Coming Soon 
        </p>
      </div>
    </div>{/* End Breadcrumbs */}
    {/* ======= Events Section ======= */}
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="https://imgs.search.brave.com/KtFwm-Ugdw1xnfavMBaoWLLg0w146T8a7nAVP1rsKxQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL3Vua25l/d3MudW5rLmVkdS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/MS9UZWNoLUVkZ2Ut/Q29uZmVyZW5jZS0y/LmpwZw" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Introduction to webdesign</a></h5>
                <p className="fst-italic text-center">Sunday, September 26th at 7:00 pm</p>
                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src="https://imgs.search.brave.com/1RXC0iRgGglakJT9fiQJuCLnKiBPPXo-7O-anwOqwX0/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9kMjZu/d2ZwN2lrcWhmay5j/bG91ZGZyb250Lm5l/dC9XZWJzaXRlL0lt/YWdlcy9leHBlcmll/bnRpYWwvc2xpZGVy/L1RFQ0gtWFAtQVIu/anBn" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href>Marketing Strategies</a></h5>
                <p className="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
                <p className="card-text"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Events