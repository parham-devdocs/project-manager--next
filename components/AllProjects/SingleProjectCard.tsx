import { BsCircle, BsLayoutSplit } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

function SingleProjectCard() {
  return (
    <li className=" w-80 flex flex-col gap-8 rounded-lg p-7 h-fit bg-white">
      <CardHeader />
      <CardDesc />
      <Progress />
    </li>
  );
}

function CardHeader() {
  return (
    <div className=" flex justify-between items-center">
      <div className=" flex gap-3 items-center">
        <div className=" bg-blue-600 rounded-md h-10 w-10 flex justify-center items-center ">
          <BsLayoutSplit color="white" size={20} />
        </div>
        <div>
          <h2 className=" text-lg font-bold">Project Title</h2>
          <p className=" text-slate-500">2 days ago</p>
        </div>
      </div>
      <MdMoreVert className=" text-slate-500" size={25} />
    </div>
  );
}
function CardDesc(params: type) {
  return (
    <ul className=" space-y-4  text-slate-500 ">
      <li className=" flex gap-2 items-center">
        <FaCircle size={15} /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit
      </li>
      <li className=" flex gap-2 items-center">
        <FaCircle size={15} /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit
      </li>
    </ul>
  );
}
function Progress() {
    return <div className=" flex flex-col gap-3 ">
      <div className=" w-full h-2 rounded-full bg-slate-500">
        <div className=" h-full w-1/2 bg-blue-600 rounded-full"></div>
        </div>
        <div className=" flex justify-between">
            <p className=" text-slate-500 "> On Progress</p>
            <p >78%</p>
        </div>
  </div>;
}
export default SingleProjectCard;
