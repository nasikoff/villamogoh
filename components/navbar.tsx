"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Logo,
} from "@/components/icons";
import { usePathname } from "next/navigation";
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";

export const Navbar = () => {
  const pathUrl = usePathname();
 

  return (

    <>
    <NextUINavbar maxWidth="xl" className="fixed top-0">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>


     


      

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>
 
    </NextUINavbar>





    <NextUINavbar maxWidth="xl" className="fixed bottom-5 top-[auto] bg-transparent" style={{backdropFilter:"none"}}>

<NavbarContent  justify="center" className="w-full bg-transparent backdrop-opacity-10" style={{backdropFilter:"none"}}>
      
<div  className="w-auto items-center justify-evenly flex gap-4 justify-start px-4 py-4    outline-none bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none">
{siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} className="flex justify-center w-[60px]" style={{backdropFilter:"none"}}>
              <NextLink
                className={pathUrl == item.href
                  ? "text-[#006fee] content-navi"
                  : "opacity-70"} 
                color="foreground"
                href={item.href}

              >
                <div className="">{item.svg}</div> 
              </NextLink>




              
            </NavbarItem>
          ))}
          <Dropdown backdrop="blur">
                <DropdownTrigger>
                <Button color="primary"  className="w-[60px] min-w-0  " >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M17.616 16.385V18.5q0 .154.115.27q.115.114.269.114t.27-.115q.114-.115.114-.269v-2.116H20.5q.154 0 .27-.115q.114-.115.114-.269t-.115-.27q-.115-.114-.269-.114h-2.116V13.5q0-.154-.115-.27q-.115-.114-.269-.114t-.27.115q-.114.115-.114.269v2.116H15.5q-.154 0-.27.115q-.114.115-.114.269t.115.27q.115.114.269.114zM18 20q-1.671 0-2.835-1.164Q14 17.67 14 16t1.165-2.835T18 12t2.836 1.165T22 16t-1.164 2.836T18 20M5 16.384V8.308q0-.384.172-.727q.171-.344.474-.566l5.385-4.077q.423-.323.966-.323t.972.323l5.385 4.078q.303.222.474.566q.172.345.172.73v.425q0 .223-.17.385t-.413.132q-1.425-.108-2.812.414q-1.388.523-2.401 1.536q-1.177 1.177-1.665 2.727t-.198 3.144q.067.373-.154.649t-.57.276H6.616q-.667 0-1.141-.475T5 16.386"/></svg>
                </Button> 
              </DropdownTrigger>
              <DropdownMenu  aria-label="Static Actions">
              <DropdownSection title="Выберите объекты" showDivider> 
                <DropdownItem key="new">Сottege One</DropdownItem>
                <DropdownItem key="copy">Сottege Two</DropdownItem>
                <DropdownItem key="copy">Русская баня</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Закрыть окно
                </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
        </div>
         
      </NavbarContent>
    </NextUINavbar>







    </>
  );
};
