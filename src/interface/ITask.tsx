import { enumTaskStatus } from "../enum/enumTaskStatus";
export interface ITask {
  name: string;
  point: number;
  pointHasDone: number;
  status: enumTaskStatus;
  isContentOn: boolean;
  createdOn: number;
  modifiedOn: number;
}
