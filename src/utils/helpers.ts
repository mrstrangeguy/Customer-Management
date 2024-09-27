import { EmployeeStatuses, StatusIconColors } from "../Constants";

export const getStatusIconStyle = (status: string) => {
  const baseStyle = "mr-1.25 -mt-0.5";
  if (status.toLowerCase() === EmployeeStatuses.Commission) {
    return `${baseStyle} ${StatusIconColors.Commission}`;
  } else if (status.toLowerCase() === EmployeeStatuses.Terminated) {
    return `${baseStyle} ${StatusIconColors.Terminated}`;
  }

  return `${baseStyle} ${StatusIconColors.Salaried}`;
};
