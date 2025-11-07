import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="stack">
      <h1>The Impact of Social Networks on College Students' Mental Health</h1>
      <p>
        This site explores how platforms like Instagram, TikTok, X, and Reddit shape student well being,
        with a focus on stress, anxiety, belonging, and help seeking.
      </p>

      <div className="grid two">
        <article className="card">
          <h3>Research Focus</h3>
          <p>We examine usage patterns, content exposure, and community dynamics, then connect them to self reported well being metrics.</p>
          <ul>
            <li>Screen time and sleep</li>
            <li>Comparison effects</li>
            <li>Peer support and community</li>
            <li>Campus resources and referrals</li>
          </ul>
        </article>

        <article className="card">
          <h3>What to Expect</h3>
          <p>Brief methods, a transparent data critique, team background, and a curated list of sources you can reuse.</p>
          <p><Link className="button" to="/data-critique">Read the Data Critique</Link></p>
        </article>
      </div>

      <section className="card">
        <h3>Key Questions</h3>
        <ol>
          <li>How do different social networks correlate with self reported stress and anxiety among students</li>
          <li>Which features or content types appear most associated with positive or negative outcomes</li>
          <li>What practical steps can students and campuses take to improve digital well being</li>
        </ol>
      </section>
    </section>
  )
}
