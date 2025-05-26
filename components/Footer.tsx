import Link from 'next/link';

const Footer = () => {
  const currentYear = 2024;
  
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-primary-gradient">Earney</span> Portfolio
            </h3>
            <p className="text-foreground/70 mb-6">
              Transforming ideas into exceptional digital experiences. We build websites, apps, and video content that elevate brands.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Reel Production
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Digital Marketing ( End to End )
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-foreground/70 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#reels" className="text-foreground/70 hover:text-primary transition-colors">
                  Reels
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-foreground/70">
              <li>123 Digital Avenue, Suite 200</li>
              <li>San Francisco, CA 94103</li>
              <li>info@earneyportfolio.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Earney Portfolio. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 