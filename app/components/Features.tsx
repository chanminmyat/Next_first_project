import Image from "next/image";

const Features = () => {
  return (
    <div className="relative bg-white pt-[65px] flex-col flex items-center">
      {/* max container */}
      <div className="max-container bg-gradient-to-r from-[#FFFFFF] to-[D9D9D9]">
        <div className="flex flex-col items-center">
          <h2 className="caption text-dark-blue text-center">
            Our Unique Features
          </h2>
          <span className="h-0.5 w-12 bg-light-blue flex justify-center mb-8"></span>
        </div>
        {/* blue container */}
        <div className="container bg-gradient-to-b from-[#29ABE2] to-[#0074A2] rounded-[22px] md:pt-[100px] pt-[40px] pb-[25px] px-[40px] flex flex-col items-center">
          <div className="flex md:flex-row flex-col md:gap-10 gap-0">
            {/* Feature 1 */}
            <div className="features">
              <div className="flex lg:flex-row flex-col items-center lg:flex-start">
                <div className="cat__img brightness-[10]">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/img/icon/pos.svg"
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h5 className="mb-[14px]">
                    <a className="cat__cap" href="#pos">
                      POS System
                    </a>
                  </h5>
                  <p className="cat__text">
                    A digital shopfront with a fast and easy checkout and
                    billing process. No software installation needed.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="features">
              <div className="flex lg:flex-row flex-col items-center lg:flex-start">
                <div className="cat__img brightness-[10]">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/img/icon/click.svg"
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h5 className="mb-[14px]">
                    <a className="cat__cap" href="#clickncollect">
                      Click 'n Collect
                    </a>
                  </h5>
                  <p className="cat__text">
                    Self-pick up incentivize shoppers to check other products
                    and deals building or increasing loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-10 gap-0">
            {/* Feature 3 */}
            <div className="features">
              <div className="flex lg:flex-row flex-col items-center lg:flex-start">
                <div className="cat__img brightness-[10]">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/img/icon/stamp.svg"
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h5 className="mb-[14px]">
                    <a className="cat__cap" href="#stamps">
                      Loyalty Stamps
                    </a>
                  </h5>
                  <p className="cat__text">
                    Collect stamps in every purchase and earn even more with
                    multiple in-app games. Encourage customers to return to the
                    store.
                  </p>
                </div>
              </div>
            </div>
            {/* Featuer 4 */}
            <div className="features">
              <div className="flex lg:flex-row flex-col items-center lg:flex-start">
                <div className="cat__img brightness-[10]">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/img/icon/analytics.svg"
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h5 className="mb-[14px]">
                    <a className="cat__cap" href="#analytics">
                      Analytics & Marketing
                    </a>
                  </h5>
                  <p className="cat__text">
                    Get all your data on real-time. Increase traffic, sales and
                    revenue by launching successful and well-targeted campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 bottom-0 w-[110%] mb-[-1px] mr-[0px] ml-[-5px]">
        <Image
          width={100}
          height={100}
          className="w-[110%] h-auto"
          src="/assets/img/elements/triangle-dark-blue.svg"
          alt={""}
        />
      </div>
    </div>
  );
};

export default Features;
