import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function FaqComponent({ faqText }) {
  const [showAll, setShowAll] = useState(false);
  const initialFaqsToShow = 5;
  const faqsToShow = showAll ? faqs.length : initialFaqsToShow;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl ">
          <span className="flex flex-row items-center">
            <h4 className="text-xl font-bold p-2 leading-10 tracking-tight text-sky-500">
              FAQ
            </h4>
            <LightBulbIcon className="h-6 w-auto text-sky-600" />
          </span>
          <h3 className="text-2xl font-bold p-2 leading-10 tracking-tight text-gray-900 underline">
            Frequently asked questions
          </h3>
          <dl className="mt-4 space-y-6 divide-y divide-gray-900/10">
            {faqs?.length > 0 &&
              faqs?.slice(0, faqsToShow).map((faq, index) => (
                <Disclosure as="div" key={faq._id} className="pt-6 ">
                  {({ open }) => (
                    <>
                      <dt className="hover:bg-stone-100 p-2 rounded-md">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            <div className="flex justify-center items-center  py-5">
              <button
                onClick={() => setShowAll(!showAll)}
                className="rounded-md bg-sky-600 px-3.5 py-2.5
              text-sm font-semibold text-white shadow-sm hover:bg-sky-500
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
              >
                {showAll ? "Read less" : "Read more"}
              </button>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What’s the maximum coverage I can get?",
    answer: "Our top plans offer unlimited coverage. Other options vary based on your selected policy.",
  },
  {
    question: "Which hospitals are included in the coverage?",
    answer: "We work with a wide network of hospitals and clinics. The exact list depends on your chosen plan.",
  },
  {
    question: "What does the insurance cover?",
    answer: "Emergency treatments are covered from day one. Other benefits like consultations, surgeries, and maternity depend on the policy type.",
  },
  {
    question: "Are chronic conditions included?",
    answer: "Yes, but they must be declared before purchase. Some conditions may have limitations or waiting periods.",
  },
  {
    question: "How much does the insurance cost?",
    answer: "It varies based on coverage, age, and benefits. We’ll help you find the best fit for your budget.",
  }
]