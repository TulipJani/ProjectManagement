import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag={true}
      dragConstraints={reference}
      whileDrag={{ scale: 1.2, zIndex: 99 }}
      className="card flex-shrink-0 relative w-60 h-72 bg-zinc-900/95 border border-zinc-500/25 rounded-[30px] p-5 text-white overflow-hidden"
    >
      <div className="top h-2/3 w-full flex flex-col gap-3">
        <FaFileAlt size={15} />
        <p className="text-md leading-tight font-semibold">{data.desc}</p>
      </div>
      <div className="footer absolute bottom-0 left-0  w-full ">
        <div className="flex items-center justify-between px-6 py-3 ">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose size={20} color="fff" />
            ) : (
              <GoDownload size={10} color="fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full h-10 download flex items-center justify-center bg-${data.tag.tagColor}-600 text-white`}
          >
            <a href="#" className=" font-semibold text-sm ">
              {data.tag.tagTitle}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
