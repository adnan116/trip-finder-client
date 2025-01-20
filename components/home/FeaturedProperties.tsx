export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      location: 'Bali, Indonesia',
      price: '$299/night',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    // Add more properties...
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-muted-foreground mb-4">{property.location}</p>
                <p className="text-primary font-bold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}