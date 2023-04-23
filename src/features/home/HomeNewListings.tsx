import ListingCard from '@/components/ListingCard';

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
        {[
          {
            id: 1,
            price: '185,000',
            address: '131 Hunters Grove Dr, Columbia, SC 29210',
            imageUrl:
              'https://ap.rdcpix.com/f992bb925ef75ab06df5265bb7119f15l-m3720135177od-w480_h360_x2.jpg',
          },
          {
            id: 2,
            price: '228,900',
            address: '184 Nestle Ct Unit 28, Columbia, SC 29209',
            imageUrl:
              'https://ap.rdcpix.com/a8d785243e89d3d761b33a73720cfa63l-m3726537290od-w480_h360_x2.jpg',
          },
          {
            id: 3,
            price: '45,000',
            address: '1403 Winyah Dr, Columbia, SC 29203',
            imageUrl:
              'https://ap.rdcpix.com/7efb2b0d4ae4b559cbb1e1d4dd347109l-m1810479659od-w480_h360_x2.jpg',
          },
          {
            id: 4,
            price: '275,000',
            address: '1627 S Beltline Blvd, Columbia, SC 29205',
            imageUrl:
              'https://ap.rdcpix.com/8f515cd8913b713a22076fa8bd66c7edl-m1991250168od-w480_h360_x2.jpg',
          },
        ].map((listing) => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </div>
    </div>
  );
}
