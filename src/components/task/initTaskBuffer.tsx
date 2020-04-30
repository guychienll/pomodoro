import { ITask } from "../../interface/ITask";
import { enumTaskStatus } from "../../enum/enumTaskStatus";
export const initTaskBuffer: ITask = {
  name: "",
  estimated: [false, false, false, false, false, false, false, false, false, false],
  isContentOn: false,
  status: enumTaskStatus.Todo,
  createdOn: 0,
  modifiedOn: 0,
} as ITask;
