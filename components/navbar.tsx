"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Logo,
} from "@/components/icons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ButtonPlus from '@/components/ButtonPlus';

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
    
    <NextUINavbar maxWidth="xl" className="fixed bottom-8 top-[auto] bg-transparent px-0 w-max m-auto" style={{backdropFilter:"none"}}>

<NavbarContent  justify="center" className="w-full bg-transparent backdrop-opacity-10 px-0" style={{backdropFilter:"none"}}>

    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
    >  
            <div className="w-auto items-center justify-evenly flex   justify-start p-3   outline-none bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none">
                  {siteConfig.navItems.map((item) => (
                  <NavbarItem key={item.href} className="flex justify-center w-[60px] mx-[5px]" style={{backdropFilter:"none"}}>
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
                <ButtonPlus/>
            </div>
        </motion.div>
         
      </NavbarContent>
    </NextUINavbar>


    </>
  );
};
