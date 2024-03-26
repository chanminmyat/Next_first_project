import Link from "next/link"
import { about_stamp } from "../constants/feature"

const Stamps = () => {
  return (
    <div id='stamps' className='bg-gradient-to-r from-[#0A0A37] to-[#1D204E] flex-col flex items-center'>
      <div className='max-container'>
        <div className='flex flex-col items-center'> 
          <img className='icon__holder' src="/assets/img/elements/dash.svg" alt="" />
          <img className='about__icon' src="/assets/img/icon/stamp.svg" />
          <h2 className="caption text-white">Loyalty Stamps</h2>
          <span className="caption__underline"></span>
          <p className='text-white text-[20px] text-center mb-[40px]'>
            Add the fun factor to the usual shopping experience. Motivate your customers to
            <span className='text-light-blue'> engage with the shop.</span>
          </p>
        </div>
        <div className='container flex md:flex-row flex-col gap-3 justify-around items-center'>
          <div className='lg:w-[600px] w-[400px]'>
            {/* 3 paragraph mapping from index */}
            {about_stamp.map((Link)=>(
            <div className="pb-[40px] flex lg:flex-row flex-col lg:items-start items-center" key={Link.key}>
              <div className="cat__img">
                <img src={Link.img} alt="" />
              </div>
              <div>
                <h5 className="text-light-blue md:text-2xl text-lg mb-[14px] font-semibold lg:text-left text-center">{Link.title}</h5>
                <p className="cat__text lg:text-left text-center">{Link.p}</p>
                  <ul className='text-white list-disc ml-[13px] text-[15px]'>
                    <li>{Link.li1}</li>
                    <li>{Link.li2}</li>
                  </ul>
              </div>
            </div>
            ))} 
          </div>
          <div className='w-1/2 flex-col flex items-center'>
            <img src="/assets/img/gallery/stamps-visual.png" alt="" />
            <Link className='bg-light-blue px-[50px] py-[15px] rounded-full text-white font-bold hover:no-underline hover:text-dark-blue' href="/features/loyalty" >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
        <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-white.svg" />
      </div>
    </div>
  )
}

export default Stamps
