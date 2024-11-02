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


    if (scrollY > 450 && pathname == "/") {
      setShowButton(false);
    }
    
    else if (pathname == "/all-cottage") {
      setShowButton(false);
    } 
    else if (pathname == "/about") {
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
      className={`${showButton ? 'hidden' : 'visible'}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Dropdown backdrop="blur">
        <DropdownTrigger>  
          <Button color="primary" className="w-[60px] min-w-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              {/* SVG icon */}
            </svg>
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