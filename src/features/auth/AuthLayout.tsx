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
      <div className="container flex">
        <div className="mx-auto w-full max-w-md space-y-8 py-4">
          <h1 className="text-center text-3xl font-semibold">{title}</h1>
          {children}
          <div className="text-center">
            {links?.map(({ label, href }, i) => (
              <Link
                key={i}
                to={href}
                className="text-base-500 text-sm underline"
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
