interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Education {
  school: string;
  degree: string;
}

export function Projects() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior UX Design Manager',
      company: 'IBM',
      period: '2019-2025',
      description: 'Lead a global design team delivering user-centered solutions for Environmental Intelligence and Asset Lifecycle Management products.',
      achievements: [
        'Partnered with architects and PMs to set product strategy, road map, and design priorities',
        'Drove design operations, capacity planning, and team performance metrics tied to business goals',
        'Championed continuous user feedback to ensure measurable customer value',
        'Integrated AI (Watson) into product experiences, positioning design as a market differentiator',
        'Co-lead IBM\'s UX for AI guild and co-authored UX for AI Principles',
      ],
    },
    {
      id: 2,
      title: 'Principle UX/UI Designer',
      company: 'Broadridge Financial',
      period: '2015-2019',
      description: 'Designed and optimized fintech experiences that simplified complex financial workflows and improved client trust.',
      achievements: [
        'Simplified multi-step UX workflows for financial advisors and operations teams',
        'Led user research and focus groups to validate product direction',
        'Created wireframes and prototypes (Figma, Sketch) and guided UX through development and QA',
      ],
    },
    {
      id: 3,
      title: 'Senior UX Designer',
      company: 'Bridgeline Digital',
      period: '2013-2015',
      description: 'Delivered client-facing product designs and research for multiple industries.',
      achievements: [
        'Conducted usability studies and competitive analyses to inform design strategy',
        'Created wireframes and prototypes (Figma, Sketch) and guided UX through development and QA',
      ],
    },
    {
      id: 4,
      title: 'Senior Digital UX/UI Designer',
      company: 'Nuveen Investments',
      period: '2011-2013',
      description: 'Redesigned digital experiences and rebranded the firm\'s online presence.',
      achievements: [
        'Led rebranding and developed new design system and brand guide',
        'Conducted usability testing and launched customer advisory boards to integrate user feedback',
      ],
    },
  ];

  const education: Education[] = [
    {
      school: 'Edinburgh University',
      degree: 'MSc, Design and Digital Media',
    },
    {
      school: 'Minneapolis College of Art & Design',
      degree: 'Certificate of Completion, Typography and Design',
    },
    {
      school: 'St. Olaf College',
      degree: 'BA, Studio Art & Graphic Design',
    },
  ];

  return (
    <section id="work" className="pt-8 pb-20 md:pt-12 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-16 border-b border-gray-200 pb-4">Work Experience</h2>

        <div className="space-y-16">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative">
              {/* Period indicator */}
              <div className="absolute -left-2 md:-left-6 top-0 text-sm text-gray-400 w-24 md:w-32">
                {experience.period}
              </div>

              {/* Main content */}
              <div className="pl-20 md:pl-28">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl mb-1">{experience.title}</h3>
                    <p className="text-base md:text-lg text-gray-600">{experience.company}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 text-sm md:text-base">
                        <span className="text-gray-400 mt-1 flex-shrink-0">—</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-32 pt-4">
          <h2 className="text-3xl md:text-4xl mb-16 border-b border-gray-200 pb-4">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl md:text-2xl">{edu.school}</h3>
                <p className="text-gray-600 leading-relaxed">{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
