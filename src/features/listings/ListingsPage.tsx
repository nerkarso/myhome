import ListingCard from '@/components/listing/ListingCard';
import SiteLayout from '@/components/SiteLayout';
import { listingsData } from '@/data/listings';
import ListingsLayout from '@/features/listings/ListingsLayout';

export default function ListingsPage() {
  return (
    <SiteLayout>
      <ListingsLayout>
        <div className="mt-8 grid grid-cols-4 gap-6">
          {listingsData.concat(listingsData).map((listing) => (
            <ListingCard listing={listing} key={listing.id} />
          ))}
        </div>
      </ListingsLayout>
    </SiteLayout>
  );
}
