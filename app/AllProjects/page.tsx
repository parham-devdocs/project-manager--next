import AllProjectsHeader from "@/components/AllProjects/Header";
import AllProjectsSection from "@/components/AllProjects/mainSection";
import StatsRightSidebar from "@/components/AllProjects/StatsRightSidebar";
import AllProjectsSubHeader from "@/components/AllProjects/SubHeader";

function page() {
  return (
    <div className=" bg-slate-50 w-full min-h-screen flex">
          <AllProjectsArea />
          <StatsRightSidebar/>
    </div>
  );
}

function AllProjectsArea() {
  return (
    <div className=" w-[78%] p-10 flex-col gap-3">
      <AllProjectsHeader />
          <AllProjectsSubHeader />
          <AllProjectsSection/>
    </div>
  );
}
export default page;
