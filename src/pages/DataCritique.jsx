import React from 'react'

export default function DataCritique() {
  return (
    <section className="stack">
      <h1>Data Critique</h1>
      <p>
        This section describes the data we considered, how it was collected, and its strengths and limits.
        It is a living document that clarifies what our data can and cannot support.
      </p>

      <article className="card">
        <h3>Provenance and Collection</h3>
        <p>
          We aggregate public survey data and campus wellness reports, plus platform level summaries where available.
          Sampling frames vary across sources. Some rely on voluntary response which can introduce bias.
        </p>
      </article>

      <article className="card">
        <h3>Variables</h3>
        <ul>
          <li>Usage: minutes per day, posting frequency, content categories</li>
          <li>Well being: stress, anxiety, loneliness, sleep quality</li>
          <li>Context: year in school, housing, work hours, major group</li>
        </ul>
      </article>

      <article className="card">
        <h3>Limits and Bias</h3>
        <p>
          Self reports may under or over estimate usage. Cross sectional snapshots limit causal claims.
          Platform APIs can be incomplete, and policy changes over time affect comparability.
        </p>
      </article>

      <article className="card">
        <h3>Ethics and Privacy</h3>
        <p>
          No personally identifying information is collected in our analysis. When we show examples, they are synthetic or already public.
        </p>
      </article>
    </section>
  )
}
