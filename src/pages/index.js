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

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <div className="bg-landing bg-contain w-full h-full bg-no-repeat z-50">
        <div className="flex w-full md:w-[50%] text-center md:text-start  pt-[20%] md:pt-[40%] md:pb-[20%] md:py-0 md:px-0 py-20 text-xl md:text-3xl px-10 md:pl-40 flex-col">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-[#FFFFFF]/70 to-[#BCF5B2]">
            Strengthening<br></br>FPO&apos;s
          </h1>
          <br></br>
          <p className="text-[#FFFFFF]/70">
            Strengthening FPO&quot;s, Strengthening Agriculture through
            Economics of aggregation by Uniting the farms and farmers through
            FPO’s
          </p>
          <br></br>
          <div className="text-center md:text-start">
            <button className="w-fit px-10 py-5 text-xl rounded-2xl bg-gradient-to-r from-[#DDFCA999] to-[#D2EFA31A] text-white font-bold">
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse space-x-10 relative pt-[5%] px-8 md:px-0 md:pl-0 pb-[20%] z-20">
        <div className="flex text-center md:text-start md:w-1/3 px-8 md:px-0 md:pl-36 flex-col">
          <h2 className="text-2xl md:text-4xl py-8 font-semibold text-[#093A01] ">
            About <span className="text-[#25CA0A]">Us</span>
          </h2>
          <p className="text-xl">
            An initiative to build FPO&apos;s of India - creating self
            <br></br>
            sustainability and better farm income realisation of <br></br>
            farmers, FPO&apos;s through effective capacity building , FPO{" "}
            Management, collectivisation approach, agronomy , cutlivating
            practices, transfer of technology, improved post harvest management
            and efficient front end market linkages{" "}
          </p>
        </div>
        <div className="md:absolute md:w-3/5 -top-10 right-0 h-full">
          <img className="w-full h-full object-contain" src="smart.png" />
        </div>
      </div>
      <div className="flex flex-col items-center text-[#093A01] py-2 gap-8">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Addressing Challenges of{" "}
          <span className="text-[#25CA0A]">Agriculture</span>
        </h2>
        <img src="challenges.png" className="hidden md:block h-[60%]"></img>
        <img src="android.png" className="md:hidden"></img>
      </div>
      <h2 className="text-2xl md:text-4xl flex gap-2 py-10 justify-center font-semibold">
        Our <span className="text-[#25CA0A]"> services</span>
      </h2>
      <div className="flex flex-col justify-center text-[#093A01] font-semibold gap-8 px-20">
        <div className="flex items-center md:flex-row gap-4 md:gap-20">
          <p>Input</p>
          <div className="grid grid-cols-2 md:flex md:flex-row"></div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center">
              <img src="input.png" className="aspect-square h-[12em]"></img>
              <img src="access.png" className="h-[12em] aspect-square"></img>
            </div>
            <div className="flex flex-row text-center">
              <p className="w-[12em] text-center">InputConnect</p>
              <p className="w-[12em] text-center">Requirement Chart</p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-row flex-wrap gap-4 md:gap-20">
          <p>Output</p>
          <div className="grid grid-cols-2 md:flex md:flex-row">
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
              <p>Sorting &amp; Grading </p>
              <p>Training</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="market.png" className="w-[12em]"></img>
              <p>Customized </p>
              <p>Marketing </p>
              <p>Strategies</p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-row flex-wrap gap-4 md:gap-20">
          <p>Consultancy</p>
          <div className="grid grid-cols-2 md:flex md:flex-row">
            <div className="flex flex-col items-center ">
              <img src="access.png" className="w-[12em]"></img>
              <p>Access to</p>
              <p> kisanSaathiApp</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="tech.png" className="w-[12em]"></img>
              <p>
                Technology<br></br>(Extension<br></br> Services)
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="access.png" className="w-[12em]"></img>
              <p>Service Providers</p>
              <p> Connect</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="access.png" className="w-[12em]"></img>
              <p>FPO Wise</p>
              <p> Commodity Value</p>
              <p> Chain Creation</p>
            </div>
            <div className="items-center justify-center flex flex-col">
              <img src="access.png" className="w-[12em]"></img>
              <p>Strengthening</p>
              <p>FPOs Business </p>
              <p>Verticles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="swot.png" className="w-[12em]"></img>
              <p>FPO SWOT </p>
              <p>Analysis</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl md:text-4xl text-center pb-8 pt-10 font-semibold">
        Insight Corner :{" "}
        <span className="text-[#25CA0A]">Featured articles</span>
      </h2>
      <div className="px-10 md:px-40 relative">
        <button className="swiper-prev absolute left-0 md:left-10 top-1/2 bottom-1/2">
          <img src="/leftbutton.png" className="h-10 md:h-24" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 0,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          speed={1500}
          wrapperClass="py-10"
          className=""
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="md:p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl md:rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Forbes magazine, 2019</p>
                <br></br>
                <p>
                  The &quot;Farmer&quot;s Companion&quot; Bringing Together Food
                  Buyers And Producers In Urban India
                </p>
                <br />
              </div>
              <a
                href="https://www.forbes.com/sites/christinero/2019/05/04/the-farmers-companion-bringing-together-food-buyers-and-producers-in-urban-india/?sh=3408748954bf"
                target="_blank"
              >
                <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                  Read more
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl md:rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Zenger, 2020</p>
                <br></br>
                <p>Technology Helps Indian Farmers Get a Better Deal</p>
                <br />
              </div>
              <a
                href="https://www.zenger.news/2020/11/20/technology-helps-indian-farmers-get-a-better-deal/"
                target="_blank"
              >
                <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                  Read more
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl md:rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">
                  Niti aayog, 74th page, 2021
                </p>
                <br></br>
                <p>Agriculture and Allied Sectors</p>
                <br />
              </div>
              <a
                href="https://aim.gov.in/pdf/Agriculture-and-Allied-Sectors.pdf"
                target="_blank"
              >
                <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                  Read more
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl md:rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">Social alpha, 2022</p>
                <br></br>
                <p>Winners of techtonic innovations</p>
                <br />
              </div>
              <a
                href="https://www.linkedin.com/posts/social-alpha_winners-of-techtonic-innovations-in-agritech-activity-6988121728442937344-GFvi?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                  Read more
                </button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="md:p-20">
            <div className="text-white pl-10 justify-center relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-cover rounded-3xl md:rounded-[100px]">
              <div>
                <p className="font-bold text-3xl">2023</p>
                <br></br>
                <p>Niti aayog, 27th page</p>
                <br />
              </div>
              <a
                href="https://www.niti.gov.in/sites/default/files/2023-02/Compendium-of-75-agri-entrerenuer.pdf"
                target="_blank"
              >
                <button className="px-8 py-4 bg-gray-300/70 backdrop-blur-md rounded-xl text-white font-bold w-fit">
                  Read more
                </button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="swiper-next absolute right-0 md:right-10 top-1/2 bottom-1/2">
          <img src="/leftbutton.png" className="h-10 md:h-24 rotate-180" />
        </button>
      </div>
      <div className="flex flex-col items-center py-12 gap-12">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Partner&apos;s Trust <span className="text-[#25CA0A]">Our pride</span>
        </h2>
        <div className="flex flex-row gap-8 md:block">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
            <img src="atal.png" className="w-[16em]"></img>
            <img src="garuda.jpeg" className="w-[12em]"></img>
            <img src="giz.png" className="w-[16em]"></img>
            <img src="go.png" className="w-[12em]"></img>
            <img src="Cell.jpg" className="w-[12em]"></img>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-28">
            <img src="hyd.jpg" className="w-[12em] h-12"></img>
            <img src="svm.png" className="w-[12em]"></img>
            <img src="alpha.png" className="w-[12em]"></img>
            <img src="vision.png" className="w-[12em]"></img>
            <img src="waycool.jpg" className="w-[8em]"></img>
          </div>
        </div>
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold text-center pb-4">
        Meet <span className="text-[#25CA0A]">Our Team</span>
      </h2>
      <div className="relative px-16 md:px-40">
        <button className="team-prev absolute left-0 md:left-10 top-1/2 bottom-1/2">
          <img src="/arrow-left.png" className="h-8 md:h-24 rotate-180" />
        </button>
        <button className="team-next absolute right-0 md:right-10 top-1/2 bottom-1/2">
          <img src="/arrow-left.png" className="h-8 md:h-24" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
              loop: true,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 100,
              loop: false,
              autoplay: false,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          speed={1500}
          className=""
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          wrapperClass="py-10"
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="max-md:text-center">
            <img src="/person.png" className="pl-8" />
            <h4 className="text-[#093A01] font-medium my-2">Kylan Gentry</h4>
            <p className="text-[#25CA0A] font-medium">CEO & Cofounder</p>
          </SwiperSlide>
          <SwiperSlide className="max-md:text-center">
            <img src="/person.png" className="pl-8" />
            <h4 className="text-[#093A01] font-medium my-2">Kylan Gentry</h4>
            <p className="text-[#25CA0A] font-medium">CEO & Cofounder</p>
          </SwiperSlide>
          <SwiperSlide className="max-md:text-center">
            <img src="/person.png" className="pl-8" />
            <h4 className="text-[#093A01] font-medium my-2">Kylan Gentry</h4>
            <p className="text-[#25CA0A] font-medium">CEO & Cofounder</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:pl-20 px-8 py-5 text-[#093A01]/95">
        <div className="relative py-60">
          <h3 className="font-semibold text-3xl md:text-2xl">Contact Us</h3>
          <form
            action="#"
            onSubmit={(e) => {}}
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
            <div className="text-center md:text-start">
              <button
                type="submit"
                className="bg-green-400 rounded-2xl w-fit px-8 py-3 text-white"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="w-[55%] hidden md:block pt-20 absolute top-0 right-0 h-full">
            <img
              src="/contactus.png"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#052100E5]">
        <div className="flex justify-center md:px-10 px-4 pt-10 pb-8 text-white flex-wrap md:flex-row gap-10 md:gap-48">
          <div className="flex flex-col gap-8 pb-10">
            <p className="font-semibold pb-4">kisan saathi</p>
            <p>
              Lorem ipsum dolor <br></br>sit amet consectetur
            </p>
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
              <a href="https://twitter.com/KisanSaathi" target="_blank">
                <img src="twitter.png" className="w-[1.5em]"></img>
              </a>
              <a
                href="https://www.linkedin.com/company/kisansaathi/"
                target="_blank"
              >
                <img src="linkedin.png" className="w-[1.5em]"></img>
              </a>
              <a
                href="https://instagram.com/kisan.saathi?igshid=NGExMmI2YTkyZg=="
                target="_blank"
              >
                <img src="insta.png" className="w-[1.5em]"></img>
              </a>
              <a href="https://www.facebook.com/KisanSaathi" target="_blank">
                <img src="fb.png" className="w-[1.5em]"></img>
              </a>
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
              <p className="underline">+91 - 8475651452</p>
            </div>
            <div className="flex flex-row gap-8">
              <img src="mail.png" className="w-[1em]"></img>
              <p className="underline">support@kisansaathi.com</p>
            </div>
          </div>
        </div>
        <p className="text-white md:block text-center md:text-start px-8 py-8">
          Copyright 2023 | All Rights Reserved
        </p>
      </div>
    </main>
  );
}
