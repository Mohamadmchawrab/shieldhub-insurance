import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Medical Insurance",
    description:
      "From doctor visits to critical treatments, Nabeel ensures your health is protected with flexible and comprehensive coverage tailored to your needs.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Car Insurance",
    description:
      "Drive with peace of mind. Nabeel helps you secure full protection against accidents, theft, and damage—on and off the road.",
    icon: LockClosedIcon,
  },
  {
    name: "Life Insurance",
    description:
      "Protect your loved ones and secure your future. Nabeel offers life insurance plans that give you long-term confidence and peace.",
    icon: ArrowPathIcon,
  },
  {
    name: "Travel Insurance",
    description:
      "Enjoy your journeys without worry. From flight cancellations to emergencies abroad, Nabeel’s travel insurance has you covered.",
    icon: FingerPrintIcon,
  },
];

export default function LandingServices() {
  return (
    <div className="bg-stone-50 py-12 sm:py-16 relative z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-green-600">Insurance made personal</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nabeel's Got You Covered
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Whether it’s your health, your car, your family, or your adventures abroad—Nabeel
            is your go-to insurance expert, ready to guide and protect every step of the way.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => {
              const phoneNumber = "+96178791910";
              const message = encodeURIComponent(
                "Hi Nabeel! 👋 I’m interested in learning more about your insurance services—medical, car, life, or travel. Can you assist me?"
              );
              window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
            }}
            className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
          >
            Chat with Nabeel on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
