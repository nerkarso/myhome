import SiteLayout from '@/components/SiteLayout';
import HomeHero from '@/features/home/HomeHero';
import HomeNewListings from '@/features/home/HomeNewListings';

export default function HomePage() {
  return (
    <SiteLayout>
      <HomeHero />
      <HomeNewListings />
    </SiteLayout>
  );
}
