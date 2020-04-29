import { ITask } from "src/interface/ITask";
export type addNewTaskProps = {
  children: JSX.Element;
  handleAddNewTaskOnClick: any;
  taskBuffer: ITask;
  handleTaskBufferOnChange: any;
};
