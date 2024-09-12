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
  
  export type UsersData = {
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
    assignedTo: string;
    phone: string;
    email: string;
    opportunities: UserOpportunities;
    activities: Activities;
  };
  