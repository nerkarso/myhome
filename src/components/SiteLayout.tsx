import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { useLaptopScreen } from '@/utils/useLaptopScreen';
import MobileTabBar from './MobileTabBar';

export default function SiteLayout({ children }: ComponentProps) {
  const isLaptopScreen = useLaptopScreen();

  if (isLaptopScreen) {
    return (
      <>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="h-10"></div>
      <main className="flex-1 overflow-y-auto">{children}</main>
      <MobileTabBar />
    </div>
  );
}
