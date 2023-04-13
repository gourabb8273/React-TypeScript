import React from "react";

// const Message = (props: {message: string}) : any =>{
//     return (
//         <p>
//             {props.message}
//         </p>
//     )
// }

///OR

type Props =  {message: string};
const Message = (props: Props): any =>{
    return (
        <p>
            {props.message}
        </p>
    )
}


export default Message