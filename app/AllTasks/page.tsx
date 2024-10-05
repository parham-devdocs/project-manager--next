import TasksList from "@/components/AllTasks/MainSection";
import TasksHeader from "@/components/AllTasks/TasksHeader";
import  TasksSubHeader  from "@/components/AllTasks/TasksSubHeader"
export default function AllTasksContainer() {
    return (
        <div className=" bg-slate-50 w-full p-10">

            <TasksHeader />
            <TasksSubHeader />
            <TasksList/>
        </div>
    )
}