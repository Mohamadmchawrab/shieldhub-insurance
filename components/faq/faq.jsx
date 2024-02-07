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
    question:
      "What is the limit of the coverage provided by this medical insurance policy?",
    answer:
      "It depends on the policy you purchase; our best policy has unlimited coverage.",
  },
  {
    question:
      "Which hospitals and medical centers are included in the network covered by this insurance plan?",
    answer: "It depends on the policy you purchase.",
  },
  {
    question:
      "What does the medical policy specifically cover in terms of medical expenses and services?",
    answer:
      "The policy covers emergency cases from day 1, and coverage for other conditions will depend on the specific policy you choose.",
  },
  {
    question:
      "Are there any exclusions or limitations on coverage that I should be aware of?",
    answer:
      "Usually, insurance policies cover all acute medical cases. To cover chronic cases, you need to declare them before purchasing the policy. There may be either a limitation or an exclusion on specific conditions, depending on the case.",
  },
  {
    question: "What is the annual premium for the medical insurance plan?",
    answer: "It will depend on the policy you choose.",
  },
  {
    question:
      "Can I pay the premium in several installments rather than a one-time payment?",
    answer:
      "Our prices are very competitive in the market; however, payment must be made in a one-time installment.",
  },
  {
    question:
      "How does the co-payment or co-insurance work for various medical services?",
    answer: "It will depend on the policy you choose.",
  },
  {
    question:
      "Does the insurance plan cover prescription medications, and if so, what is the coverage like?",
    answer: "Unfortunately, it doesn't.",
  },
  {
    question:
      "Are pre-existing conditions covered, and if yes, is there a waiting period?",
    answer: "All pre-existing conditions require a 6-month waiting period.",
  },
  {
    question:
      "Are regular checkups and preventive care services covered by the insurance plan?",
    answer:
      "If it's a random checkup, unfortunately, it will not be covered. However, if you have a medical condition prompting the checkup, it will be covered.",
  },
  {
    question:
      "Can I add dependents to the insurance plan, and will the policy be cheaper if I do so?",
    answer: "Yes, adding dependents will make the policy cheaper.",
  },
  {
    question:
      "How does the claims process work, and what documentation is required for reimbursement?",
    answer: "The claims process will be through the NextCare application.",
  },
  {
    question: "Is maternity coverage included in the medical insurance policy?",
    answer:
      "Maternity will be covered if the inception date is after purchasing the policy.",
  },
  {
    question:
      "Does the insurance plan cover dental services, and if so, what is the coverage like?",
    answer: "Unfortunately, no.",
  },
  {
    question:
      "What is the policy on emergency medical treatment and coverage outside the country?",
    answer:
      "Emergency medical treatment outside the country will be covered on a reimbursement basis.",
  },
  {
    question:
      "How often can I review or change my coverage, and what is the process for doing so?",
    answer:
      "You can review or change your coverage on the renewal date of the policy.",
  },
  {
    question:
      "Does the insurance plan offer any additional benefits, such as mental health coverage or alternative therapies?",
    answer: "It will depend on the policy you choose.",
  },
  {
    question:
      "How stable is the insurance company you work with, and what is their reputation for customer service?",
    answer: "Securite is one of the largest insurance companies in the region.",
  },
  {
    question:
      "How long should I wait to be covered for outpatient or ambulatory services?",
    answer: "A 6-month waiting period is applicable.",
  },
  {
    question:
      "How long should I wait to be covered for emergency medical cases?",
    answer: "Coverage begins from day 1.",
  },
];
