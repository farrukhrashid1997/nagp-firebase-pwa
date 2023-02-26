export const RoutesConfig = {
  fillTimesheet: "/",
  viewTimesheet: "/viewTimesheet",
  fillTimesheetManager: "/"
};

export enum TimesheetStatus {
  rejected = "Rejected",
  approved = "Approved",
  pending = "Pending",
}

export enum TypeOfEmployee {
  manager = "Manager",
  employee = "Employee",
}
