import { Link } from 'react-router-dom';

export function About() {
  const skills = [
    'UX Design',
    'AI Design',
    'Design Strategy',
    'Team Leadership',
    'Product Design',
    'Design Systems',
    'User Research',
    'Wireframing & Prototyping',
  ];

  const highlights = [
    'Led the UX for AI guild within IBM and co-wrote the UX for AI Principles',
    'Presenter at UXPA on the role of AI in UX (2021, 2024)',
    'Invitation to the Advisory Board - Women in Leadership, Pompea College of Business, University of New Haven',
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl mb-6">About</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm a Senior UX Design Lead who thrives on solving complex problems through hands-on design, deep collaboration, and a strong commitment to craft. I create clarity out of complexity, translating user needs, business goals, and technical constraints into intuitive, scalable experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With expertise in UX, AI design, and design systems, I excel at driving end-to-end product design, shaping experience strategy, and elevating product quality across global organizations. I partner closely with product, engineering, and research teams to align vision, streamline decision-making, and deliver solutions that meaningfully improve the user experience.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I'm looking for a Lead senior designer role where I can influence product direction, strengthen design maturity, and contribute impactful work while continuing to grow as a design leader, through mentorship, collaboration, and exceptional execution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-4 border border-gray-200 hover:border-black transition-colors"
                >
                  <p className="text-sm tracking-wide">{skill}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl mb-6">Highlights</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700 pl-4 border-l-2 border-gray-300">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}