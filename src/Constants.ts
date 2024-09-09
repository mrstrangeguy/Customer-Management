//Button variants enum
export enum ButtonVariants {
  Normal = "Normal",
  Outlined = "Outlined",
}

export enum DropdownVariants {
  Primary = "Primary",
  Secondary = "Secondary",
}

export enum DropdownPositions {
  Left = "Left",
  Right = "Right"
}

type UserOpportunityItem = {
  text: string;
  price: string;
};

type ActivityItemDetail = {
  date: string;
  name: string;
};

type ActivityItem = {
  status: string;
  details: ActivityItemDetail;
};

type UserOpportunities = {
  title: string;
  items: UserOpportunityItem[];
};

type Activities = {
  title: string;
  items: ActivityItem[];
};

type Description = {
  name: string;
  position: string;
};

export type usersData = {
  userAttributes: string[];
  usersDetails: UserDetail[];
};

export type UserDetail = {
  id: number;
  isChecked: boolean;
  isSelected: boolean;
  isResponsiveSelected: boolean;
  description: Description;
  company: string;
  status: string;
  assignedto: string;
  phone: string;
  email: string;
  opportunities: UserOpportunities;
  activities: Activities;
};
