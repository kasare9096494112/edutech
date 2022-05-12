import React from 'react'
import Trainers from './Trainers'

function Trainerspage() {
  return (
    <div>
    <main id="main" data-aos="fade-in">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Trainers</h2>
          <p>
            We are students of Information Technology at Shri Guru Gobind ShinghJi Institute of Technology, Nanded.
            Mr. Suryakant Kasare 
            Mr. Piyush Sonone
            Ms. Vaishanvi Arora
            Ms. Radhika Sabu 
          </p>
        </div>
      </div>
      <Trainers/>
    </main></div>
  )
}

export default Trainerspage