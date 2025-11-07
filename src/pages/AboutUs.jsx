import React from 'react'
import TeamMemberCard from '../components/TeamMemberCard.jsx'

export default function AboutUs() {
  return (
    <section className="stack">
      <h1>About Us</h1>

      {/* What went into our project */}
      <article className="card">
        <h2>What went into our project?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          ultricies velit. Donec id justo id nunc bibendum dapibus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae. Proin in magna et ipsum tincidunt gravida.
        </p>
        <p>
          Aliquam placerat, felis ac mollis finibus, arcu felis accumsan nibh,
          eu vehicula nibh risus non magna. Sed vitae tellus at urna volutpat
          rhoncus. Curabitur euismod vel felis non pretium.
        </p>
      </article>

      {/* Selecting our sources */}
      <article className="card">
        <h2>Selecting our sources</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          volutpat feugiat nisl, a facilisis turpis fermentum non. Pellentesque
          ac turpis dictum, tincidunt lectus vitae, pulvinar arcu. Etiam ac
          lectus vitae neque lobortis aliquet.
        </p>
      </article>

      {/* Processing our data */}
      <article className="card">
        <h2>Processing our data</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
          posuere ante. Vivamus tincidunt, mauris at imperdiet porttitor, arcu
          erat gravida augue, sed rhoncus libero nibh sed risus. Integer sed
          nisi at metus maximus finibus.
        </p>
      </article>

      {/* Presenting our narrative */}
      <article className="card">
        <h2>Presenting our narrative</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
          habitasse platea dictumst. Sed quis lobortis erat. Suspendisse
          potenti. Vivamus congue, lorem at bibendum ultrices, dolor lacus
          facilisis velit, id lobortis lacus sem ut nisi.
        </p>
      </article>

      {/* Meet the Team */}
      <section className="stack">
        <h2>Meet the Team</h2>

        <div className="team-grid">
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Senior · Psychology"
            role="Research Lead"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="alex@example.edu"
          />
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Junior · Data Science"
            role="Data Analyst"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="taylor@example.edu"
          />
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Sophomore · Sociology"
            role="Writer and Editor"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="jordan@example.edu"
          />
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Senior · Design Media Arts"
            role="Designer"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="morgan@example.edu"
          />
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Junior · Statistics"
            role="Methods"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="casey@example.edu"
          />
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Sophomore · Communications"
            role="Outreach"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="riley@example.edu"
          />
          <TeamMemberCard
            name="Name Lastname"
            yearMajor="Senior · Computer Science"
            role="Web Developer"
            imgSrc="https://placehold.co/320x320/png?text=Headshot"
            linkedinUrl="#"
            email="sam@example.edu"
          />
        </div>
      </section>
    </section>
  )
}
