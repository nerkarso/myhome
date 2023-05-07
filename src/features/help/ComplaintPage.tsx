import SiteLayout from '@/components/SiteLayout';
import ComplaintForm from '@/features/help/ComplaintForm';

export default function ComplaintPage() {
  return (
    <SiteLayout>
      <div className="container flex">
        <div className="mx-auto w-full max-w-md space-y-8 py-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Report complaint</h1>
            <p className="text-base-500 mt-4">
              Use this form to report any cases or malfunction of the website.
              We appreciate your feedback and we&apos;ll look into it.
            </p>
          </div>
          <ComplaintForm />
        </div>
      </div>
    </SiteLayout>
  );
}
