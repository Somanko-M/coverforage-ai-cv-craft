
const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold text-gradient">CoverForage</span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            AI-powered resume and cover letter generator. Free forever, ad-supported.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
            <a
              href="mailto:hello@coverforage.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@coverforage.com
            </a>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Follow Us</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Report Abuse
            </a>
          </div>
          
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>© 2024 CoverForage. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
