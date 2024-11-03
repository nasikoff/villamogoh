import { FC } from 'react';
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Card, CardFooter, Image, CardHeader, Chip } from "@nextui-org/react";
import { BroneIcon2 } from "./icons";

interface MapsButtonProps {
  text: string;
}

const MapsButton: FC<MapsButtonProps> = ({ text }) => {
  const items = [
    {
        key: "new",
        label: "Яндекс Карты",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.136 5.103a.75.75 0 0 0-1.272.795l2.044 3.27c.223.357.342.77.342 1.192v1.14a.75.75 0 0 0 1.5 0v-1.14a3.75 3.75 0 0 0-.57-1.987zm5 .795a.75.75 0 1 0-1.272-.795L8.77 6.853a.75.75 0 0 0 1.272.795z" clipRule="evenodd"/></svg>,
        href: "https://clck.ru/3EPEXZ",
    },
    {
        key: "copy",
        label: "2 Гис",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="currentColor" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/></svg>,
        href: "#",
    },
    {
        key: "copy",
        label: "Google Maps",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12"/></svg>,
        href: "#",
    },

    {
        key: "delete",
        label: "Закрыть окно",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>,
        href: "#",
    }
  ];


  return (
    <Dropdown backdrop="opaque">
      <DropdownTrigger>
      <Card className="col-span-12 sm:col-span-4 h-[200px] cursor-pointer">
               <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <h4 className=" font-medium text-black text-large uppercase">Мы здесь</h4>
               </CardHeader>
               <Image
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover hue-rotate-15"
                  src="/img/maps.png"
                  />
               <CardFooter className="justify-between py-1 absolute before:rounded-xl rounded-large bottom-1 ml-1 z-10">
               <Chip size="sm">Построить маршрут</Chip>
               </CardFooter>
            </Card>
         </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={items}>
              {(item) => (
                <DropdownItem
                  key={item.key}
                  color={item.key === "delete" ? "danger" : "default"}
                  className={item.key === "delete" ? "text-danger" : ""}
                  onClick={() => {
                    if (item.key !== "delete") {
                      window.open(item.href, "_blank");
                    }
                  }}
                >
                  <div className='flex gap-2'>{item.svg}{item.label}</div>
                        
                </DropdownItem>
              )}
            </DropdownMenu>
      </Dropdown>
  );
}

export default MapsButton;