import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import nuveenImage1 from 'figma:asset/1d3525b456e7d9cc47e87d3ec3a9dd1f7d49a177.png';
import nuveenImage2 from 'figma:asset/9a106f56b3b522ac084edbe8ad1d901c6455c7cf.png';
import broadridgeImage from 'figma:asset/adfb6539afc13603b0400de7dbdf936939693236.png';
import biomassImage from 'figma:asset/e5c3022d007695e998a7c05ed5e1feebfdd29b65.png';
import renewablesImage from 'figma:asset/e95031712dde9ec987813e86a3c3b90ebb5a9c42.png';
import uxForAiPortfolioImage from 'figma:asset/7fc4b41e28d8d14c90775ba2d8a2164559c6acc7.png';
import polarisImage from 'figma:asset/db868b9d1b8f671c1828399a4a76b5d5b9edfbde.png';
import presentationsImage from 'figma:asset/3a3f3efab907ab2838aa71d27afda921f62cc1d5.png';

interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export function Portfolio() {
  const navigate = useNavigate();
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      slug: 'ibm-environmental',
      title: 'Above Ground Biomass-Geospatial Analytics Project',
      category: 'UX Design • Design Thinking • AI',
      description: 'Defined user needs, aligned cross-functional stakeholders, and designed an intuitive, AI-powered AGB experience that enabled ESG and portfolio managers to make confident, data-driven carbon investment decisions.',
      image: biomassImage,
    },
    {
      id: 2,
      slug: 'maximo-asset',
      title: 'Renewables Forecasting Project',
      category: 'UX Design • User Research',
      description: 'Designed comprehensive asset lifecycle management system with predictive maintenance and IoT integration',
      image: renewablesImage,
    },
    {
      id: 3,
      slug: 'broadridge-advisor',
      title: 'Project Polaris',
      category: 'UX Design • User Research • Product led growth',
      description: 'Reimagining the end to end digital experience for the Environmental Intelligence Product',
      image: polarisImage,
    },
    {
      id: 4,
      slug: 'watson-ai',
      title: 'UX for AI',
      category: 'AI/UX Research • IBM',
      description: 'Co-authored the UX for AI Principles handbook and led the initiative to integrate AI capabilities across an enterprise product suite.',
      image: uxForAiPortfolioImage,
    },
    {
      id: 5,
      slug: 'nuveen-digital',
      title: 'Presentations and Speaking Events',
      category: 'Public speaking • education • workshop facilitation',
      description: 'I have spoken at conferences, facilitated hands-on workshops, and led collaborative sessions designed to help teams deepen their understanding of AI, design, and user-centered practices.',
      image: presentationsImage,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-16 border-b border-gray-200 pb-4">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/project/${item.slug}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-wider text-gray-500 uppercase">{item.category}</p>
                <h3 className="text-lg md:text-xl group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
