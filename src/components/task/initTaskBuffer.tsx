import { ITask } from "../../interface/ITask";
import { enumTaskStatus } from "../../enum/enumTaskStatus";
export const initTaskBuffer: ITask = {
  name: "",
  point: 0,
  isContentOn: false,
  status: enumTaskStatus.Todo,
  createdOn: 0,
  modifiedOn: 0,
} as ITask;
