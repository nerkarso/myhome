import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { useMediaQuery } from '@/utils/useMediaQuery';
import MobileTabBar from './MobileTabBar';

export default function SiteLayout({ children }: ComponentProps) {
  const isLaptop = useMediaQuery('(min-width: 768px)');

  if (isLaptop) {
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
      <main className="flex-1 overflow-y-auto">{children}</main>
      <MobileTabBar />
    </div>
  );
}
