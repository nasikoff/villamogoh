'use client'
import { PriceOne, DescriptionOne, SquareOne, GuestsOne } from "@/config/site";
import { title } from "@/components/primitives";
import { Button, Card, Image, CardBody, CardFooter, CardHeader, CircularProgress, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Chip } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BathRoomIcon, BedRoomIcon, BroneIcon, GuestsIcon, SquareIcon } from "@/components/icons";
import LongText from "@/components/LongText";
export default function CottageOnePage() {
return (
<>
<section className="block md:hidden pt-8 md:pt-10">
   <span className={title()}>Cottage One</span>
</section>
<section key={""} className="flex pt-4 md:pt-10 pb-24">
   <div className="hidden xl:block md:block lg:block sm:hidden flex-auto w-36 inline-block max-w-xl text-left justify-center">
      <span className={title()}>Cottage One</span>
      <p className="pt-2 opacity-60">Дагестан, с. Могох</p>
      <h2 className="pt-4 text-2xl font-bold">{PriceOne}<small className="opacity-60 font-normal"> / ночь</small></h2>
      <Dropdown backdrop="blur">
         <DropdownTrigger>
            <div className="pt-10">
               <Button color="primary" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M17.616 16.385V18.5q0 .154.115.27q.115.114.269.114t.27-.115q.114-.115.114-.269v-2.116H20.5q.154 0 .27-.115q.114-.115.114-.269t-.115-.27q-.115-.114-.269-.114h-2.116V13.5q0-.154-.115-.27q-.115-.114-.269-.114t-.27.115q-.114.115-.114.269v2.116H15.5q-.154 0-.27.115q-.114.115-.114.269t.115.27q.115.114.269.114zM18 20q-1.671 0-2.835-1.164Q14 17.67 14 16t1.165-2.835T18 12t2.836 1.165T22 16t-1.164 2.836T18 20M5 16.384V8.308q0-.384.172-.727q.171-.344.474-.566l5.385-4.077q.423-.323.966-.323t.972.323l5.385 4.078q.303.222.474.566q.172.345.172.73v.425q0 .223-.17.385t-.413.132q-1.425-.108-2.812.414q-1.388.523-2.401 1.536q-1.177 1.177-1.665 2.727t-.198 3.144q.067.373-.154.649t-.57.276H6.616q-.667 0-1.141-.475T5 16.386"></path>
                  </svg>
                  Забронировать
               </Button>
            </div>
         </DropdownTrigger>
         <DropdownMenu  aria-label="Static Actions">
            <DropdownSection title="Выберите объекты" showDivider>
               <DropdownItem key="new" href="#">Сottege One</DropdownItem>
               <DropdownItem key="copy">Сottege Two</DropdownItem>
               <DropdownItem key="copy">Russian Bathhouse</DropdownItem>
               <DropdownItem key="delete" className="text-danger" color="danger">
                  Закрыть окно
               </DropdownItem>
            </DropdownSection>
         </DropdownMenu>
      </Dropdown>
      <div className="pt-10   flex flex-row justify-left gap-5" >
         <div>
            <SquareIcon height={40}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{SquareOne}</p>
         </div>
         <div>
            <GuestsIcon height={40}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{GuestsOne} гостей</p>
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
         <LongText descriptionType={"one"}/>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-12">
         <div>Парковка</div>
         <div>TV</div>
         <div>Wi-Fi</div>
         <div>4х Кондиционеры</div>
         <div>Развлечения</div>
         <div>Микроволновка</div>
         <div>Холодильник</div>
         <div>Кофемашина</div>
         <div>Индукционная плита</div>
         <div>Постельное бельё</div>
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
            src="/img/9.webp"
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
         <div className="basis-1/2">
            <h2 className="text-xl md:text-2xl font-bold">{PriceOne}<small className="opacity-60 font-normal"> / ночь</small></h2>
         </div>
         <div className="basis-1/2 text-right">
             <Chip
                  startContent={<BroneIcon size={24} />}
             
                  color="primary"
                  size="lg"
                   >
                Забронировать
            </Chip>
         </div>
   
      </div>
      <div className="flex flex-row justify-left gap-3 sm:gap-5 pt-8" >
         <div>
            <SquareIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{SquareOne}</p>
         </div>
         <div>
            <GuestsIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">{GuestsOne} гостей</p>
         </div>
         <div>
            <BedRoomIcon height={28}/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">3 спальни</p>
         </div>
         <div>
            <BathRoomIcon height={28   }/>
            <p className="mt-2 font-medium group-data-[selected=true]:text-warning">1 ванная</p>
         </div>
      </div>
      <div>
      <div className="w-full md:w-11/12 text-lg lg:text-lg pt-8 pb-12 font-normal text-default-500 block max-w-full">
         <LongText descriptionType={"one"}/>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-12">
         <div>Парковка</div>
         <div>TV</div>
         <div>Wi-Fi</div>
         <div>4х Кондиционеры</div>
         <div>Развлечения</div>
         <div>Микроволновка</div>
         <div>Холодильник</div>
         <div>Кофемашина</div>
         <div>Индукционная плита</div>
         <div>Постельное бельё</div>
      </div>
      </div>
   </div>
</section>
</>
);
}