import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          {[
            {
              label: 'Listings',
              href: '/listings',
            },
            {
              label: 'Pricing',
              href: '/pricing',
            },
            {
              label: 'Report complaint',
              href: '/help/complaint',
            },
          ].map(({ label, href }, i) => (
            <div key={i} className="px-5 py-2">
              <Link
                className="hover:text-primary-600 text-sm text-gray-500"
                to={href}
              >
                {label}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright &copy; 2023 MyHome | You find it, you own it.
          </span>
        </p>
      </div>
    </footer>
  );
}
