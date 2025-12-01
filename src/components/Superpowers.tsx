export function Superpowers() {
  const superpowers = [
    {
      number: '1',
      title: 'Team Leadership & Culture Building',
      description: 'I lead high-performing, global design teams grounded in trust, collaboration, and shared purpose. I stay close to the craft while shaping strategy, creating cultures where creativity, accountability, and inclusion thrive—across both local and distributed teams.',
    },
    {
      number: '2',
      title: 'Talent Development & Mentorship',
      description: 'I\'m deeply committed to helping designers grow into their best selves. By understanding individual strengths and aspirations, I tailor mentorship that builds confidence, cultivates resilience, and develops the next generation of design leaders.',
    },
    {
      number: '3',
      title: 'Strategic Design & Scalable Impact',
      description: 'I combine deep UX, AI, and systems design expertise to turn complex challenges into scalable, user-centered solutions that deliver measurable business results. My approach connects design excellence with strategy, operations, and long-term organizational impact.',
    },
  ];

  return (
    <section className="bg-slate-700 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        {/* Top left circles */}
        <svg className="absolute -left-8 top-8" width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="55" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="60" cy="60" r="45" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="60" cy="60" r="35" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        {/* Top center dot grid */}
        <svg className="absolute left-1/4 top-16" width="80" height="40" viewBox="0 0 80 40">
          {[...Array(3)].map((_, row) => (
            [...Array(8)].map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 10 + 5} cy={row * 15 + 5} r="2" fill="white" />
            ))
          ))}
        </svg>

        {/* Large circle pattern top right */}
        <svg className="absolute right-20 top-0" width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="100" cy="100" r="60" fill="white" opacity="0.3" />
          <path d="M 100 10 A 90 90 0 0 1 190 100 L 100 100 Z" fill="none" stroke="white" strokeWidth="3" strokeDasharray="8 4" />
        </svg>

        {/* Bottom left striped circle */}
        <svg className="absolute left-12 bottom-12" width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <pattern id="stripes1" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#stripes1)" opacity="0.05" />
        </svg>

        {/* Bottom center geometric shapes */}
        <svg className="absolute left-1/3 bottom-20" width="150" height="150" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="50" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="75" cy="75" r="30" fill="white" opacity="0.4" />
          <path d="M 75 25 A 50 50 0 0 0 75 125 Z" fill="white" opacity="0.2" />
        </svg>

        {/* Bottom right striped pattern */}
        <svg className="absolute right-16 bottom-8" width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <pattern id="stripes2" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="white" strokeWidth="1.5" />
            </pattern>
          </defs>
          <circle cx="60" cy="60" r="55" fill="url(#stripes2)" opacity="0.05" />
        </svg>

        {/* Small accent circles scattered */}
        <svg className="absolute right-1/4 top-1/3" width="60" height="60" viewBox="0 0 60 60">
          <circle cx="20" cy="20" r="15" fill="white" opacity="0.3" />
          <circle cx="45" cy="35" r="10" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        {/* Dot pattern bottom */}
        <svg className="absolute right-1/3 bottom-1/4" width="60" height="30" viewBox="0 0 60 30">
          {[...Array(2)].map((_, row) => (
            [...Array(6)].map((_, col) => (
              <circle key={`b-${row}-${col}`} cx={col * 10 + 5} cy={row * 15 + 5} r="2" fill="white" />
            ))
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {superpowers.map((item) => (
            <div key={item.number} className="space-y-4">
              <h3 className="text-lg md:text-xl">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
