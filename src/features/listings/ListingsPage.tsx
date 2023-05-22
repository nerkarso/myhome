import ListingCard from '@/components/listing/ListingCard';
import SiteLayout from '@/components/SiteLayout';
import { listingsData } from '@/data/listings';
import ListingsLayout from '@/features/listings/ListingsLayout';
import { Link } from 'react-router-dom';

export default function ListingsPage() {
  return (
    <SiteLayout>
      <ListingsLayout>
        <Link to="/users/1/listings/new">New</Link>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {listingsData.concat(listingsData).map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </ListingsLayout>
    </SiteLayout>
  );
}
