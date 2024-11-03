import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import BookingButton from "./BookingButton";
 

const ButtonPlus = () => {
  const [showButton, setShowButton] = React.useState(false);
  const pathname = usePathname();
 

  const handleScroll = () => {
    let scrollY = window.scrollY;


    if (scrollY > 400 && pathname == "/") {
      setShowButton(false);
    }
    
    else if (pathname == "/all-cottage") {
      setShowButton(false);
    } 
    else if (pathname == "/about") {
      setShowButton(false);
    } 

    else if (scrollY > 230 && pathname == "/all-cottage/cottage-one" && window.innerWidth > 400) {
      setShowButton(false);
    } 

    else if (scrollY < 500 && pathname == "/all-cottage/cottage-one" && window.innerWidth < 400) {
      setShowButton(false);
    } 

    else if (scrollY > 230 && pathname == "/all-cottage/cottage-two" && window.innerWidth > 400) {
      setShowButton(false);
    } 

    else if (scrollY < 500 && pathname == "/all-cottage/cottage-two" && window.innerWidth < 400) {
      setShowButton(false);
    } 


    else if (scrollY > 230 && pathname == "/all-cottage/russian-bathhouse" && window.innerWidth > 400) {
      setShowButton(false);
    } 

    else if (scrollY < 500 && pathname == "/all-cottage/russian-bathhouse" && window.innerWidth < 400) {
      setShowButton(false);
    } 



    else {
      setShowButton(true);
    }

  };

  React.useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: showButton ? 0 : 1, opacity: showButton ? 0 : 1, width: showButton ? 0 : "auto"  }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  >
      <BookingButton text={""}/>
    </motion.div>
  );
};

export default ButtonPlus;