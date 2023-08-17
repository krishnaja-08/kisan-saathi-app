import { Poppins } from "next/font/google";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"],subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <div className="bg-landing bg-contain w-full h-full bg-no-repeat z-50">
        <div className="flex w-[60%] pt-[40%] pb-[25%] text-3xl pl-40 flex-col">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-[#FFFFFF]/70 to-[#BCF5B2]">Empowering Indian Agriculture <br></br>for a thriving tomorrow</h1><br></br>
          <p className="text-[#FFFFFF]/70">
            The establishment of FPO&apos;s, promoting self-sustainability,<br></br>
            enhanced farm income and effective agricultural practices with<br></br>
            strengthened mark linkages
          </p>
          <button className="w-fit px-10 py-5 text-xl rounded-2xl bg-gradient-to-r from-[#DDFCA999] to-[#D2EFA31A] text-white font-bold">See more</button>
        </div>
      </div>
      <div className="space-x-10 relative pt-[5%] pb-[20%] z-20">
        <div className="flex w-2/3 pl-36 flex-col">
          <h2 className="text-4xl py-8 font-semibold text-[#093A01] ">
            Why <span className="text-[#25CA0A]">Kisan Saathi?</span>
          </h2>
          <p className="text-xl">
            An initiative to build FPO&apos;s of India - creating self<br></br>
            sustainability and better farm income realisation of <br></br>
            farmers, FPO&apos;s through effective capacity building , FPO{" "}
            <br></br>
            Management, collectivisation approach, agronomy ,<br></br>{" "}
            cutlivating practices, transfer of technology, improved post{" "}
            <br></br>harvest management and efficient front end market <br></br>
            linkages{" "}
          </p>
        </div>
        <div className="absolute w-3/5 -top-10 right-0 h-full">
          <img className="w-full h-full object-contain" src="smart.png" />
        </div>
      </div>
      <div className="flex flex-col items-center px-12 text-[#093A01] py-12 gap-8">
        <h2 className="text-4xl font-semibold">
          Addressing Challenges of{" "}
          <span className="text-[#25CA0A]">Agriculture</span>
        </h2>
        <div className="flex flex-row w-full justify-between text-[#093A01] font-semibold  px-20">
          <div className="flex flex-col items-center justify-center">
            <img src="frame.png" className="w-[20em] pb-8"></img>
            <p>FPO Lacks Awareness & </p>
            <p>Approach</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="frame1.png" className="w-[20em] pb-8"></img>
            <p>Sustainability of FPO Business</p>
            <p> Verticals Finance</p>
          </div>
        </div>
        <div className="flex flex-row justify-center text-[#093A01] font-semibold gap-40">
          <div className="flex flex-col items-center justify-center">
            <img src="frame2.png" className="w-[20em] pb-8"></img>
            <p>Networking FPO Management Output</p>
            <p> Marketing ( Market Linkage, Post</p>
            <p> Harvest Mngt., Value addition)</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="frame3.png" className="w-[20em] pb-8"></img>
            <p>Input Business </p>
            <p>( GPA, Input Marketing )</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-[#093A01] font-semibold gap-8 px-10">
        <h2 className="text-4xl font-semibold">
          Our <span className="text-[#25CA0A]">services</span>
        </h2>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Access to kisanSaathiApp</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="input.png" className="w-[12em]"></img>
            <p>InputConnect</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Requirement Chart</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="market.png" className="w-[12em]"></img>
            <p>Market Linkage</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Weekly Harvsting Index</p>
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-center justify-center">
            <img src="tech.png" className="w-[12em]"></img>
            <p>Technology(Extension Services)</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Sorting &amp; Grading Training</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Service Providers Connect</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="swot.png" className="w-[12em]"></img>
            <p>FPO SWOT Analysis</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Service Providers Connect</p>
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="items-center justify-center flex flex-col">
            <img src="access.png" className="w-[12em]"></img>
            <p>Strengthening FPOs Business Verticles</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="market.png" className="w-[12em]"></img>
            <p>Customized Marketing Strategies</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>FPO Wise Commodity Value Chain Creation</p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl text-center pt-10 font-semibold">
          Insight Corner{" "}
          <span className="text-[#25CA0A]">Featured articles</span>
        </h2>
      <div className="px-40 space-x-4 relative">
        <button className="swiper-prev absolute left-10 top-1/2 bottom-1/2">
          <img src="/leftbutton.png" className="h-24" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          speed={1500}
          className=""
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br />
              </div>
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br />
              </div>
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br />
              </div>
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button>
            </div>
          </SwiperSlide>
          
        </Swiper>
        <button className="swiper-next absolute right-10 top-1/2 bottom-1/2">
          <img src="/leftbutton.png" className="h-24 rotate-180" />
        </button>
      </div>
      <div className="flex flex-col items-center py-12 gap-12">
        <h2 className="text-4xl font-semibold">
          Partner&apos;s Trust <span className="text-[#25CA0A]">Our pride</span>
        </h2>
        <div className="flex flex-row justify-center items-center gap-20">
          <img src="logo1.png" className="w-[16em]"></img>
          <img src="logo2.png" className="w-[12em]"></img>
          <img src="logo3.png" className="w-[12em]"></img>
          <img src="logo4.png" className="w-[12em]"></img>
        </div>
      </div>
      <div className="px-40">
        <h2 className="text-4xl font-semibold text-center pb-4">
          Meet <span className="text-[#25CA0A]">Our Team</span>
        </h2>

        <div className="grid grid-cols-3 gap-x-10 place-items-center">
          <div className="">
            <img src="/person.png" className="pl-8 w-3/4" />
            <h4 className="text-[#093A01] font-medium">Kylan Gentry</h4>
            <p className="text-[#25CA0A] font-medium">CEO & Cofounder</p>
          </div>
          <div className="">
            <img src="/person.png" className="pl-8 w-3/4" />
            <h4 className="text-[#093A01] font-medium">Kylan Gentry</h4>
            <p className="text-[#25CA0A] font-medium">CEO & Cofounder</p>
          </div>
          <div className="">
            <img src="/person.png" className="pl-8 w-3/4" />
            <h4 className="text-[#093A01] font-medium">Kylan Gentry</h4>
            <p className="text-[#25CA0A] font-medium">CEO & Cofounder</p>
          </div>
        </div>
      </div>
      <div className="pl-20 py-5 text-[#093A01]/95">
        <div className="relative py-96">
          <h3 className="font-semibold text-2xl">Contact Us</h3>
          <form
            action="#"
            onsubmit={(e) => { }}
            className="gap-y-4 flex  flex-col mt-10 relative md:w-1/2"
          >
            <label className="font-bold">Name</label>
            <input
              name="name"
              placeholder="Victor Doe"
              className="focus:outline-none border-b border-b-[#093A01] placeholder:text-black/50"
            />
            <label className="font-bold">Mobile Number</label>
            <input
              name="phone"
              placeholder="+91-8309013346"
              className="focus:outline-none border-b border-b-[#093A01] placeholder:text-black/50"
            />
            <label className="font-bold">Email</label>
            <input
              name="email"
              type="email"
              placeholder="temp@email.com"
              className="focus:outline-none border-b border-b-[#093A01] placeholder:text-black/50"
            />
            <label className="font-bold">Message</label>
            <textarea
              name="message"
              className="focus:outline-none border-b border-b-[#093A01] placeholder:text-black/50"
            />
            <button
              type="submit"
              className="bg-green-400 rounded-2xl w-fit px-8 py-3 text-white"
            >
              Submit
            </button>
          </form>
          <div className="w-[55%] absolute top-0 right-0 h-full">
            <img
              src="/contactus.png"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#052100E5]" >
      <div className="flex justify-center px-10 pt-20 pb-8 text-white flex-row gap-48">
        <div className="flex flex-col gap-8 pb-10">
          <p className="font-semibold pb-4">kisan saathi</p>
          <p>Lorem ipsum dolor <br></br>sit amet consectetur</p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-semibold">Our Company</p>
          <p>About us</p>
          <p>Contact</p>
          <p>Join our team</p>
          <p>Privacy policy</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="font-semibold">Get in touch</div>
          <div className="flex flex-row gap-12 pb-2">
            <img src="twitter.png" className="w-[1.5em]"></img>
            <img src="linkedin.png" className="w-[1.5em]"></img>
            <img src="insta.png" className="w-[1.5em]"></img>
            <img src="fb.png" className="w-[1.5em]"></img>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img src="time.png" className="w-[1em]"></img>
            <div className="flex flex-col gap-4">
              <p>Weekdays 10 am - 6 pm</p>
              <p>Weekends 10 am - 3pm</p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img src="phone.png" className="w-[1em]"></img>
            <p  className="underline">+91 - 8475651452</p>
          </div>
          <div className="flex flex-row gap-8">
            <img src="mail.png" className="w-[1em]"></img>
            <p className="underline">support@kisansaathi.com</p>
          </div>

        </div>
        
      </div>
      <p className="text-white px-8 py-8">Copyright 2023 | All Rights Reserved</p>
      </div>

    </main>
  );
}
