import { Button } from '@/components/ui/button';

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Ready for Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-secondary/80 mb-8">
            Experience the difference that quality and passion make. Join the Shawarma Arab family today!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('menu')}
              variant="secondary"
              className="bg-secondary text-background hover:bg-secondary/90 font-semibold px-8 py-6 text-lg"
            >
              View Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('location')}
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold px-8 py-6 text-lg"
            >
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
