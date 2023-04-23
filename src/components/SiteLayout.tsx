import SiteHeader from '@/components/SiteHeader';

export default function SiteLayout({ children }: ComponentProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
}
