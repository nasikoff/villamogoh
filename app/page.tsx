'use client'
import { PriceOne, PriceRB, PriceTwo, siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { Button, Card, Image, CardBody, CardFooter, CardHeader, CircularProgress, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import  IconWrapper  from "@/components/IconWrapper";
import { list, listtwo, contacts } from "@/config/site";
import NextLink from "next/link";
import Swipe from "../components/animeicon/Swipe";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import YandexMaps from "@/components/YandexMaps";
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
         <p className="w-full md:w-11/12 my-2 text-lg lg:text-lg pt-6 pb-4 font-normal text-default-500 block max-w-full">VILLAMOGOH - идеальное место для отдыха в окружении природы. Наши уютные коттеджи с видом на величественные горы подарят вам незабываемые впечатления. <br/> Забронируйте свой отдых уже сегодня!</p>
         <br />
         <Dropdown backdrop="blur">
            <DropdownTrigger>
               <Button color="primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M17.616 16.385V18.5q0 .154.115.27q.115.114.269.114t.27-.115q.114-.115.114-.269v-2.116H20.5q.154 0 .27-.115q.114-.115.114-.269t-.115-.27q-.115-.114-.269-.114h-2.116V13.5q0-.154-.115-.27q-.115-.114-.269-.114t-.27.115q-.114.115-.114.269v2.116H15.5q-.154 0-.27.115q-.114.115-.114.269t.115.27q.115.114.269.114zM18 20q-1.671 0-2.835-1.164Q14 17.67 14 16t1.165-2.835T18 12t2.836 1.165T22 16t-1.164 2.836T18 20M5 16.384V8.308q0-.384.172-.727q.171-.344.474-.566l5.385-4.077q.423-.323.966-.323t.972.323l5.385 4.078q.303.222.474.566q.172.345.172.73v.425q0 .223-.17.385t-.413.132q-1.425-.108-2.812.414q-1.388.523-2.401 1.536q-1.177 1.177-1.665 2.727t-.198 3.144q.067.373-.154.649t-.57.276H6.616q-.667 0-1.141-.475T5 16.386"></path></svg>
                  Забронировать
               </Button>
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
                  <h4 className=" font-medium text-white text-large uppercase">Russian Bathhouse</h4>
               </CardHeader>
               <Image
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/img/11.webp"
                  />
                 <CardFooter className="justify-between py-1 absolute before:rounded-xl rounded-large bottom-1 ml-1 z-10">
                  <Button className="text-tiny text-white bg-white/20" variant="flat" color="default" radius="lg" size="sm">
                  Подробнее
                  </Button>
               </CardFooter>
            </Card>
         </div>
         <div >
            <Card className="col-span-12 sm:col-span-4 h-[200px]">
               <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <h4 className=" font-medium text-black text-large uppercase">Мы здесь</h4>
               </CardHeader>
               <Image
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover hue-rotate-60"
                  src="/img/maps.png"
                  />
               <CardFooter className="justify-between py-1 absolute before:rounded-xl rounded-large bottom-1 ml-1 z-10">
                  <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  Построить маршрут
                  </Button>
               </CardFooter>
            </Card>
         </div>
      </div>
      </div>
   </section>
   <section className="pt-8 md:pt-10">
      
   <div className="flex flex-row">
      <div className="basis-4/5">
            <h2 className="linked-heading text-2xl">
               <span>Наши объекты</span>
               
            </h2>
      </div>
  <div className="basis-1/5 xl:hidden grid justify-end ">
         <Swipe name={""} />
  </div>
   
</div>
      
     
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
                           <h4 key={""} className="text-white font-bold text-xl">{PriceOne}<small className="text-white/80 font-normal"> / ночь</small></h4>
                        </div>
                     </div>
                     <Button  radius="full" size="sm"><NextLink href="/all-cottage/cottage-one" >Подробнее</NextLink></Button>
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
                           <h4 key={""} className="text-white font-bold text-xl">{PriceTwo}<small className="text-white/80 font-normal"> / ночь</small></h4>
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
                           <h4 key={""} className="text-white font-bold text-xl">{PriceRB}<small className="text-white/80 font-normal"> / час</small></h4>
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
          
     
      <YandexMaps/>          
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
