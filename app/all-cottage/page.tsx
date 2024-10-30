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
<section className="pt-4 md:pt-4 md:pb-24 pb-24">
   <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
      {cottage.map((item, html) => (
      <Card key={html} shadow="sm" isHoverable className="py-4 border-transparent backdrop-blur-lg backdrop-saturate-[1.8] bg-white dark:bg-default-400/10">
         <NextLink href={item.href}>
            
            <CardBody className="overflow-visible py-2">
               <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  height="300px"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                  />
                 
               <p className="pt-5 text-xl uppercase font-bold">{item.title}</p>
            
               <p className="m-5 mt-3 ml-0">{item.description}</p>
               <div className="flex flex-row flex-wrap gap-1">
                  <Chip
                  size="lg"
                  startContent={
                  <SquareIcon />
                  }
                  variant="faded"
                  color="default"
                  >
                  <b className="pl-1">{item.square}</b> 
                  </Chip>
                  <Chip
                  size="lg"
                  startContent={
                  <GuestsIcon />
                  }
                  variant="faded"
                  color="default"
                  >
                  <span>{item.guests}</span> 
                  </Chip>
                  <div>{item.conditioner}</div>
               </div>
               
            </CardBody>
            <CardFooter>
               <div className="flex flex-row w-full">
                  <div className="basis-4/5 text-left ml-3 text-2xl font-bold">{item.price}<small className="opacity-80 font-normal">{item.day}</small> </div>
                  <div className="basis-1/5 text-right mr-3">
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