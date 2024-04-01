import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative max-container bg-gradient-to-b from-[#e2e3e4] to-[#cdcdcf] pt-[100px] flex justify-center"
    >
      <div className="md:w-[700px] sm:w-[550px] w-[400px] bg-gradient-to-b from-[#29ABE2] to-[#0074A2] rounded-[22px] pt-[40px] pb-[100px] px-[20px] flex flex-col items-center">
        <h1 className="text-dark-blue font-bold mb-3 text-2xl">Contact Us</h1>
        <form className="w-full" action="">
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 rounded-lg outline-none"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 rounded-lg outline-none"
              type="email"
              name="email"
              placeholder="Your E-mail"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 rounded-lg outline-none"
              name="text"
              placeholder="Your Text"
              cols={50}
              rows={4}
            ></textarea>
          </div>
        </form>
        <div className="bg-light-blue px-5 py-3 rounded-full text-white hover:text-dark-blue cursor-pointer">
          <input
            type="submit"
            className=" cursor-pointer font-bold"
            value="Send"
          />
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

export default Contact;
