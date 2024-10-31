'use client'
import { GuestsIcon, SquareIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { cottage } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader, Chip, Image, Link } from "@nextui-org/react";
import NextLink from "next/link";
export default function AllCottage() {
return (
<>
<section className="block pt-8 md:pt-10">
   <span className={title()}>Наши объекты</span>
</section>
<section className="pt-8 md:pt-4 md:pb-24 pb-24">
   <div className="gap-10 sm:gap-5  grid grid-cols-1 sm:grid-cols-2">
      {cottage.map((item, html) => (
      <Card key={html} shadow="sm"   className="rounded-3xl py-0 border-transparent backdrop-blur-lg backdrop-saturate-[1.8] bg-white dark:bg-black sm:dark:bg-default-400/10 shadow-none sm:shadow-small">
         <NextLink href={item.href}>
            <CardBody className="overflow-visible py-2 p-0">
               <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  height="300px"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                  />
               <div className="p-0 sm:p-5  sm:pb-0 pb-0">
                  <p className="pt-8 sm:pt-0 text-2xl font-bold">{item.title}</p>
                  <div className="pt-8  flex flex-row flex-wrap gap-1">
                     <Chip
                     size="lg"
                     variant="light"
                     startContent={
                     <SquareIcon height={20} />
                     }
                     color="default"
                     >
                     <b className="pl-1">{item.square}</b> 
                     </Chip>
                     <Chip
                     size="lg"
                     startContent={
                     <GuestsIcon height={20}/>
                     }
                     variant="light"
                     color="default"
                     >
                     <span>{item.guests}</span> 
                     </Chip>
                     <div>{item.conditioner}</div>
                  </div>
                  <p className="m-0 pt-8 pr-3 sm:pr-0 ml-0 font-normal text-default-500 text-lg">{item.descriptionlite}</p>
               </div>
            </CardBody>
            <CardFooter className="py-5 px-0 sm:px-5 pt-8">
               <div className="flex flex-row w-full">
                  <div className="basis-4/5 text-left text-xl md:text-2xl font-bold">{item.price}<small className="opacity-80 font-normal">{item.day}</small> </div>
                  <div className="basis-1/5 text-right">
                     <span className="hover:underline  hover:underline-offset-2">
                        <Chip size="md">Подробнее</Chip>
                     </span>
                  </div>
               </div>
            </CardFooter>
         </NextLink>
      </Card>
      ))}
   </div>
</section>
</>
);
}