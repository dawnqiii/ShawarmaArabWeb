import { Leaf, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import menuHero from '@/assets/menu-hero.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-secondary text-background pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Taste the <span className="bg-primary text-secondary px-2">Authentic</span> Experience
            </h1>
            <p className="text-lg md:text-xl text-background/80">
              Premium shawarma crafted with passion and tradition
            </p>

            {/* Icon Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-full border border-background/20">
                <Leaf size={18} />
                <span className="text-sm font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-full border border-background/20">
                <Award size={18} />
                <span className="text-sm font-medium">Authentic Recipe</span>
              </div>
              <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-full border border-background/20">
                <Clock size={18} />
                <span className="text-sm font-medium">Fast Service</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('menu')}
                className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-8"
              >
                Explore Menu
              </Button>
              <Button 
                onClick={() => scrollToSection('location')}
                variant="outline" 
                className="border-background text-background hover:bg-background hover:text-secondary font-semibold px-8"
              >
                Find Location
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src={menuHero} 
              alt="Shawarma Menu" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
