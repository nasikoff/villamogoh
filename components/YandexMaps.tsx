import React from 'react';
import Iframe from 'react-iframe';

const YandexMaps = () => {
  return (
    <div className="flex-auto w-full md:w-64">
    <Iframe 
          url={"https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=127935404987"}
          width={"100%"}
          id={""}
          className={"rounded-[20px] h-[300px] md:h-[450px]"}      
    />
    </div>
  );
}

export default YandexMaps;