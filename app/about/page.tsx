'use client'
import { Logo } from "@/components/icons";
import LongText from "@/components/LongText";
import { title } from "@/components/primitives";
import { numbercard } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function AboutPage() {
  return (
    <>
    <section className="block pt-8 md:pt-10">
      <span className={title()}>О нас</span>
    </section>
    
    <section key={""} className="pt-8 md:pt-4 md:pb-24 pb-24">
        <div className="flex flex-col md:flex-row">
            
            <div className="basis-1/4">
             <NextLink className="flex justify-center items-center gap-1" href="/">
               <Logo size={250} />
             </NextLink>
            
            </div>
            <div className="basis-3/4">
            <h2 className="linked-heading text-2xl">
               <span>Краткая информация</span>
               
            </h2>
             

             <div className="pt-5">
                  <div className="font-normal text-default-500 text-lg">
                    <LongText descriptionType={"four"} />
                    </div>
             </div>


             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
                 


             {numbercard.map((item) => (



                <Card key={""}>
                  <CardHeader className="flex gap-3">
                  {item.svg}
                    <div className="flex flex-col">
                      <p className="text-md">{item.title}</p>
                    </div>
                  </CardHeader>
                    <CardBody>
                      <p className="text-6xl">{item.numbertext}</p>
                    </CardBody>
                  </Card>
             ))}
                  
             </div>
 
            
            
            </div>

        </div>
    
    </section>
    
   
      
      
      
      </>
  );
}
