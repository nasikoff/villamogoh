import { BreadcrumbItem, Breadcrumbs, Button } from '@nextui-org/react';
import React from 'react';
import { BackIcon, WhatsappIcon } from './icons';

const BackButton: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
     
   <Button  startContent={<BackIcon/>} className='p-0 justify-start' onClick={goBack}   variant="light">
   Назад
 </Button>  
     
  );
};

export default BackButton;