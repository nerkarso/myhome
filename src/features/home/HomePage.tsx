import SiteLayout from '@/components/SiteLayout';
import HomeHero from '@/features/home/HomeHero';
import HomeNewListings from '@/features/home/HomeNewListings';

export default function HomePage() {
  return (
    <SiteLayout>
      <HomeHero />
      <HomeNewListings />
      <div className="py-6"></div>
    </SiteLayout>
  );
}
