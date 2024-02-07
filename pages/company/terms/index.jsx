import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>ShieldHub - Terms and Conditions</title>
      </Head>
      <div className="w-full flex flex-col items-center justify-center bg-gray-100">
        <main className="mx-auto w-full max-w-7xl flex flex-col items-center px-3 pb-8 md:pt-12 md:px-8">
          <h1 className="w-full py-12 md:px-8 text-start font-semibold text-4xl">
            ShieldHub Terms and Conditions
          </h1>
          <div className="bg-white rounded-md">
            <div className="mx-auto max-w-7xl md:px-8">
              <dl className="my-10 space-y-8">
                <div key="terms" className="flex flex-col gap-2">
                  <dt className="text-2xl font-semibold leading-7 text-black lg:col-span-5">
                    Introduction
                  </dt>
                  <dd className="mt-4 lg:col-span-7 lg:mt-0">
                    <p className="text-base leading-7 text-black">
                      Welcome to ShieldHub, your trusted provider of medical
                      insurance and health care coverage. By using our website
                      and services, you agree to comply with and be bound by the
                      following terms and conditions.
                    </p>
                  </dd>
                </div>
                <div key="services" className="pt-8 flex flex-col gap-2">
                  <dt className="text-2xl font-semibold leading-7 text-black lg:col-span-5">
                    Insurance Services
                  </dt>
                  <dd className="mt-4 lg:col-span-7 lg:mt-0 flex flex-col gap-8">
                    <p className="text-base leading-7 text-black">
                      ShieldHub provides a range of insurance services,
                      including medical insurance and health care coverage. By
                      utilizing our services, you acknowledge and agree to the
                      terms outlined in this document.
                    </p>
                    <p className="text-base leading-7 text-black">
                      Our insurance services are provided "as is," and we make
                      no representations or warranties of any kind, express or
                      implied. We reserve the right to modify or terminate our
                      services at any time without prior notice.
                    </p>
                  </dd>
                </div>
                <div key="privacy" className="pt-8 flex flex-col gap-2">
                  <dt className="text-2xl font-semibold leading-7 text-black lg:col-span-5">
                    Privacy
                  </dt>
                  <dd className="mt-4 lg:col-span-7 lg:mt-0 flex flex-col gap-8">
                    <p className="text-base leading-7 text-black">
                      Protecting your privacy is paramount to us. Please review
                      our Privacy Policy to understand how we collect, use, and
                      disclose information gathered from our users.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
