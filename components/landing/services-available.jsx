import Image from "next/image";

export default function ServicesAvailable() {
  const services = [
    { name: "Medical", icon: "/nabeel-medical.png" },
    { name: "Home", icon: "/nabeel-home.png" },
    { name: "Car", icon: "/nabeel-car.png" },
    { name: "Travel", icon: "/nabeel-travel.png" },
    { name: "Life", icon: "/nabeel-crossinghands.png" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 cursor-pointer pb-5">
      {services.map((service, i) => (
        <div
          key={i}
          className="flex flex-col items-center transition-all duration-200"
        >
          <div
            onClick={() => {
              const phoneNumber = "+96178791910";
              const message = encodeURIComponent(
                "Hi there! 👋 I've been hearing great things about your services and I'm eager to learn more. Can you please provide me with some details?"
              );
              window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
            }}
            className="flex flex-col items-center justify-center group"
          >
            <div className="relative w-[150px] h-[150px] transition-transform duration-300 ease-in-out group-hover:scale-125">
              <Image
                src={service.icon}
                alt={service.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700">
              {service.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
