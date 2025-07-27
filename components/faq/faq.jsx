import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function FaqComponent() {
  const [showAll, setShowAll] = useState(false);
  const initialFaqsToShow = 5;

  const faqs = [
    {
      question: "Who is Nabeel and how can he help me?",
      answer:
        "Nabeel is a trusted insurance advisor who helps you secure the best coverage across medical, car, life, and travel insurance. He guides you personally and ensures a hassle-free experience.",
    },
    {
      question: "Can Nabeel help me compare different insurance plans?",
      answer:
        "Absolutely! Nabeel compares multiple insurance providers and plans to match you with the most cost-effective and comprehensive option for your needs.",
    },
    {
      question: "Does Nabeel charge for consultations?",
      answer:
        "Nope! Nabeel offers free consultations. You’ll only pay for the insurance policy you choose, not for his expert guidance.",
    },
    {
      question: "Can Nabeel assist with medical claims and emergencies?",
      answer:
        "Yes. Whether it's a hospital admission, an emergency, or a reimbursement, Nabeel supports you through every step of the claims process.",
    },
    {
      question: "How quickly can I get insured through Nabeel?",
      answer:
        "Depending on your needs, you can get insured the same day. Nabeel simplifies the paperwork and speeds up approvals.",
    },
    {
      question: "What documents do I need to get started?",
      answer:
        "For most policies, a valid ID and some basic health or vehicle details are enough. Nabeel will guide you through exactly what’s needed.",
    },
    {
      question: "Does Nabeel offer travel insurance for short trips?",
      answer:
        "Yes. Whether it’s a weekend getaway or a business trip, Nabeel can get you covered for cancellations, medical needs, and emergencies abroad.",
    },
    {
      question: "Is car insurance mandatory and what does Nabeel offer?",
      answer:
        "Yes, car insurance is mandatory. Nabeel provides both basic and full coverage plans—including third-party and comprehensive options.",
    },
    {
      question: "Does Nabeel offer life insurance policies?",
      answer:
        "He sure does. Nabeel offers tailored life insurance plans that protect your family and ensure their financial security.",
    },
    {
      question: "How do I contact Nabeel for support or policy updates?",
      answer:
        "You can reach Nabeel anytime via WhatsApp. He's known for being responsive, friendly, and genuinely helpful.",
    },
  ];

  const faqsToShow = showAll ? faqs.length : initialFaqsToShow;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center mb-4">
            <h4 className="text-xl font-bold text-green-800 mr-2">FAQ</h4>
            <LightBulbIcon className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 underline mb-6">
            Frequently Asked Questions About Nabeel
          </h3>
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.slice(0, faqsToShow).map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="hover:bg-stone-100 p-3 rounded-md">
                      <Disclosure.Button className="flex w-full justify-between text-left text-gray-900">
                        <span className="text-base font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-4 flex items-center">
                          {open ? (
                            <MinusSmallIcon className="h-5 w-5" />
                          ) : (
                            <PlusSmallIcon className="h-5 w-5" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-md bg-green-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
