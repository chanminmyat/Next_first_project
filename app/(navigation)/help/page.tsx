import { help } from "@/app/constants/feature";

export default function Help() {
    return (
      <main>
        <div className="relative bg-gradient-to-b from-[#0A0A37] to-[#1D204E] overflow-hidden">
          <div className=" flex lg:flex-row flex-col items-center justify-around py-[100px]">
            <h2 className="w-1/2 text-white md:mb-[100px] mb-[50px] text-center font-bold md:text-5xl text-3xl">Frequently Asked Questions</h2>
          </div>
          <div className='absolutew-[110%] mb-[-1px] mr-[0px] ml-[-5px] lg:mt-[-200px] md:mt-[-100px] mt-[-50px]'>
            <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-white.svg" />
          </div>
          <div className=" bg-white flex flex-col items-center">
                <div className="custom__container md:grid grid-cols-2 gap-[50px] flex-col py-[50px]">
                    {help.map((LINK)=>(
                    <div className="flex-col flex items-center mb-[50px] md:mb-0" key={LINK.key}>
                        <div>
                            <p className="text-dark-blue text-base font-extrabold mb-2">
                                <span className="text-light-blue">Q. </span>
                                {LINK.question}
                            </p>
                            <p className="text-sm text-[#5e5e5e] font-semibold">{LINK.answer}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
                    <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-white.png" />
                </div>
                <div className="w-[100%] bg-[#f2f5f6] flex-col flex items-center">
                    <img className='icon__holder pb-[50px]' src="/assets/img/elements/dash.svg" alt="" />
                    <a href="https://dsla-portal-shared-files.s3.ap-southeast-1.amazonaws.com/rz_pos_guide_en.pdf">
                        <span className="mb-[12px] text-[#1f2b7b] text-[18px] font-bold">User Guide</span>
                        <br />
                        <img className="" src="/assets/img/icon/pdf-download.svg" alt="download" />
                    </a>
                    <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
                        <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-dark-blue.svg" />
                    </div>
                </div>
                
          </div>
        </div>
      </main>
    );
  }


