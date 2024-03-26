import { pos } from "@/app/constants/feature";

export default function feature_Pos() {
    return (
      <main>
        <div className="relative bg-gradient-to-b from-[#0A0A37] to-[#1D204E] overflow-hidden">
          <div className=" flex lg:flex-row flex-col items-center justify-around">
            <h2 className="w-1/2 text-white md:mb-[100px] mb-[50px] text-center font-bold md:text-5xl text-3xl">LINK System</h2>
            <img className="z-10 w-1/2" src="/assets/img/gallery/pos-visual.png" alt="" />
          </div>
          <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px] lg:mt-[-200px] md:mt-[-100px] mt-[-50px]'>
            <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-white.svg" />
          </div>
          <div className="bg-white flex-col flex items-center">
            <div className='flex flex-col items-center'> 
              <img className='icon__holder' src="/assets/img/elements/dash.svg" alt="" />
              <p className='text-dark-blue text-[20px] text-center mb-[40px]'>
                Manage all your store’s activity with
                <span className='text-light-blue'> one single tool.</span>
              </p>
            </div>
            <div className="container md:grid grid-cols-3 gap-4 flex-col lg:px-[200px] px-0">
              {pos.map((LINK)=>(
                <div className="flex-col flex items-center" key={LINK.key}>
                <div className="w-[100%] max-w-[100px] min-w-[40px] max-h-[90px] lg:mx-[30px] mx-0 lg:mb-0 mb-2">
                  <img src={LINK.img} alt="" />
                </div>
                <div>
                  <p className="text-dark-blue text-base font-bold text-center">{LINK.title}</p>
                  <p className="text-base text-[#5e5e5e] text-center">{LINK.p}</p>
                </div>
              </div>
              ))}
            </div>
            <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
              <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-dark-blue.svg" />
            </div>
          </div>
        </div>
      </main>
    );
  }