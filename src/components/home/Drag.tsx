 import { useEffect, useRef, type RefObject } from "react";
import Plane from "../../assets/plane.png";
import { frame, motion, useSpring } from "framer-motion";
import { useFollowPointer } from "../../hooks/UseFollowPointer";

 export default function Drag() {
    const ref = useRef<HTMLImageElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.img ref={ref} 
  style={{ x, y }} 
  src={Plane} 
  alt="Draggable" 
/>
}
