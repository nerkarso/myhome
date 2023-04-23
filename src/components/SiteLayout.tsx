import SiteHeader from '@/components/SiteHeader';

export default function SiteLayout({ children }: any) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
}
