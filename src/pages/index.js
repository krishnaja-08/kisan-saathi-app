import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >

      <section className="bg-[url('/home-bg.png')] w-full h-full">

      </section>
      <div className='bg-landing bg-contain w-full h-full bg-no-repeat'>
        <Navbar />
        <div className='flex py-[25%] px-80 flex-col'>
          <h1>Empowering Indian Agriculture for a thriving tomorrow</h1>
          <p>The establishment of FPO's, promoting self-sustainability, enhanced farm income and effective agricultural practices with strengthened mark linkages</p>
          <button>See more</button></div>
      </div>
      <div className='flex flex-row items-center'><div className='flex w-1/3 pl-36 flex-col'><h2 className='text-4xl py-8 font-semibold text-[#093A01] '>Why <span className='text-[#25CA0A]'>Kisan Saathi?</span></h2>
        <p className='text-xl'>An initiative to build FPO's of India - creating self<br></br>sustainability and better farm income realisation of <br></br>farmers, FPO's through effective capacity building , FPO <br></br>Management, collectivisation approach, agronomy ,<br></br> cutlivating practices, transfer of technology, improved post <br></br>harvest management and efficient front end market <br></br>linkages </p></div>
        <img className='w-2/3' src='smart.jpeg'></img></div>
      <div className='flex flex-col items-center px-12 text-[#093A01] py-12 gap-8'>
        <h2 className='text-4xl font-semibold'>Addressing Challenges of <span className='text-[#25CA0A]'>Agriculture</span></h2>
        <div className='flex flex-row w-full justify-between text-[#093A01] font-semibold  px-20'>
          <div className='flex flex-col items-center justify-center'><img src="frame.png" className='w-[20em] pb-8'></img><p>FPO Lacks Awareness & </p><p>Approach</p></div>
          <div className='flex flex-col items-center justify-center'><img src="frame1.png" className='w-[20em] pb-8'></img><p>Sustainability of FPO Business</p><p> Verticals Finance</p></div>
        </div>
        <div className='flex flex-row justify-center text-[#093A01] font-semibold gap-40'>
          <div className='flex flex-col items-center justify-center'><img src="frame2.png" className='w-[20em] pb-8'></img><p>Networking FPO Management Output</p><p> Marketing ( Market Linkage, Post</p><p> Harvest Mngt., Value addition)</p></div>
          <div className='flex flex-col items-center justify-center'><img src="frame3.png" className='w-[20em] pb-8'></img><p>Input Business </p><p>( GPA, Input Marketing )</p></div>
        </div>
      </div>
      <div className='flex flex-col items-center text-[#093A01] font-semibold gap-8'><h2 className='text-4xl font-semibold'>Our <span className='text-[#25CA0A]'>services</span></h2>
        <div className='flex flex-row gap-20'>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
        </div>
        <div className='flex flex-row gap-20'><div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div></div>
        <div className='flex flex-row gap-20'><div className='items-center justify-center flex flex-col'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
          <div className='flex flex-col items-center justify-center'><img src="access.png" className='w-[12em]'></img><p>Access to kisanSaathiApp</p></div>
        </div>

      </div>
      <h2 className='flex text-center justify-center'>Insights Corner: Featured Articles</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='px-48 py-4'><div className='text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-contain'><div><p>Lorem ipsum dolor sit amet consectetur</p><br></br><p>Lorem ipsum dolor sit amet consectetur</p></div>
          <button className='px-4 py-4 bg-grey text-left rounded-md'>Read more</button></div></SwiperSlide>
        <SwiperSlide className='px-48 py-4'><div className='text-white relative aspect-square flex flex-col bg-slide1 px-4 py-4 bg-no-repeat bg-contain'><div><p>Lorem ipsum dolor sit amet consectetur</p><br></br><p>Lorem ipsum dolor sit amet consectetur</p></div>
          <button className='px-4 py-4 bg-grey text-left rounded-md'>Read more</button></div></SwiperSlide>



        ...
      </Swiper>
      <div className='flex flex-col items-center py-12 gap-12'>
      <h2 className='text-4xl font-semibold'>Partner's trust <span className='text-[#25CA0A]'>Our pride</span></h2>
      <div className='flex flex-row justify-center items-center gap-20'>
        <img src='logo1.png' className='w-[16em]'></img>
        <img src='logo2.png' className='w-[12em]'></img>
        <img src='logo3.png' className='w-[12em]'></img>
        <img src='logo4.png' className='w-[12em]'></img>
      </div>
      </div>
    </main>
  )
}
