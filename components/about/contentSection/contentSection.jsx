import Image from "next/image";

export default function ContentSection() {
  return (
    <>
      {/* Content section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-black lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Welcome to ShieldHub, your trusted partner in securing a
                healthier future. At ShieldHub, we understand the significance of
                comprehensive medical insurance and healthcare coverage. With a
                commitment to prioritizing your well-being, we take pride in
                providing personalized insurance solutions tailored to meet the
                unique needs of individuals and families. Our mission is to
                empower you with the peace of mind that comes from knowing you
                have a reliable partner in ShieldHub, ensuring access to
                top-notch medical care when you need it most.
              </p>
              <p className="mt-8">
                Founded on principles of integrity and excellence, ShieldHub is
                dedicated to making quality healthcare accessible and
                affordable.
              </p>
            </div>
            <div>
              <p>
                We believe that everyone deserves the assurance of a robust
                medical insurance plan, and we strive to simplify the
                complexities of the healthcare system. Our experienced team is
                passionate about guiding you through the intricacies of
                insurance, offering not just policies but a commitment to your
                health and wellness. Choose ShieldHub and embark on a journey to
                a healthier, more secure tomorrow.
              </p>
              <p className="mt-8">
                Join us in our commitment to building a healthier future, where
                quality healthcare is not just a service but a fundamental right
                for all.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse gap-y-3 border-l border-black/20 pl-6"
              >
                <dt className="text-base leading-7 text-black">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-black">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about page header"
          className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
        />
      </div>
    </>
  );
}

const stats = [
  { label: "Business was founded", value: "2021" },
  { label: "People on the team", value: "5+" },
  { label: "Users with us", value: "100+" },
];
