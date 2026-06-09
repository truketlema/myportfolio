import selfPortrait from "../assets/image1.png";
import line2 from "../assets/line2.png";
import Dots from "../assets/Dots.png";
export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="flex flex-col md:flex-row mt-36 md:mt-24 items-center leading-6 px-8"
      >
        <div className=" lg:flex-1 items-start flex flex-col gap-4">
          {" "}
          <h1 className="text-3xl font-semibold leading-10 tracking-wider ">
            <span className="text-[#c778dd]">
              Software Engineering student{" "}
            </span>
            and
            <span className="text-[#c778dd]"> front-end developer</span>
          </h1>
          <p>I craft responsive websites where technologies meet creativity</p>
          <button className="border border-[#c778dd] px-5 py-1 transition duration-300 hover:bg-[#c778dd] hover:text-black">
            Contact me
          </button>
        </div>
        <div className=" lg:flex-1 flex justify-end relative ">
          <img
            src={line2}
            alt="Line 2"
            className="absolute md:left-[0px] -left-[20px]  translate-x-8 top-20"
          />
          <div className="relative overflow-visible">
            <img
              src={selfPortrait}
              alt="Hero Image"
              className=" xl:w-[600px] xl:h-[384px] "
            />
            {/* top fade */}
            {/* TOP FADE */}
            <div className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#1b1b1b] to-transparent z-20"></div>

            {/* BOTTOM FADE */}
            <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-t from-[#1b1b1b] to-transparent z-20"></div>
            <div className=" right-10 relative bottom-[-20px] left-0 flex gap-2 border-gray-400 border pt-1 pl-1  z-10  md:mt-0">
              <div className=" w-5 h-5 bg-[#c778dd]"></div>
              <span>Hello, I’m Truket Lema</span>
            </div>
          </div>
          <img
            src={Dots}
            alt="Dots Pattern"
            className="absolute bottom-0 translate-y-[-60px] right-6 z-10"
          />
        </div>
      </div>
      <div className="mt-28 flex items-center justify-center">
        <div class="relative w-fit text-white">
          <div class="relative border border-gray-500 p-4 md:w-[500px]">
            <span class="absolute -top-3 left-3 text-3xl text-gray-400  px-1">
              “
            </span>

            <p class="text-xl">Simplicity is the ultimate sophistication.</p>
          </div>

          <div class="relative border border-gray-500 ml-auto w-fit px-2 lg:px-8 py-2">
            <span class="absolute -top-3 right-3 text-3xl text-gray-400  px-1">
              ”
            </span>

            <span class="text-lg text-gray-300">- Leonardo da Vinci</span>
          </div>
        </div>
      </div>
    </>
  );
}
