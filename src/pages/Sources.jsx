import React from 'react'

const bibliography = [
  {
    id: 'abi-jaoude-2020',
    citation: (
      <>
        Abi-Jaoude, Elia, et al. &quot;Smartphones, Social Media Use and Youth Mental Health.&quot; <cite>CMAJ</cite>, vol.
        192, no. 6, 2020, pp. E136-E141. doi:10.1503/cmaj.190434.
      </>
    ),
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1503/cmaj.190434' },
      { label: 'Full text', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7012622/' }
    ],
    annotation:
      'The article argues that smartphone and social media use correlate with the increase in mental distress, self-injurious behavior, and suicidality among youth. The evidence comes from multiple previous research studies and reviews. This source is important because it explores different sub-parts of mental health such as self-harm, sleep loss, and social skills.'
  },
  {
    id: 'berryman-2018',
    citation: (
      <>
        Berryman, Chloe, Christopher J. Ferguson, and Charles Negy. &quot;Social Media Use and Mental Health among Young
        Adults.&quot; <cite>Psychiatric Quarterly</cite>, vol. 89, no. 2, 2018.
      </>
    ),
    links: [{ label: 'Link', href: 'https://link.springer.com/article/10.1007/s11126-017-9535-6' }],
    annotation:
      'This paper highlights how specific online behaviors such as vague booking are associated with loneliness and suicidal thoughts. It challenges the assumption that all social media use is harmful and emphasizes that quality of interaction matters more than quantity.'
  },
  {
    id: 'braghieri-2022',
    citation: (
      <>
        Braghieri, Luca, Ro&apos;ee Levy, and Alexey Makarin. &quot;Social Media and Mental Health.&quot;{' '}
        <cite>American Economic Review</cite>, vol. 112, no. 11, 2022. doi:10.1257/aer.20211218.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://www.aeaweb.org/articles?id=10.1257/aer.20211218' }],
    annotation:
      'This article provides strong causal evidence that the introduction of Facebook significantly worsened mental health outcomes among U.S. college students. Using a large quasi-experimental dataset of over 430,000 students from 775 colleges, the study shows that Facebook use is linked to increases in depression, anxiety, and declines in academic performance. Its findings are especially important because they rely on rigorous economic methods and real expansion data, making it one of the strongest empirical studies connecting social media to negative mental health effects in young adults.'
  },
  {
    id: 'coyne-2020',
    citation: (
      <>
        Coyne, Sarah M., et al. &quot;Does Time Spent Using Social Media Impact Mental Health?&quot;{' '}
        <cite>Computers in Human Behavior</cite>, vol. 104, 2020.
      </>
    ),
    links: [{ label: 'Link', href: 'https://www.sciencedirect.com/science/article/pii/S0747563219303723' }],
    annotation:
      'This eight-year longitudinal study of 500 adolescents finds that time spent on social media is correlated with mental health but does not directly cause changes in depression or anxiety. Using long-term data and rigorous statistical models, the study challenges the assumption that screen time alone drives poor mental health outcomes.'
  },
  {
    id: 'craig-2021',
    citation: (
      <>
        Craig, Shelley L., et al. &quot;Can Social Media Participation Enhance LGBTQ+ Youth Well-Being?&quot;{' '}
        <cite>Social Media + Society</cite>, vol. 7, no. 1, 2021. doi:10.1177/2056305121988931.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1177/2056305121988931' }],
    annotation:
      'This study shows that social media offers important benefits for LGBTQ+ youth, including access to support, identity development, and emotional connection. Using survey data from over 6,000 participants, it introduces the Social Media Benefits Scale to measure these positive effects, adding valuable nuance to the discussion of social media’s overall impact on youth.'
  },
  {
    id: 'feijoo-2025',
    citation: (
      <>
        Feijoo, Beatriz, and Arantxa Vizcaino-Verdu. &quot;The Impact of Social Media Aesthetic Capital on Adolescent Body
        Image.&quot; <cite>Psychology of Popular Media</cite>, 2025. doi:10.1037/ppm0000637.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1037/ppm0000637' }],
    annotation:
      'This study finds that social media turns physical appearance into “aesthetic capital,” where beauty and fitness increase social status among adolescents. Using surveys and interviews, it shows how influencer culture and algorithms intensify anxiety, self-comparison, and body dissatisfaction. It helps explain how these pressures begin in adolescence and carry into college years.'
  },
  {
    id: 'garg-2023',
    citation: (
      <>
        Garg, Muskan. &quot;Mental Health Analysis in Social Media Posts: A Survey.&quot;{' '}
        <cite>Archives of Computational Methods in Engineering</cite>, vol. 30, 2023. doi:10.1007/s11831-022-09863-z.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1007/s11831-022-09863-z' }],
    annotation: 'This article shows that machine learning and natural language processing can analyze social media text to detect mental health risks such as depression, stress, and suicidal behavior. Based on over 90 studies across platforms like Twitter and Reddit, it highlights how AI can responsibly monitor psychological trends in real time, supporting the link between social media activity and young adults’ mental health.'
  },
  {
    id: 'harmony-2025',
    citation: (
      <>
        Harmony Healthcare IT. &quot;Phone Screen Time Addiction &amp; Usage — New Survey Data &amp; Statistics.&quot;
        Harmony Healthcare IT, 2025.
      </>
    ),
    links: [{ label: 'Report', href: 'https://www.harmonyhit.com/phone-screen-time-statistics/' }],
    annotation: 'This survey shows that screen time and phone addiction are rising in the U.S., especially among Gen Z, with social media identified as the most addictive app. It also finds that most users want to reduce screen time to improve mental health. While the data clearly shows the scale of the problem, it is not peer-reviewed and does not analyze causal mechanisms.'
  },
  {
    id: 'hong-2021',
    citation: (
      <>
        Hong, Wei, et al. &quot;Social Media Exposure and Mental Health during COVID-19.&quot;{' '}
        <cite>Cyberpsychology, Behavior, and Social Networking</cite>, 2021. doi:10.1089/cyber.2020.0387.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1089/cyber.2020.0387' }],
    annotation: 'This COVID-19–era study finds that exposure to pandemic-related social media content increased psychological distress among college students, largely through rumination. Using survey data from 439 students in Wuhan, it also shows that mindfulness can reduce vulnerability to this stress. The study is valuable for highlighting cognitive mechanisms that explain why social media affects some students more than others.'
  },
  {
    id: 'knowles-2025',
    citation: (
      <>
        Knowles, Ellen A., and BreAnne A. Danzi. &quot;The Role of Online Social Support in Mental Health.&quot;{' '}
        <cite>Children</cite>, vol. 12, 2025. doi:10.3390/children12020113.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.3390/children12020113' }],
    annotation: 'This study finds that social media provides important social support for adolescents, especially those in rural or geographically isolated areas. Based on surveys from 275 students, it shows that online platforms can serve as positive support systems, challenging the idea that social media is only harmful.'
  },
  {
    id: 'lavis-2020',
    citation: (
      <>
        Lavis, Anna, and Rachel Winter. &quot;Online Harms or Benefits?&quot;{' '}
        <cite>Journal of Child Psychology and Psychiatry</cite>, vol. 61, 2020. doi:10.1111/jcpp.13245.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1111/jcpp.13245' }],
    annotation: 'This study finds that online self-harm discussions often provide support rather than encourage harmful behavior. Using posts and interviews, it shows that social media can serve as a coping space for youth who avoid offline help due to stigma. The findings challenge content removal strategies and suggest that struggling individuals may turn to social media for support rather than be harmed by it.'
  },
  {
    id: 'naslund-2020',
    citation: (
      <>
        Naslund, John A., et al. &quot;Social Media and Mental Health: Benefits, Risks, and Opportunities.&quot;{' '}
        <cite>Journal of Technology in Behavioral Science</cite>, vol. 5, 2020.
      </>
    ),
    links: [{ label: "Link", href: 'https://link.springer.com/article/10.1007/s41347-020-00134-x' }],
    annotation: 'This article explains that social media presents both benefits and serious risks for mental health, particularly for young adults. While it can provide peer support and interventions, it is also linked to increased anxiety, depression, cyberbullying, and privacy concerns. Using evidence from multiple studies, it supports the idea that social media can both help and harm mental health, with significant negative effects on young users.'
  },
  {
    id: 'nesi-2020',
    citation: (
      <>
        Nesi, Jacqueline. &quot;The Impact of Social Media on Youth Mental Health: Challenges and Opportunities.&quot;{' '}
        <cite>North Carolina Medical Journal</cite>, vol. 81, 2020.
      </>
    ),
    links: [{ label: 'Link', href: 'https://ncmedicaljournal.com/article/55247' }],
    annotation: 'This commentary discusses both the challenges and opportunities social media creates for youth mental health. Using usage data and clinical research, it highlights factors such as cybervictimization, humor, and online social support as key influences. It helps explain why social media use may affect mental health in different ways.'
  },
  {
    id: 'niu-2024',
    citation: (
      <>
        Niu, Yanzhuo, et al. &quot;Shelter in the Online World?&quot;{' '}
        <cite>Translational Issues in Psychological Science</cite>, vol. 10, 2024. doi:10.1037/tps0000414.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1037/tps0000414' }],
    annotation: 'This study of 849 U.S. college students during early COVID-19 finds that social media use had both harmful and protective effects on mental health. Exposure to COVID-related content increased anxiety and depression through information overload, while private communication helped reduce distress. The results show that social media can both intensify stress and serve as a coping tool, with notable gender differences.'
  },
  {
    id: 'panchal-2024',
    citation: (
      <>
        Panchal, Nirmita. &quot;Racial and Ethnic Disparities in Mental Health Care.&quot; KFF, 2024.
      </>
    ),
    links: [{ label: 'Link', href: 'https://www.kff.org/racial-equity-and-health-policy/' }],
    annotation: 'This study examines how racial injustice and disparities during COVID-19 affected mental healthcare access and treatment. It finds that White adults are more likely to receive accurate diagnoses and care than non-White individuals. The study is useful for analyzing mental health differences across racial groups, though it applies to all adults rather than only college students.'
  },
  {
    id: 'roberts-2014',
    citation: (
      <>
        Roberts, James, et al. &quot;The Invisible Addiction: Cell-Phone Activities and Addiction.&quot;{' '}
        <cite>Journal of Behavioral Addictions</cite>, vol. 3, 2014. doi:10.1556/JBA.3.2014.015.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1556/JBA.3.2014.015' }],
    annotation: 'This study examines cellphone addiction in college students and finds that it is a socially driven behavior shaped by specific platform activities that differ by gender, such as Instagram use among females. It helps identify which online behaviors contribute to addiction, but its 2014 data is outdated and it does not directly measure effects on mental health outcomes like anxiety or depression.'
  },
  {
    id: 'scheinbaum-2024',
    citation: (
      <>
        Scheinbaum, Angeline Close, editor. <cite>The Darker Side of Social Media: Consumer Psychology and Mental Health</cite>.
        Routledge, 2024.
      </>
    ),
    annotation: 'This chapter argues that while social media helps people stay connected and is a method to express themselves, it also contributes to serious mental health issues like anxiety, depression, and low self-esteem. The authors support their argument using research from psychology and consumer behavior, as well as examples from common social media platforms like instagram and tiktok. This source is important because it explains how social media design and marketing techniques can psychologically influence users, especially young adults spending a large amount of time online. It connects to my thesis by showing how the constant exposure to idealized posts and targeted advertising can make college students more likely to compare themselves to others, thus leading to negative emotions and poor mental health outcomes.'
  },
  {
    id: 'shannon-2022',
    citation: (
      <>
        Shannon, Holly, et al. &quot;Problematic Social Media Use in Adolescents.&quot; <cite>JMIR Mental Health</cite>, 2022.
        doi:10.2196/33450.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.2196/33450' }],
    annotation: 'This review of 18 studies with over 9,000 participants finds a positive correlation between social media use and mental health problems such as depression, anxiety, and stress, though it does not establish causation. The study is useful as a methodological reference for similar research on university students but is limited by a lack of geographic and age-specific data.'
  },
  {
    id: 'twenge-2018',
    citation: (
      <>
        Twenge, Jean M., et al. &quot;Decreases in Psychological Well-Being among American Adolescents after 2012.&quot;{' '}
        <cite>Emotion</cite>, vol. 18, 2018. doi:10.1037/emo0000403.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1037/emo0000403' }],
    annotation: 'This large-scale study analyzes national survey data from over 1.1 million U.S. adolescents collected between 1991 and 2016 and finds a sharp decline in psychological well-being after 2012. The authors link this shift to the rapid adoption of smartphones and the increase in screen time, especially social media use. They argue that screen time replaced protective activities such as in-person social interaction, physical activity, and sleep. This study is important for our research because it identifies a clear historical turning point and shows how the mental health decline in adolescents directly precedes trends now seen in college students.'
  },
  {
    id: 'ucdavis-2024',
    citation: (
      <>
        UC Davis Health. &quot;Social Media&apos;s Impact on Our Mental Health and Tips to Use It Safely.&quot; UC Davis Health, 2024.
      </>
    ),
    links: [
      {
        label: 'Link',
        href: 'https://health.ucdavis.edu/blog/cultivating-health/social-medias-impact-our-mental-health-and-tips-to-use-it-safely'
      }
    ],
    annotation: 'This blog explains why social media is so appealing by describing how dopamine release, likes, comments, and FOMO reinforce repeated use. It shows how features such as filters and feedback systems can increase self-doubt, anxiety, and depression when users do not receive expected responses. The article also discusses cyberbullying as an added risk of online interaction. Overall, it helps explain how specific social media features contribute to rising mental health problems.'
  },
  {
    id: 'valkenburg-2022',
    citation: (
      <>
        Valkenburg, Patti M., et al. &quot;Social Media Use and Its Impact on Adolescent Mental Health.&quot;{' '}
        <cite>Current Opinion in Psychology</cite>, vol. 44, 2022. doi:10.1016/j.copsyc.2021.08.017.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.copsyc.2021.08.017' }],
    annotation: 'This article reviews 25 major studies published between 2019 and mid-2021 and finds that most links between social media use and mental health are weak or inconsistent, with only a few studies showing strong effects. By synthesizing multiple reviews, it provides a balanced and comprehensive overview that challenges the common belief that social media is always strongly harmful to mental health. This source is important as a background for the thesis because it helps frame the debate and motivates further investigation using our own dataset.'
  },
  {
    id: 'vornholt-2021',
    citation: (
      <>
        Vornholt, Piper, and Munmun De Choudhury. &quot;Understanding Social Media-Based Mental Health Support.&quot;{' '}
        <cite>JMIR Mental Health</cite>, vol. 8, 2021. doi:10.2196/24512.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.2196/24512' }],
    annotation: 'This study argues that limited access to therapy on college campuses has led many students to seek social and emotional support through social media. Using a mix of surveys and interviews, the researchers found that about 70 percent of participants had recently experienced mental health challenges, and roughly half turned to social media for support. The findings highlight how widespread mental health struggles have become among college students and how online platforms now play a major role in coping and stigma reduction. This study supports our thesis by showing how social media influences students’ experiences with anxiety and depression and points to gaps in traditional campus support systems.'
  }
]

export default function Sources() {
  return (
    <section className="stack">
      <h1>Sources</h1>
      <p className="muted">
        Annotated bibliography of the research, datasets, and reports we rely on for our analysis of digital life and student
        mental health.
      </p>

      <div className="stack bibliography">
        <h2>Annotated Bibliography</h2>
        {bibliography.map((entry) => (
          <article key={entry.id} className="card bib-card">
            <p className="bib-citation">{entry.citation}</p>
            {entry.links?.length ? (
              <div className="bib-links">
                {entry.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
            <p className="annotation">{entry.annotation}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
