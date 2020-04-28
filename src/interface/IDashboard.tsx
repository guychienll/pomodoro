import { enumDashboardType } from "../enum/enumDashboardType";
export interface IDashboard {
  type: enumDashboardType;
  status: boolean;
  name: string;
  toggledSrc: string;
  untoggledSrc: string;
}
