'use client'
import { title } from "@/components/primitives";
import { cottage } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function AllCottage() {
  return (
    <>
 
    <section className="block pt-8 md:pt-10">
      <span className={title()}>Наши объекты</span>
    </section>

    <section className="pt-4 md:pt-4 md:pb-24 pb-24">


    <div className="gap-3 grid grid-cols-2 sm:grid-cols-2">
    
      {cottage.map((item) => (

 

                <Card shadow="sm"   isPressable className="py-4 border-transparent backdrop-blur-lg backdrop-saturate-[1.8] bg-white dark:bg-default-400/10">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-large uppercase font-bold">{item.title}</p>
                </CardHeader>
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
                  <p className="m-5 ml-0">{item.description}</p>
                </CardBody>

                  <CardFooter>
                    <p>{item.price}</p>
                  </CardFooter>
                </Card>


      ))}
    </div>
 
    </section>
    
    
   
      
      
      
      </>
  );
}
