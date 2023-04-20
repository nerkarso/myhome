import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/ThemeToggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-base-200 bg-white dark:border-b-base-700 dark:bg-base-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <h4 className="font-semibold">{siteConfig.title}</h4>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
