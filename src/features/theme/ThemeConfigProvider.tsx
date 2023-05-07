import { ConfigProvider } from 'antd';
import colors from 'tailwindcss/colors';

export default function ThemeConfigProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.green[500],
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
