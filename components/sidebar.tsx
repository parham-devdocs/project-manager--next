import { MdOutlineTaskAlt } from "react-icons/md";
import { BsLayoutSplit } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className=" hidden sm:flex flex-col justify-between py-8 bg-white px-8 min-h-screen">
      <Logo />
      <Buttons />
      <Profile />
    </div>
  );
}

const Logo = () => {
  return <MdOutlineTaskAlt size={30} className=" text-blue-600" />;
};

const Buttons = () => {
    return (
      <div className=" space-y-8">
        <AiOutlineProduct  size={25} className=" text-blue-600 cursor-pointer" />
        <BsLayoutSplit size={25} className=" text-slate-300 cursor-pointer"/>
        <FiLogOut size={25} className=" text-slate-300 cursor-pointer"/>
      </div>
    );
};

const Profile = () => {
  return <div className=" w-8 h-8 rounded-lg bg-blue-600"></div>;
};
