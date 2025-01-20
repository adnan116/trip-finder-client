import { Shield, Star, Clock, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your payments and personal information are always protected',
    },
    {
      icon: Star,
      title: 'Best Selection',
      description: 'Carefully curated properties to ensure the highest quality',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our team is always here to help you with any questions',
    },
    {
      icon: HeartHandshake,
      title: 'Best Price Guarantee',
      description: 'We offer competitive prices and match any lower rates',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose AgentX
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mb-4 flex justify-center">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}