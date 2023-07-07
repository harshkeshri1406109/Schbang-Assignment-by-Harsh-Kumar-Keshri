import type { NextPage } from "next";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[241.31rem] overflow-hidden text-left text-[1.44rem] text-hotpink font-nunito-sans">
      <div className="absolute top-[-13.94rem] left-[-22.25rem] rounded-[50%] bg-orangered [filter:blur(500px)] w-[31.25rem] h-[31.25rem] opacity-[0.5]" />
      <div className="absolute top-[52.94rem] left-[84.44rem] rounded-[50%] bg-goldenrod-100 [filter:blur(500px)] w-[31.25rem] h-[31.25rem] opacity-[0.5]" />
      <Menu />
      <div className="mt-[4rem] ml-[10.3125rem] flex flex-row items-center justify-start text-[0.88rem]">
        <div className="w-[26.69rem] flex flex-col items-start justify-start gap-[2.69rem]">
          <div className="rounded-81xl bg-white shadow-[0px_856px_240px_rgba(0,_0,_0,_0),_0px_548px_219px_rgba(0,_0,_0,_0.01),_0px_308px_185px_rgba(0,_0,_0,_0.04),_0px_137px_137px_rgba(0,_0,_0,_0.06),_0px_34px_75px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.07)] flex flex-row py-[1rem] px-[2rem] items-center justify-start gap-[1rem]">
            <b className="relative leading-[120%]">Explore the world!</b>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/work-1.svg"
            />
          </div>
          <b className="relative text-[4.31rem] leading-[120%] inline-block w-[37.31rem]">
            <p className="m-0">
              <span className="text-black">{`Travel `}</span>
              <span>top destination</span>
              <span className="text-black">{` `}</span>
            </p>
            <p className="m-0 text-black">of the world</p>
          </b>
          <div className="relative text-[1.13rem] leading-[160%] font-inter text-gray-300">
            <p className="m-0">
              We always make our customer happy by providing
            </p>
            <p className="m-0">{`as many choices as possible `}</p>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1rem] text-whitesmoke">
            <div className="rounded-81xl bg-slateblue shadow-[0px_126px_35px_rgba(0,_0,_0,_0),_0px_81px_32px_rgba(0,_0,_0,_0.01),_0px_45px_27px_rgba(0,_0,_0,_0.05),_0px_20px_20px_rgba(0,_0,_0,_0.09),_0px_5px_11px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] flex flex-row py-[1rem] px-[2rem] items-start justify-start">
              <b className="relative leading-[120%]">Get Started</b>
            </div>
            <div className="rounded-81xl bg-white flex flex-row py-[1rem] px-[2rem] items-center justify-start gap-[0.5rem] text-gray-100 border-[1px] border-solid border-whitesmoke">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/playcircle5-1.svg"
              />
              <b className="relative leading-[120%]">Watch Demo</b>
            </div>
          </div>
        </div>
        <div className="relative w-[48.25rem] h-[44.56rem] text-darkslategray">
          <img
            className="absolute top-[0rem] left-[0rem] w-[48.25rem] h-[17.96rem] overflow-hidden"
            alt=""
            src="/layer.svg"
          />
          <div className="absolute top-[4.69rem] left-[5.69rem] flex flex-row items-center justify-start gap-[1.94rem]">
            <div className="flex flex-col items-start justify-start gap-[2rem]">
              <img
                className="relative rounded-13xl w-[17rem] h-[18.75rem] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <img
                className="relative rounded-13xl w-[17rem] h-[18.75rem] object-cover"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <img
              className="relative rounded-13xl w-[17rem] h-[25rem] object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
          </div>
          <div className="absolute top-[21.31rem] left-[3.5rem] rounded-81xl bg-hotpink shadow-[0px_120px_34px_rgba(0,_0,_0,_0),_0px_77px_31px_rgba(0,_0,_0,_0.01),_0px_43px_26px_rgba(0,_0,_0,_0.05),_0px_19px_19px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-row p-[1rem] items-start justify-start">
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/send-1.svg"
            />
          </div>
          <div className="absolute top-[40.56rem] left-[29.63rem] rounded-81xl bg-orangered shadow-[0px_120px_34px_rgba(0,_0,_0,_0),_0px_77px_31px_rgba(0,_0,_0,_0.01),_0px_43px_26px_rgba(0,_0,_0,_0.05),_0px_19px_19px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-row p-[1rem] items-start justify-start">
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/adduser-1.svg"
            />
          </div>
          <div className="absolute top-[30.5rem] left-[37rem] rounded-81xl bg-white shadow-[0px_120px_34px_rgba(0,_0,_0,_0),_0px_77px_31px_rgba(0,_0,_0,_0.01),_0px_43px_26px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[1rem] px-[2rem] items-center justify-start gap-[0.5rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/location-1.svg"
            />
            <b className="relative leading-[120%]">Top Places</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[59.63rem] left-[calc(50%_-_720px)] w-[90rem] flex flex-row py-[4rem] px-[10.31rem] box-border items-start justify-between">
        <img
          className="relative w-[13.24rem] h-[2rem]"
          alt=""
          src="/group.svg"
        />
        <img
          className="relative w-[7.07rem] h-[2rem]"
          alt=""
          src="/group-2.svg"
        />
        <img
          className="relative w-[11.79rem] h-[2rem]"
          alt=""
          src="/group1.svg"
        />
        <img
          className="relative w-[6.41rem] h-[2rem]"
          alt=""
          src="/group-9235.svg"
        />
        <img
          className="relative w-[10.85rem] h-[2rem]"
          alt=""
          src="/group-3.svg"
        />
      </div>
      <div className="absolute top-[73.63rem] left-[10.38rem] flex flex-row items-center justify-start">
        <div className="w-[27.75rem] flex flex-col items-start justify-start gap-[1rem]">
          <b className="relative tracking-[0.2em] leading-[120%] uppercase">
            Services
          </b>
          <b className="self-stretch relative text-[2.75rem] leading-[120%] text-black">
            Our top value categories for you
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.31rem] text-center text-[1.75rem] text-black">
          <div className="self-stretch rounded-13xl bg-white w-[21.88rem] flex flex-col p-[4rem] box-border items-center justify-start gap-[4rem]">
            <img
              className="relative w-[4rem] h-[4rem] object-cover"
              alt=""
              src="/destination-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[2rem]">
              <b className="self-stretch relative leading-[120%]">
                Best Tour Guide
              </b>
              <div className="self-stretch relative text-[1.13rem] leading-[160%] font-inter text-gray-300">
                What looked like a small patch of purple grass, above five feet.
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-13xl bg-white shadow-[0px_41px_89px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] w-[21.88rem] flex flex-col p-[4rem] box-border items-center justify-start gap-[4rem]">
            <img
              className="relative w-[4rem] h-[4rem] object-cover"
              alt=""
              src="/booking-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[2rem]">
              <b className="self-stretch relative leading-[120%]">
                Easy Booking
              </b>
              <div className="self-stretch relative text-[1.13rem] leading-[160%] font-inter text-gray-300">
                Square, was moving across the sand in their direction.
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-13xl bg-white w-[21.88rem] flex flex-col p-[4rem] box-border items-center justify-start gap-[4rem]">
            <img
              className="relative w-[4rem] h-[4rem] object-cover"
              alt=""
              src="/cloudy-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[2rem]">
              <b className="self-stretch relative leading-[120%]">
                Weather Forecast
              </b>
              <div className="self-stretch relative text-[1.13rem] leading-[160%] font-inter text-gray-300">
                What looked like a small patch of purple grass, above five feet.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[108.13rem] left-[0rem] flex flex-row items-center justify-start gap-[2.63rem]">
        <img
          className="relative w-[49.36rem] h-[43.54rem]"
          alt=""
          src="/group-9238.svg"
        />
        <div className="w-[27.81rem] flex flex-col items-start justify-start gap-[4rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <b className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase">
                Travel Point
              </b>
              <b className="self-stretch relative text-[2.75rem] leading-[120%] text-black">
                We helping you find your dream location
              </b>
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[160%] font-inter text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[2.19rem] text-orangered">
            <div className="self-stretch flex flex-row items-start justify-start gap-[2rem]">
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-[2rem] items-center justify-start gap-[1rem] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">500+</b>
                <div className="relative text-[1.13rem] leading-[160%] font-inter text-black">
                  Holiday Package
                </div>
              </div>
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-[2rem] items-center justify-start gap-[1rem] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">100</b>
                <div className="relative text-[1.13rem] leading-[160%] font-inter text-black">
                  Luxury Hotel
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[2rem]">
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-[2rem] items-center justify-start gap-[1rem] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">7</b>
                <div className="relative text-[1.13rem] leading-[160%] font-inter text-black">
                  Premium Airlines
                </div>
              </div>
              <div className="flex-1 rounded-13xl bg-white flex flex-col p-[2rem] items-center justify-start gap-[1rem] border-[1px] border-solid border-gray-200">
                <b className="relative leading-[120%]">2k+</b>
                <div className="relative text-[1.13rem] leading-[160%] font-inter text-black">
                  Happy Customer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[116.31rem] left-[30.38rem] rounded-81xl bg-white shadow-[0px_385px_108px_rgba(0,_0,_0,_0),_0px_246px_99px_rgba(0,_0,_0,_0),_0px_139px_83px_rgba(0,_0,_0,_0.01),_0px_62px_62px_rgba(0,_0,_0,_0.02),_0px_15px_34px_rgba(0,_0,_0,_0.03),_0px_0px_0px_rgba(0,_0,_0,_0.03)] flex flex-row py-[1rem] px-[2rem] items-center justify-start gap-[1rem] text-black">
        <img
          className="relative w-[2.5rem] h-[2.5rem] overflow-hidden shrink-0"
          alt=""
          src="/discount-1.svg"
        />
        <b className="relative leading-[120%]">Discounted Price</b>
      </div>
      <div className="absolute top-[126.44rem] left-[77.88rem] rounded-81xl bg-goldenrod-100 shadow-[0px_385px_108px_rgba(0,_0,_0,_0),_0px_246px_99px_rgba(0,_0,_0,_0),_0px_139px_83px_rgba(0,_0,_0,_0.01),_0px_62px_62px_rgba(0,_0,_0,_0.02),_0px_15px_34px_rgba(0,_0,_0,_0.03),_0px_0px_0px_rgba(0,_0,_0,_0.03)] flex flex-row p-[2rem] items-center justify-start">
        <img
          className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
          alt=""
          src="/ticketstar-1.svg"
        />
      </div>
      <div className="absolute top-[162.19rem] left-[10.5rem] rounded-13xl bg-goldenrod-200 w-[69.38rem] flex flex-col py-[8rem] px-[4rem] box-border items-center justify-start gap-[4rem] text-center">
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <b className="relative tracking-[0.2em] leading-[120%] uppercase inline-block w-[61.38rem]">
            subscribe to our newsletter
          </b>
          <b className="relative text-[3.44rem] leading-[120%] inline-block text-black w-[61.38rem]">{`Prepare yourself & let’s explore the beauty of the world`}</b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[4rem] text-gray-400">
          <div className="self-stretch flex-1 rounded-13xl bg-white flex flex-row p-[2rem] items-center justify-start gap-[1rem]">
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/message-1.svg"
            />
            <b className="relative leading-[120%]">Your Email</b>
          </div>
          <div className="self-stretch rounded-13xl bg-slateblue flex flex-row py-[2rem] px-[4rem] items-center justify-start text-white">
            <b className="relative leading-[120%]">Subscribe</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[210.69rem] left-[0.19rem] w-[90rem] flex flex-row py-[0rem] px-[10.31rem] box-border items-start justify-start gap-[9.56rem] text-[1.5rem] text-black">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4rem]">
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <Logo />
            <div className="relative text-[1.44rem] leading-[160%] font-black text-gray-300 inline-block w-[17.38rem]">
              <p className="m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots
              </p>
              <p className="m-0">
                in a piece of classical Latin literature from 45 BC.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[2rem]">
            <img
              className="relative w-[2rem] h-[2rem]"
              alt=""
              src="/group2.svg"
            />
            <img
              className="relative w-[2rem] h-[2rem]"
              alt=""
              src="/group3.svg"
            />
            <img
              className="relative w-[2rem] h-[2rem]"
              alt=""
              src="/group-8.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[7.56rem] text-[1.13rem] text-gray-400 font-inter">
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative text-[1.44rem] leading-[120%] font-nunito-sans text-black">
              Company
            </b>
            <div className="relative leading-[160%]">About</div>
            <div className="relative leading-[160%]">Career</div>
            <div className="relative leading-[160%]">Mobile</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative text-[1.44rem] leading-[120%] font-nunito-sans text-black">
              Contact
            </b>
            <div className="relative leading-[160%]">Why Travlog?</div>
            <div className="relative leading-[160%]">Partner with us</div>
            <div className="relative leading-[160%]">FAQ’s</div>
            <div className="relative leading-[160%]">Blog</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem]">
            <b className="relative text-[1.44rem] leading-[120%] font-nunito-sans text-black">
              Meet Us
            </b>
            <div className="relative leading-[160%]">+00 92 1234 56789</div>
            <div className="relative leading-[160%]">info@travlog.com</div>
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative leading-[160%]">
                205. R Street, New York
              </div>
              <div className="relative leading-[160%]">BD23200</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[56.17rem] left-[2.38rem] w-[4.06rem] h-[10.62rem] overflow-hidden"
        alt=""
        src="/objects.svg"
      />
      <img
        className="absolute top-[158.5rem] left-[7.81rem] w-[11.49rem] h-[11.02rem] overflow-hidden"
        alt=""
        src="/graphic-elements.svg"
      />
      <img
        className="absolute top-[189.28rem] left-[83.06rem] w-[20.75rem] h-[22rem] overflow-hidden"
        alt=""
        src="/objects1.svg"
      />
    </div>
  );
};

export default Home;
