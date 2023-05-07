import SiteLayout from '@/components/SiteLayout';
import { subscriptionsData } from '@/data/subscriptions';
import { Button, Segmented } from 'antd';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  return (
    <SiteLayout>
      <div className="text-base-600 container py-12">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="text-base-900 text-3xl font-medium sm:text-4xl">
            Pricing
          </h1>
          <p className="text-base-500 mx-auto mt-3 leading-relaxed lg:w-2/3">
            Choose one of the subscriptions and have access to premium features.
          </p>
          <div className="mx-auto mt-6 w-full max-w-xs">
            <Segmented block options={['Monthly', 'Yearly']} size="large" />
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {subscriptionsData.map(
            (
              {
                subtitle,
                title,
                titlePostfix,
                features,
                buttonHref,
                buttonText,
              },
              i
            ) => (
              <div key={i} className="w-full p-4 sm:w-1/2 lg:w-1/3">
                <div className="ring-base-200 relative flex h-full flex-col overflow-hidden rounded-lg p-6 shadow-md ring-1">
                  <h2 className="mb-1 text-sm font-medium tracking-widest">
                    {subtitle}
                  </h2>
                  <h1 className="text-base-900 border-base-200 mb-4 flex items-center border-b pb-4 text-4xl leading-none">
                    <span>{title}</span>
                    <span className="text-base-500 ml-1 text-lg">
                      {titlePostfix}
                    </span>
                  </h1>
                  {features.map((feature, i) => (
                    <p
                      key={i}
                      className="text-base-600 mb-2 flex items-center gap-2"
                    >
                      <CheckCircle2 className="text-primary-500" />
                      {feature}
                    </p>
                  ))}
                  <div className="mt-auto pt-4">
                    <Button block href={buttonHref} type="primary">
                      {buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </SiteLayout>
  );
}
