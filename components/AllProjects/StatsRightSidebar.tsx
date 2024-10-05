import { MdSplitscreen } from "react-icons/md";

export default function StatsRightSidebar() {
  return (
    <div className=" hidden md:flex flex-col items-center justify-center mx-auto gap-8">
      <Header />
      <CircularChart />
      <ProjectsCompletedLabels />
      <ProjectsList />
    </div>
  );
}

function Header() {
  return <h2 className=" textce font-bold text-2xl">Projects completed </h2>;
}

function CircularChart() {
  return (
    <div className=" flex justify-center items-center">
      <div className=" w-40 h-40 bg-slate-100 mt-5 rounded-full flex items-center justify-center">
        <div className=" w-[86%] flex justify-center items-center h-[86%] bg-white rounded-full">
          <span className=" text-xl font-semibold text-blue-600">90%</span>
        </div>
      </div>
    </div>
  );
}

function ProjectsCompletedLabels() {
  return (
    <div className=" fle flex-col  gap-5 ">
      <p className=" text-xl font-semibold text-center">3 completed </p>
      <p className=" text-slate-300 text-base  text-center">20 tasks done</p>
    </div>
  );
}

function ProjectsList() {
  return (
    <ul className=" flex flex-col gap-8 w-full justify-center mt-10">
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </ul>
  );
}

function SingleProject() {
  return (
    <li className=" flex gap-4 items-center border-b-2 ">
      <div className=" bg-blue-600 w-10 h-10  flex justify-center items-center rounded-lg">
        <MdSplitscreen color="white" />
      </div>
      <div>
        <p className=" text-xl font-semibold">Project 1</p>
        <p className=" text-slate-300">3 tasks</p>
      </div>
    </li>
  );
}
