import MobileNavBar from '@/components/MobileNavBar';
import SiteLayout from '@/components/SiteLayout';
import { classNames } from '@/utils/classNames';
import { formatPrice } from '@/utils/formatPrice';
import { useLaptopScreen } from '@/utils/useLaptopScreen';
import { HomeOutlined } from '@ant-design/icons';
import { StarIcon } from '@heroicons/react/20/solid';
import { Breadcrumb, Button } from 'antd';

const product = {
  name: '1730 Linwood Ave',
  price: formatPrice(560_000_000),
  images: [
    {
      src: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/60556762083909dd1536130bef30485b-full.webp',
      alt: '',
    },
    {
      src: 'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/ff12743a2b5ba805137af50822903919-full.webp',
      alt: '',
    },
    {
      src: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/d4d476b4203592f158ed10c6585aa51a-full.webp',
      alt: '',
    },
    {
      src: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/c0c601335717021e36b7673a20e2f770-full.webp',
      alt: '',
    },
    {
      src: 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/b0a2c14ca7b73f7397de0e676a873c2b-full.webp',
      alt: '',
    },
  ],
  description: `East Pt, GA 30344`,
  highlights: ['Open Parking', 'Porch', 'A/C', 'Heating & Cooling'],
  details: `Welcome to Frog Hollow and Linwood Heights! Known as The Mitchell House and built in 1920: This magnificent 2-story Craftsman is one of East Point's largest historical homes. Enter through the welcoming foyer that features the original oak stairway and double French doors that open to a spacious living room with a cozy fireplace. Formal dining is open to the kitchen and breakfast bar, boasting granite counters, stainless appliances and beautiful cabinetry. There is so much character to this 3 bedroom 2.5 Bath 2406 SF home. The Owners suite features a beautiful fireplace and hearth, ensuite bath holds the quintessential clawfoot tub, a walk-in shower and double vanity with a large framed mirror and granite counters. All rooms have been well suited with comfortable and stylish furnishings, top rated puffy mattresses, hypoallergenic bedding and linens. All furniture included.`,
};

const reviews = { href: '#', average: 4, totalCount: 117 };

export default function ListingDetailsPage() {
  const isLaptopScreen = useLaptopScreen();

  return (
    <SiteLayout>
      <div className="container">
        {isLaptopScreen ? (
          <Breadcrumb
            className="py-4"
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                href: '/listings',
                title: 'Listings',
              },
              {
                title: '1730 Linwood Ave',
              },
            ]}
          />
        ) : (
          <MobileNavBar>Listing</MobileNavBar>
        )}

        {/* Image gallery */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
              src={product.images[0].src}
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
                src={product.images[1].src}
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
                src={product.images[2].src}
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
              src={product.images[3].src}
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl pb-16 pt-10 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  className="text-primary-600 hover:text-primary-500 ml-3 text-sm font-medium"
                  href={reviews.href}
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div className="hidden">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                {/* --- */}
              </div>

              {/* Sizes */}
              <div className="mt-10 hidden">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                    href="#"
                  >
                    Size guide
                  </a>
                </div>

                {/* --- */}
              </div>

              <Button block className="mt-1000" size="large" type="primary">
                Buy now
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm" role="list">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
