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
        title="What went into our project? How were source selected?"
        likes={engagement.project.likes}
        comments={engagement.project.comments}
        shares={engagement.project.shares}
      >
        <p>
          Our project examines three interconnected research questions to explore how social 
          media affects the young adults' mental health and its correlation with physical health. 
          Our first research question is how student demographics (age, gender, state) relate to 
          mental health severity. Our second research question is how relationship status, sleeping 
          hours, and student status relate to social media addiction (measured by average daily use). 
          For our third research question: how social media addiction severity relates to mental 
          and physical health outcomes. To build a framework for interpreting our data, we searched 
          for peer-reviewed literature using key terms such as "social media," "young adults," "mental health," 
          "addiction," "depression," "anxiety," and "sleep" in the UCLA library portal and Google Scholar. 
          We prioritized sources that explored the relationship between social media use and mental 
          health from multiple disciplinary perspectives, including psychology, public health, and 
          digital humanities, because prior research does not agree on whether social media is primarily 
          harmful, beneficial, or context-dependent for young adults.
        </p>
        <p>
          Our sources included systematic reviews on social media's influence on depression and anxiety, 
          and research on active versus passive use. We also used two data sets, the first one about the 
          state and self-reported general he,alth, depression, and anxiety severity from young adults. 
          The secondary data set included self-reported average sleep hours per day, average scrolling 
          hours per day, depression severity, and the state they reside in from young adults' responses. 
          These two data sets informed our decision to focus on measurable variables like usage hours 
          and self-reported symptoms. Reading across these perspectives helped us identify recurring 
          factors such as sleep deprivation, access to mental health resources based on teh state that 
          they live in, and usage intensity that guided our survey design and data interpretation. By 
          grounding our project in existing debates about social media's mixed effects on wellbeing, 
          we ensured that our analysis would contribute to ongoing conversations rather than oversimplifying 
          the relationship between screen time and mental health.
        </p>
      </FbPost>

      <FbPost
        title="Processing our data"
        likes={engagement.processing.likes}
        comments={engagement.processing.comments}
        shares={engagement.processing.shares}
      >
        <p>
          At the processing level, we collected survey data from students about their demographics, 
          social media usage patterns, sleep habits, relationship status, and self-reported mental 
          and physical health symptoms. After collecting responses, we cleaned and standardized the 
          data in spreadsheet form, checking for missing values and deciding how to categorize 
          variablessuch as turning the categorical data from being represented as low, moderate, 
          and high into numerical data so we can get averages and do statistics and visualizations. 
          This required deliberate choices about how to handle ambiguous responses. For instance, 
          whether to treat irregular sleep patterns as a separate category or merge them with low 
          sleep hours, which reflects the DH principle that data is always constructed, not neutral.
        </p>
        <p>
          We then imported our cleaned CSV files into Tableau to create interactive visualizations 
          (such as bar charts, interactive maps, and scatter plots) that allowed us to explore 
          correlations between variables. For example, we used Tableau to visualize whether higher daily 
          social media use correlated with lower sleep hours or higher mental health severity scores, and 
          to compare patterns across demographic groups (age, gender, state). We also used TimelineJS to 
          contextualize our findings within broader trends in social media adoption and mental health 
          awareness campaigns over time. Missing or incomplete data, such as limited geographic diversity 
          in our sample or a lack of validated clinical measures. That forced us to narrow our claims and 
          clearly state these limitations. Rather than asserting causal relationships, we focused on 
          identifying associations and patterns that could inform future research. This process was 
          guided by peer and instructor feedback, ensuring that our visualizations supported interpretations 
          rather than oversimplified conclusions about social media as purely "addictive" or "harmful."
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
