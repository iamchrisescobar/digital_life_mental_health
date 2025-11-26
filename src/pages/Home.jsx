import React, { useState } from 'react'

const sliderItems = [
  {
    title: 'Plot Number 1',
    caption: 'Connections and conversations that shape student life.',
    gradient: 'linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 100%)'
  },
  {
    title: 'Plot Number 2',
    caption: 'Moments of calm, study, and scrolling between classes.',
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
  },
  {
    title: 'Plot Number 3',
    caption: 'Students across borders comparing digital habits.',
    gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  }
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const totalSlides = sliderItems.length

  const prevSlide = () => setIndex((index - 1 + totalSlides) % totalSlides)
  const nextSlide = () => setIndex((index + 1) % totalSlides)

  return (
    <section className="home stack">
      <header className="home-hero stack">
        <p className="eyebrow">Digital Life & Student Mental Health</p>
        <h1>The Impact of Social Networks on College Students&apos; Mental Health</h1>
        <p className="lead">
          Looking at how social media habits, wellbeing, and student life intersect through data, literature,
          and the voices of our peers.
        </p>
      </header>

      <article className="home-card stack">
        <h2>Introduction To Our Project</h2>
        <h3>Rising Use, Rising Concerns</h3>
        <p>
          Do you ever find yourself doom-scrolling? Do you ever feel like you are missing out on seeing other people&apos;s posts?
          How does this make you feel? The usage of social media is on the rise nowadays, but so are mental health issues such as
          depression and anxiety. Across the United States, young adults are facing record levels of mental health problems. This
          project aims to examine the true effect of social media on the mental health of young adults by analyzing two separate
          datasets: survey data of a US college with college personnel&apos;s mental health status, and another international dataset
          detailing college students&apos; social media usage from Kaggle. For our analysis using the first dataset, we include variables
          such as home state, sex, race/ethnicity, sleep hours, student full-time status, and student self-reported depression and
          anxiety status. For our analysis using the second dataset, we include variables such as home country, sex, self-reported
          social media usage time, mental health score, and media usage addiction score. We have utilized both datasets along with
          related literature to draw connections from global patterns to the US. By analyzing both datasets and supplemental literature
          research, we have found that social media has a major influence on mental health and is also correlated with demographic
          information (geographic, sex, race/ethnicity). In addition, we have found that social media correlates with other factors
          such as sleep hours and relationship status, which can all contribute towards negative mental health. Together, these questions
          allow for a deeper examination of how mental health conditions develop within college life.
        </p>
        <h3>A Nuanced Relationship</h3>
        <p>
          Our literature review has highlighted that social media and mental health have a complex relationship that cannot be categorized
          as either good or bad. The general consensus is that the relationship is not purely negative, but does have significant risks and
          unique benefits, as well as questions regarding data reliability. For instance, Valkenburg et al.&apos;s umbrella review of prior reviews
          concludes that "SNS use is weakly associated with higher levels of ill-being... but also with higher levels of well-being." Rather
          than having impactful effect sizes, they tend to be small, inconsistent, and often interpreted in exaggerated ways. Most research
          typically focuses on the negative effects, like the prevalence of problematic use and addiction, decreased psychological well-being,
          and body image concerns. This has led to the public opinion that social media is harmful for youth. To demonstrate, Niu et al.&apos;s survey
          of 849 US college students during the early years of COVID-19 finds that higher depression and anxiety are attributed to passive
          consumption of COVID-19 info. On the other hand, direct private communication had a "protective effect," where emotional support
          and companionship mitigated symptoms of depression and anxiety. Yet there is literature that shows substantial positive effects.
          For example, Vornholt&apos;s research shows that although students were nervous about privacy issues on social media platforms, overall,
          they appreciated social media&apos;s benefits in "helping connect with peers on campus" as well as "promoting informal and candid
          disclosures." Altogether, these literatures show that social media&apos;s impact on mental health is neither purely harmful nor beneficial,
          one impactful factor being how students use these platforms. While passive use tends to increase anxiety and depression, interaction
          and supportive communication can provide meaningful emotional benefits. It is also important to consider the quality, context, and type
          of social media use, as this can dictate the impacts. The true magnitude of these effects is unclear, due to variations in the reliability
          of data and results. This leaves critical questions about how different types of social media behavior affect students over time, which
          groups are most vulnerable, and how design features in media platforms impact these outcomes.
        </p>
        <h3>Why This Work Matters</h3>
        <p>
          This project has a significant impact because it addresses the current "hot topics" of society: the rise of social media and the rise of
          discussion on mental health issues. This project connects the two topics together to draw useful patterns that may serve as an advisory for
          others to manage their time differently on social media. This topic has been covered by many mainstream research journals or even news
          articles. However, not many articles consider demographic and physical health data as a part of the analysis, so our work specifically focuses
          on these relationships. We want to understand how demographic characteristics and other personal factors can influence mental health while
          analyzing how social media fits into the picture. This way, we can reach the root of the current mental health crisis. By exploring the underlying
          relationship, our project can provide universities, individual college students, and mental-health counseling professionals with ideas towards
          improving support systems, resource accessibility, time management, and designing targeted interventions. In addition, this topic is extremely
          personal for our team as we are a generation of college students who grew up with social media. This project aims to provide a more complete picture
          of the challenges college students face. By sharing our findings and visualizations with our peers, we hope more students can realize the significance
          of mental health and adopt a healthy relationship with social media. Thus, our mental health and social media project seeks to contribute to the larger
          question of how to build better, more equitable educational environments for all college students.
        </p>
      </article>

      <article className="home-card stack">
        <h2>Research Questions</h2>
        <ol className="research-list">
          <li>How is a student&apos;s demographics (age, gender, state) related to their mental health severity?</li>
          <li>How does relationship status, sleeping hours, student status relate to social media addiction, measured by average daily use of social media?</li>
          <li>How is social media addiction severity related to mental and physical health?</li>
        </ol>
      </article>

      <article className="home-card stack timeline-card">
        <h2>Interactive Timeline</h2>
        <p>on Social Media main events throughout the past years</p>
        <div className="timeline-placeholder">
          <div className="timeline-track">
            <span className="timeline-dot" />
            <span className="timeline-dot" />
            <span className="timeline-dot" />
            <span className="timeline-dot" />
            <span className="timeline-dot" />
          </div>
          <p className="muted small">Timeline interactions coming soon</p>
        </div>
      </article>

      <article className="home-card stack">
        <h2>Images Slideshow</h2>
        <p className="muted">Sample images to fill the space for now.</p>
        <div className="slider">
          <button className="slider-btn" type="button" aria-label="Previous slide" onClick={prevSlide}>
            &lt;
          </button>
          <div className="slide" style={{ backgroundImage: sliderItems[index].gradient }}>
            <div className="slide-content">
              <span className="slide-tag">Placeholder</span>
              <p className="slide-title">{sliderItems[index].title}</p>
              <p className="slide-caption">{sliderItems[index].caption}</p>
            </div>
          </div>
          <button className="slider-btn" type="button" aria-label="Next slide" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="slider-dots" role="tablist" aria-label="Slideshow dots">
          {sliderItems.map((item, dotIndex) => (
            <button
              key={item.title}
              type="button"
              className={`slider-dot ${dotIndex === index ? 'active' : ''}`}
              aria-label={`Go to slide ${dotIndex + 1}`}
              aria-pressed={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      </article>
    </section>
  )
}
