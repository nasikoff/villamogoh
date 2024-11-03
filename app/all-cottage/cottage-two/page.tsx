'use client'
import { PriceOne, DescriptionOne, SquareOne, GuestsOne, comfort, PriceTwo, GuestsTwo, SquareTwo } from "@/config/site";
import { title } from "@/components/primitives";
import { Button, Card, Image, CardBody, CardFooter, CardHeader, CircularProgress, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Chip } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BathRoomIcon, BedRoomIcon,GuestsIcon, SquareIcon } from "@/components/icons";
import LongText from "@/components/LongText";
import BookingButton from "@/components/BookingButton";

 
export default function CottageTwoPage() {
return (
<>
<section className="block md:hidden pt-8 md:pt-10">
   <span className={title()}>Cottage Two</span>
</section>
<section key={""} className="flex pt-8 md:pt-10 pb-24">
   <div className="hidden xl:block md:block lg:block sm:hidden flex-auto w-36 inline-block max-w-xl text-left justify-center">
      <span className={title()}>Cottage Two</span>
      <p className="pt-2 opacity-60">Дагестан, с. Могох</p>
      <h2 className="pt-4 pb-8 text-2xl font-bold">{PriceTwo}<small className="opacity-60 font-normal"> / ночь</small></h2>
      
      
      <BookingButton text={"Забронировать"}/>

      <div className="pt-10 flex flex-row flex-wrap justify-left gap-5" >
         <div>
            <SquareIcon height={40}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{SquareTwo}</p>
         </div>
         <div>
            <GuestsIcon height={40}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{GuestsTwo}</p>
         </div>
         <div>
            <BedRoomIcon height={40}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">3 спальни</p>
         </div>
         <div>
            <BathRoomIcon height={40}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">1 ванная</p>
         </div>
      </div>
      <div className="w-full md:w-11/12 text-lg lg:text-lg pt-10 pb-12 font-normal text-default-500 block max-w-full">
         <LongText descriptionType={"two"}/>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-12">
       {comfort.map((item, html) => (
         <div key={html} className="flex gap-2 items-center">{item.svg}{item.title}</div>

       ))}
      </div>
      <div  > 
      </div>
   </div>
   <div className="flex-auto w-full  sm:w-80">
      <Swiper 
      navigation={true} 
      pagination={true} 
      modules={[Pagination, Navigation,]} 
      className="mySwiper01">
      <SwiperSlide>
         <img
            src="/img/2.webp"
            loading="lazy"
            alt="xsx"
            />
         <CircularProgress className="swiper-lazy-preloader absolute top-[50%] left-[50%] border-none" aria-label="Loading..." />
      </SwiperSlide>
      <SwiperSlide>
         <img
            src="/img/10.webp"
            loading="lazy"
            alt="xsx"
            />
         <CircularProgress className="swiper-lazy-preloader absolute top-[50%] left-[50%] border-none" aria-label="Loading..." />
      </SwiperSlide>
      <SwiperSlide>
         <img
            src="/img/1.webp"
            loading="lazy"
            alt="xsx"
            />
         <CircularProgress className="swiper-lazy-preloader absolute top-[50%] left-[50%] border-none" aria-label="Loading..." />
      </SwiperSlide>
      </Swiper>


      <div className="block md:hidden flex flex-col"> 
      
      <div className="flex flex-row pt-8">
         <h2 className="text-xl md:text-2xl font-bold">{PriceTwo}<small className="opacity-60 font-normal"> / ночь</small></h2>
      </div>
      <div className="flex flex-row justify-left gap-3 sm:gap-5 pt-8" >
         <div>
            <SquareIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{SquareTwo}</p>
         </div>
         <div>
            <GuestsIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{GuestsTwo}</p>
         </div>
         <div>
            <BedRoomIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">3 спальни</p>
         </div>
         <div>
            <BathRoomIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">1 ванная</p>
         </div>
      </div>
      <div>
      <div className="w-full md:w-11/12 text-lg lg:text-lg pt-8 pb-12 font-normal text-default-500 block max-w-full">
         <LongText descriptionType={"two"}/>
      </div>
      </div>


      <div className="grid comfort gap-4 pb-12">
      {comfort.map((item, html) => (
         
         <div key={html} className="flex gap-2 items-center">{item.svg}{item.title}</div>

      ))}
      </div>

      <div className="text-center">

      <BookingButton text={"Забронировать"}/>
      </div>







      </div>
   </div>
</section>
</>
);
}