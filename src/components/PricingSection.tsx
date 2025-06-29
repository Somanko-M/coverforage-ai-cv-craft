
const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Free Forever
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're ad-supported — no hidden costs, no subscriptions, no limits
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border text-center hover-lift">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              100% Free Always
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tailor unlimited resumes to any job with just a quick 30-second ad. 
              No sign-ups, no credit cards, no catches.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span>
                <span>Unlimited CV Tailoring</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span>
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span>
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span>
                <span>AI-Powered</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 <strong>How it works:</strong> Watch a short ad → Get your tailored CV → Download & apply!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
