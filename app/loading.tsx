export default function Loading() {
    return (
      <div className="w-[100%] h-[100vh] bg-[#f7f7f7] flex items-center justify-center">
        <img className="relative w-[100px] h-[100px]" src="/assets/img/elements/tube-spinner.svg" alt="" />
        <img className="absolute w-[60px] h-[60px] rounded-[100%]" src="/assets/img/logo/loder.png" alt="" />
      </div>
    )
  }