import { Mail, MapPin, Linkedin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    { name: 'Email', icon: Mail, href: 'mailto:emily.dicesaro@gmail.com', label: 'emily.dicesaro@gmail.com' },
    { name: 'Location', icon: MapPin, href: '#', label: 'Andover, MA' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/emilydicesaro', label: '/in/emilydicesaro' },
  ];

  return (
    <section id="contact" className="py-32 bg-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-5xl md:text-6xl mb-8 text-amber-50">Let's Connect</h2>
          <p className="text-xl text-amber-50/90 mb-12">
            I'm seeking a leadership role where I can apply my experience to shape<br />
            strategy, elevate design maturity, and continue growing as a design leader.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-4 text-lg text-amber-50 hover:text-amber-50/80 transition-colors group"
              >
                <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-amber-50/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-amber-50/70">© 2025 Emily DiCesaro. All rights reserved.</p>
            <p className="text-sm text-amber-50/70">References and Portfolio available upon request</p>
          </div>
        </div>
      </div>
    </section>
  );
}
