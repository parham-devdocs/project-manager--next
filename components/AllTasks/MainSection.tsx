import {  TfiMenuAlt } from "react-icons/tfi";
import { GrPowerCycle } from "react-icons/gr";
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function TasksList() {
  return (
    <div className=" flex flex-col gap-10 mt-16 ml-12 ">
      <Tabs />
      <div className=" flex flex-col gap-10 justify-center mt-3 ">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className=" flex items-center gap-6 my-6">
      <div className=" flex items-center gap-2">
        <span className=" text-blue-600 ">On going tasks</span>
        <span className=" w-6 h-6 flex items-center justify-center bg-blue-600 rounded-md text-white">
          7
        </span>
      </div>
      <div className=" flex items-center gap-2">
        <span>Completed tasks</span>
        <span className=" w-6 h-6 flex items-center justify-center bg-blue-600 rounded-md text-white">
          8
        </span>
      </div>
    </div>
  );
}

function SingleTask() {
    return (
      <div className=" flex items-center w-full justify-between">
        <div className=" flex gap-8 items-center">
          <CheckBox />
          <div className=" flex gap-3 items-center">
            <div className=" bg-blue-200 w-10 h-10 rounded-md flex justify-center items-center ">
              <TfiMenuAlt className=" text-blue-700" />
            </div>
            <div className=" flex flex-col">
              <p className=" text-lg font-bold">
                Create the ui design of the project
              </p>
              <p className=" text-slate-300 text-base">project</p>
            </div>
          </div>
            </div>
            <State />
            <Priority />
            <Buttons/>
      </div>
    );
}
function CheckBox() {
  return (
    <input
      type="checkbox"
      defaultChecked
      className="checkbox checkbox-primary"
    />
  );
}


function State() {
    return (
        <div className=" flex gap-2 items-center ">
            <GrPowerCycle />
            <p >in progress</p>
        </div>
    )
}
function Priority() {
    return (
        <div className="flex gap-2 items-center">
            <div className=" w-3 h-3 bg-green-700 rounded-full items-center" />
            <p className=" text-slate-300">low</p>

        </div>
    )
}

function Buttons() {
    return<div className=" flex items-center gap-3">
      <div className=" bg-blue-200 w-10 h-10 flex justify-center items-center rounded-md">
        <MdModeEditOutline className=" text-blue-700" />
      </div>
      <div className=" bg-slate-200 w-10 h-10 flex justify-center items-center rounded-md">
        <MdDeleteOutline className=" text-slate-700" />
      </div>
    </div>;
}