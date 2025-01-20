import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect Stay
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover amazing properties around the world with our AI-powered travel assistant
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Start Exploring
        </Button>
      </div>
    </div>
  );
}