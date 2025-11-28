import React, { useState } from 'react'
import FbPost from '../components/FbPost.jsx'
import TeamMemberCard from '../components/TeamMemberCard.jsx'

export default function AboutUs() {
  const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const [engagement] = useState(() => ({
    project: { likes: randomBetween(110, 620), comments: randomBetween(8, 80), shares: randomBetween(4, 50) },
    sources: { likes: randomBetween(90, 520), comments: randomBetween(6, 70), shares: randomBetween(3, 40) },
    processing: { likes: randomBetween(90, 520), comments: randomBetween(6, 70), shares: randomBetween(3, 40) },
    narrative: { likes: randomBetween(90, 520), comments: randomBetween(6, 70), shares: randomBetween(3, 40) }
  }))

  return (
    <section className="stack">
      <h1>About Us</h1>

      <FbPost
        title="What went into our project?"
        likes={engagement.project.likes}
        comments={engagement.project.comments}
        shares={engagement.project.shares}
      >
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
      </FbPost>

      <FbPost
        title="Selecting our sources"
        likes={engagement.sources.likes}
        comments={engagement.sources.comments}
        shares={engagement.sources.shares}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          volutpat feugiat nisl, a facilisis turpis fermentum non. Pellentesque
          ac turpis dictum, tincidunt lectus vitae, pulvinar arcu. Etiam ac
          lectus vitae neque lobortis aliquet.
        </p>
      </FbPost>

      <FbPost
        title="Processing our data"
        likes={engagement.processing.likes}
        comments={engagement.processing.comments}
        shares={engagement.processing.shares}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
          posuere ante. Vivamus tincidunt, mauris at imperdiet porttitor, arcu
          erat gravida augue, sed rhoncus libero nibh sed risus. Integer sed
          nisi at metus maximus finibus.
        </p>
      </FbPost>

      <FbPost
        title="Presenting our narrative"
        likes={engagement.narrative.likes}
        comments={engagement.narrative.comments}
        shares={engagement.narrative.shares}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
          habitasse platea dictumst. Sed quis lobortis erat. Suspendisse
          potenti. Vivamus congue, lorem at bibendum ultrices, dolor lacus
          facilisis velit, id lobortis lacus sem ut nisi.
        </p>
      </FbPost>

      {/* Meet the Team (unchanged) */}
      <section className="stack">
        <h2>Meet the Team</h2>

        <div className="team-grid">
          <TeamMemberCard
            name="Marina Nasr"
            yearMajor="Third-year Biology major"
            role="Project Narrative Lead"
            imgSrc="images/team/MarinaNasr.jpg"
            linkedinUrl="https://www.linkedin.com/in/marina-nasr-059a87288"
            email="marinanasr@ucla.edu"
          />
          <TeamMemberCard
            name=" Tina (Tianyi) Su"
            yearMajor="Fourth-year Statistics and Data Science major, Global Health minor"
            role="Data Visualization"
            imgSrc="images/team/TinaSu.jpg"
            linkedinUrl="https://www.linkedin.com/in/tina-su-7a9b6c/"
            email="kristinas7796@ucla.edu"
          />
          <TeamMemberCard
            name="Christian Escobar"
            yearMajor="Fourth-year Computer Science major"
            role="Web Development Manager"
            imgSrc="images/team/ChristianEscobar.jpg"
            linkedinUrl="https://www.linkedin.com/in/christianescobar02/"
            email="chrisescobar@ucla.edu"
          />
          <TeamMemberCard
            name="Leo Wong"
            yearMajor="Third-year Statistics and Data Science major"
            role="Data Specialist"
            imgSrc="images/team/LeoWong.jpg"
            linkedinUrl="https://www.linkedin.com/in/leowuniv"
            email="leowuniv@ucla.edu"
          />
          <TeamMemberCard
            name="Jiahong Chen"
            yearMajor="Second-year Statistics and Data Science"
            role="Data Visualization"
            imgSrc="images/team/JiahongChen.jpg"
            linkedinUrl="https://www.linkedin.com/in/jiahong-chen-760139331/"
            email="jiahongchen13@g.ucla.edu"
          />
          <TeamMemberCard
            name="Cynthia Szeto"
            yearMajor="Fourth-year Psychology major Digital Humanities minor"
            role="Project Manager"
            imgSrc="images/team/CynthiaSzeto.jpg"
            linkedinUrl="https://www.linkedin.com/in/cynthiaszeto/"
            email="cynthiaszeto@ucla.edu"
          />
          <TeamMemberCard
            name="Qiyang (Rosie) Chen"
            yearMajor="Fourth-year double major in Statistics and Data Science, Applied Math, Specialization in Computing"
            role="Data Visualization"
            imgSrc="images/team/RosieChen.JPG"
            linkedinUrl="https://www.linkedin.com/in/qiyang-rosalinda-chen-5b5584210/"
            email="rosiechen1005@g.ucla.edu"
          />
        </div>
      </section>
    </section>
  )
}
