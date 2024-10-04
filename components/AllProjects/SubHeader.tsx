import { IoIosArrowDown } from "react-icons/io";

function AllProjectsSubHeader() {
  return (
    <div className=" mt-20 flex justify-between  items-center border-b-2 py-2">
      <MyProjectText />
      <SortByButton />
    </div>
  );
}
function MyProjectText() {
  return <p className=" text-3xl font-semibold">My Projects</p>;
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
export default AllProjectsSubHeader;
