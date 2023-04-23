import { Button } from 'antd';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container flex h-20 items-center gap-4">
        <div className="h-full flex-1 py-3">
          <a href="/" className="h-full">
            <img src="/logo.png" alt="Logo" className="h-full" />
          </a>
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
            <a
              key={i}
              href={href}
              className="hover:bg-base-100 text-base-600 rounded-md px-3 py-1"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-2">
            <Button href="/auth/login">Log in</Button>
            <Button href="/auth/signup" type="primary">
              Sign up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
