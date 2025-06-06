import Image from 'next/image'

export default function ProductsTestimonials() {
  return (
    <div className='bg-stone-50 py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='text-lg font-semibold leading-8 tracking-tight text-sky-600'>
            Testimonials
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Join the thousands of customers who love InsuranceLB
          </p>
        </div>
        <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
          <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3 md:divide-x '>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className='pt-8 sm:inline-block sm:w-full sm:px-4'
              >
                <figure className='rounded-2xl bg-gray-50 p-4 md:p-8 text-sm leading-6'>
                  <blockquote className='text-gray-900'>
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className='mt-6 flex items-center gap-x-4'>
                    <Image
                      width={500}
                      height={500}
                      className='h-10 w-10 rounded-full bg-gray-50'
                      src={testimonial.author.imageUrl}
                      alt='testimonials'
                    />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.author.name}
                      </div>
                      <div className='text-gray-600'>{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  // {
  //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  //   author: {
  //     name: 'Leslie Alexander',
  //     handle: 'lesliealexander',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
  // {
  //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  //   author: {
  //     name: 'Leslie Alexander',
  //     handle: 'lesliealexander',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
  // {
  //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  //   author: {
  //     name: 'Leslie Alexander',
  //     handle: 'lesliealexander',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
  // {
  //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  //   author: {
  //     name: 'Leslie Alexander',
  //     handle: 'lesliealexander',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
  // {
  //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  //   author: {
  //     name: 'Leslie Alexander',
  //     handle: 'lesliealexander',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
  // {
  //   body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  //   author: {
  //     name: 'Leslie Alexander',
  //     handle: 'lesliealexander',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
]
