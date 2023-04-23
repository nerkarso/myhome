import { ConfigProvider } from 'antd';
import colors from 'tailwindcss/colors';

export default function ThemeProvider({ children }: any) {
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
