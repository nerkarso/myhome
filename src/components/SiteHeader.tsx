import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container flex h-20 items-center gap-4">
        <div className="h-full flex-1 py-3">
          <Link className="h-full" to="/">
            <img alt="Logo" className="h-full" src="/logo.png" />
          </Link>
        </div>
        <nav className="mx-auto flex items-center gap-3">
          {[
            {
              label: 'Buy',
              href: '/listings?type=buy',
            },
            {
              label: 'Rent',
              href: '/listings?type=rent',
            },
            {
              label: 'Sell',
              href: '/account',
            },
          ].map(({ label, href }, i) => (
            <Link
              key={i}
              className="hover:bg-base-100 text-base-600 rounded-md px-3 py-1"
              to={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-2">
            <Link to="/auth/login">
              <Button>Log in</Button>
            </Link>
            <Link to="/auth/signup">
              <Button type="primary">Sign up</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
