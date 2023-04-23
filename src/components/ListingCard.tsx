import { Button } from 'antd';

export default function ListingCard({ listing }: any) {
  return (
    <div className="flex flex-col">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img src={listing.imageUrl} className="object-cover" />
      </div>
      <div className="py-3">
        <h4 className="text-lg font-semibold">${listing.price}</h4>
        <p className="text-base-600 mt-1 text-sm leading-snug">
          {listing.address}
        </p>
        <div className="mt-2">
          <Button>View more</Button>
        </div>
      </div>
    </div>
  );
}
