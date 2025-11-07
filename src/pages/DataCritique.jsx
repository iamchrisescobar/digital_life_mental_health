import React from 'react'

export default function DataCritique() {
  return (
    <section className="stack">
      <h1>Data Critique</h1>
      <p>
        This page summarizes where our data comes from, what it measures, and what it can and cannot tell us.
        It will evolve as we refine our sources and methods.
      </p>

      <article className="card">
        <h3>Origin of Sources</h3>
        <p>
          Our primary dataset comes from self reported student surveys that include mental and physical health items.
          Examples include questions like “How would you rate your general health for the past 12 months” and 1–5
          scales for anxiety. Several items align with the American College Health Association National College Health
          Assessment.
        </p>
      </article>

      <article className="card">
        <h3>Who Funded the Dataset</h3>
        <p>
          Funding sources include the Deutsche Forschungsgemeinschaft, CRC, TRR (280092119), and the Foerder Institute
          for Economic Research. Principal investigators include Luca Braghieri, Ro’ee Levy, and Alexey Makarin.
        </p>
      </article>

      <article className="card">
        <h3>Data Generation</h3>
        <p>
          Data was collected through self report surveys and scored with validated clinical tools.
          The PHQ-9 was used to screen for depression severity and the GAD-7 for anxiety. The survey
          also includes general health, academic impact, demographics, and use of mental health services.
          Responses span multiple months and a range of ages.
        </p>
      </article>

      <article className="card">
        <h3>Dataset Description</h3>
        <p>
          The dataset focuses on the rise of Facebook and related effects on the mental health of university
          populations across the United States. Variables include birth year, state, sex, race, and full time
          status, plus mental and physical health over the past 12 months. Students rate overall health on a
          five point scale and report anxiety and depression levels on numeric scales. The survey also records
          diagnoses, service access, and frequencies of selected issues.
        </p>
      </article>

      <article className="card">
        <h3>What the Data Illuminates</h3>
        <ul>
          <li>Associations between the expansion of Facebook and student depression or anxiety.</li>
          <li>Correlations between demographics and mental health outcomes.</li>
          <li>Links between cumulative anxiety or depression scores and academic performance.</li>
          <li>Self perception of mental and general health across the sample.</li>
        </ul>
        <p>
          The detailed demographics and validated screens support descriptive and correlational analyses.
        </p>
      </article>

      <article className="card">
        <h3>Limitations</h3>
        <ul>
          <li>No direct measures of social media usage such as time spent or specific platforms.</li>
          <li>Mentions Facebook expansion but does not itself establish causality.</li>
          <li>Binary sex options only, which omits nonbinary identities.</li>
          <li>Sample is college students, which limits generalization.</li>
          <li>Survey timing overlaps 2020–2022, so COVID-19 may confound results.</li>
        </ul>
      </article>

      <article className="card">
        <h3>Information Missing</h3>
        <ul>
          <li>Frequency and hours on social media and platform level behaviors.</li>
          <li>Socioeconomic status, GPA, and other academic or financial context.</li>
          <li>Timing of each response, which limits age related assumptions.</li>
        </ul>
        <p>
          We plan to add a secondary dataset that captures social media usage for college populations
          and link it to our survey data to better study how social networks relate to mental health.
        </p>
      </article>
    </section>
  )
}
