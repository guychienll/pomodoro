import { IDashboard } from "src/interface/IDashboard";
import { ITask } from "src/interface/ITask";
export type dashboardProps = {
  isDashboardOn: boolean;
  dashboards: IDashboard[];
  tasks: ITask[];
  handleTaskOnClick: any;
  handleAddNewTaskOnClick: any;
  taskBuffer: ITask;
  handleTaskBufferOnChange: any;
  handleUpdateTaskOnClick: any;
  handleArchiveTaskOnClick: any;
};
