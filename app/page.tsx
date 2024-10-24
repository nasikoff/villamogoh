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
import  IconWrapper  from "@/components/IconWrapper";
import { list, priceOne, priceTwo, priceBany, listtwo, contacts } from "@/config/site";
import Iframe from 'react-iframe'
import NextLink from "next/link";
import IconLord from "../components/IconLord";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
    
    
    <IconLord name={""} />
    
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

   <section className="pt-8 md:pt-10">
      <h2 className="linked-heading text-2xl">
         <span>Наши объекты</span>
      </h2>
      <div className="flex w-full flex-col mt-5">
         <Swiper 
            slidesPerView={'auto'}
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper02"
            >
            <SwiperSlide className="max-w-[400px]">
               <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                     <h4 className="text-white font-medium text-xl">Сottege One</h4>
                     <p className="text-tiny text-white/80 uppercase font-bold">Дагестан, с. Могох</p>
                  </CardHeader>
                  <Image
                     removeWrapper
                     alt="Relaxing app background"
                     className="z-0 w-full h-full object-cover"
                     src="/img/1.webp"
                     />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10  ">
                     <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                           {priceOne.map((item) => ( 
                           <h4 key={item.price} className="text-white font-medium text-xl">{item.price}<small className="text-white/80">/час</small></h4>
                           ))}
                        </div>
                     </div>
                     <Button radius="full" size="sm">Подробнее</Button>
                  </CardFooter>
               </Card>
            </SwiperSlide>
            <SwiperSlide className="max-w-[400px]">
               <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                     <h4 className="text-white font-medium text-xl">Сottege Two</h4>
                     <p className="text-tiny text-white/80 uppercase font-bold">Дагестан, с. Могох</p>
                  </CardHeader>
                  <Image
                     removeWrapper
                     alt="Relaxing app background"
                     className="z-0 w-full h-full object-cover"
                     src="/img/2.webp"
                     />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10  ">
                     <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                           {priceTwo.map((item) => ( 
                           <h4 key={item.price} className="text-white font-medium text-xl">{item.price}<small className="text-white/80">/час</small></h4>
                           ))}
                        </div>
                     </div>
                     <Button radius="full" size="sm">Подробнее</Button>
                  </CardFooter>
               </Card>
            </SwiperSlide>
            <SwiperSlide className="max-w-[400px]">
               <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                     <h4 className="text-white font-medium text-xl">Russian Bathhouse</h4>
                     <p className="text-tiny text-white/80 uppercase font-bold">Дагестан, с. Могох</p>
                  </CardHeader>
                  <Image
                     removeWrapper
                     alt="Relaxing app background"
                     className="z-0 w-full h-full object-cover"
                     src="/img/6.jpeg"
                     />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10  ">
                     <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                           {priceBany.map((item) => ( 
                           <h4 key={item.price} className="text-white font-medium text-xl">{item.price}<small className="text-white/80">/час</small></h4>
                           ))}
                        </div>
                     </div>
                     <Button radius="full" size="sm">Подробнее</Button>
                  </CardFooter>
               </Card>
            </SwiperSlide>
         </Swiper>
      </div>
   </section>

   <section className="pt-8 md:pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <div>
            <h2 className="linked-heading text-2xl">
               <span>Почему выбирают нас</span>
            </h2>
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-2 mt-5">
               {list.map((item, index) => (
               <Card shadow="sm" key={index} >
                  <CardBody className="overflow-visible p-0">
                     <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[140px]"
                        src={item.img}
                        />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                     <b>{item.title}</b>
                  </CardFooter>
               </Card>
               ))}
            </div>
         </div>
         <div>
            <h2 className="linked-heading text-2xl">
               <span>Что мы предлагаем</span>
            </h2>

            <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 mt-5">
               {listtwo.map((item, index) => (
               <Card key={index}>
                  <CardHeader className="flex gap-5 p-[15px] pl-5">
                     <IconWrapper className="bg-primary/10 text-primary">
                        {item.svg}
                     </IconWrapper>
                     <div className="flex flex-col">
                        <p className="text-md font-semibold">{item.title}</p>
                     </div>
                  </CardHeader>
               </Card>
               ))}
            </div>
            
         </div>
      </div>
   </section>

   <section className="pt-8 md:pt-10 md:pb-24 pb-24">
      <h2 className="linked-heading text-2xl">
         <span>Наши контакты</span>
      </h2>

      <div className="mt-5 flex flex-col md:flex-row">
          
     
      <div className="flex-auto w-full md:w-64">
      <Iframe url="https://yandex.ru/map-widget/v1/?um=constructor%3A6335f8acd1220368f602308808ddf0c3bfb498b2900e9700412d6e8337c173b6&amp;source=constructor"
        width="100%" 
        id=""
        className="rounded-[20px] h-[300px] md:h-[450px]"
        display="block"
        position="relative"/>
      </div>
     
          
          
      <div className="flex-auto w-full md:w-36 mt-5 pl-0 md:pl-16">
      {contacts.map((item, html) => (
               <Card key={html} className="rounded-none bg-transparent outline-none shadow-none divide-x">
                <NextLink href={item.href}>
                  <CardHeader className="flex gap-5 p-[15px] pl-5">
                     <IconWrapper className="bg-default/10 text-secundary">
                        {item.svg}
                     </IconWrapper>
                     <div className="flex flex-col">
                        <p className="text-md font-semibold">{item.title}</p>
                     </div>
                  </CardHeader>
                  </NextLink>
               </Card>
               ))}
      </div>
          
       
        
      </div>
   </section>
      
      
      
      </>
  );
}
