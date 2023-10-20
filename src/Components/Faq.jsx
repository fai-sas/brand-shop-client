const Faq = () => {
  return (
    <div className='container p-8 mx-auto'>
      <div className='grid gap-10 md:grid-cols-5'>
        <div className='md:col-span-2'>
          <div className='max-w-xs'>
            <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
              Frequently <br /> asked questions
            </h2>
            <p className='hidden mt-1 text-gray-600 md:block dark:text-gray-400'>
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className='md:col-span-3'>
          <div className='divide-y divide-gray-200 hs-accordion-group dark:divide-gray-700'>
            <div
              className='pb-3 hs-accordion active'
              id='hs-basic-with-title-and-arrow-stretched-heading-one'
            >
              <button
                className='inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
              >
                How can I track my order status?
                <svg
                  className='block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  We provide a tracking number for every order. You can use this
                  number to check your order&apos; status. Simply visit the
                  Track Order section on our website and input your tracking
                  number to get real-time updates on your shipment
                </p>
              </div>
            </div>

            <div
              className='pt-6 pb-3 hs-accordion'
              id='hs-basic-with-title-and-arrow-stretched-heading-two'
            >
              <button
                className='inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-two'
              >
                What payment methods do you accept?
                <svg
                  className='block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-two'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-two'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  We accept a variety of payment methods, including major credit
                  and debit cards such as Visa, MasterCard, and American
                  Express. Additionally, we offer secure payment gateways for
                  digital wallets and online payment services.
                </p>
              </div>
            </div>

            <div
              className='pt-6 pb-3 hs-accordion'
              id='hs-basic-with-title-and-arrow-stretched-heading-three'
            >
              <button
                className='inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-three'
              >
                Is my personal information safe when I shop here?
                <svg
                  className='block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-three'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-three'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  Yes, your privacy and security are our top priorities. We use
                  industry-standard encryption and security measures to protect
                  your personal information. Your data is always handled with
                  the utmost care. You can read more about our security
                  practices in our Privacy Policy.
                </p>
              </div>
            </div>

            <div
              className='pt-6 pb-3 hs-accordion'
              id='hs-basic-with-title-and-arrow-stretched-heading-four'
            >
              <button
                className='inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-four'
              >
                Do you offer product warranties or guarantees?
                <svg
                  className='block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-four'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-four'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  Absolutely, we stand by the quality of our products. Many
                  items come with manufacturer warranties. You can find details
                  about warranties and guarantees on the product page. If you
                  encounter any issues, please contact our customer support for
                  assistance.
                </p>
              </div>
            </div>

            <div
              className='pt-6 pb-3 hs-accordion'
              id='hs-basic-with-title-and-arrow-stretched-heading-five'
            >
              <button
                className='inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-five'
              >
                What is your return policy?
                <svg
                  className='block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-five'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-five'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  We want you to be satisfied with your purchase. If you're not
                  completely happy, we offer a hassle-free return policy. You
                  can initiate a return within 30 days of receiving your order.
                  Please review our Return Policy for more details.
                </p>
              </div>
            </div>

            <div
              className='pt-6 pb-3 hs-accordion'
              id='hs-basic-with-title-and-arrow-stretched-heading-six'
            >
              <button
                className='inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-six'
              >
                Do you offer customer support? How can I get in touch?
                <svg
                  className='block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-six'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-six'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  Yes, we have a dedicated customer support team ready to assist
                  you. You can reach us through email, live chat, or by calling
                  our customer support hotline. We are here to answer your
                  questions, help with issues, and ensure your shopping
                  experience is enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Faq
