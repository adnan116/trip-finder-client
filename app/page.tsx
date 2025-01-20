import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import PopularDestinations from '@/components/home/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <FeaturedProperties />
      <PopularDestinations /> */}
      <WhyChooseUs />
    </div>
  );
}