import SiteLayout from '@/components/SiteLayout';
import ListingsNewForm from './ListingsNewForm';
import UserLayout from './UserLayout';

export default function ListingsNewPage() {
  return (
    <SiteLayout>
      <UserLayout>
        <ListingsNewForm />
      </UserLayout>
    </SiteLayout>
  );
}
