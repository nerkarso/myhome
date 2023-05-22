import SiteLayout from '@/components/SiteLayout';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export default function AuthLayout({
  children,
  title,
  links,
}: ComponentProps<Props>) {
  return (
    <SiteLayout>
      <div className="container flex min-h-full items-center py-8">
        <div className="mx-auto w-full max-w-md space-y-8 py-4">
          <h1 className="text-center text-3xl font-semibold">{title}</h1>
          {children}
          <div className="flex flex-col gap-4 text-center">
            {links?.map(({ label, href }, i) => (
              <Link
                key={i}
                className="text-base-500 text-sm underline"
                to={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
