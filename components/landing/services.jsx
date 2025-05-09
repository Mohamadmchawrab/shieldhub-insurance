import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unwavering Confidentiality",
    description:
      "As your insurance broker, we uphold strict confidentiality for all health-related matters—your personal data is handled with the utmost discretion and care.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fortified Data Protection",
    description:
      "Our advanced security infrastructure ensures your medical and personal data is protected from unauthorized access—meeting and exceeding industry compliance standards.",
    icon: LockClosedIcon,
  },
  {
    name: "Ensuring Your Peace of Mind",
    description:
      "Our priority is to provide more than coverage—we aim to give you peace of mind, knowing your information is secure and handled by professionals you can trust.",
    icon: ArrowPathIcon,
  },
  {
    name: "A Promise of Privacy",
    description:
      "Privacy is not just a commitment—it's a guarantee. We go the extra mile to protect your information beyond regulatory requirements.",
    icon: FingerPrintIcon,
  },
];


export default function LandingServices() {
  return (
    <div className="bg-stone-50 py-12 sm:py-16 z-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Don&apos;t wait
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Guardians of Your Well-Being
            Protection
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission extends beyond the conventional realms of security. We
            are not just protectors of physical assets, we are guardians of your
            overall well-being.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
