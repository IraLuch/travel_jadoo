import { motion } from "framer-motion";
import type { TestimonialItem } from "../../types/TestimonialItem";
import { useState } from "react";

type CommentProps = TestimonialItem & { isActive: boolean; isNext: boolean };

const CommentItem = ({
  id,
  name,
  location,
  avatar,
  text,
  isActive,
  isNext,
}: CommentProps) => {
  return (
    <div
      className={`absolute md:pt-[28px] md:pl-[34px] md:pr-[68px] md:pb-[34px] p-[10px] w-full  bg-white shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] rounded-3xl 
         ${isActive && "  left-0 top-0 z-20 opacity-100"} 
        ${isNext && "z-10 opacity-35 md:left-15 left-5 top-23"} opacity-0 transition-all duration-300`}
    >
      <div className="md:w-[68px] md:h-[68px] w-[40px] h-[40px] md:-left-8 -left-5 -top-6  overflow-hidden rounded-full absolute bg-gray-300">
        <img className="w-full h-full object-cover" src={avatar} alt="avatar" />
      </div>
      <div className="font-medium text-secondary-100 md:text-[16px] text-[12px]  flex flex-col gap-8">
        <p >{text}</p>
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold">{name}</span>
          <span className="text-[14px]">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
