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
            <div className='flex flex-row items-center'>
              <Image
                width={60} // Increased width
                height={80} // Increased height
                className=' w-auto' // Adjusted className for larger height
                src='/nabeel.png'
                alt='navbar company logo'
              />
              <div className='flex text-5xl font-bold'>
                <div>Insurance</div><div className='text-green-800'>LEB</div>
              </div>
            </div>
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
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <CallAgent />
        </div>
      </nav>
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
              </div>
              <div className='py-6 '>
                <CallAgent />
              </div>
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
