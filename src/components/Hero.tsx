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
    <section id="home" className="bg-secondary text-background pt-16 pb-16 md:pb-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Taste the <span className="bg-primary text-secondary px-3 py-1 rounded-lg inline-block transform -rotate-1">Authentic</span> Experience
            </h1>
            <p className="text-lg md:text-xl text-background/90 leading-relaxed">
              Premium shawarma crafted with passion and tradition
            </p>

            {/* Icon Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-background/15 backdrop-blur-sm px-5 py-3 rounded-full border border-background/30 hover:bg-background/20 transition-all">
                <Leaf size={20} className="text-primary" />
                <span className="text-sm font-semibold">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-background/15 backdrop-blur-sm px-5 py-3 rounded-full border border-background/30 hover:bg-background/20 transition-all">
                <Award size={20} className="text-primary" />
                <span className="text-sm font-semibold">Authentic Recipe</span>
              </div>
              <div className="flex items-center gap-2 bg-background/15 backdrop-blur-sm px-5 py-3 rounded-full border border-background/30 hover:bg-background/20 transition-all">
                <Clock size={20} className="text-primary" />
                <span className="text-sm font-semibold">Fast Service</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('menu')}
                className="bg-primary text-secondary hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Explore Menu
              </Button>
              <Button
                onClick={() => scrollToSection('location')}
                variant="outline"
                className="border-2 border-background text-background hover:bg-background hover:text-secondary font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Find Location
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src={menuHero}
              alt="Shawarma Menu"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
