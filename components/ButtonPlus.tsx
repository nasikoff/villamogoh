import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
 

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
      <Dropdown backdrop="blur">
        <DropdownTrigger>  
          <Button color="primary" className="w-[60px] min-w-0 mx-[5px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="2 1 20 20"><path fill="currentColor" d="M17.616 16.385V18.5q0 .154.115.27q.115.114.269.114t.27-.115q.114-.115.114-.269v-2.116H20.5q.154 0 .27-.115q.114-.115.114-.269t-.115-.27q-.115-.114-.269-.114h-2.116V13.5q0-.154-.115-.27q-.115-.114-.269-.114t-.27.115q-.114.115-.114.269v2.116H15.5q-.154 0-.27.115q-.114.115-.114.269t.115.27q.115.114.269.114zM18 20q-1.671 0-2.835-1.164Q14 17.67 14 16t1.165-2.835T18 12t2.836 1.165T22 16t-1.164 2.836T18 20M5 16.384V8.308q0-.384.172-.727q.171-.344.474-.566l5.385-4.077q.423-.323.966-.323t.972.323l5.385 4.078q.303.222.474.566q.172.345.172.73v.425q0 .223-.17.385t-.413.132q-1.425-.108-2.812.414q-1.388.523-2.401 1.536q-1.177 1.177-1.665 2.727t-.198 3.144q.067.373-.154.649t-.57.276H6.616q-.667 0-1.141-.475T5 16.386"></path></svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownSection title="Выберите объекты" showDivider> 
            <DropdownItem key="new">Cottage One</DropdownItem>
            <DropdownItem key="copy">Cottage Two</DropdownItem>
            <DropdownItem key="copy">Русская баня</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Закрыть окно
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </motion.div>
  );
};

export default ButtonPlus;