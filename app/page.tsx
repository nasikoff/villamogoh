'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button, Card, Image, CardBody, CardFooter, CardHeader, CircularProgress, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
    
    
    
    
    <section className="block md:hidden pt-8 md:pt-10">
      <span className={title()}>Добро пожаловать в&nbsp;</span>
      <br />
      <span className={title({ color: "blue" })} style={{ fontFamily: "Audiowide", }}>VillaMogoh&nbsp;</span>
    </section>
    
    <section className="flex pt-4 md:pt-10">
      <div className="hidden xl:block md:block lg:block sm:hidden flex-auto w-36 inline-block max-w-xl text-left justify-center">
         <span className={title()}>Добро пожаловать в&nbsp;</span>
         <br />
         <span className={title({ color: "blue" })} style={{fontFamily: "Audiowide", }} >VillaMogoh&nbsp;</span>
         <br />
         <p className="w-full md:w-11/12 my-2 text-lg lg:text-xl pt-6 pb-4 font-normal text-default-500 block max-w-full">VILLAMOGOH - идеальное место для отдыха в окружении природы. Наши уютные коттеджи с видом на величественные горы подарят вам незабываемые впечатления. <br/> Забронируйте свой отдых уже сегодня!</p>
         <br />
         <Dropdown backdrop="blur">
            <DropdownTrigger>
               <Button color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M17.5 16.5v2q0 .2.15.35T18 19t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 16t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 13t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 16t.15.35t.35.15zM18 21q-2.075 0-3.537-1.463T13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21M4 17V8q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 1.5t.625.1t.575.3l6.05 4.55q.175.125.263.325t.087.425q0 .425-.288.713T18.6 8.2q-.175 0-.325-.05T18 8l-6-4.5L6 8v9h4q.425 0 .713.288T11 18t-.288.713T10 19H6q-.825 0-1.412-.587T4 17m8-6.75"/>
                  </svg>
                  Забронировать
               </Button>
            </DropdownTrigger>
            <DropdownMenu  aria-label="Static Actions">
               <DropdownSection title="Выберите объекты" showDivider>
                  <DropdownItem key="new" href="#">Сottege One</DropdownItem>
                  <DropdownItem key="copy">Сottege Two</DropdownItem>
                  <DropdownItem key="copy">Русская баня</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                     Закрыть окно
                  </DropdownItem>
               </DropdownSection>
            </DropdownMenu>
         </Dropdown>
      </div>
      <div className="flex-auto w-full  sm:w-80">
         <Swiper 
         navigation={true} 
         pagination={true} 
         modules={[Pagination, Navigation,]} 
         className="mySwiper01">
         <SwiperSlide>
            <img
               src="/img/4.webp"
               loading="lazy"
               alt="xsx"
               />
            <CircularProgress className="swiper-lazy-preloader absolute top-[50%] left-[50%] border-none" aria-label="Loading..." />
         </SwiperSlide>
         <SwiperSlide>
            <img
               src="/img/5.webp"
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
               src="/img/3.webp"
               loading="lazy"
               alt="xsx"
               />
            <CircularProgress className="swiper-lazy-preloader absolute top-[50%] left-[50%] border-none" aria-label="Loading..." />
         </SwiperSlide>
         </Swiper>
         <Card className="mt-5 block md:hidden ">
            <CardBody>
               <p><b>VILLAMOGOH</b> - идеальное место для отдыха в окружении природы. Наши уютные коттеджи с видом на величественные горы подарят вам незабываемые впечатления. <br/> Забронируйте свой отдых уже сегодня!</p>
            </CardBody>
         </Card>
         <Card  className="mt-5 rounded-3xl border-solid border-2 border-default bg-[#000] text-white">
            <CardBody >
               <div className="flex flex-row" >
                  <div className="basis-1/5  text-xl sm:text-3xl text-left font-bold pl-5">190+</div>
                  <div className="basis-4/5 text-xl sm:text-3xl text-right font-extralight pr-5" style={{ fontFamily: "Jost",  }}>Довольных гостей
               </div>
              </div>
            </CardBody>
          </Card>
      <div className="mt-5 grid grid-cols-2 gap-4">
         <div>
            <Card className="col-span-12 sm:col-span-4 h-[200px]">
               <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold"></p>
                  <h4 className=" font-medium text-large uppercase">Русская баня</h4>
               </CardHeader>
               <Image
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/img/s.png"
                  />
               <CardFooter className="justify-between py-1 absolute before:rounded-xl rounded-large bottom-1 ml-1 z-10">
                  <Button className="text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  Подробнее
                  </Button>
               </CardFooter>
            </Card>
         </div>
         <div >
            <Card className="col-span-12 sm:col-span-4 h-[200px]">
               <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <h4 className=" font-medium text-large uppercase">Мы здесь</h4>
               </CardHeader>
               <Image
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/img/maps.png"
                  />
               <CardFooter className="justify-between py-1 absolute before:rounded-xl rounded-large bottom-1 ml-1 z-10">
                  <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  Построить маршрут
                  </Button>
               </CardFooter>
            </Card>
         </div>
      </div>
      </div>
   </section>
      
      
      
      </>
  );
}
