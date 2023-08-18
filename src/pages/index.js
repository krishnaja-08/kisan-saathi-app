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
        <div className="flex w-[50%] pt-[36%] pb-[20%] text-3xl pl-40 flex-col">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-[#FFFFFF]/70 to-[#BCF5B2]">Empowering Indian Agriculture <br></br>for a thriving tomorrow</h1><br></br>
          <p className="text-[#FFFFFF]/70">
          Strengthening FPO’s,  Strengthening Agriculture through Economics of aggregation by Uniting the farms and  farmers through FPO’s

          </p><br></br>
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
      <div className="flex flex-col items-center text-[#093A01] py-2 gap-8">
        <h2 className="text-4xl font-semibold">
          Addressing Challenges of{" "}
          <span className="text-[#25CA0A]">Agriculture</span>
        </h2>
        <img src="challenges.png" className="h-[60%]"></img>
      </div>
      <h2 className="text-4xl flex gap-2  justify-center font-semibold">
          Our  <span className="text-[#25CA0A]"> services</span>
        </h2>
      <div className="flex flex-col justify-center text-[#093A01] font-semibold gap-8 px-20">
  
        <div className="flex items-center flex-row gap-20">
          <p >Input</p>
          
          <div className="flex flex-col items-center justify-center">
            <img src="input.png" className="w-[12em]"></img>
            <p>InputConnect</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Requirement Chart</p>
          </div>
          
          
        </div>
        <div className="flex items-center flex-row gap-20">
          <p>Output</p>
          <div className="flex flex-col items-center justify-center">
            <img src="market.png" className="w-[12em]"></img>
            <p>Market Linkage</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Weekly Harvsting </p>
            <p>Index</p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Sorting &amp; Grading </p><p>Training</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="market.png" className="w-[12em]"></img>
            <p>Customized </p><p>Marketing </p><p>Strategies</p>
          </div>        
        </div>
        <div className="flex items-center flex-row gap-20">
          <p>Consultancy</p>
          <div className="flex flex-col items-center ">
            <img src="access.png" className="w-[12em]"></img>
            <p>Access to</p><p> kisanSaathiApp</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="tech.png" className="w-[12em]"></img>
            <p>Technology<br></br>(Extension<br></br> Services)</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>Service Providers</p><p> Connect</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="access.png" className="w-[12em]"></img>
            <p>FPO Wise</p><p> Commodity Value</p><p> Chain Creation</p>
          </div>
          <div className="items-center justify-center flex flex-col">
            <img src="access.png" className="w-[12em]"></img>
            <p>Strengthening</p><p>FPOs Business </p><p>Verticles</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="swot.png" className="w-[12em]"></img>
            <p>FPO SWOT </p><p>Analysis</p>
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
          slidesPerView={2}
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
                <p className="font-bold text-3xl">Forbes magazine, 2019</p>
                <br></br>
                <p>The 'Farmer's Companion' Bringing Together Food Buyers And Producers In Urban India</p>
                <br />
              </div>
              <a href="https://www.forbes.com/sites/christinero/2019/05/04/the-farmers-companion-bringing-together-food-buyers-and-producers-in-urban-india/?sh=3408748954bf" target="_blank">
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Zenger, 2020</p>
                <br></br>
                <p>Technology Helps Indian Farmers Get a Better Deal</p>
                <br />
              </div>
              <a href="https://www.zenger.news/2020/11/20/technology-helps-indian-farmers-get-a-better-deal/" target="_blank">
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Niti aayog, 74th page, 2021</p>
                <br></br>
                <p>Agriculture and Allied Sectors</p>
                <br />
              </div>
              <a href="https://aim.gov.in/pdf/Agriculture-and-Allied-Sectors.pdf" target="_blank">
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Social alpha, 2022</p>
                <br></br>
                <p>Winners of techtonic innovations</p>
                <br />
              </div>
              <a href="https://www.linkedin.com/posts/social-alpha_winners-of-techtonic-innovations-in-agritech-activity-6988121728442937344-GFvi?utm_source=share&utm_medium=member_desktop" target="_blank">
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">2023</p>
                <br></br>
                <p>Niti aayog, 27th page</p>
                <br />
              </div>
              <a href="https://www.niti.gov.in/sites/default/files/2023-02/Compendium-of-75-agri-entrerenuer.pdf" target="_blank">
              <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                Read more
              </button></a>
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
          <img src="atal.png" className="w-[16em]"></img>
          <img src="garuda.jpeg" className="w-[12em]"></img>
          <img src="giz.png" className="w-[16em]"></img>
          <img src="go.png" className="w-[12em]"></img>
          <img src="Cell.jpg" className="w-[12em]"></img>
        </div>
        <div className="flex flex-row justify-center items-center gap-28">
          <img src="hyd.jpg" className="w-[12em] h-12"></img>
          <img src="svm.png" className="w-[12em]"></img>
          <img src="alpha.png" className="w-[12em]"></img>
          <img src="vision.png" className="w-[12em]"></img>
          <img src="waycool.jpg" className="w-[8em]"></img>
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
        <div className="relative py-60">
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
          <div className="w-[55%] pt-20 absolute top-0 right-0 h-full">
            <img
              src="/contactus.png"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#052100E5]" >
      <div className="flex justify-center px-10 pt-10 pb-8 text-white flex-row gap-48">
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
            <a href="https://twitter.com/KisanSaathi" target="_blank"><img src="twitter.png" className="w-[1.5em]"></img></a>
            <a href="https://www.linkedin.com/company/kisansaathi/" target="_blank"><img src="linkedin.png" className="w-[1.5em]"></img></a>
            <a href="https://instagram.com/kisan.saathi?igshid=NGExMmI2YTkyZg==" target="_blank"><img src="insta.png" className="w-[1.5em]"></img></a>
            <a href="https://www.facebook.com/KisanSaathi" target="_blank"><img src="fb.png" className="w-[1.5em]"></img></a>
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
