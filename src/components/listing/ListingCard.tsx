import { formatPrice } from '@/utils/formatPrice';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function ListingCard({ listing }: any) {
  return (
    <div className="flex flex-col">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img className="object-cover" src={listing.imageUrl} />
      </div>
      <div className="py-3">
        <h4 className="text-lg font-semibold">{formatPrice(listing.price)}</h4>
        <p className="text-base-600 mt-1 text-sm leading-snug">
          {listing.address}
        </p>
        <div className="mt-2">
          <Link to={`/listings/${listing.id}`}>
            <Button>View more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
