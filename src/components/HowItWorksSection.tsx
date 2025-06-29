
const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Resume',
      description: 'Upload your existing resume PDF - we\'ll extract all your information',
      icon: '📄'
    },
    {
      number: '2',
      title: 'Paste Job Description',
      description: 'Add the job description from any job posting you\'re targeting',
      icon: '📋'
    },
    {
      number: '3',
      title: 'Get Tailored CV',
      description: 'Download your optimized CV, perfectly matched to the job requirements',
      icon: '🚀'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your perfectly tailored resume
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500" />
            
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center relative animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mb-4 mx-auto glow-effect">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
