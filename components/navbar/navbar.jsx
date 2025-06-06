import { Fragment, useState } from 'react'
import Image from 'next/image'
import CallAgent from '../header/landingHeader/callAgent'
import Link from 'next/link'
import {
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentIcon,
  CogIcon,
  CurrencyDollarIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  LinkIcon,
  RectangleStackIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  FingerPrintIcon,
  XMarkIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>InsuranceLEB</span>
            <Image
              width={80} // Increased width
              height={80} // Increased height
              className=' w-auto' // Adjusted className for larger height
              src='/logo.png'
              alt='navbar company logo'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-16'>
          {/* <Popover className='relative'> */}
            {/* <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:opacity-80'>
              Products
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button> */}
            {/* <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 '
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-sky-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <Link
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </Link>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {productsCallsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition> */}
          {/* </Popover> */}
          {/* resources dropdown menu */}
          {/* <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:opacity-80'>
              Resources
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 '
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-sky-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <Link
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </Link>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          {/* company dropdown menu */}
          {/* <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:underline hover:opacity-80'>
              Company
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {company.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 '
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-sky-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <Link
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </Link>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {companyCallsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          {/* contact nav link */}
          {/* <Link
            href='/company/contact'
            className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:opacity-80'
          >
            Contact Us
          </Link> */}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <CallAgent />
        </div>
      </nav>
      {/*
       ***********************
       *
       * Mobile hamburger menu
       *
       * *********************
       */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>InsuranceLB Insurance</span>
              <Image
                className='w-auto'
                src='/logo.png'
                width={60}
                height={60}
                alt='navbar company logo'
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/* products dropdown menu */}
                {/* <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products, ...productsCallsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                {/* resources dropdown menu */}
                {/* <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...resources].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                {/* company dropdown menu */}
                {/* <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...company, ...companyCallsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                {/* Contact us nav link */}
                {/* <Link
                  href='/'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Home
                </Link> */}
              </div>
              <div className='py-6 '>
                <CallAgent />
              </div>
              {/* <Link
                href='tel:+96171480345'
                className='flex flex-row gap-2 items-center w-max hover:bg-stone-100 p-2 rounded-lg'
              >
                <PhoneIcon
                  className='h-7 w-6 text-gray-400'
                  aria-hidden='true'
                />
                <p> (+961) 71480345</p>
              </Link>
              <Link
                href='mailto:info@InsuranceLB.com'
                className='flex flex-row gap-2 items-center w-max hover:bg-stone-100 p-2 rounded-lg'
              >
                <EnvelopeIcon
                  className='h-7 w-6 text-gray-400'
                  aria-hidden='true'
                />
                <p> info@InsuranceLB.com</p>
              </Link> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const products = [
  {
    name: 'Products overview',
    description: 'Explore our comprehensive range of health insurance products designed to safeguard your health and financial well-being.',
    href: '/products/explore',
    icon: UsersIcon,
  },
  // {
  //   name: 'Insurance packages',
  //   description: 'Sint aliqua anim nulla sunt mollit id pariatur',
  //   href: '#',
  //   icon: RectangleStackIcon,
  // },
  {
    name: 'Get a quote',
    description: 'Secure your peace of mind in minutes—request a personalized health insurance quote tailored to your unique needs and budget.',
    href: '/company/contact',
    icon: CurrencyDollarIcon,
  },
]
const resources = [
  {
    name: 'Resources Overview',
    description: 'Sint aliqua anim nulla sunt mollit id pariatur',
    href: '/resources',
    icon: LinkIcon,
  },
  {
    name: 'FAQ',
    description: 'Sint aliqua anim nulla sunt mollit id pariatur',
    href: '/resources/faq',
    icon: LightBulbIcon,
  },
  {
    name: 'Get a quote',
    description: 'Sint aliqua anim nulla sunt mollit id pariatur',
    href: '/company/contact',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Contact Us',
    description: 'Sint aliqua anim nulla sunt mollit id pariatur',
    href: '/company/contact',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]
const company = [
  {
    name: 'Why us?',
    description: 'Elevate your coverage with personalized health insurance solutions tailored to your unique needs and priorities.',
    href: '/',
    icon: HandThumbUpIcon,
  },
  {
    name: 'About',
    description: 'Trusted health insurance agents committed to securing your well-being, providing expert guidance with a personalized touch.',
    href: '/company/about',
    icon: UserGroupIcon,
  },
]
