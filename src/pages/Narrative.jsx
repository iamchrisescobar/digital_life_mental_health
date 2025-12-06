import React from "react";
import { Link } from "react-router-dom";
import TableauEmbed from "../components/TableauEmbed.jsx";

export default function Narrative() {
  return (
    <section className="stack narrative">
      <header className="stack">
        <p className="eyebrow">Narrative</p>
        <h1>Connecting social media use with student wellbeing</h1>
      </header>

      <div className="stack">
        <div className="card stack">
          <h2>Introduction</h2>
          <p>
            Recent research has raised concerns that social media may be harming
            the mental health of our students. For instance, Abi-Jaoude et al.
            concluded that smartphone and social media use are “implicated… in
            the increase in mental distress, self-injurious behavior and
            suicidality among youth". (2020) In this context, we analyze how
            college students’s use of social media relates to self-reported
            mental health.
          </p>
          <figure style={{ margin: "1rem auto", width: "100%", maxWidth: "480px" }}>
            <img
              src="images/team/plots/MentalHealthVsSMDailyUse.png"
              alt="Scatter plot showing mental health score trend versus daily social media use"
              style={{ display: "block", width: "100%" }}
            />
            <figcaption
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              Figure 1: Scatter plot showing mental health score trend versus daily social media use
            </figcaption>
          </figure>
          <p>
            Our analysis shows a clear negative correlation. As average daily
            social media usage increases, mental health score decreases (Figure
            1). We model this pattern with the downward-slope trendline on the
            scatterplot, which suggests that heavier social media usage is
            potentially detrimental to the mental health of students. Although
            correlation does not prove causation, it is consistent with growing
            worries that social media can be detrimental to the well-being of
            students.
          </p>
          <p>
            At the same time, we recognize that mental health is a lot more
            complex, and social media can not be isolated as the only cause.
            There are a multitude of factors to consider, like academic stress,
            financial pressures, existing vulnerabilities, and the context and
            content of social media engagement. To better understand this
            complexity, the rest of our project examines how the relationship
            between social media and mental health varies across student
            demographics and circumstances, including platform type, gender,
            general health, sleep duration, and academic standing.
          </p>
        </div>

        <div className="card stack">
          <h2>How Social Media is being Used</h2>
          <TableauEmbed
            title="Treemap of Social Media Platforms"
            path="views/media_addiction/Treemap"
            staticImage="https://public.tableau.com/static/images/me/media_addiction/Treemap/1.png"
            toolbar="yes"
            heightRatio={0.75}
            params={{ tabs: "no" }}
          />
          <p>
            It is extremely important to consider how students are utilizing
            social media. From the treemap we can see that out of all the
            students in this dataset, students spend more time using platforms
            such as WhatsApp, Tiktok, WeChat. These platforms contain features
            such as messaging, calling, and creating/viewing reels. We may be
            able to suspect this is the reason why college students spend an
            increased average of time utilizing these platforms.
          </p>
          <p>
            The treemap also reveals that the more time a student spends on
            social media, the lower their mental health score is. This is shown
            by the lighter colors of WhatsApp, TikTok, Snapchat, and KakaoTalk.
            Most of these platforms are messaging platforms with features such
            as streaming reels and postings as well. This might be a factor that
            lowers students’ mental health scores. On the other hand, platforms
            such as Line and LinkedIn have users reporting a relatively higher
            mental health score due to the limited features of these
            applications.
          </p>
          <p>
            Another pattern that is evident is that platforms such as WhatsApp,
            KakaoTalk, and WeChat are popular platforms used by international
            students. These students are far away from home and may have
            negative emotions due to missing their families. This may be a
            factor that contributes to the lower mental health score. Further
            analysis should be done to investigate the features of each social
            media platform and see if there is any correlation.
          </p>
        </div>

        <div className="card stack">
          <h2>Gender</h2>
          {/* TODO: add Average Depression Totals by Gender Tableau  visualization with note: Graph 1: Average Depression Totals by Gender  */}
          {/* TODO: add Anxiety SeverityByGender.png plot (First ask Cynthia for the png) */}
          <p className="muted" style={{ margin: 0, fontWeight: 700 }}>
            Question: How do mental health challenges differ across genders? /
            What could be the causes of the differences? (1)
          </p>
          <p>
            In response to the research question (1) in the context of our
            project, we can answer the question "How do mental health challenges
            differ across genders?” by comparing the depression severity
            percentages calculated above, then comparing them between males and
            females. The bar chart is separated into two different groups which
            is by gender and then by another category containing metadata or the
            different types of average depression scores determining the phq9
            (depression) severity. Nonetheless, we can see that the ratios for
            more “severe depression ratios” based on the percentages are
            moderately substantially higher for females (17.45%) compared to
            males (12.91%). The percentages for “mild depression” also differ,
            with 4-5% at 20.90% for females and 24.14% for males.
          </p>
          <p>
            Meanwhile, each of the other depression categories, respectively to
            each gender, is relatively equivalent as they only deviate around
            1-1.5% from one another. This allows us to consider that mental
            health challenges differ slightly between males and females slightly
            as the data indicates that females have reported experiencing higher
            percentages of severe depression and lower levels of mild (not
            severe) depression compared to male students.
          </p>
          <p>
            This leads to the second portion of our research question of “What
            could be the causes of the differences?” It is obvious that social
            media factors may have influenced the deterioration of mental health
            as a whole among students. Based on our sources cited in our
            annotated bibliography, it is stated in “Social Media Exposure and
            College Students’ Mental Health During the Outbreak of COVID-19: The
            Mediating Role of Rumination and the Moderating Role of Mindfulness”
            by Hong, Wei, et al., that results “showed no differences of scores”
            between mindfulness, rumination, and psychological distress between
            males and females (Hong, 2021). However, it is stated in another
            article I analyzed in the bibliography, “Shelter in the Online
            World? Benefits and Risks Associated with Social Media Use for
            College Students’ Mental Health in the Early Stage of COVID-19
            Pandemic” by Niu, Yanzhuo, et al., that female students reported
            higher levels of depression and anxiety than male students although
            “gender did not moderate the relationship between social media use
            and mental well-being” (Niu, 2024).
          </p>
          <p>
            Therefore, it can be assumed that the causes of the differences
            \[where females have shown to have slightly more negative higher
            mental health results\] could also stem from other factors such as
            cultural expectations and social pressure, menstrual cycles,
            academic stress, or working conditions for example that could
            influence further stress although there needs to be more research
            done to reach a conclusion due to varying datasets.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            Example computation: (658 + 880 + 1238 + 206 + 788) = 3770 total
            female PHQ-9 scores. 658 / 3770 = 0.1745 or 17.45% for severe
            depression.
          </p>
        </div>

        <div className="card stack">
          <h2>General Health</h2>
          <div className="tableau-grid">
            <TableauEmbed
              title="Average General Health Score per State"
              path="views/DHTabluemapofGeneralHealthandState/AverageGenralHealthdominatesperstate"
              staticImage="https://public.tableau.com/static/images/DH/DHTabluemapofGeneralHealthandState/AverageGenralHealthdominatesperstate/1.png"
              toolbar="yes"
              heightRatio={0.75}
              params={{ tabs: "no" }}
            />
            <TableauEmbed
              title="High Depression Prevalence by State"
              path="views/Depressionbystate/DepbyState"
              staticImage="https://public.tableau.com/static/images/De/Depressionbystate/DepbyState/1.png"
              toolbar="yes"
              heightRatio={0.75}
              params={{ tabs: "no" }}
            />
          </div>
          <p>
            In comparing these two maps, we can analyze whether there is a
            relationship between general health and the prevalence of high
            depression levels. We are also able to draw inferences in whether a
            student’s state affects their general or mental health. In the
            health map, the average general health is depicted on a color scale,
            with darker colors being excellent and lighter colors being poor. In
            the depression map, darker shaded areas indicate a higher proportion
            of students reporting moderate to severe depression symptoms.
          </p>
          <p>
            In states with worse average health, it seems that there is also a
            bigger proportion of students suffering from severe depression. This
            relationship is obvious in states like Idaho and South Dakota. This
            relationship between mental health and physical health is supported
            in research \[insert source here\].
          </p>
          <p>
            However, it is important to note that some states only had a small
            number of respondents, which can skew results. For example,
            Mississippi has a general health score of 5 (darker shade), but this
            score is based solely on the response of one respondent who
            completed the survey. As such, we can not use this result to
            represent the whole population. In California, the average health
            was about 3.6 based on 76 respondents, which indicates that the
            general health of California was good based on a moderately sized
            group of respondents. On the other hand, about 46.05% of the
            California respondents reported high depression severity.
          </p>
          {/* TODO: Add General Health and Depression Severity Tableau Visualization */}
          {/* TODO: Add Effect of Social Media on General Health for Males and Females plot (First need ask Marina for png) */}
          <p>
            The bar chart highlights the least amount of male and female
            students who are in an excellent general health status, while a fair
            description of general health is a good amount, but it is a little
            bit higher in females than males. Social media could affect the
            general health, but not in the same way it affects mental health. It
            also affects females more than males, according to what we have
            analysed from the bar chart visualization. Moreover, Harmony
            Healthcare IT (2025) reported that both genders recognize rising
            social media addiction and its negative impact on sleep and mental
            well-being, though females report stronger emotional consequences.
            Roberts et al. (2014) found that females are more likely to engage
            in image-based social media activities like Instagram, which
            heighten comparison and self-esteem issues. In contrast, males tend
            to experience fewer emotional effects but may face behavioral
            addictions related to gaming or general screen time. All of these
            secondary sources' arguments are strengthened through our bar chart
            visualization.
          </p>
        </div>

        <div className="card stack">
          <h2>Sleep Hours</h2>
          {/* TODO: add plot on how number of house spent on social media affects average sleep hours (Ask Marina to fix typo in title, capitalization and if not interactive, for a PNG) */}
          {/* TODO: add plot on Relationship of Sleep Hours and Avg Social Media Use Hours. (JiahongViz3.png) */}
          <p>
            This histogram illustrates the relationship between average daily
            social-media usage and average nightly sleep duration among young
            adults. By grouping usage into continuous intervals, the
            visualization reveals a clear downward trend: as social-media use
            increases, average sleep hours decrease. Individuals using about
            1.5–3 hours per day sleep around 8 hours per night, while those
            using 7.5–9 hours sleep only about 4 hours. The histogram,
            therefore, demonstrates a strong inverse relationship between
            social-media use and sleep duration.
          </p>
          <p>
            While the histogram provides an overall picture, the scatterplot
            shows individual observations, and the regression line further
            clarifies the trend. The points display a clear downward pattern,
            with a negatively sloped trend line that is consistent with the
            histogram’s findings. However, several data points deviate
            noticeably from the line—for example, some individuals with about
            4.5 hours of social-media use report only 4 hours of sleep. This
            indicates that although a negative correlation exists, sleep
            outcomes still vary depending on individual habits and time
            management.
          </p>
          <p>
            This strong trend supports our research thesis that excessive
            social-media use disrupts healthy sleep patterns among college
            students, contributing to mental-health issues. Reduced sleep
            increases the risk of anxiety, depression, and poor cognitive and
            academic performance. The visualization helps demonstrate how
            social-media addiction relates to sleep deprivation and decreased
            psychological well-being in young adults. Consistent with Twenge et
            al. (2018) and Kaylin (2025), high social-media engagement is
            strongly linked to poorer mental health and sleep outcomes,
            indirectly harming academic performance. Screen exposure at night
            may further suppress melatonin production and increase health risks.
            Therefore, interventions promoting digital wellness and screen
            curfews could improve students’ mental health, academic performance,
            and overall well-being.
          </p>
        </div>

        <div className="card stack">
          <h2>Student Standing</h2>
          {/* TODO: Add Tableau Visualization on Avg Social Medi Use Associated with Mental Health Effects based on College Standing */}
          {/* TODO: Add DistributionOfAcademicLevel.png */}
          <p className="muted" style={{ margin: 0, fontWeight: 700 }}>
            Question: What is the effect of social media on college
            underclassmen vs upperclassmen? (8)
          </p>
          <p>
            From the line chart, across all three academic groups (High School,
            Undergraduate, Graduate), the lines show a consistent negative
            relationship between daily social media use and mental health
            scores. The undergraduate and graduate trend lines remain
            approximately at the same level with several intersections,
            indicating similar mental health outcomes across different usage
            durations. On the other hand, although showing a similar negative
            slope, high school individuals exhibit lower mental health scores at
            every level of social media use. In the context of our project, we
            can observe that undergraduate and graduate students (upperclassmen)
            are generally happier or have better mental health reports than high
            school students.
          </p>

          <p>
            The visualization ultimately helps us examine how vulnerability to
            social media impact may vary depending on a student's stage in
            college, which leads to more questions on why graduate students may
            spend less time on social media.
          </p>
          <p>
            One reason could be that graduate students are older and have
            developed their mental abilities better (fully grown brain at the
            age of 25) to understand their emotions and how to handle their
            mental health better. If we base off the graph that underclassmen
            show lower mental health scores at higher usage levels compared to
            upperclassmen, it can suggest that students in their early college
            days present greater emotional and social adjustment challenges,
            whether it be feeling isolated due to an environment change or
            overwhelming social anxiety from new people. These other factors
            could be that younger students have grown up with the internet more
            compared to upperclassmen, or that more graduate students may be
            doing research or working 9 - 5 jobs while studying, which prompts
            less time available to be on social media.
          </p>
          <p>
            These hypotheses indicate that more advanced research studies can be
            conducted in order to confirm relationships and correlations in the
            project. For example, using secondary sources from our annotated
            bibliograph,y such as “Understanding the Role of Social Media–Based
            Mental Health Support Among College Students: Survey and
            Semistructured Interviews” by Vornholt, Piper, and Munmun De
            Choudhury, allows us to analyze the stress factor between
            undergraduate and graduate students. It was reported that “...Across
            academic years, sophomores (25/101, 24.8%) were the largest group,
            followed by graduate students (Masters, PhD: 22/101, 21.8%; juniors:
            21/101, 20.8%; freshmen: 14/101, 13.9%; and seniors: 14/101, 13.9%)”
            where “[a]n overwhelmingly large number of participants (71/101,
            70.3%) indicated feeling stressed and/or anxious from college life…”
            (Vornholt, Choudhury, 2024). This article is an instance where
            sources can clarify and support our research focus and data
            visualizations on identifying how social media poses the highest
            mental health risks.
          </p>
          <p className="muted" style={{ margin: 0, fontWeight: 700 }}>
            [Note: In the second visualization depicting the proportions of
            students (graduate vs. undergraduate), we can see in the data that
            the number of students is relatively equivalent; this helps indicate
            that older students generally tend to use social media less compared
            to their underclassmen peers.]
          </p>
          <p>
            However, there are still limitations in the dataset. First, this
            study could be explored in greater depth by examining differences in
            mental health scores across more specific academic levels (e.g.,
            freshmen, sophomores, juniors, and seniors). Second, as shown in the
            second visualization, the number of high school students surveyed is
            significantly lower than that of undergraduate and graduate
            students. This smaller sample size weakens the reliability of our
            conclusions for this group and indicates a need for further
            research.
          </p>
        </div>
      </div>
    </section>
  );
}
