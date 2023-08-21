import { Poppins } from "next/font/google";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import FadeIn from "@/components/FadeIn";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Kisan Saathi</title>
      </Head>
      <main className={`${poppins.className}`}>
        <FadeIn>
          <div
            id="home"
            className="max-md:bg-mobileBG md:bg-landing bg-cover md:bg-bottom w-full h-screen bg-no-repeat z-50"
          >
            <div className="flex w-full md:w-[50%] text-center md:text-start h-full pt-[40%] md:pt-[16%] md:pb-[20%] md:py-0 md:px-0 py-10 text-xl md:text-3xl px-10 md:pl-40 flex-col">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r text-4xl font-semibold from-[#FFFFFF] to-[#BCF5B2]">
                Strengthening <span className="text-[#BCF5B2]">FPO&apos;s</span>
              </h1>
              <br></br>
              <p className="text-[#FFFFFF] text-2xl md:block">
                Strengthening FPO&quot;s, Strengthening Agriculture through
                Economics of aggregation by Uniting the farms and farmers
                through FPO’s
              </p>
              <br></br>
              <div className="text-center md:text-start">
                <button className="w-fit px-10 py-5 text-xl rounded-2xl bg-gradient-to-r from-[#DDFCA999] to-[#D2EFA31A] text-white font-bold">
                  See more
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div
            id="about"
            className="flex flex-col-reverse space-x-10 relative pt-[5%] px-8 md:px-0 md:pl-0 pb-[20%] z-20"
          >
            <div className="flex text-center md:text-start md:w-1/3 px-8 md:px-0 md:pl-36 flex-col">
              <h2 className="text-2xl md:text-4xl py-8 font-semibold text-[#093A01] ">
                About <span className="text-[#25CA0A]">Us</span>
              </h2>
              <p className="text-xl text-justify">
                An initiative to build FPO&apos;s of India - creating self
                sustainability and better farm income realisation of farmers,
                FPO&apos;s through effective capacity building , FPO Management,
                collectivisation approach, agronomy , cutlivating practices,
                transfer of technology, improved post harvest management and
                efficient front end market linkages{" "}
              </p>
            </div>
            <div className="md:absolute md:w-3/5 -top-10 md:top-0 right-0 h-full">
              <img className="w-full h-full object-contain" src="smart.webp" />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center text-[#093A01] py-4 gap-8">
            <h2 className="text-2xl md:text-4xl pt-10 max-md:text-center font-semibold">
              Addressing Challenges of{" "}
              <span className="text-[#25CA0A]">Agriculture</span>
            </h2>
            <img
              src="challenges.webp"
              className="hidden md:block h-[60%]"
            ></img>
            <img src="android.webp" className="md:hidden"></img>
          </div>
        </FadeIn>
        <FadeIn>
          <h2
            id="services"
            className="text-2xl md:text-4xl flex gap-2 py-10 justify-center font-semibold capitalize"
          >
            Our <span className="text-[#25CA0A]"> services</span>
          </h2>
          <div className="flex flex-col justify-center text-[#093A01] font-semibold gap-8 px-4 md:px-20">
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-20">
              <p className="pb-2 border-b-4 border-b-green-500">Input</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-16 md:flex md:flex-row">
                <div className="flex flex-col">
                  <img
                    src="ic.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="text-center mt-4">InputConnect</p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="cas.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="text-center mt-4">
                    Credit Access
                    <br /> Support
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-16">
              <p className="pb-2 border-b-4 border-b-green-500">Output</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-16 md:flex md:flex-row">
                <div className="flex flex-col ">
                  <img
                    src="ml.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="text-center mt-4 w-28 md:w-32">
                    Market Linkage
                  </p>
                </div>
                <div className="flex flex-col ">
                  <img
                    src="whi.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="mt-4 text-center w-28 md:w-32">
                    Weekly Harvsting Index{" "}
                  </p>
                </div>
                <div className="flex flex-col ">
                  <img
                    src="sgt.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="mt-4 text-center w-28 md:w-32">
                    Sorting &amp; Grading Training
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="cms.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="mt-4 text-center w-28 md:w-32">
                    Customized Marketing Strategies
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-4">
              <p className="pb-2 border-b-4 border-b-green-500">Consultancy</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-16 md:flex md:flex-row">
                <div className="flex flex-col">
                  <img
                    src="ksa.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="mt-4 text-center w-28 md:w-32">
                    Access to kisanSaathiApp
                  </p>
                </div>
                <div className="flex flex-col ">
                  <img
                    src="tes.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="w-28 md:w-32 text-center mt-4">
                    Technology (Extension Services)
                  </p>
                </div>
                <div className="flex flex-col ">
                  <img
                    src="ksa.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="w-28 md:w-32 text-center mt-4">
                    Service Providers Connect
                  </p>
                </div>
                <div className="flex flex-col ">
                  <img
                    src="ksa.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="mt-4 text-center w-28 md:w-32">
                    FPO Wise Commodity Value Chain Creation
                  </p>
                </div>
                <div className=" flex flex-col">
                  <img
                    src="ksa.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="mt-4 text-center w-28 md:w-32">
                    Strengthening FPOs Business Verticles
                  </p>
                </div>
                <div className="flex flex-col ">
                  <img
                    src="swot.svg"
                    className="shadow-2xl rounded-full w-28 md:w-32"
                  ></img>
                  <p className="w-28 md:w-32 text-center mt-4">
                    FPO SWOT Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <h2
            id="featured"
            className="text-2xl md:text-4xl px-4 text-center pb-4 pt-24 font-semibold"
          >
            Insight Corner :{" "}
            <span className="text-[#25CA0A]">Featured articles</span>
          </h2>
          <div className="px-10 md:px-40 relative">
            <button className="swiper-prev absolute left-0 md:left-10 top-1/2 bottom-1/2">
              <img src="/leftbutton.webp" className="h-10 md:h-24" />
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
                      The &quot;Farmer&quot;s Companion&quot; Bringing Together
                      Food Buyers And Producers In Urban India
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
              <img src="/leftbutton.webp" className="h-10 md:h-24 rotate-180" />
            </button>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center py-12 md:pt-20 gap-12">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Partner&apos;s Trust{" "}
              <span className="text-[#25CA0A]">Our pride</span>
            </h2>
            <div className="hidden flex-row gap-8 px-10 md:block">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
                <img src="atal.webp" className="w-[16em]"></img>
                <img src="garuda.webp" className="w-[12em]"></img>
                <img src="giz.webp" className="w-[16em]"></img>
                <img src="go.webp" className="w-[12em]"></img>
                <img src="Cell.webp" className="w-[12em]"></img>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-28">
                <img src="hyd.webp" className="w-[12em] h-12"></img>
                <img src="svm.webp" className="w-[12em]"></img>
                <img src="alpha.webp" className="w-[12em]"></img>
                <img src="vision.webp" className="w-[12em]"></img>
                <img src="waycool.webp" className="w-[8em]"></img>
              </div>
            </div>
            <div className="md:hidden">
              <Marquee className="gap-10 flex justify-center items-center">
                <img src="atal.webp" className="w-[20em]"></img>
                <img src="garuda.webp" className="w-[16em]"></img>
                <img src="giz.webp" className="w-[20em]"></img>
                <img src="go.webp" className="w-[16em]"></img>
                <img src="Cell.webp" className="w-[16em]"></img>
                <img src="hyd.webp" className="w-[16em] h-12"></img>
                <img src="svm.webp" className="w-[16em]"></img>
                <img src="alpha.webp" className="w-[16em]"></img>
                <img src="vision.webp" className="w-[16em]"></img>
                <img src="waycool.webp" className="w-[12em] mr-12"></img>
              </Marquee>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <h2
            id="people"
            className="text-2xl pt-10 md:text-4xl font-semibold text-center pb-4"
          >
            Meet <span className="text-[#25CA0A]">Our Team</span>
          </h2>
          <div className="relative px-16 md:px-40">
            <button className="team-prev absolute left-0 md:left-10 top-1/2 bottom-1/2">
              <img src="/arrow-left.webp" className="h-8 md:h-24 rotate-180" />
            </button>
            <button className="team-next absolute right-0 md:right-10 top-1/2 bottom-1/2">
              <img src="/arrow-left.webp" className="h-8 md:h-24" />
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
                <img src="/ananthcofounder.webp" className="pl-8 md:h-96" />
                <h4 className="text-[#093A01] font-medium my-2">Prem Rathod</h4>
                <p className="text-[#25CA0A] font-medium">Founder</p>
              </SwiperSlide>
              <SwiperSlide className="max-md:text-center">
                <img src="/premrathodfounder.webp" className="pl-8 md:h-96" />
                <h4 className="text-[#093A01] font-medium my-2">Ananth</h4>
                <p className="text-[#25CA0A] font-medium">Cofounder</p>
              </SwiperSlide>
              <SwiperSlide className="max-md:text-center">
                <img
                  src="/satishchiefstrategicofficer.webp"
                  className="pl-8 md:h-96"
                />
                <h4 className="text-[#093A01] font-medium my-2">Satish</h4>
                <p className="text-[#25CA0A] font-medium">
                  Chief Strategic Officer
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="md:pl-20 px-8 py-5 text-[#093A01]/95">
            <div id="contactus" className="relative py-10 md:py-60">
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
                  src="/contactus.webp"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </FadeIn>
        <div className="bg-[#052100E5]">
          <div className="flex justify-center md:px-10 px-8 pt-10 pb-8 flex-col text-white md:flex-row gap-10 md:gap-48">
            <div className="max-md:w-full flex flex-row gap-10 md:gap-48">
              <div className="flex flex-col gap-8 pb-10 max-md:w-1/2">
                <p className="font-semibold pb-4">kisan saathi</p>
                <p>
                  Lorem ipsum dolor <br></br>sit amet consectetur
                </p>
              </div>
              <div className="flex flex-col gap-8 max-md:w-1/2">
                <p className="font-semibold">Our Company</p>
                <p>About us</p>
                <p>Contact</p>
                <p>Join our team</p>
                <p>Privacy policy</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 max-md:w-full">
              <div className="font-semibold max-md:text-center">
                Get in touch
              </div>
              <div className="flex flex-row gap-12 pb-2 items-center max-md:justify-center">
                <a href="https://twitter.com/KisanSaathi" target="_blank">
                  <img src="twitter.webp" className="w-[1.5em]"></img>
                </a>
                <a
                  href="https://www.linkedin.com/company/kisansaathi/"
                  target="_blank"
                >
                  <img src="linkedin.webp" className="w-[1.5em]"></img>
                </a>
                <a
                  href="https://instagram.com/kisan.saathi?igshid=NGExMmI2YTkyZg=="
                  target="_blank"
                >
                  <img src="insta.webp" className="w-[1.5em]"></img>
                </a>
                <a href="https://www.facebook.com/KisanSaathi" target="_blank">
                  <img src="fb.webp" className="w-[1.5em]"></img>
                </a>
              </div>
              <div className="grid place-items-center">
                <div className="space-y-8">
                  <div className="flex flex-row max-md:justify-start items-center gap-8 w-full">
                    <img src="time.webp" className="w-[1em]"></img>
                    <div className="flex flex-col gap-4">
                      <p>Weekdays 10 am - 6 pm</p>
                      <p>Weekends 10 am - 3pm</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-8">
                    <img src="phone.webp" className="w-[1em]"></img>
                    <p className="underline">+91 - 8475651452</p>
                  </div>
                  <div className="flex flex-row gap-8">
                    <img src="mail.webp" className="w-[1em]"></img>
                    <p className="underline">support@kisansaathi.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white md:block text-center md:text-start px-8 py-8">
            Copyright 2023 | All Rights Reserved
          </p>
        </div>
      </main>
    </>
  );
}
