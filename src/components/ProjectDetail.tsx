import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Expand, ArrowUp, Play, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import environmentalImage from 'figma:asset/709fc27ca422e0a6b8c515b0ad804126461522b2.png';
import italyImage from 'figma:asset/26b3a6a6ae3e11685a2dc48b44256cd3ddb36923.png';
import processImage1 from 'figma:asset/e50baf020a11489c0ebbd97375a586c07a4cc532.png';
import processImage2 from 'figma:asset/9f415a7518a7c5f051e43df3a9f9c8799037d18b.png';
import personaImage from 'figma:asset/c584ff55c005d97696bf632ce82167f26a3ffce1.png';
import lidarImage from 'figma:asset/44339b869ed5b6f2bdd0917b91be29cfeba03d58.png';
import histogramImage from 'figma:asset/9d49d5cde9a6aafb7b09537b4debaf2c4a29fd50.png';
import carbonDataImage from 'figma:asset/56c07f18be52b5ad8b4e8bb449f64210134964be.png';
import explainabilityImage from 'figma:asset/2dd1630e5e45f2fbc299dadb3159141e7b22312f.png';
import renewablesHeroImage from 'figma:asset/e95031712dde9ec987813e86a3c3b90ebb5a9c42.png';
import competitorAnalysisImage from 'figma:asset/39769696a3845653d2234dd036a8f85e43df539b.png';
import competitorAnalysisModalImage from 'figma:asset/48504d8056e247792d1c7a5e12f2b8670e2b535e.png';
import weatherDashboardImage from 'figma:asset/35df6ed5982dcc065156e9b811b53e6a702ef5ce.png';
import energyDashboardImage from 'figma:asset/39f75985c1d3f300cbb95702d059b81fd999d796.png';
import operationsDashboardImage from 'figma:asset/00a50972352ccb5e7815dc832c897ee49eba0f39.png';
import workQueuesImage from 'figma:asset/100854b0c6c5657d965be3af91a37294e6241edd.png';
import sustainabilityAwardImage from 'figma:asset/b4e5f3a0f85d789571822a6e8bda042c358d6662.png';
import uxForAiImage from 'figma:asset/b56139bbdfdbc56770b56733587382974c68f576.png';
import uxPrinciplesHeaderImage from 'figma:asset/aa7ea038784e3d4a7a89e7a55055b8c309f3213f.png';
import uxpaLogo from 'figma:asset/a415df67883beccd5b2de5ea2d5158f214951446.png';
import polarisHeroImage from 'figma:asset/246cc9b11b8ef81ecad140ce730078e8edad88b3.png';
import competitiveBenchmarkingImage from 'figma:asset/4c4b76e6db917ec738002798781b047c13ad49ab.png';
import userCenteredRedesignImage from 'figma:asset/0680cc58d0349608cbed460b3b7c2c0e84305c99.png';
import wireframeImage1 from 'figma:asset/f8b5757bc03c3dd8cc03382719027013f9f9ad15.png';
import wireframeImage2 from 'figma:asset/3e5e1ef3da2d1fe1c5140866f2cdc560cde1b3e1.png';
import impactResultsImage from 'figma:asset/86c60e2013b8c1b0ee8630769058bc7b333e5806.png';
import presentationImage from 'figma:asset/3b6fb1c6a135ede3452e71ed3e0af02443f554fe.png';
import assetManagerImage from 'figma:asset/d583f25f1a25251c0c06dfa6f75733063a02e04d.png';
import workshopImage from 'figma:asset/a10069022316526b91914b1ba65fccfe7528ef25.png';
import bangaloreWorkshopImage from 'figma:asset/75d54c21f8c6ccb394a43ec4ef63d98e04c31f64.png';
import bangaloreStatueImage from 'figma:asset/3c0767d316948ae176144bbb07f3ebe8624267f0.png';
import studioPresentationImage from 'figma:asset/4cba9f7a2e22e55c64191063fab822bf8375740e.png';
import studioWorkshopImage from 'figma:asset/a1749c238e5471e07f1c6eeb8b8685596d63f84f.png';
import newStudioPresentationImage from 'figma:asset/b4e5f3a0f85d789571822a6e8bda042c358d6662.png';
import uxForAiDesignImage from 'figma:asset/bfa0512d651de6a939924d80d221e4ee3d9a8891.png';
import uxpaLogoImage from 'figma:asset/12ea3552f145caae81c0ca17c8fa22292c21c848.png';
import bangalorePresentationImage from 'figma:asset/b10f7f26ce67dfed1e11aa4ad56f3e33e4e0d8d4.png';
import bangaloreGroupImage from 'figma:asset/4bae7c6e49d99d2b8bb73f892beac0d01e11aa7d.png';
import bangaloreStatueSideImage from 'figma:asset/7bccb7a869b90a625e89d9d346da5faf20e0b87e.png';
import bangalorePresentingImage from 'figma:asset/cfd9273eb644c2f52815bae09568b80b740183c4.png';

interface Quote {
  text: string;
  author?: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  event: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  responsibilities: string[];
  quotes: Quote[];
}

const projectsData: Record<string, ProjectData> = {
  'ibm-environmental': {
    id: 'ibm-environmental',
    title: 'Above Ground Biomass-Geospatial Analytics Project',
    category: 'UX Design',
    year: '2024',
    role: 'Senior UX Design Manager',
    event: 'IBM',
    description: 'In order to offset carbon output, companies calculate an area\'s above ground biomass (all living plant matter above the soil) to determine how much carbon the biomass will naturally reclaim. (Carbon Sequestration)',
    challenge: 'I was tasked with defining how users, especially ESG and portfolio managers, could meaningfully engage with Above Ground Biomass (AGB) data to guide investment and monitoring decisions. This meant uncovering high-value use cases, clarifying user personas, and mapping intuitive end-to-end flows. I also worked to leverage the Environmental Intelligence Suite 2.0\'s dashboarding capabilities to give users clear visibility into carbon content across their portfolios, compare multiple locations, and use historical trends to inform action.\n\nI helped shape a longer-term vision that includes predictive insights and more robust reporting needs based off AI foundation models.',
    solution: 'I used the Product Development Lifecycle (PDLC) model to begin the discovery process. I facilitated an alignment workshop with the cross-functional team (UXD/UXR/PM/Dev) to identify product opportunities with commercial viability.',
    impact: [
      'More stringent environmental regulations in Europe make this more attractive to the European market. (EU Deforestation Regulation) After launch, the AGB solution gained adoption from 2 Monitoring, Reporting, and Verification providers and companies preparing for EUDR, driving growing data usage and early revenue.',
      'As customers validate the accuracy and value of the data continues to evolve, future enhanced features are being planned to expand into adjacent markets, and create upsell opportunities across the Sustainability Software portfolio.',
    ],
    responsibilities: [
      'Designed end-to-end UX for core platform features',
      'Conducted user research with enterprise clients across multiple industries',
      'Built design systems and component libraries for scalable development',
      'Collaborated with AI/ML teams to design intuitive data visualization',
      'Facilitated design workshops with cross-functional stakeholders',
    ],
    quotes: [
      {
        text: "Emily's ability to lead cross-functional workshops, drive alignment, and step outside her lane to move projects forward made her an invaluable asset to our organization.",
        author: 'Erin Buonomo - Executive Director of Product Design, IBM',
      },
      {
        text: "Emily's communication style is clear, objective, collaborative and supportive. She provides feedback that is both actionable and data-informed, ensuring design decisions are grounded in evidence while encouraging creativity.",
        author: 'Mary Attridge - Content Designer',
      },
    ],
  },
  'maximo-asset': {
    id: 'maximo-asset',
    title: 'Renewables Forecasting Project',
    category: 'Product Design',
    year: '2020-2023',
    role: 'Senior UX Designer',
    event: 'IBM',
    description: '',
    challenge: '<p>Energy companies around the world were struggling with the growing unpredictability of climate-driven weather events. Public weather data was too coarse and inconsistent, updating too slowly to guide critical operations. Customers needed a forecasting solution that would:</p><ul><li>Deliver <strong>high-accuracy, high-frequency</strong> renewable energy forecasts,</li><li>Integrate seamlessly into their existing workflow and operational systems,</li><li>Improve maintenance scheduling and operational safety,</li><li>Scale across large and diverse wind and solar portfolios, and</li><li>Visualize performance metrics in customizable dashboards tailored to business needs.</li></ul><p>The core ask became clear: <strong>build a scalable, AI-driven forecasting platform that empowers asset managers to make fast, confident, safe, and cost-effective decisions.</strong></p>',
    solution: '<p>I began by deeply understanding the operational pressures of maintenance planners, asset managers, and grid operators. Through interviews, workflow observations, and co-design sessions, I identified key pain points: scattered systems, safety risks, reliance on low-quality public data, and the need for precise, real-time insights.</p><p style="margin-top: 2rem;">Working with research, I facilitated a competitive analysis workshop where we identified target competitors to understand capability expectations as we started to construct our solution.</p>',
    impact: [
      'The largest renewable company in Brazil achieved a <strong>30%</strong> improvement in solar accuracy and <strong>15%</strong> improvement in wind accuracy, transforming maintenance planning and strategic operations.',
      'A major energy provider in India reached <strong>92–94%</strong> accuracy in day-ahead forecasting, significantly reducing regulatory penalties.',
      'A Texas utility realized <strong>~95%</strong> accuracy, generating <strong>$2–4 million</strong> per year in potential savings from improved scheduling and energy balancing.',
      'Across customers, improved forecasting accuracy has led to safer maintenance windows, reduced downtimes, more stable grid operations, and meaningful cost reductions.',
    ],
    responsibilities: [
      'Designed end-to-end UX strategy and features for core Maximo platform across web and mobile',
      'Conducted extensive field research with maintenance teams across multiple industries and geographic regions',
      'Designed mobile-first workflows for field technicians working in challenging environments with limited connectivity',
      'Built design system and component library adopted across the entire Maximo product family',
      'Collaborated with IoT and AI teams to design intuitive interfaces for sensor data visualization and predictive analytics',
      'Facilitated cross-functional design workshops and usability testing sessions with real maintenance teams',
    ],
    quotes: [
      {
        text: 'Emily is a great active listener and facilitator. She is proactive and detail oriented. She is great at communicating how your work directly contributes to the goals of the business.',
        author: 'Chris Lange, Content Design, IBM',
      },
      {
        text: 'Any team would be lucky to have Emily—she brings strategic thinking, collaborative energy, and a relentless focus on delivering value to users.',
        author: 'Erin Buonomo, Director of Product Design, Asset Lifecycle Management, IBM',
      },
    ],
  },
  'watson-ai': {
    id: 'watson-ai',
    title: 'UX for AI',
    category: 'AI/UX Research',
    year: '2023',
    role: 'Senior UX Manager, Author, AI Guild Lead',
    event: 'IBM',
    description: 'Co-authored the UX for AI Principles handbook and led the initiative to integrate AI capabilities across an enterprise product suite.',
    challenge: 'As AI capabilities expanded across IBM products, teams needed clear principles and patterns for designing trustworthy, transparent AI experiences that users could understand and control.',
    solution: '<p>I was a founding member of the IBM AI Guild in 2021, where I helped lead our transition into designing intuitive, human-centered AI experiences. As part of that work, I co-authored IBM\'s UX for AI principles. These were guidelines that ensure our AI solutions enhance human abilities rather than limit them.</p><p style="margin-top: 2rem;">By creating a clear and accessible foundation for AI-UX craft, I enabled designers and cross-functional teams to develop a shared understanding and stronger empathy in a space that was rapidly evolving. Leading my team into this new design frontier meant defining expectations, responsibilities, and collaborative frameworks that empowered us to make thoughtful, confident AI design decisions.</p>',
    impact: [
      'Established UX for AI Principles adopted across IBM product portfolio',
      'Trained 50+ designers and product teams on AI UX best practices',
      `<div class="flex items-center gap-3"><img src="${uxpaLogo}" alt="UXPA International" class="h-18 w-auto flex-shrink-0" /><a href="https://uxpa.org/aiovg_videos/designing-the-ux-for-ai-not-your-typical-ux-design/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800 transition-colors">Presented at UXPA conferences (2021, 2024) on AI in UX design</a></div>`,
    ],
    responsibilities: [
      'Co-authored IBM UX for AI Principles and design guidelines',
      'Led UX for AI guild with designers across product divisions',
      'Designed explainable AI interfaces and transparency features',
      'Conducted AI ethics workshops and design critiques',
      'Created AI design pattern library and documentation',
    ],
    quotes: [
      {
        text: 'Emily was instrumental in defining the core principles that became the foundation of our AI design language. Thanks to her work, we achieved 100% adoption of the design language across AI projects, accelerated delivery timelines, and created a consistent, user-centered experience that is now a benchmark for all of IBM.',
        author: 'Stefanie Lauria - IBM Design Principal for AI Products, IBM',
      },
      {
        text: 'Emily consistently raised the bar for user experience quality across a highly complex portfolio of enterprise products in asset management and environmental sustainability.',
        author: 'Craig Moser - User Experience Design Executive, IBM',
      },
    ],
  },
  'broadridge-advisor': {
    id: 'broadridge-advisor',
    title: 'Project Polaris',
    category: 'UX/UI Design',
    year: '2025',
    role: 'Senior Design Manager, UX Design, User Research',
    event: 'IBM',
    description: 'Reimagining the Digital Experience for IBM Environmental Intelligence',
    challenge: 'IBM Environmental Intelligence (EI) was facing a significant awareness and engagement gap among its core technical audience—developers and data scientists seeking to integrate climate, weather, or emissions data into applications and workflows. Despite strong underlying capabilities, EI struggled with:<ul><li>Low page traffic and low sign up conversion rates</li><li>Prospective users not finding the right level of technical depth, examples, and use cases</li><li>Competitors providing clearer, more actionable journeys</li><li>.com template constraints limiting EI\'s ability to highlight technical value</li><li>A lack of early, hands-on value demonstration in the discovery journey</li></ul><br/><strong>The mandate:</strong><br/>Reimagine a new digital experience for IBM EI that:<ul><li>Increases monthly page traffic 10x</li><li>Achieves a 4% conversion rate from visits to sign-ups</li><li>Positions EI as the go-to for Developers and data scientists looking to embed environmental intelligence or emissions calculation directly into their applications</li><li>Designs a scalable user journey template, starting with GHG emissions APIs, that can extend to future APIs</li></ul>',
    solution: '<span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: linear-gradient(135deg, #6B8CAE 0%, #4A5F7F 100%); color: white; border-radius: 50%; font-weight: 600; font-size: 18px; margin-right: 12px; flex-shrink: 0; vertical-align: middle;">1</span><strong>Competitive Benchmarking</strong><br/><br/>The first thing I needed to do was a Competitive Benchmarking exercise to understand what the table stakes were in this market and what the competition was excelling at and where there were gaps in the experiences leaving the door open for new solutions like ours. I facilitated a workshop with PM Dov and Sales.<br/><br/>I analyzed top-performing competitors across addressable markets, examining:<ul style="margin-left: 2rem;"><li>SEO and search capture strategies</li><li>Developer-forward content patterns</li><li>Web UX models for data/API products</li><li>The clarity and accessibility of hands-on examples</li><li>How they surface industry use cases, pricing, and documentation</li></ul><br/>Competitors like Climatiq and tomorrow.io demonstrated best-in-class approaches: fast access to data search, clear API feature breakdowns, and strong use-case framing.<br/><br/><span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: linear-gradient(135deg, #6B8CAE 0%, #4A5F7F 100%); color: white; border-radius: 50%; font-weight: 600; font-size: 18px; margin-right: 12px; flex-shrink: 0; vertical-align: middle;">2</span><strong>Current-State Experience Audit</strong><br/><br/>I then assessed EI\'s end-to-end site experience across pages including:<ul style="margin-left: 2rem;"><li>GHG Landing</li><li>Industries</li><li>Emission Factor Datasets</li><li>Pricing</li><li>Calculator Demo</li></ul><br/>Recurring issues emerged:<ul style="margin-left: 2rem;"><li>Messaging was too high-level, not API- or workflow-oriented</li><li>The value of Scope 1/2/3 data and industry applications was not surfaced early enough</li><li>Ad banners and promotional content felt under-contextualized</li><li>Multiple entry points to data created friction</li><li>Pricing lacked clarity and comparative structure</li><li>Examples and demos were valuable but needed deeper configurability and context</li></ul>',
    impact: [
      '<strong>1. A Clear, Evidence-Based Design Direction</strong>',
      'A validated strategy rooted in competitive benchmarking and user needs, ensuring IBM could confidently move toward an experience that:',
      '<ul style="margin-left: 2rem;"><li>Allows users to understand EI\'s value earlier</li><li>Highlights the unique strengths of EI\'s emissions APIs</li><li>Dramatically reduces friction in the evaluation and trial journey</li></ul>',
      '<strong>2. A Replicable User-Journey Template</strong>',
      'The new GHG API journey design serves as a model for all future EI APIs, allowing IBM to scale consistently across products.',
      '<strong>3. High-Impact Experience Improvements Identified</strong>',
      'Including:',
      '<ul style="margin-left: 2rem;"><li>Coherent API messaging</li><li>Stronger industry and use-case storytelling</li><li>Cleaner data catalog navigation</li><li>Standardized dataset terminology</li><li>More intuitive pricing comparisons</li><li>A hands-on, interactive emissions calculator demo that increases engagement</li></ul>',
    ],
    responsibilities: [
      'Designed UX redesign of advisor workflows and client management tools',
      'Conducted contextual inquiry with financial advisors',
      'Created detailed wireframes, prototypes, and design specifications',
      'Collaborated with development teams on agile implementation',
      'Conducted usability testing and iterative design improvements',
    ],
    quotes: [
      {
        text: 'Emily is a trusted team member and design leader who is team focused and who drives consensus within cross functional teams.',
        author: 'Sandra Gannon, Director of Design, IBM',
      },
      {
        text: 'Emily has played a pivotal role in this strategic growth initiative.',
        author: 'Cooper Sanborn, Principal Design Manager, IBM',
      },
    ],
  },
  'nuveen-digital': {
    id: 'nuveen-digital',
    title: 'Presentations and Speaking Events',
    category: 'UX/UI Design',
    year: '2025',
    role: 'Presenter and workshop facilitator',
    event: 'Maximo Utilities Working Group: Denver',
    description: 'I have spoken at conferences, facilitated hands-on workshops, and led collaborative sessions designed to help teams deepen their understanding of AI, design, and user-centered practices.',
    challenge: '',
    solution: 'I went on a speaking tour to share the work I led in the AI Guild on defining user-experience principles for AI. At UXPA, I co-presented a global webinar introducing the UX for AI Principles handbook, giving designers around the world a clear, practical foundation for creating intuitive, human-centered AI experiences.',
    impact: [
      'Launched 20+ interactive product presentations',
      'Increased digital engagement by 65%',
      'Supported $500M+ in new investment product launches',
    ],
    responsibilities: [
      'Designed interactive presentations and digital marketing materials',
      'Created data visualizations for investment performance',
      'Developed design systems for brand consistency',
      'Collaborated with product and marketing teams',
      'Designed responsive web and mobile experiences',
    ],
    quotes: [
      {
        text: 'Emily ran cross-functional workshops with mastery, aligning diverse stakeholders with competing priorities and removing roadblocks so her team could execute quickly.',
        author: 'Craig Moser - User Experience Design Executive, IBM',
      },
      {
        text: 'Was a great session by Mats, Emily and Mumtaz and just grateful for this opportunity. Thanks for the insights.',
        author: 'Participant at the Studio Ambassador Workshop, Bangalore India',
      },
    ],
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCompetitorModal, setShowCompetitorModal] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showUxForAiModal, setShowUxForAiModal] = useState(false);
  const videoRef = useState<HTMLIFrameElement | null>(null)[0];
  
  const project = projectId ? projectsData[projectId] : null;

  // Auto-play video when modal opens
  useEffect(() => {
    if (isVideoModalOpen && videoRef) {
      // Small delay to ensure iframe is loaded
      const timer = setTimeout(() => {
        try {
          // Try to trigger autoplay via postMessage
          videoRef.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } catch (e) {
          // Autoplay not supported - silent fail
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVideoModalOpen, videoRef]);

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Track scroll position to show/hide top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setShowTopButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-black transition-colors"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-8 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors bg-white px-4 py-2 shadow-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Top Button */}
      {showTopButton && (
        <div className="fixed top-8 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm hover:text-gray-600 transition-all bg-white px-4 py-2 shadow-sm hover:shadow-md"
          >
            <ArrowUp size={16} />
            Top
          </button>
        </div>
      )}

      {/* Project Header */}
      <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-[42px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">{project.title}</h1>
          

          
          {/* Project Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Event</p>
              <p className="text-sm">{project.event}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Year</p>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Role</p>
              <p className="text-sm">{project.role}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-2">
            {/* Italy Image - Show only for IBM Environmental project */}
            {project.id === 'ibm-environmental' && (
              <div className="mb-8">
                <ImageWithFallback
                  src={italyImage}
                  alt="Italy Above Ground Biomass Comparison"
                  className="w-full h-auto"
                />
              </div>
            )}
            {/* Renewables Hero Image */}
            {project.id === 'maximo-asset' && (
              <>
                <div className="mb-4 relative group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                  <ImageWithFallback
                    src={renewablesHeroImage}
                    alt="Wind turbines renewable energy landscape"
                    className="w-full h-auto"
                  />
                  {/* Play Button Overlay */}
                  {!isVideoModalOpen && (
                    <div className="absolute inset-0 flex items-center justify-center" onClick={() => setIsVideoModalOpen(true)}>
                      <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white/80 transition-all">
                        <Play className="w-7 h-7 text-gray-700 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  {/* Video Overlay */}
                  {isVideoModalOpen && (
                    <div 
                      className="absolute inset-0 bg-black z-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoModalOpen(false);
                      }}
                    >
                      {/* Close Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsVideoModalOpen(false);
                        }}
                        className="absolute top-2 left-2 z-50 bg-white/90 hover:bg-white p-2 shadow-md transition-all hover:shadow-lg"
                        aria-label="Close video"
                      >
                        <X size={20} className="text-gray-700" />
                      </button>
                      <iframe 
                        className="w-full h-full border border-gray-300" 
                        src="https://drive.google.com/file/d/10FtFP3hQtD4Ro-ALVDe87-7kEdt2Bkqq/preview"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        onClick={(e) => e.stopPropagation()}
                      >
                      </iframe>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4 italic">
                  I contributed to the team that produced this video, featured in our Renewable Forecasting tool's award-winning submission for the <strong>2023 Sustainability Product of the Year.</strong>
                </p>
              </>
            )}
            
            {/* UX Principles Header Image - only for watson-ai project */}
            {project.id === 'watson-ai' && (
              <div className="mb-8">
                <ImageWithFallback
                  src={uxPrinciplesHeaderImage}
                  alt="UX for AI Principles"
                  className="w-[87.5%] h-auto"
                />
              </div>
            )}
            
            {/* Polaris Hero Image - only for broadridge-advisor project */}
            {project.id === 'broadridge-advisor' && (
              <div className="mb-8">
                <div className="w-full border border-gray-300" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1xtJr0Onf5rJfISiGXxjSPETUxLEJM7JR/preview"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allow="autoplay"
                    title="Greenhouse Gas Emissions Calculation"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 italic"><strong>Reimagining the Digital Experience for IBM Environmental Intelligence:</strong> Demo I created to communicate the growth strategy for this project.</p>
              </div>
            )}
            

          </div>
        </div>
      </div>

      {/* Main Content with Sidebar Layout */}
      <div className="flex gap-8 max-w-7xl mx-auto px-6">
        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          
      {/* Challenge Section */}
      <div id="challenge" className="bg-gray-50 py-4 md:py-6 -mx-6 px-6">
        <div className="max-w-full">
          <div className="max-w-3xl">
            {project.id === 'nuveen-digital' ? (
              <>
                <div className="mb-8 flex gap-4">
                  <div className="w-1/2 flex flex-col gap-4">
                    <ImageWithFallback
                      src={presentationImage}
                      alt="Presentation at Maximo Utilities Working Group"
                      className="w-full h-auto"
                    />
                    <ImageWithFallback
                      src={workshopImage}
                      alt="Workshop Session"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-1/2">
                    <ImageWithFallback
                      src={assetManagerImage}
                      alt="Asset Manager Workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                  <p>
                    I presented at the annual Maximo Utilities Working Group in Denver, which offered a valuable opportunity to connect directly with some of our most active Maximo users. During the session, I shared an early preview of key features planned for our 9.2 release scheduled for summer 2026. I then facilitated an interactive workshop, breaking attendees into small groups to design their ideal dashboards and identify the KPIs that matter most to them. The conversations and hands-on activities provided rich insights into how users are engaging with the product today, where they encounter friction, and what improvements would make the biggest difference in their day-to-day work.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="w-full border border-gray-300" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      src="https://drive.google.com/file/d/1yFMKYgBS1Wp-cUVFS2ep7KyjjRWkEZxx/preview"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      allow="autoplay"
                      title="Operations Dashboard Presentation"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 italic">Presenting our Operations Dashboard solution at the Maximo Utilities Working Group.</p>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 mt-12 pt-12 border-t border-gray-200">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Event</p>
                    <p className="text-sm">Studio Ambassador Workshop: Bangalore India</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Year</p>
                    <p className="text-sm">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Role</p>
                    <p className="text-sm">Presenter, Workshop Facilitator, Mentor</p>
                  </div>
                </div>

                {/* Repeated Section */}
                <div className="mt-16 mb-8 flex gap-4 items-start">
                  <ImageWithFallback
                    src={studioWorkshopImage}
                    alt="Workshop Session"
                    className="w-1/2 h-auto"
                  />
                  <ImageWithFallback
                    src={bangalorePresentingImage}
                    alt="Presenting at Bangalore Workshop"
                    className="w-1/2 h-auto"
                  />
                </div>
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                  <p className="mb-6">
                    In May 2025, I traveled to our design studio in Bangalore, India to help facilitate a three-day Studio Ambassador workshop. This was an opportunity not only to share my expertise as a Senior Design Manager, but also to learn directly from the designers in the room. Alongside my fellow facilitators, I guided sessions focused on elevating delivery skills, strengthening strategic design thinking, and deepening cross-studio collaboration. We spent time discussing real-world practices, exploring new methods, and creating space for designers at every level to share their experiences.
                  </p>
                  <p className="mb-6">
                    The workshop blended presentations, hands-on activities, and reflective discussions, all centered on helping participants build confidence in their craft, improve their influence within the 3-in-the-box model, and strengthen the way they communicate design decisions across teams.
                  </p>
                  <p>
                    It was an energizing exchange of knowledge that strengthened our global design community and broadened my own perspective as a design leader.
                  </p>
                </div>

                {/* Metadata Grid - Second Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 mt-12 pt-12 border-t border-gray-200">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Event</p>
                    <p className="text-sm">User Experience Professionals Association (UXPA) International</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Year</p>
                    <p className="text-sm">2024</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Role</p>
                    <p className="text-sm">Webinar Presenter</p>
                  </div>
                </div>

                {/* Repeated Section - Second */}
                
                {/* UXPA Logo and Link */}
                <div className="mt-16 mb-8 flex items-center gap-6">
                  <a 
                    href="https://uxpa.org/aiovg_videos/designing-the-ux-for-ai-not-your-typical-ux-design/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src={uxpaLogoImage}
                      alt="UXPA International"
                      className="h-16 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </a>
                  <a 
                    href="https://uxpa.org/aiovg_videos/designing-the-ux-for-ai-not-your-typical-ux-design/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 underline"
                  >
                    Click to view the webinar
                  </a>
                </div>
                
                <div className="mb-8">
                  <a 
                    href="https://drive.google.com/file/d/1xqO7CjTHaQNULxVlVSnY2-L25PQdsqdy/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <ImageWithFallback
                      src={uxForAiDesignImage}
                      alt="UX for AI design presentation"
                      className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>

                <div 
                  className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8"
                  dangerouslySetInnerHTML={{ __html: project.solution }}
                />
              </>
            ) : (
              <>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 text-[32px]">The Challenge</h3>
                <div 
                  className="text-lg md:text-xl leading-relaxed text-gray-700 challenge-content"
                  dangerouslySetInnerHTML={{ __html: project.challenge }}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div id="process" className="pt-16 md:pt-24 pb-5 md:pb-8">
        <div className="max-w-full">
          <div className="max-w-3xl">
            {project.id !== 'nuveen-digital' && (
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 text-[32px]">The Process</h3>
            )}
            
            {/* Special rendering for Maximo Asset project with image between paragraphs */}
            {project.id === 'maximo-asset' ? (
              <>
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p>I began by deeply understanding the operational pressures of maintenance planners, asset managers, and grid operators. Through interviews, workflow observations, and co-design sessions, I identified key pain points: scattered systems, safety risks, reliance on low-quality public data, and the need for precise, real-time insights.</p>
                </div>
                
                {/* Competitor Analysis Image */}
                <div className="mb-12">
                  <div className="overflow-hidden relative">
                    {/* Expand Icon */}
                    <button
                      onClick={() => setShowCompetitorModal(true)}
                      className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                      aria-label="Expand image to full view"
                    >
                      <Expand size={20} className="text-gray-700" />
                    </button>
                    
                    <ImageWithFallback
                      src={competitorAnalysisImage}
                      alt="Target Competitors - Competitive Analysis"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Working in Mural I facilitated a cross-functional team exercise to better understand the competitive landscape before designing our solution.
                  </p>
                </div>
                
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p>Working with research, I facilitated a competitive analysis workshop where we identified target competitors to understand capability expectations as we started to construct our solution.</p>
                </div>
                
                {/* Competitor Analysis Modal */}
                <Dialog open={showCompetitorModal} onOpenChange={setShowCompetitorModal}>
                  <DialogContent className="max-w-[95vw] bg-white overflow-auto h-[98vh] p-0">
                    <DialogTitle className="sr-only">Competitor Analysis Workshop</DialogTitle>
                    <DialogDescription className="sr-only">
                      Full view of competitive analysis workshop in Mural
                    </DialogDescription>
                    <div className="overflow-auto w-full h-full">
                      <div style={{ width: '150vw', height: 'auto' }}>
                        <ImageWithFallback
                          src={competitorAnalysisModalImage}
                          alt="Competitor Analysis Workshop - Full view"
                          className="w-full h-auto"
                          style={{ 
                            transform: 'scale(1.5)',
                            transformOrigin: 'top left'
                          }}
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            ) : project.id === 'watson-ai' ? (
              <>
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p>I was a founding member of the IBM AI Guild in 2021, where I helped lead our transition into designing intuitive, human-centered AI experiences. As part of that work, I co-authored IBM's UX for AI principles. These were guidelines that ensure our AI solutions enhance human abilities rather than limit them.</p>
                </div>
                
                {/* UX for AI Image with Text */}
                <div className="mb-12 flex gap-8 items-start">
                  <div 
                    className="w-1/3 flex-shrink-0 cursor-pointer" 
                    onClick={() => window.open('https://drive.google.com/file/d/190BPgtBFrohul1q9hOWhsmiV37ZTk2M0/view', '_blank')}
                  >
                    <ImageWithFallback
                      src={uxForAiImage}
                      alt="UX for AI - July 2023"
                      className="w-full h-auto border border-gray-300 hover:opacity-90 transition-opacity"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2 hover:text-gray-900 transition-colors">Click to view UX for AI principles</p>
                  </div>
                  
                  <div className="text-lg md:text-xl leading-relaxed text-gray-700 flex-1">
                    <p className="mb-6">By creating a clear and accessible foundation for AI-UX craft, I enabled designers and cross-functional teams to develop a shared understanding and stronger empathy in a space that was rapidly evolving.</p>
                    <p>Leading my team into this new design frontier meant defining expectations, responsibilities, and collaborative frameworks that empowered us to make thoughtful, confident AI design decisions.</p>
                  </div>
                </div>
              </>
            ) : project.id === 'broadridge-advisor' ? (
              <>
                {/* Section 1: Competitive Benchmarking */}
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p className="mb-6">
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'linear-gradient(135deg, #6B8CAE 0%, #4A5F7F 100%)', color: 'white', borderRadius: '50%', fontWeight: 600, fontSize: '18px', marginRight: '12px', flexShrink: 0, verticalAlign: 'middle' }}>1</span>
                    <strong>Competitive Benchmarking</strong>
                  </p>
                  
                  <p className="mb-6">
                    The first thing I needed to do was a Competitive Benchmarking exercise to understand what the table stakes were in this market and what the competition was excelling at and where there were gaps in the experiences leaving the door open for new solutions like ours. I facilitated an interactive workshop with PM, Dev and Sales.
                  </p>
                  
                  {/* Competitive Benchmarking Image */}
                  <div className="mb-6">
                    <ImageWithFallback
                      src={competitiveBenchmarkingImage}
                      alt="Competitive Benchmarking Analysis"
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <p className="mb-6">
                    I analyzed top-performing competitors across addressable markets, examining:
                  </p>
                  <ul className="ml-8 mb-6 list-disc">
                    <li>SEO and search capture strategies</li>
                    <li>Developer-forward content patterns</li>
                    <li>Web UX models for data/API products</li>
                    <li>The clarity and accessibility of hands-on examples</li>
                    <li>How they surface industry use cases, pricing, and documentation</li>
                  </ul>
                  <p className="mb-6">
                    Competitors like Climatiq and tomorrow.io demonstrated best-in-class approaches: fast access to data search, clear API feature breakdowns, and strong use-case framing.
                  </p>
                </div>
                
                {/* Section 2: Current-State Experience Audit */}
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p className="mb-6">
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'linear-gradient(135deg, #6B8CAE 0%, #4A5F7F 100%)', color: 'white', borderRadius: '50%', fontWeight: 600, fontSize: '18px', marginRight: '12px', flexShrink: 0, verticalAlign: 'middle' }}>2</span>
                    <strong>Current-State Experience Audit</strong>
                  </p>
                  
                  <p className="mb-6">
                    I then assessed EI's end-to-end site experience across pages including:
                  </p>
                  <ul className="ml-8 mb-6 list-disc">
                    <li>GHG Landing</li>
                    <li>Industries</li>
                    <li>Emission Factor Datasets</li>
                    <li>Pricing</li>
                    <li>Calculator Demo</li>
                  </ul>
                  <p className="mb-6">
                    Recurring issues emerged:
                  </p>
                  <ul className="ml-8 mb-6 list-disc">
                    <li>Messaging was too high-level, not API- or workflow-oriented</li>
                    <li>The value of Scope 1/2/3 data and industry applications was not surfaced early enough</li>
                    <li>Ad banners and promotional content felt under-contextualized</li>
                    <li>Multiple entry points to data created friction</li>
                    <li>Pricing lacked clarity and comparative structure</li>
                    <li>Examples and demos were valuable but needed deeper configurability and context</li>
                  </ul>
                </div>
                
                {/* Section 3: User Centered Redesign Strategy */}
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p className="mb-6">
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'linear-gradient(135deg, #6B8CAE 0%, #4A5F7F 100%)', color: 'white', borderRadius: '50%', fontWeight: 600, fontSize: '18px', marginRight: '12px', flexShrink: 0, verticalAlign: 'middle' }}>3</span>
                    <strong>User Centered Redesign Strategy</strong>
                  </p>
                  
                  {/* User Centered Redesign Image */}
                  <div className="mb-6">
                    <ImageWithFallback
                      src={userCenteredRedesignImage}
                      alt="User Centered Redesign Strategy - GHG Emissions Calculation"
                      className="w-full h-auto"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">
                      I collaborated in Mural in hands-on working sessions
                    </p>
                  </div>
                  
                  <p className="mb-6">
                    To address these gaps, I defined design principles aligned with user needs:
                  </p>
                  
                  <ul className="ml-8 mb-6 list-disc">
                    <li><strong>Show value immediately</strong> with hands-on examples and API-in-action components</li>
                    <li><strong>Streamline navigation</strong> so users can reach data, docs, and pricing in fewer clicks</li>
                    <li><strong>Reframe the story</strong> around building with APIs rather than generic sustainability</li>
                    <li><strong>Strengthen industry relevance</strong> with clearer use case mapping</li>
                    <li><strong>Make pricing transparent and comparable</strong> with clear editions, feature descriptions, and a usage estimator</li>
                    <li><strong>Introduce standardization</strong> of dataset and data source language aligned with industry norms</li>
                    <li><strong>Create a replicable template</strong> for future EI APIs</li>
                  </ul>
                </div>
                
                {/* Section 4: Wireframing Future-State Concepts */}
                <div className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  <p className="mb-6">
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'linear-gradient(135deg, #6B8CAE 0%, #4A5F7F 100%)', color: 'white', borderRadius: '50%', fontWeight: 600, fontSize: '18px', marginRight: '12px', flexShrink: 0, verticalAlign: 'middle' }}>4</span>
                    <strong>Wireframing Future-State Concepts</strong>
                  </p>
                  
                  <p className="mb-6">
                    I produced screens for:
                  </p>
                  
                  <ul className="ml-8 mb-6 list-disc">
                    <li>A reimagined GHG API landing experience</li>
                    <li>Industry-specific pages showcasing concrete applications</li>
                    <li>A more intuitive Emission Factor Dataset navigation model</li>
                    <li>A simplified pricing and editions comparison</li>
                    <li>An interactive emissions calculation example that can scale across industries</li>
                  </ul>
                  
                  <p className="mb-6">
                    Each screen incorporated high-level findings, suggested changes, and design notes from the workshop.
                  </p>
                  
                  <div className="mb-8">
                    <img 
                      src={wireframeImage1} 
                      alt="Greenhouse Gas emissions calculation interface" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <img 
                      src={wireframeImage2} 
                      alt="Emission Factors Data Sets interface" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </>
            ) : project.id !== 'nuveen-digital' ? (
              <div 
                className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12 challenge-content"
                dangerouslySetInnerHTML={{ __html: project.solution }}
              />
            ) : null}
          </div>
        </div>
        
        {/* Solution Images - Show for IBM Environmental project */}
        {project.id === 'ibm-environmental' && (
          <>
            <div className="mt-12 flex justify-center px-6">
              <div>
                <ImageWithFallback
                  src={environmentalImage}
                  alt="Product Development Lifecycle"
                  className="w-full h-auto max-w-4xl"
                />
              </div>
            </div>
            
            {/* Gray separator line */}
            <div className="mt-16 mb-16 flex justify-center px-6">
              <div className="w-full max-w-6xl border-b border-gray-300"></div>
            </div>
            
            {/* Process image centered */}
            <div className="mb-24 max-w-5xl mx-auto px-6">
              <div className="max-w-3xl">
                <div className="overflow-hidden relative">
                  {/* Expand Icon */}
                  <button
                    onClick={() => setShowImageModal(true)}
                    className="absolute top-2 left-2 z-10 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                    aria-label="Expand image to full view"
                  >
                    <Expand size={20} className="text-gray-700" />
                  </button>
                  
                  <ImageWithFallback
                    src={processImage1}
                    alt="Mural workshops"
                    className="w-full h-auto border border-gray-200"
                    style={{ 
                      transform: 'scale(1.8)',
                      transformOrigin: 'top left'
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-6">
                  Mural workshops to align on expectations, use cases and target industries
                </p>
              </div>
            </div>

            {/* Image Modal */}
            <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
              <DialogContent className="max-w-[95vw] bg-white overflow-auto h-[98vh] p-0">
                <DialogTitle className="sr-only">Mural Workshop Image</DialogTitle>
                <DialogDescription className="sr-only">
                  Full view of mural workshops to align on expectations, use cases and target industries
                </DialogDescription>
                <div className="overflow-auto w-full h-full">
                  <div style={{ width: '200vw', height: 'auto' }}>
                    <ImageWithFallback
                      src={processImage1}
                      alt="Mural workshops - Full view"
                      className="w-full h-auto"
                      style={{ 
                        transform: 'scale(1.5)',
                        transformOrigin: 'top left'
                      }}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Continued Process Text */}
            <div className="max-w-5xl mx-auto px-6 mb-24">
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                  The team focused on our target persona and researched responsibilities and pain points to establish what problems we were trying to solve for and establish user goals. In this case they were:
                </p>
                <ul className="space-y-3 ml-6 mb-12">
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • See the changes to carbon content metrics since the baseline date to determine progress of carbon sequestration projects
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • On map: Pinpoint where changes have occurred in a region over time
                  </li>
                </ul>
                
                {/* Persona Image */}
                <div className="mb-8">
                  <ImageWithFallback
                    src={personaImage}
                    alt="Target Persona - ESG Portfolio Manager Carlos"
                    className="w-full h-auto"
                  />
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
                  I worked closely with our Data Scientists to understand the data feeding into our AI foundation model, then designed what the end user would see and how they would experience it.
                </p>
                
                {/* Side by Side Images */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* LiDAR Image */}
                  <div>
                    <div className="h-full flex items-center">
                      <ImageWithFallback
                        src={lidarImage}
                        alt="LiDAR Aerial scans"
                        className="w-full h-full object-cover"
                        style={{ transform: 'scale(1.05)' }}
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      LiDAR Aerial scans to determine percentage of biomass in certain areas.
                    </p>
                  </div>
                  
                  {/* Histogram Image */}
                  <div>
                    <div className="h-full flex items-center overflow-hidden border border-gray-200">
                      <ImageWithFallback
                        src={histogramImage}
                        alt="Histograms of Above Ground Biomass values"
                        className="w-full h-auto"
                        style={{ transform: 'scale(1.5)' }}
                      />
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Histograms generated from aerial scans of Above Ground Biomass values for various locations
                    </p>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-30 mb-1">
                  When adding AI to any design, it's critical that the user be kept in the loop and I encouraged the team to focus on explainability whenever we added data that was generated from our AI model.
                </p>
                
                {/* Carbon Data Image */}
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={carbonDataImage}
                    alt="Carbon content data table with location information"
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-4">
                    By building explainability into the UI, users see the reasoning behind an AI's decisions, building confidence and trust in how the product works.
                  </p>
                </div>
                
                {/* Explainability Image */}
                <div className="overflow-hidden mt-8">
                  <ImageWithFallback
                    src={explainabilityImage}
                    alt="IBM Environmental Intelligence Suite showing AGB overview for Brazil"
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm text-gray-600 mt-4 mb-0">
                    Using historical climate and weather data, combined with aerial LiDAR data, the AI model can generate current, historical and predictive insights based on trends.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Solution Images - Show for Maximo project */}
        {project.id === 'maximo-asset' && (
          <>
            {/* Gray separator line */}
            <div className="mt-16 mb-16 flex justify-center px-6">
              <div className="w-full max-w-6xl border-b border-gray-300"></div>
            </div>
            
            {/* Research Insights */}
            <div className="mb-24 max-w-5xl mx-auto px-6">
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                  With these insights, I worked with engineering to shape a platform that integrates:
                </p>
                <ul className="space-y-3 ml-6 mb-12">
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • The Weather Company's <strong>high-resolution, 15-minute forecast updates</strong>,
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • AI/ML models operating in near real-time using historical and operational data,
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • Flexible delivery through <strong>API, FTP, or custom UI</strong>, and
                  </li>
                  <li className="text-lg md:text-xl leading-relaxed text-gray-700">
                    • Customizable dashboards and geospatial visualizations surfacing KPIs through maps, charts, tables, and alerts.
                  </li>
                </ul>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-1">
                  I iterated closely with pilot customers in Brazil, India, and the U.S., refining the experience based on real operational behavior—improving dashboard clarity, alert logic, scalability, and integration touchpoints.
                </p>

                {/* Weather Dashboard Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={weatherDashboardImage} 
                    alt="Weather Dashboard interface showing alerts and map" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Weather Dashboard:</strong> From the weather dashboard, users can see the active weather alerts that might impact solar and wind output at their farms. Users can see recent weather activity like wind speed to determine the current impact on their wind turbines.
                  </p>
                </div>

                {/* Energy Dashboard Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={energyDashboardImage} 
                    alt="Energy Dashboard interface showing energy output and forecasts" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Energy Dashboard:</strong> From the energy dashboard, business users track energy output at their farms over the last 24 hours and they last 30 days.
                  </p>
                </div>

                {/* Operations Dashboard Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={operationsDashboardImage} 
                    alt="Operations Dashboard showing turbine utilization and work queue management" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Operations Dashboard:</strong> From the operations dashboard, business users can see how well utilized their wind turbines are at a glance and see how much energy output each turbine is delivering. The Environmental Intelligence Suite identifies opportunities for preventative maintenance from it's weather data models. When low wind is forecasted, a work item is triggered.
                  </p>
                </div>

                {/* Work Queues Image */}
                <div className="mt-12 mb-4">
                  <img 
                    src={workQueuesImage} 
                    alt="Work Queues interface showing maintenance work items triggered by weather forecasts" 
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    <strong>Work Queues:</strong> When a predetermined weather event is forecasted, a work item is triggered. With the knowledge that this weather event is forecasted, a crew can carry out maintenance work without impacting energy output and with less safety risks for crew.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Key Responsibilities & Impact Grid */}
      {project.id !== 'nuveen-digital' && (
        <div id="results" className="bg-gray-50 pt-5 md:pt-8 pb-16 md:pb-24 -mx-6 px-6">
          <div className="max-w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
              {/* Impact & Results */}
              <div id="impact" className="flex-1">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 text-[32px]">Impact & Results</h3>
                <ul className="space-y-3">
                  {project.impact.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            
            {/* Sustainability Award Image */}
            {project.id === 'maximo-asset' && (
              <div className="flex-shrink-0 w-full md:w-56">
                <img 
                  src={sustainabilityAwardImage} 
                  alt="IBM Sustainability Award 2023 for Renewables Forecasting" 
                  className="w-full border border-gray-300"
                />
                <p className="text-sm text-gray-500 mt-4 italic">
                  Our renewables forecasting solution won the Sustainability Product of the Year Award in 2023
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      )}

        </div>
        {/* End Main Content Column */}

        {/* Testimonials Sidebar */}
        {project.quotes.length > 0 && (
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6">Testimonials</h3>
              <div className="space-y-8">
                {project.quotes.map((quote, index) => (
                  <div key={index} className="border-l-2 border-gray-300 pl-4">
                    <p className="text-sm leading-relaxed text-gray-700 mb-3">
                      "{quote.text}"
                    </p>
                    {quote.author && (
                      <p className="text-xs text-gray-500">
                        — {quote.author}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End Sidebar Layout */}

      {/* Footer Navigation */}
      <div className="border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6 flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm hover:text-gray-600 transition-colors"
          >
            ← Back to all projects
          </button>
        </div>
      </div>
    </div>
  );
}
