import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

const Buttonplus = () => {
  const [showButton, setShowButton] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 450 && window.location.pathname !== "/all-cottage") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div>
      <Dropdown backdrop="blur">
        <DropdownTrigger>  
          <Button color="primary" className={`w-[60px] min-w-0 ${showButton ? 'visible' : 'hidden'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              {/* SVG icon */}
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownSection title="Выберите объекты" showDivider> 
            <DropdownItem key="new">Сottage One</DropdownItem>
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

export default Buttonplus;
