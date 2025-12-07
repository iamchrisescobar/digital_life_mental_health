import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TableauEmbed from "../components/TableauEmbed.jsx";

export default function Narrative() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [hash]);

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
            suicidality among youth". (
            <Link to="/sources#abi-jaoude-2020">2020</Link>) In this context, we
            analyze how college students’s use of social media relates to
            self-reported mental health.
          </p>
          <figure
            id="figure-1"
            style={{ margin: "1rem auto", width: "100%", maxWidth: "480px" }}
          >
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
              Figure 1: Scatter plot showing mental health score trend versus
              daily social media use
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
          <div id="figure-2">
            <TableauEmbed
              title="Treemap of Social Media Platforms"
              path="views/media_addiction/Treemap"
              staticImage="https://public.tableau.com/static/images/me/media_addiction/Treemap/1.png"
              toolbar="yes"
              heightRatio={0.75}
              params={{ tabs: "no" }}
            />
            <figcaption
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              Figure 2: Treemap showing the average daily use and mental health
              scores for different social media platforms
            </figcaption>
          </div>
          <p>
            It is important to consider the specific social media platforms that
            students are using on a daily basis. To summarize this data, we
            create a treemap. From the treemap we can see that out of all the
            students in this dataset, students spend more time using platforms
            such as WhatsApp, Tiktok, WeChat. These platforms contain features
            such as messaging, calling, and creating/viewing reels. We can
            suspect that this may be the reason why college students spend an
            increased average of time utilizing these platforms.
          </p>
          {/* TODO: Add Nguyen, 2025 source and citation link*/}
          <p>
            The treemap also reveals that the more time a student spends on
            social media, the lower their mental health score is. This is shown
            by the lighter colors of TikTok, Snapchat, and Instagram. These
            platforms have features such as reels, posts, and story sharing.
            Studies have shown that platforms that involve short videos and
            reels are actively lowering the mental health status and cognitive
            functioning for adults and youths (Nguyen, 2025). Some contents also
            involve negative messages of body image and self-esteem, which
            further impact youths and young adults negatively. On the other
            hand, platforms such as Line and LinkedIn have users reporting a
            relatively higher mental health score due to the limited features of
            these applications.
          </p>
          <p>
            Another pattern is that platforms such as WhatsApp, KakaoTalk, and
            WeChat are popular platforms used by international students. These
            students are far away from home and may have negative emotions due
            to missing their families. This may be a factor that contributes to
            the lower mental health score.
          </p>
        </div>

        <div className="card stack">
          <h2>Gender</h2>
          <div>
            <TableauEmbed
              title="Average Depression Totals by Gender"
              path="AverageDepressionTotalsbyGenderGendervs_MentalHealthRelationshipGENDERDISTRIBUTION/GenderBarPlot-AverageDepression"
              staticImage="https://public.tableau.com/static/images/Av/AverageDepressionTotalsbyGenderGendervs_MentalHealthRelationshipGENDERDISTRIBUTION/GenderBarPlot-AverageDepression/1.png"
              toolbar="yes"
              heightRatio={0.75}
              params={{ tabs: "no" }}
            />
            <figcaption
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              Figure 3: Visualization showing average depression level reported by gender
            </figcaption>
          </div>

          <p className="muted" style={{ fontWeight: 700 }}>
            Research Question: How do mental health challenges differ across
            genders? / What could be the causes of the differences? (1)
          </p>
          <p>
            This then leads us to question if one of the most common attributes,
            gender, may be a significant variable in differentiating mental
            health scores. In response to the research question (1) in the
            context of our project, we can answer the question "How do mental
            health challenges differ across genders?” by comparing the
            depression severity percentages calculated above, then comparing
            them between males and females. The bar chart is separated into two
            different groups which is by gender and then by another category
            containing metadata or the different types of average depression
            scores determining the phq9 (depression) severity. Nonetheless, we
            can see that the ratios for more “severe depression ratios” based on
            the percentages are moderately substantially higher for females
            (17.45%) compared to males (12.91%). The percentages for “mild
            depression” also differ, with 4-5% at 20.90% for females and 24.14%
            for males.
          </p>
          <p>
            Meanwhile, each of the other depression categories, respectively to
            each gender, is relatively equivalent as they only deviate around
            1-1.5% from one another. This allows us to consider that mental
            health challenges differ slightly between males and females as the
            data indicates that females have reported experiencing higher
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
            by <Link to="/sources#hong-2021">Hong, Wei, et al.</Link>, that
            results “showed no differences of scores” between mindfulness,
            rumination, and psychological distress between males and females (
            <Link to="/sources#hong-2021">Hong, 2021</Link>). However, it is
            stated in another article we analyzed, “Shelter in the Online World?
            Benefits and Risks Associated with Social Media Use for College
            Students’ Mental Health in the Early Stage of COVID-19 Pandemic” by{" "}
            <Link to="/sources#niu-2024">Niu, Yanzhuo, et al.</Link>, that
            female students reported higher levels of depression and anxiety
            than male students although “gender did not moderate the
            relationship between social media use and mental well-being” (
            <Link to="/sources#niu-2024">Niu, 2024</Link>).
          </p>
          <p>
            It is also stated that “[in] a randomized study…female participants
            reported more negative mood after just 10 minutes of browsing their
            Facebook account compared with those who browsed an
            appearance-neutral control website” or a website [including games]
            that does not focus on physical attractiveness or beauty ideals,
            meaning that social media tends to generate a “toxic” environment
            which may associate with more negative scores (
            <Link to="/sources#abi-jaoude-2020">Abi-Jaoude, 2020</Link>).
            Additionally, “...Girls and young women tend to spend more time on
            social media than boys do” and tend to “have more exposure to
            cyberbullying and show tendency to experience more mental health
            effects, which is consistent with recent epidemiologic trends
            indicating that depressive symptoms, self-harm and suicidality have
            increased among young females in particular” (
            <Link to="/sources#abi-jaoude-2020">Abi-Jaoude, 2020</Link>). This
            can be accounted for in the chart as we can see slightly more
            reports of female severe depression.
          </p>
          <p id="figure-3">
            Therefore, it can be assumed that the causes of the differences
            [where females have shown to have slightly more negative higher
            mental health results] could also stem from other factors such as
            cultural expectations and social pressure, menstrual cycles,
            academic stress, or working conditions for example that could
            influence further stress although there needs to be more research
            done to reach a conclusion due to varying datasets. However, the
            general consensus is that there is not enough significant evidence
            to explicitly say that gender is the leading variable in shifting
            mental health scores.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            Example Computation of the Proportions: Summing female phq9_comp
            scores: (658 + 880 + 1238 + 206 + 788) = 3770 total female PHQ-9
            scores. 658 / 3770 = 0.1745 or 17.45% for “Severe Depression”,
            etc...
          </p>
        </div>

        <div className="card stack">
          <h2>General Health</h2>
          <div className="tableau-grid">
            <div>
              <TableauEmbed
                title="Average General Health Score per State"
                path="views/DHTabluemapofGeneralHealthandState/AverageGenralHealthdominatesperstate"
                staticImage="https://public.tableau.com/static/images/DH/DHTabluemapofGeneralHealthandState/AverageGenralHealthdominatesperstate/1.png"
                toolbar="yes"
                heightRatio={0.75}
                params={{ tabs: "no" }}
              />
              <figcaption
                style={{
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                Figure 4: Map showing the average mental health scores reported
                by state
              </figcaption>
            </div>
            <div>
              <TableauEmbed
                title="High Depression Prevalence by State"
                path="views/Depressionbystate/DepbyState"
                staticImage="https://public.tableau.com/static/images/De/Depressionbystate/DepbyState/1.png"
                toolbar="yes"
                heightRatio={0.75}
                params={{ tabs: "no" }}
              />
              <figcaption
                style={{
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                Figure 5: Map showing the high depression prevalence reported by
                state
              </figcaption>
            </div>
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
          {/* TODO: Add required Citations and Links*/}
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
          <div className="tableau-grid">
            <div>
              <figure
                style={{
                  margin: "1rem auto",
                  width: "100%",
                  maxWidth: "480px",
                }}
              >
                <img
                  src="images/team/plots/Fig6.png"
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
                  Figure 6: Scatter plot showing relationship between sleep
                  hours per night and average social media daily usage expressed
                  in hours
                </figcaption>
              </figure>
            </div>
            <div>
              <figure
                style={{
                  margin: "1rem auto",
                  width: "100%",
                  maxWidth: "480px",
                }}
              >
                <img
                  src="images/team/plots/Fig7.png"
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
                  Figure 7: Plot displaying the relationship between mental
                  health score and sleep hours reported per night
                </figcaption>
              </figure>
            </div>
          </div>
          <p id="figure-5">
            The scatterplot shows individual observations, and the regression
            line further clarifies the trend. The put between usage time and
            sleep hours display a clear downward pattern, with a negatively
            sloped trend line that is consistent with the histogram’s findings.
            However, several data points deviate noticeably from the line—for
            example, some individuals with about 4.5 hours of social-media use
            report only 4 hours of sleep. This indicates that although a
            negative correlation exists, sleep outcomes still vary depending on
            individual habits and time management.
          </p>
          <p>
            After identifying the negative correlation between usage time and
            sleep hours, another scatterplot is plotted between sleep hours and
            mental health score to investigate its relation to mental health
            indicator. From the figure, the data points are scattered around the
            positive slope trend line. This shows that as sleep hours increase,
            mental health scores also increase, indicating better mental health
            conditions.
          </p>
          {/* TODO: Add Kaylin and Wood sources and in-text citations*/}
          <p>
            This strong trend supports our research thesis that excessive
            social-media use disrupts healthy sleep patterns among college
            students, contributing to mental-health issues.The visualization
            helps demonstrate how social-media addiction relates to sleep
            deprivation and decreased psychological well-being in young adults.
            Consistent with Twenge et al. (
            <Link to="/sources#twenge-2018">2018</Link>) and Kaylin (2025), high
            social-media engagement is strongly linked to poorer mental health
            and sleep outcomes, indirectly harming academic performance. Reduced
            sleep increases the risk of anxiety, depression, and poor academic
            performance. Screen exposure at night may further suppress melatonin
            production and increase health risks (Wood et al., 2013). Therefore,
            interventions promoting digital wellness and screen curfews could
            improve students’ mental health, academic performance, and overall
            well-being.
          </p>
        </div>

        <div className="card stack" id="figure-6">
          <h2>Student Standing</h2>
          <TableauEmbed
            title="Avg Social Media Use Associated with Mental Health Effects based on College Standing"
            path="AvgSocialMediaUseAssociatedwithMentalHealthEffectsbasedonCollegeStanding/AvgSocialMediaUseAssociatedwithMentalHealthEffectsbasedonCollegeStanding"
            staticImage="https://public.tableau.com/static/images/Av/AvgSocialMediaUseAssociatedwithMentalHealthEffectsbasedonCollegeStanding/AvgSocialMediaUseAssociatedwithMentalHealthEffectsbasedonCollegeStanding/1.png"
            toolbar="yes"
            heightRatio={0.75}
            params={{ tabs: "no" }}
          />
          <figcaption
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            Figure 8: Plot displaying the average socical media use associated
            with the mental health effects based on college standings
          </figcaption>
          {/* TODO: Add DistributionOfAcademicLevel.png */}
          <p className="muted" style={{ fontWeight: 700 }}>
            Question: What is the effect of social media on college
            underclassmen vs upperclassmen? (8)
          </p>
          <figure
            style={{
              margin: "1rem auto",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            <img
              src="images/team/plots/Fig9.png"
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
              Figure 9: Bar chart displaying the relationship between average
              mental health score and social media usage reported by academic
              level
            </figcaption>
          </figure>
          <p>
            From the line chart (Figure 8), across all three academic groups (High School,
            Undergraduate, Graduate), the lines show a consistent negative
            relationship between daily social media use and mental health
            scores. The undergraduate and graduate trend lines remain
            approximately at the same level with several intersections,
            indicating similar mental health outcomes across different usage
            durations. On the other hand, although showing a similar negative
            slope, high school individuals exhibit lower mental health scores at
            every level of social media use. Figure 9, a bar chart, summarizes
            the average mental health score and daily usage hours for each
            academic group. This further highlights the differences between each
            group and shows how there is a correlation between lower usage hours
            and higher average mental health scores. In the context of our
            project, we can observe that undergraduate and graduate students
            (upperclassmen) are generally happier or have better mental health
            reports than high school students.
          </p>
          <p>
            These visualizations ultimately help us examine how vulnerability to
            social media may vary depending on a student's stage in college and
            age, which leads to more questions on why these differences are
            present. Based on the graph, underclassmen show significantly lower
            mental health scores at higher usage levels compared to
            upperclassmen, suggesting that students in their early college days
            present greater emotional and social adjustment challenges, whether
            it be feeling isolated due to an environment change or overwhelming
            social anxiety. This is consistent with existing research on youth
            vulnerability, according to Shannon et al., “youth are more at risk
            for facing cyberbullying, finding it difficult to disengage from the
            media and allowing it to interfere with their social relationships;
            this in turn puts them at risk for experiencing negative emotional
            and psychosocial outcomes” (
            <Link to="/sources#shannon-2022">Shannon et al., 2022</Link>).
          </p>
          <p>
            This vulnerability in younger students contrasts with the relative
            stability observed in upperclassmen and graduate students. This
            could be due to a difference in developmental maturity. Older
            students typically have a more fully developed prefrontal cortex
            (which is fully developed by age 25), allowing them to fully
            understand emotional regulation, critical thinking, and impulse
            control. This maturity helps them better manage the emotional impact
            of social media and understand when usage is harmful towards their
            health. Furthermore, life priorities, like academic research or
            full-time professional commitments, naturally limit their social
            media usage time, which protects from potential addiction or
            problematic usage.
          </p>
          <p>
            While our visualizations suggest a clear correlation, more advanced
            research studies are necessary to confirm causal relationships. For
            example, the article “Understanding the Role of Social Media–Based
            Mental Health Support Among College Students: Survey and
            Semistructured Interviews” by{" "}
            <Link to="/sources#vornholt-2021">
              Vornholt, Piper, and Munmun De Choudhury
            </Link>
            , allows us to analyze the stress factor between undergraduate and
            graduate students. It was reported that “...Across academic years,
            sophomores (25/101, 24.8%) were the largest group, followed by
            graduate students (Masters, PhD: 22/101, 21.8%; juniors: 21/101,
            20.8%; freshmen: 14/101, 13.9%; and seniors: 14/101, 13.9%)” where
            “[a]n overwhelmingly large number of participants (71/101, 70.3%)
            indicated feeling stressed and/or anxious from college life…” (
            <Link to="/sources#vornholt-2021">Vornholt, Choudhury, 2024</Link>).
            This statistic adds another layer to our analysis, indicating that
            high pre-existing stress levels among the college population may be
            making them more vulnerable to the negative aspects of social media.
            It also highlights how social media is never the single cause of
            poor mental health, as there are a multitude of factors that
            contribute to depression and anxiety.
          </p>
          <p id="figure-9">
            However, there are still limitations in the dataset. First, this
            study could be explored in greater depth by examining differences in
            mental health scores across more specific academic levels (e.g.,
            freshmen, sophomores, juniors, and seniors). Second, the number of
            high school students surveyed within the dataset is significantly
            lower than that of undergraduate and graduate students. This smaller
            sample size weakens the reliability of our conclusions for this
            group and indicates a need for further research focused on that
            specific population.
          </p>
        </div>
      </div>
    </section>
  );
}
