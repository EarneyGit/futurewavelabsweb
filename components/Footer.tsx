import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = 2025;
  
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:pr-4">
            <div className="mb-6">
              <Image
                src="/fwl-logo-white.png"
                alt="FWL Logo"
                width={240}
                height={90}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Innovation across diverse and critical sectors to Transform, Optimize, and Future-Proof Your Business Processes.
            </p>
          </div>
          
          <div className="lg:px-2">
            <h4 className="text-lg font-semibold mb-6">Our Expertise</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#expertise" className="text-foreground/70 hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-foreground/70 hover:text-primary transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-foreground/70 hover:text-primary transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-foreground/70 hover:text-primary transition-colors">
                  Reel Production
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-foreground/70 hover:text-primary transition-colors">
                  Digital Marketing ( End to End )
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:px-2">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#expertise" className="text-foreground/70 hover:text-primary transition-colors">
                  Expertise
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
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:pl-4">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-foreground/70">
              <li>Bangalore, India</li>
              <li>hello@futurewavelabs.in</li>
              <li>+91 99418 75131</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Future Wave Labs. All rights reserved.
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