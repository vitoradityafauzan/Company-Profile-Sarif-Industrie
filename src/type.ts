// export interface StaffList {
//     gender: string;
//     name: {
//         first: string;
//         last: string
//     };
//     id: {

//     }
// }

export interface StaffList {
    name: {
        first: string;
        last: string
    };
    id: {
        value: string
    };
    picture: {
        large: string
    }
}[]

export interface VideoComponentProps {
    linkk: string;
  }

export interface StaffCardProps {
    img: string;
    alt: string;
    desc1: string;
    desc2: string
}