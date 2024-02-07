import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "The Golden Care Full Network",
    description:
      "option allows members access to a comprehensive network of healthcare providers on direct billing, ensuring a seamless and hassle-free experience. This includes coverage for inpatient benefits such as first-class accommodations, emergency room services, and maternity care for couples and single mothers. The plan also covers a range of medical needs, from dialysis and sleep disorders to new treatments and surgeries.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Golden Care Reduced Network",
    description:
      "option provides a more budget-friendly alternative while still offering essential coverage. Although the network is slightly reduced, members still enjoy key benefits such as full emergency room coverage, maternity care, and coverage for specific medical conditions and treatments.",
    icon: LockClosedIcon,
  },
  {
    name: "The plan extends its coverage to include benefits beyond typical medical expenses",
    description:
      ", such as hospital daily income, morgue/burial expenses, and even coverage for epidemic/pandemic diseases. Members also have the option to upgrade their coverage upon renewal, subject to an observation period.",
    icon: ServerIcon,
  },
];

export default function ProductFeatures() {
  return (
    <div className="overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-600">
                Insurance made simple
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Protect your tomorrow, today.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer three plans that cater for different healthcare
                requirements. Our 3 Golden Care products in fresh USD grant you
                the golden experience with full coverage, hassle-free process,
                with no additional fees along the way. We also provide
                tailor-made products for small or large businesses as well as
                syndicates.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-sky-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-sky-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none pb-5">
                <Image
                  width={2432}
                  height={1600}
                  className="h-36 md:h-auto w-auto"
                  src="/darklogo.png"
                  alt="company logo"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
