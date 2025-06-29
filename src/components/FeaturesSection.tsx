
const FeaturesSection = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'AI-tailored CV in seconds, not hours. Transform your existing resume instantly.'
    },
    {
      icon: '🧠',
      title: 'Smart Matching',
      description: 'Advanced AI analyzes job requirements and optimizes your resume for maximum ATS compatibility.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'We never store your resume data. Your information stays private and secure.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Why Choose CoverForage?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for job seekers who want their existing resume perfectly tailored to any job
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card p-8 rounded-2xl border border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
