/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_SUPABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '@refinedev/react-router-v6';

type ComponentProps<T = Record<string, any>> = T & {
  children?: JSX.Element | React.ReactNode;
  className?: string;
};
