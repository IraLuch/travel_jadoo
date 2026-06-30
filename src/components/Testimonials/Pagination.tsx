import { useEffect, useState } from "react";

type props = {
    isActive: boolean
}

export const Pagination = ({isActive}: props) => {
   

     return <li className={`w-[12px] h-[12px] rounded-full bg-gray-200 ${isActive && "bg-gray-950"}` }></li>

}
