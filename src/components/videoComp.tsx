import { VideoComponentProps } from '@/type';
import {FC} from 'react';

const VideoComponent: FC<VideoComponentProps> = ({ linkk }) => {
  return (
    
    <iframe
      src={linkk}
      width={710}
      height={370}
      // allow="autoplay; muted"
      className="w-full h-[13.75rem] md:w-9/12 md:h-[18.5rem] lg:w-7/12 lg:h-[19.7rem] xl:h-[26rem]"
    />
    
  );
};

export default VideoComponent;




/**
  <iframe src="https://drive.google.com/file/d/1AgnIkrR8Ls_Ig87xyzGqLl3TfHVQOf3W/preview" className="w-full h-[13rem] md:h-[23rem] lg:w-5/6 lg:h-[26rem] xl:h-[36rem]" allow="autoplay"></iframe> 
 */