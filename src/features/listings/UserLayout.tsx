import UserMenu from './UserMenu';

export default function UserLayout({ children }: any) {
  return (
    <div className="container">
      <header className="border-b py-6">
        <h1 className="text-xl font-semibold">Good evening, John Doe</h1>
      </header>
      <div className="flex">
        <UserMenu />
        <div className="max-w-lg flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}
