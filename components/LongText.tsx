import React, { useState } from 'react';
import { DescriptionOne, DescriptionTwo, DescriptionRB, DescriptionAbout } from '@/config/site';

interface LongTextComponentProps {
  descriptionType: 'one' | 'two' | 'three' | 'four';
}

const LongTextComponent: React.FC<LongTextComponentProps> = ({ descriptionType }) => {
  const [showMore, setShowMore] = useState(false);
  let description;

  switch (descriptionType) {
    case 'one':
      description = DescriptionOne;
      break;
    case 'two':
      description = DescriptionTwo;
      break;
    case 'three':
      description = DescriptionRB;
      break;
    case 'four':
        description = DescriptionAbout;
      break;
    default:
      description = DescriptionOne;
  }

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore ? description : `${description[0].slice(0, 200)}...`}
      <br/>
      <button className='mt-4 underline   opacity-100 text-default-900 ' onClick={handleToggleShowMore}>
        {showMore ? 'Скрыть' : 'Показать весь текст'}
      </button>
    </div>
  );
};

export default LongTextComponent;