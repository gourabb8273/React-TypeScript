import React from "react";
import messageHoc from "./Hoc";

// const Message = (props: {message: string}) : any =>{
//     return (
//         <p>
//             {props.message}
//         </p>
//     )
// }

///OR

// type Props =  {message: string};
// const Message = (props: Props): any =>{
//     return (
//         <p>
//             {props.message}
//         </p>
//     )
// }

// //using Interface
// interface Props {
//   message: string;
//   name: string;
//   age?: number;
// }
// const Message = (props: Props): any => {
//   return (
//     <p>
//       {props.name},{props.message}
//     </p>
//   );
// };

//using Hoc
const exmaple = (props: any):any => <p>{props.name}, {props.message}</p>

const Message = messageHoc(exmaple)
export default Message;
