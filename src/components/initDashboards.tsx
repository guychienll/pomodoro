import ListUntoggledIcon from "../assets/icons/list_white.svg";
import AddUntoggledIcon from "../assets/icons/add_white.svg";
import RingtoneUntoggledIcon from "../assets/icons/ringtone_white.svg";
import AnalysisUntoggledIcon from "../assets/icons/analysis_white.svg";
import ListToggledIcon from "../assets/icons/list_red.svg";
import AddToggledIcon from "../assets/icons/add_red.svg";
import RingtoneToggledIcon from "../assets/icons/ringtone_red.svg";
import AnalysisToggledIcon from "../assets/icons/analysis_red.svg";
import { enumDashboardType } from "../enum/enumDashboardType";
import { IDashboard } from "../interface/IDashboard";
export const initDashboards: IDashboard[] = [
  {
    type: enumDashboardType.AddNewTask,
    status: false,
    name: "ADD NEW TASK",
    toggledSrc: AddToggledIcon,
    untoggledSrc: AddUntoggledIcon,
  } as IDashboard,
  {
    type: enumDashboardType.TaskLists,
    status: true,
    name: "TASK LISTS",
    toggledSrc: ListToggledIcon,
    untoggledSrc: ListUntoggledIcon,
  } as IDashboard,
  {
    type: enumDashboardType.AnalyticsReport,
    status: false,
    name: "ANALYTICS REPORT",
    toggledSrc: AnalysisToggledIcon,
    untoggledSrc: AnalysisUntoggledIcon,
  } as IDashboard,
  {
    type: enumDashboardType.RingTone,
    status: false,
    name: "RING TONE",
    toggledSrc: RingtoneToggledIcon,
    untoggledSrc: RingtoneUntoggledIcon,
  } as IDashboard,
];
