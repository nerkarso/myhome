import HomeHero from '@/components/HomeHero';
import SiteHeader from '@/components/SiteHeader';
import { ConfigProvider } from 'antd';
import colors from 'tailwindcss/colors';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.green[500],
        },
      }}
    >
      <SiteHeader />
      <HomeHero />
    </ConfigProvider>
  );
}
