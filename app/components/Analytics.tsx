import Link from "next/link"

const Analytics = () => {
  return (
    <div id='analytics' className='bg-white bg-clip-pt-1 flex-col flex items-center'>
      <div className='max-container bg-gradient-to-r from-[#FFFFFF] to-[D9D9D9]'>
        <div className='flex flex-col items-center'> 
          <img className='icon__holder' src="/assets/img/elements/dash.svg" alt="" />
          <img className='about__icon' src="/assets/img/icon/analytics.svg" />
          <h2 className="caption text-dark-blue text-center">Analytics & Marketing</h2>
          <span className="caption__underline"></span>
          <p className='text-[#5e5e5e] text-[20px] text-center mb-[40px]'>
            Get data about your store’s transactions, shoppers’ purchasing patterns, sales, and insights, anytime, anywhere,
            <span className='text-light-blue'> real-time.</span>
          </p>
        </div>
        <div className='container flex md:flex-row-reverse flex-col gap-3 justify-around items-center'>
          <div className='lg:w-[600px] w-[350px]'>
            {/* 1st para */}
            <div className="pb-[40px] flex lg:flex-row flex-col lg:items-start items-center">
              <div className="cat__img">
                <img src="/assets/img/pictogram/data-accessibility-pictograme.svg" alt="" />
              </div>
              <div>
                <h5 className="text-dark-blue md:text-2xl text-lg mb-[14px] font-semibold lg:text-left text-center">Data Accessibility</h5>
                <p className="about__text lg:text-left text-center">
                Our AI Marketing platform enhanced brand campaigns by providing
                behavioral analysis
                to target the right audience in real time.</p>
              </div>
            </div>
            {/* 2nd para */}
            <div className="pb-[40px] flex lg:flex-row flex-col lg:items-start items-center">
              <div className="cat__img">
                <img src="/assets/img/pictogram/customer-identification-and-segmentation-pictograme.svg" alt="" />
              </div>
              <div>
                <h5 className="text-dark-blue md:text-2xl text-lg mb-[14px] font-semibold lg:text-left text-center">Customer identification & segmentation</h5>
                <p className="about__text lg:text-left text-center"> Data identified and collected demographics' data points segmented
                  by AI machine learning.</p>
              </div>
            </div>
            {/* 3rd para */}
            <div className="pb-[40px] flex lg:flex-row flex-col lg:items-start items-center">
              <div className="cat__img">
                <img src="/assets/img/pictogram/campaign-management-platform-pictograme.svg" alt="" />
              </div>
              <div>
                <h5 className="text-dark-blue md:text-2xl text-lg mb-[14px] font-semibold lg:text-left text-center">Campaign Management Platform</h5>
                <p className="about__text lg:text-left text-center">Combine multiple engagement, game and reward mechanics with rich customer data
                  to generate a brand new experience.</p>
                  <ul className='text-black list-disc ml-[13px] text-[15px]'>
                    <li>Identify important trends in campaign performance</li>
                    <li>Monitor ROI for every marketing dollar spent</li>
                    <li>Real time consumer behavior</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex-col flex items-center'>
            <img src="/assets/img/gallery/analytics-visual.png" alt="" />
            <Link className='bg-light-blue px-[50px] py-[15px] rounded-full text-white font-bold hover:no-underline hover:text-dark-blue' href="/features/analytics" >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[110%] mb-[-1px] mr-[0px] ml-[-5px]'>
        <img className='w-[110%] h-auto' src="/assets/img/elements/triangle-grey.svg" />
      </div>
    </div>
  )
}

export default Analytics
