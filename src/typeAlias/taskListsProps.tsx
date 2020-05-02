import { ITask } from "src/interface/ITask";
export type taskListsProps = {
  children: any;
  tasks: ITask[];
  handleTaskOnClick: any;
  handleTaskBufferOnChange: any;
  taskBuffer: ITask;
  handleUpdateTaskOnClick: any;
  handleArchiveTaskOnClick: any;
};
