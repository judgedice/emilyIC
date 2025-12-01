import careerJourneyImage from 'figma:asset/f358c017cedcef05f05333c7b562bf6c746ffbda.png';

export function CareerMilestones() {
  return (
    <section id="milestones" className="pt-20 pb-8 md:pt-32 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-16 border-b border-gray-200 pb-4">Career Milestones</h2>
        
        <div className="flex justify-center">
          <img 
            src={careerJourneyImage} 
            alt="Career journey from education to current role" 
            className="w-full max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
}
