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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
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
                className="bg-background rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="text-primary" size={36} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
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
