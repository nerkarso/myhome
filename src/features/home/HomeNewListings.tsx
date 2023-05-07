import ListingCard from '@/components/listing/ListingCard';
import { listingsData } from '@/data/listings';

export default function HomeNewListings() {
  return (
    <div className="container my-12">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold">Explore new listings</h2>
        <p className="text-base-600 mt-3">
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-6">
        {listingsData.map((listing) => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </div>
    </div>
  );
}
