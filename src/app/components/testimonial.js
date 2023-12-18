import Image from "next/image";
import quote from "../../../public/images/bg-pattern-quotation.svg"

const Testimonial = ({testimonial}) => {
    return (
      <div key={testimonial.id} className={`relative rounded-[8px] px-[30px] py-[24px] shadow-xl shadow-slate-300 xl:h-custom-testimonial ${testimonial.id === 1 ? 'bg-primary1 text-[#FFE4FF] md:col-start-1 md:col-span-3 xl:col-start-1 xl:col-span-2 xl:w-custom-testimonial'
        : testimonial.id === 2 ? 'bg-primary2 text-primary4'
        : testimonial.id === 3 ? 'bg-primary4 text-primary2 shadow-2xl shadow-[#bdcad9] md:col-start-1 md:row-start-3 xl:col-start-1 xl:row-start-2 xl:h-custom-testimonial-small'
        : testimonial.id === 4 ? 'bg-primary3 text-primary4 xl:h-custom-testimonial-small md:col-span-3 xl:row-start-2 xl:col-start-2 xl:col-span-2'
        : testimonial.id === 5 && 'bg-primary4 text-primary2 shadow-2xl shadow-[#bdcad9] md:row-start-2 md:col-start-2 md:col-span-2 md:row-span-2 xl:min-h-full xl:col-start-4 xl:row-start-1 xl:col-span-1'} `}
       >
        {testimonial.id === 1 && <div className="absolute right-20 top-0 z-0"><Image src={quote} alt="quote" width="104px" height="102px"/></div>}
         <div className="flex">
            <div className="inline-block w-[32px] h-[32px] self-end">
              <Image src={testimonial.profile.img} alt={testimonial.id} width="32px" height="32px" className={`border-2 rounded-full ${testimonial.id === 1 ? 'border-[#A980EB]' : testimonial.id === 4 ? 'border-primary1': 'border-transparent'}`}/>
            </div>
            <div className={`ml-[15px] `}>
              <p>
                {testimonial.profile.name}
              </p>
              <p className="text-[11px] leading-3 opacity-50">
                {testimonial.profile.status}
              </p>
            </div>
         </div>
         
        <div className={`relative z-10`}>
          <h1 className={`font-semibold mt-[17px] text-[20px] leading-[1.55rem] ${testimonial.id === 1 ? 'text-[#FFE4FF]' : testimonial.id === 3 ? 'pr-1 text-primary2' : testimonial.id === 5 ? 'text-primary2': 'text-[#edf2f8]' }`}>{testimonial.title}</h1>
          <p className={`leading-[1.15rem] opacity-70 ${testimonial.id === 3 || testimonial.id === 4 || testimonial.id === 5 ? 'mt-[20px]' : ' mt-4'}`}>&quot; {testimonial.text} &quot;</p>
        </div>
       </div>
    )
}

export default Testimonial;