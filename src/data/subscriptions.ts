import { formatPrice } from '@/utils/formatPrice';

export const subscriptionsData = [
  {
    subtitle: 'SIMPLE',
    title: 'Free',
    features: ['Browse listings', 'Basic listing search'],
    buttonHref: '/listings',
    buttonText: 'Browse',
  },
  {
    subtitle: 'SILVER',
    title: formatPrice(5_000),
    titlePostfix: '/mo',
    features: [
      'Browse listings',
      'Advanced listing search',
      'Save favorites',
      'View more listing details',
    ],
    buttonHref: '/auth/signup',
    buttonText: 'Subscribe',
  },
  {
    subtitle: 'GOLD',
    title: formatPrice(10_000),
    titlePostfix: '/mo',
    features: [
      'Browse listings',
      'Advanced listing search',
      'Save favorites',
      'View more listing details',
      'Create listings',
    ],
    buttonHref: '/auth/signup',
    buttonText: 'Subscribe',
  },
];
