import React from "react";
import Card from "./card";

const WorldCareer = () => {
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Emerging World of Careers</h2>

        <div>
          <h3 className="text-xl font-bold mt-6">Evolving Work Concepts</h3>
          <div className="grid gap-6">
            <div>
              <p>
                The concept of work is rapidly changing. The average job
                lifespan and the half-life of skills are shrinking, driven by
                technological advancements and shifting societal values.
                Demographic shifts are also reshaping career choices and
                influencing work-life balance.
              </p>
            </div>

            <div>
              <p className="font-bold">100-Year Life:</p>
              <p>
                The traditional 3-stage life model (education, work, retirement)
                is evolving into a more fluid and unpredictable career path.
                Individuals are now expected to adapt continuously throughout
                their careers (PwC).
              </p>
            </div>

            <div>
              <p className="font-bold">Skill Relevance:</p>
              <p>
                The number of skills required for a job is increasing by 10%
                annually, with 30% of skills from three years ago now obsolete.
                This trend highlights the growing importance of continual skill
                enhancement
              </p>
              {/* <link> (Gartner).</link> */}
            </div>

            <div>
              <p className="font-bold">Shortened Skill Lifespan:</p>
              <p>
                The average half-life of skills has dramatically decreased from
                30 years to just 6 years, making constant reskilling a necessity
              </p>
              {/* <link>(World Economic Forum).</link> */}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6">Emerging Employment Trends</h2>
          <div className="grid gap-6">
            <div>
              <p>
                New work models like freelancing, remote work, and hybrid
                arrangements are becoming standard. Companies are learning to be
                more agile, working with distributed teams, and scaling
                operations to meet changing demands. This is the future of work.
              </p>
            </div>

            <div>
              <p className="font-bold">Gig Economy:</p>
              <p>
                The rise of freelance work is driving demand for new skills and
                greater adaptability in the workforce.
              </p>
            </div>

            <div>
              <p className="font-bold">Remote Work:</p>
              <p>
                The shift towards remote work is placing increased importance on
                digital communication and collaboration tools.
              </p>
            </div>

            <div>
              <p className="font-bold">Hybrid Work:</p>
              <p>
                A blend of in-office and remote work is becoming the standard
                working model.
              </p>
            </div>

            <div>
              <p className="font-bold">Skills-Based Hiring:</p>
              <p>
                Employers are increasingly valuing skills over formal education,
                leading to more inclusive and diverse workforces.
              </p>
            </div>

            <div>
              <p className="font-bold">Lifelong Learning:</p>
              <p>
                Continuous skill development is crucial to maintaining relevance
                in a competitive job market.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-7">
          <h2 className="text-2xl font-bold mt-7">
            Insights on the Changing Employment Landscape
          </h2>
          <div>
            <p>
              The global employment landscape is undergoing significant
              transformation, driven by policy changes, technological
              advancements, and demographic shifts.
            </p>
          </div>

          <div>
            <p className="font-bold">Global Job Creation:</p>
            <p>
              With supportive green economy policies, global job creation could
              reach 24 million by 2030 (ILO).
            </p>
          </div>

          <div>
            <p className="font-bold">AI's Economic Impact:</p>
            <p>
              AI is projected to contribute $15.7 trillion to the global economy
              by 2030, with major benefits expected in China and North America
              (PwC).
            </p>
          </div>

          <div>
            <p className="font-bold">Reskilling Necessity:</p>
            <p>
              By 2030, 375 million workers worldwide may need to reskill or
              upskill to stay competitive (McKinsey & Company).
            </p>
          </div>

          <div>
            <p className="font-bold">Africa's Workforce Growth:</p>
            <p>
              Africa's workforce is projected to grow by 800 million by 2050,
              becoming the largest globally (World Bank).
            </p>
          </div>

          <div>
            <p className="font-bold">Demographic Shifts:</p>
            <p>
              Changing demographics are significantly impacting career choices
              and approaches to work-life balance.
            </p>
          </div>
        </div>

        <div className="grid gap-7 ">
          <h2 className="text-2xl font-bold mt-8">
            Trends in Education and Skill Development
          </h2>

          <div>
            <p>
              The rise of online platforms is revolutionising education and
              skill development, breaking down traditional barriers to knowledge
              and access.
            </p>
          </div>

          <div>
            <p className="font-bold">Online Education:</p>
            <p>
              The expansion of online learning platforms is making education
              more accessible and flexible.
            </p>
          </div>

          <div>
            <p className="font-bold">Personalised and Adaptive Learning:</p>
            <p>
              Customised learning experiences are becoming more common, allowing
              individuals to learn at their own pace and style.
            </p>
          </div>

          <div>
            <p className="font-bold">
              Skill-Based and Competency-Based Education:
            </p>
            <p>
              There is a growing focus on education models that prioritise
              practical skills and competencies over traditional academic
              credentials.
            </p>
          </div>

          <div>
            <p className="font-bold">Micro-Learning and Credentialing:</p>
            <p>
              Bite-sized learning and micro-credentials are gaining popularity,
              allowing individuals to continuously update their skills.
            </p>
          </div>

          <div>
            <p className="font-bold">Immersive Learning:</p>
            <p>
              Emerging technologies like AR/VR are enhancing the learning
              experience, providing immersive and interactive educational
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default WorldCareer;
