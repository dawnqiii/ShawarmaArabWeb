import { Star, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'We use only the finest ingredients and authentic spices to create unforgettable flavors'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Quick preparation without compromising quality. Fresh, hot, and ready when you are'
  },
  {
    icon: Heart,
    title: 'Community Love',
    description: 'Great food is meant to be shared. Join our family of food lovers and create memories'
  }
];

const Specials = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-secondary/80">
            Experience the perfect blend of authentic flavors and modern convenience 🌟
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                  <Icon className="text-primary" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specials;
