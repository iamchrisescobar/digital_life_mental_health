import React from 'react'

export default function AboutUs() {
  return (
    <section className="stack">
      <h1>About Us</h1>
      <p>
        We are a student research group studying how digital life intersects with mental health on campus.
        This project is part of a final deliverable for a humanities and data practice course.
      </p>

      <div className="grid two">
        <div className="card">
          <h3>Team</h3>
          <ul>
            <li>Research Lead: Your Name</li>
            <li>Data Analyst: Your Name</li>
            <li>Designer: Your Name</li>
            <li>Writer and Editor: Your Name</li>
          </ul>
        </div>

        <div className="card">
          <h3>Methods</h3>
          <p>
            We combine descriptive statistics with close reading of platform features and policies.
            Our goal is clarity and practical value for students and staff.
          </p>
        </div>
      </div>
    </section>
  )
}
