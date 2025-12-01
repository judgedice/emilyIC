import { ArrowDown } from 'lucide-react';
import profileImage from 'figma:asset/6417ca4f8e131c987e9ec703b0ea1c6aa7dce13a.png';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white shadow-lg">
          <img src={profileImage} alt="Emily DiCesaro" className="w-full h-full object-cover scale-150 translate-y-5" />
        </div>
        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
          Emily DiCesaro
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
          Senior UX Design Lead elevating product quality through expert interaction design, storytelling, and alignment across teams
        </p>
        <button
          onClick={scrollToWork}
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          View Experience
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}