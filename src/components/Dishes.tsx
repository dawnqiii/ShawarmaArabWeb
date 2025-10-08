import { Badge } from '@/components/ui/badge';
import chixBowl from '@/assets/chix-bowl.jpg';
import beefBowl from '@/assets/beef-bowl.jpg';
import mixedWrap from '@/assets/mixed-wrap.jpg';
import falafelBowl from '@/assets/falafel-bowl.jpg';

const dishes = [
  {
    name: 'Chix Arab Bowl',
    description: 'Tender grilled chicken with authentic spices served in a bowl',
    price: '₱260',
    image: chixBowl,
    tags: ['Halal', 'Protein Rich']
  },
  {
    name: 'Beef Arab Bowl',
    description: 'Premium beef with traditional seasoning in a delicious bowl',
    price: '₱280',
    image: beefBowl,
    tags: ['Halal', 'Premium']
  },
  {
    name: 'Mixed Shawarma Wrap',
    description: 'Perfect blend of beef and chicken wrapped in soft pita',
    price: '₱300',
    image: mixedWrap,
    tags: ['Halal', 'Best Seller']
  },
  {
    name: 'Falafel Veggie Bowl',
    description: 'Crispy falafel with fresh veggies and creamy tahini sauce',
    price: '₱250',
    image: falafelBowl,
    tags: ['Vegetarian', 'Healthy']
  }
];

const Dishes = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Signature Dishes</h2>
          <p className="text-lg text-muted-foreground">
            Authentic flavors that made us famous 🌯
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-secondary font-bold px-4 py-2 rounded-full shadow-lg">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {dish.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {dish.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
