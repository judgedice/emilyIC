import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import bridgeBuilding from 'figma:asset/301508c7ef5f354333e13dcef3a13561e107fc89.png';
import teamPhoto from 'figma:asset/6271a96d42aa9a0af7a0389989a2ab6bd62a1dfa.png';

export function ManagementStrategy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-8">Empower. Connect. Enable.</h1>
          
          <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
            <p>
              As a design leader, I believe that great work comes from great teams—and great teams are built on trust, clarity, and purpose.
            </p>

            <figure>
              <img 
                src={teamPhoto} 
                alt="Team photo" 
                className="w-full"
              />
              <figcaption className="text-sm text-gray-500 mt-2 italic">
                Facilitating a workshop in our Bangalore design studio
              </figcaption>
            </figure>

            {/* Strategic Leadership Principles */}
            <div className="space-y-10">
              {/* Enablement Over Enforcement */}
              <div className="space-y-4">
                <h3 className="text-2xl text-black">Enablement Over Enforcement</h3>
                <p>
                  Leaders exist to <strong>remove obstacles</strong>, provide clarity, and equip teams with the tools and knowledge needed to succeed. Authority is used not to coerce but to <strong>empower and elevate expertise</strong>.
                </p>
                <div>
                  <p className="mb-2"><strong>My core beliefs:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>People perform best when they understand the <em>why</em> and have freedom in the <em>how</em>.</li>
                    <li>Excellence scales when leaders invest in capability building, not rule setting.</li>
                    <li>The strongest teams feel trusted, supported, and unblocked.</li>
                  </ul>
                </div>
              </div>

              {/* Bridge Building Over Whip Cracking */}
              <div className="space-y-4">
                <h3 className="text-2xl text-black">Bridge Building Over Whip Cracking</h3>
                <p>
                  The manager's role is to create <strong>alignment, cohesion, and shared momentum</strong> across functions—especially in complex or matrixed organizations.
                </p>
                <div className="flex gap-6 items-start">
                  <img 
                    src={bridgeBuilding} 
                    alt="Team collaborating on sticky notes" 
                    className="w-1/3 flex-shrink-0"
                  />
                  <div>
                    <p className="mb-2"><strong>My core beliefs:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cross-functional trust is a competitive advantage.</li>
                      <li>Collaboration improves outcomes more than pressure or urgency tactics.</li>
                      <li>Leaders model calm clarity, not chaos or command.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Autonomy & Accountability Over Micromanagement */}
              <div className="space-y-4">
                <h3 className="text-2xl text-black">Autonomy & Accountability Over Micromanagement</h3>
                <p>
                  Teams own their decisions, processes, and outcomes. Leaders establish <strong>clear expectations</strong> and <strong>defined success measures</strong>, then step back and coach, not control.
                </p>
                <div>
                  <p className="mb-2"><strong>My core beliefs:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Autonomy lifts creativity, motivation, and speed.</li>
                    <li>Accountability creates discipline, learning, and honest reflection.</li>
                    <li>Micromanagement is a tax on performance and morale.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
