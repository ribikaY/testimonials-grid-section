import Image from 'next/image';
import Testimonial from './components/testimonial';
import testimonials from './data';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen h-auto py-14 md:py-10 xl:py-0">
      <div className='xl:h-custom-testimonials xl:w-custom-testimonials'>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-custom m-auto w-[88%] sm:w-3/5 md:m-0  md:w-[600px] xl:w-custom-testimonials">
          {
            testimonials && testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} testimonial = {testimonial}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}
