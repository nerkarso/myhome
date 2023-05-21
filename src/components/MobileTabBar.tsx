import { classNames } from '@/utils/classNames';
import { Home, Tag, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function MobileTabBar() {
  return (
    <footer className="border-base-200 grid h-16 grid-cols-3 border-t">
      {[
        {
          icon: <Home size={22} />,
          label: 'Home',
          href: '/',
        },
        {
          icon: <Tag size={22} />,
          label: 'Listings',
          href: '/listings',
        },
        {
          icon: <User size={22} />,
          label: 'Account',
          href: '/auth/login',
        },
      ].map(({ icon, label, href }, i) => (
        <NavLink
          key={i}
          className={({ isActive, isPending }) =>
            classNames(
              'flex flex-col items-center justify-center gap-[3px]',
              isActive
                ? 'text-primary-600 [&>.icon]:bg-primary-100'
                : 'text-base-600'
            )
          }
          to={href}
        >
          <span className="icon rounded-xl px-4 py-[3px]">{icon}</span>
          <span className="text-sm">{label}</span>
        </NavLink>
      ))}
    </footer>
  );
}
