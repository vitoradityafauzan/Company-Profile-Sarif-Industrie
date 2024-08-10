export interface StaffList {
  name: {
    first: string;
    last: string;
  };
  id: {
    value: string;
  };
  picture: {
    large: string;
  };
}
[];

/* ========== */

export interface VideoComponentProps {
  linkk: string;
}

/* ========== */

export interface StaffCardProps {
  img: string;
  alt: string;
  desc1: string;
  desc2: string;
}

/* ========== */

export interface ICardProduct {
  title: string;
  image: string;
  content: string;
}

/* ========== */


interface InnerContent {
    value: string;
  }
  
  interface MiddleContent {
    content: InnerContent[];
  }
  
  interface OuterContent {
    content: MiddleContent[];
  }

export interface IBlogs {
  sys: { id: number | null | undefined };
  fields: {
    title: string;
    image: { fields: { file: { url: string } } };
    content: OuterContent;
  };
}
