import { enumTaskStatus } from "../enum/enumTaskStatus";
export interface ITask {
  name: string;
  estimated: number;
  status: enumTaskStatus;
  isContentOn: boolean;
  createdOn: number;
  modifiedOn: number;
}
