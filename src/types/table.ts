export type UsersData = {
  isAllSelectionCleared?: boolean;
  userAttributes: string[];
  usersDetails: UserDetail[];
};

type UserDescription = {
  name: string;
  position: string;
};

type UserOpportunityItem = {
  text: string;
  price: string;
};

type UserOpportunities = {
  title: string;
  items: UserOpportunityItem[];
};

type UserActivityDetail = {
  date: string;
  name: string;
};

type UserActivityItem = {
  status: string;
  details: UserActivityDetail;
};

type UserActivities = {
  title: string;
  items: UserActivityItem[];
};

type StatusDetail = {
  label: string;
  text: string;
};

type ContactDetail = {
  icon: string;
  text: string;
};

export type UserDetail = {
  id: number;
  isChecked: boolean;
  isSelected: boolean;
  isResponsiveSelected: boolean;
  image: string;
  description: UserDescription;
  statusDetails: StatusDetail[];
  contactDetails: ContactDetail[];
  company: string;
  status: string;
  assignedto: string;
  phone: string;
  email: string;
  opportunities: UserOpportunities;
  activities: UserActivities;
};
