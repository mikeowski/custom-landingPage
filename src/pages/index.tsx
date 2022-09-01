import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-30 flex w-full px-4 py-2 text-xl ">
        <Image
          src="https://lirp.cdn-website.com/de3b6c93/dms3rep/multi/opt/Studio_28_Logo_BLACK_sub-e3735466-218w.png"
          width="110"
          height="110"
          alt="logo"
        />
        <button className="ml-auto">light</button>
      </header>
      <main className="flex flex-col items-center justify-between self-center pt-14">
        <div className="grid grid-cols-6 place-content-center content-center pb-10 md:grid-rows-3">
          <div className="col-span-6 rounded-3xl md:col-span-2 md:row-span-3">
            <div className="shadow-2xl transition-all hover:shadow-gray-500">
              <Image
                src="https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixid=MnwzNTY3Mzd8MHwxfHNlYXJjaHwxfHx0YXR0byUyMGFydGlzdHxlbnwwfHx8fDE2NjE5OTA3ODk&ixlib=rb-1.2.1"
                alt="profile"
                width={8}
                height={8}
                layout="responsive"
                className="rounded-3xl"
              />
            </div>
          </div>
          <h1 className="col-span-6 place-self-center text-center text-6xl font-black sm:text-7xl md:col-span-4 md:row-span-3 md:text-8xl lg:row-span-2">
            Dream Tattos
          </h1>
          <p className="col-span-6 p-2 text-center text-xl font-normal leading-6 text-gray-900 sm:text-2xl md:col-span-6 md:row-span-2 lg:col-span-4">
            Our tattoo and piercing artists have years of training and
            experience with a variety of custom tattoo designs and body
            piercings. When you choose Studio 28, you get a
            <strong> one-on-one </strong>
            experience with an artist who cares deeply about the
            <strong> safety </strong> and <strong> quality </strong>of your
            tattoo or piercing
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-8 rounded-lg bg-teal-700 py-12 text-center text-teal-50">
          <span className="text-6xl"> Premier Service & Expertise</span>
          <p className="text-center text-xl font-normal leading-6 text-teal-100">
            At Studio 28, we are passionate about our craft and work hard to
            provide 100% customer satisfaction with strong every tattoo we ink
            and every body part we pierce. We’ve been recognized by several
            publications and organizations due to the elite craftsmanship and
            care we provide.
          </p>
        </div>
      </main>
    </>
  )
}

export default Home
