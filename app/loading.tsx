export default function Loading() {
    return (
      <div className="w-[100%] h-[100vh] bg-[#f7f7f7] flex items-center justify-center">
        <img className="relative w-[120px] h-[120px]" src="/assets/img/elements/tube-spinner.svg" alt="" />
        <img className="absolute w-[80px] h-[80px] rounded-[100%]" src="/assets/img/logo/loder.png" alt="" />
      </div>
    )
  }