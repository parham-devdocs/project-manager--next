import { MdSplitscreen } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function TasksSubHeader() {
 return (
    <div className=" flex justify-between w-full items-center ">
        <MyProjectext/>
        <SortByButton/>
    </div>
 )
}

function MyProjectext() {
     return (
       <div className=" flex gap-3 mt-28 items-center w-96  py-2">
         <div className=" flex justify-center items-center w-10 bg-blue-600 rounded-md h-10 p-1">
           <MdSplitscreen size={20} color="white" />
         </div>
         <div className=" flex flex-col w-full  ">
           <div className=" flex gap-1 items-center">
             <p>All Projects</p>
             <span className=" bg-slate-700 text-white rounded-md px-2 ">
               6
             </span>
             <IoIosArrowDown />
           </div>
           <div className=" flex items-center gap-1">
             <div className="  gap-2 w-full h-2 rounded-full bg-slate-300 ">
               <div className=" h-full w-1/2 bg-blue-600 rounded-full"></div>
             </div>
             <p className=" text-slate-300">20% </p>
           </div>
         </div>
       </div>
     );
}

function SortByButton() {
  return (
    <div className=" flex text-base  gap-3">
      <span className=" text-slate-300">Sort By</span>
      <div className=" flex gap-1 items-center cursor-pointer">
        <span className=" text-slate-800">Recent Projects</span>
        <IoIosArrowDown />
      </div>
    </div>
  );
}