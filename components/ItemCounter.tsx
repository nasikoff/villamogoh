import { FC } from 'react';
import { ChevronRightIcon } from './icons';
 
export const ItemCounter: FC = () => (
  <div className="flex items-center gap-1 text-default-400">
    <ChevronRightIcon className="text-xl" />
  </div>
);