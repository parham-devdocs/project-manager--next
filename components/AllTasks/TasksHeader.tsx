import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

function AllTasksHeader() {
  return (
    <div className=" flex justify-between">
      <SearchBar />
      <AddTaskButton />
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className=" flex items-center gap-1 ">
      <div className=" border-b-2 border-blue-600 h-9 w-8 flex justify-center items-center">
        <FaSearch className=" text-slate-300 outline-none text-base " />
      </div>
      <div className=" border-b-2 border-slate-200 h-9  flex justify-center items-center">
        <input
          type="text"
          name="search-task"
          placeholder="Search Projects ..."
          className=" bg-transparent placeholder:text-slate-300 outline-none text-blue-600"
        />
      </div>
    </div>
  );
};

const AddTaskButton = () => {
  return (
    <button className=" bg-blue-600 text-white hover:bg-blue-700 px-3 rounded-[5px] flex gap-1 items-center ">
      <MdAdd size={20} /> New Task
    </button>
  );
};
export default AllTasksHeader;
