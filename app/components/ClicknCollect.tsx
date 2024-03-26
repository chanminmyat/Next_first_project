import Link from "next/link"
import { about_cNc } from "../constants/feature"

const ClicknCollect = () => {
  return (
    <div id='clickncollect' className='bg-white bg-clip-pt-1 flex-col flex items-center'>
      <div className='max-container bg-gradient-to-r from-[#FFFFFF] to-[D9D9D9]'>
        <div className='flex flex-col items-center'> 
          <img className='icon__holder' src="/assets/img/elements/dash.svg" alt="" />
          <img className='about__icon' src="/assets/img/icon/click.svg" />
          <h2 className="caption text-dark-blue">E-Commerce Solution</h2>
          <span className="caption__underline"> </span>
          <p className='text-[#5e5e5e] text-[20px] text-center mb-[40px]'>
            Integrated "Click 'n Collect" online solution.
          </p>
        </div>
        <div className='container flex md:flex-row-reverse flex-col gap-3 justify-around items-center'>
          <div className='max-w-[100%] lg:w-[600px] w-[400px]'>
            {/* 3 paragraph mapping from index */}
            {about_cNc.map((Link)=>(
            <div className="pb-[40px] flex lg:flex-row flex-col lg:items-start items-center" key={Link.key}>
              <div className="cat__img">
                <img src={Link.img} alt="" />
              </div>
              <div>
                <h5 className="text-dark-blue md:text-2xl text-lg mb-[14px] font-semibold lg:text-left text-center">{Link.title}</h5>
                <p className="about__text lg:text-left text-center">{Link.p}</p>
                  <ul className='text-black list-disc ml-[13px] text-[15px]'>
                    <li>{Link.li1}</li>
                    <li>{Link.li2}</li>
                  </ul>
              </div>
            </div>
            ))}
          </div>
          <div className='w-1/2 flex-col flex items-center'>
            <img src="/assets/img/gallery/click-visual.png" alt="" />
            <Link className='bg-light-blue px-[50px] py-[15px] rounded-full text-white font-bold hover:no-underline hover:text-dark-blue' href="/features/ecommerce" >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
        <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-dark-blue.svg" />
      </div>
    </div>
  )
}

export default ClicknCollect

// text-dark-blue
// text-black