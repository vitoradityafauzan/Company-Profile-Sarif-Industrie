
import Image from 'next/image';
import { StaffCardProps } from '@/type';

const StaffCard = ({ img, alt, desc1, desc2 }: StaffCardProps) => {
  return (
    <div className="flex flex-col w-[90%] md:w-5/6 border-y-4 border-white rounded-lg text-[#0d0d0d] text-center font-semibold justify-items-center ">
        {/* w-5/6 md:w-3/6 lg:w-2/6 */}
        <div className="border-b-4 rounded border-x-4 border-white w-full h-[16rem] md:h-[17.5rem] lg:h-[20rem] bg-white relative">
          <Image src={img} alt={alt} fill />
        </div>
        <h1>{desc1}</h1>
        <h1>{desc2}</h1>
      </div>
);
};

export default StaffCard;


/**
 * import {FC} from 'react';
 * 
 const StaffCard: FC<StaffCardProps> = ({ img, alt, desc1, desc2 }) => {
  return (
    <div className="flex flex-col w-[90%] md:w-5/6 border-y-4 border-white rounded-lg text-[#0d0d0d] text-center font-semibold justify-items-center ">
        w-5/6 md:w-3/6 lg:w-2/6 
        <div className="border-b-4 rounded border-x-4 border-white w-full h-[16rem] md:h-[17.5rem] lg:h-[20rem] bg-white relative">
          <Image src={img} alt={alt} fill />
        </div>
        <h1>{desc1}</h1>
        <h1>{desc2}</h1>
      </div>
);
};
 */