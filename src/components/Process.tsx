import { CheckCircle2, Leaf, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import processImage from '@/assets/process.jpg';

const processSteps = [
  { icon: CheckCircle2, text: 'Premium cuts of meat' },
  { icon: Leaf, text: 'Fresh herbs & spices' },
  { icon: Flame, text: 'Perfect grilling technique' }
];

const happyMoments = [
  { icon: '👨‍👩‍👧‍👦', text: 'Family gatherings' },
  { icon: '🍽️', text: 'Lunch breaks' },
  { icon: '🎉', text: 'Special celebrations' }
];

const Process = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How We Make It Perfect
          </h2>
          <p className="text-lg text-muted-foreground">
            Every shawarma crafted with precision and care 🌯
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <img 
              src={processImage} 
              alt="Our Process" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Right - Process Steps */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">The Perfect Process</h3>
            <p className="text-muted-foreground mb-8">
              We take pride in every step of our preparation. From selecting the finest ingredients to the perfect grilling technique, everything is done with passion and precision.
            </p>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <span className="text-lg font-medium">{step.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Happy Moments Section */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Happy Moments</h3>
          <p className="text-center text-muted-foreground mb-8">
            We live for all the moments Nothing beats authentic shawarma shared with loved ones
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {happyMoments.map((moment, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{moment.icon}</div>
                <p className="font-medium">{moment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
