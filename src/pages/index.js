import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="bg-landing bg-contain w-full h-full bg-no-repeat z-50">
        <div className="flex py-[30%] text-4xl px-80 flex-col">
          <h1>Empowering Indian Agriculture for a thriving tomorrow</h1>
          <p>
            The establishment of FPO&apos;s, promoting self-sustainability,
            enhanced farm income and effective agricultural practices with
            strengthened mark linkages
          </p>
          <button>See more</button>
        </div>
      </div>
      <div className="overflow-clip space-x-10 relative z-20">
        <div className="flex w-2/5 pl-36 flex-col">
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
        <img className="w-3/5 absolute -top-10 right-0" src="smart.jpeg" />
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
      <h2 className="flex text-center justify-center">
        Insights Corner: Featured Articles
      </h2>
      <div className="px-32 space-x-4 relative">
        <button className="swiper-prev absolute left-10 top-1/2 bottom-1/2">
          <img src="/leftbutton.png" className="h-12" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
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
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl">
              <div>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <button className="px-4 py-4 bg-grey text-left rounded-md">
                Read more
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="swiper-next absolute right-10 top-1/2 bottom-1/2">
          <img src="/leftbutton.png" className="h-12 rotate-180" />
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
        <div className="relative py-72">
          <h3 className="font-semibold text-2xl">Contact Us</h3>
          <form
            action="#"
            onsubmit={(e) => {}}
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
    </main>
  );
}
