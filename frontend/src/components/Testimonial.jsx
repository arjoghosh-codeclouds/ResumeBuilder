import { Rating, RatingStar } from "flowbite-react";
export default function Example() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-15 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
          className="mx-auto h-12"
                    /> */}
            <h1 className=" font-extrabold text-center text-black hover:underline hover:text-red-500 transition duration-300 text-4xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                        Testimonials
            </h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-grey-900 sm:text-2xl/9">
            <p>
              “I usually dread updating my resume, but this builder made it incredibly easy. The drag-and-drop sections and real-time preview saved me hours of frustrating formatting. It's the most intuitive tool I've ever used.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-800">Judith Black</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-800">CEO of Workcation</div>
            <Rating>
                <RatingStar className="text-amber-400"  />
                 <RatingStar className="text-amber-400" />
                 <RatingStar className="text-amber-400"/>
                <RatingStar className="text-amber-400"/>
                <RatingStar className="text-amber-400 filled-false" filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
            </Rating>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
