import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="location" className="bg-secondary text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Our Kingdom */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Our Kingdom</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">MAIN PALACE</h4>
                <div className="flex items-start gap-2 text-background/80 text-sm mb-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>123 Main Street, Metro Manila 1234</span>
                </div>
                <div className="flex items-center gap-2 text-background/80 text-sm">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">MALL PALACE</h4>
                <div className="flex items-start gap-2 text-background/80 text-sm mb-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Mall Manila, Dioza 1546</span>
                </div>
                <div className="flex items-center gap-2 text-background/80 text-sm">
                  <Phone size={16} />
                  <span>(555) 987-6543</span>
                </div>
              </div>
            </div>
          </div>

          {/* Royal Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Royal Hours</h3>
            <div className="space-y-2 text-background/80">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>10:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Join the Royal Court */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Join the Royal Court</h3>
            <p className="text-background/80 mb-4 text-sm">
              Royal subjects know all our exclusive deals, secret announcements, and more!
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/60 text-sm mb-2">
            © 2025 FAKEARAB. ALL RIGHTS RESERVED. | PRIVACY POLICY | TERMS OF SERVICE
          </p>
          <p className="text-primary font-semibold">
            👑 The King of Shawarma Since 2024 👑
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
