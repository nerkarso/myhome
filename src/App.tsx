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
    ></ConfigProvider>
  );
}
