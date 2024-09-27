//Button variants enum
export enum ButtonVariants {
  Normal = "Normal",
  Outlined = "Outlined",
}

export enum AccordionVariants {
  Primary = "Primary",
  Secondary = "Secondary",
}

export enum DropdownPositions {
  Left = "Left",
  Right = "Right",
}

export enum SearchTypes {
  Text = "text",
  Number = "number",
}

export enum EmployeeStatuses {
  Salaried = "salaried",
  Commission = "commission",
  Terminated = "terminated"
}

export enum StatusIconStyles {
  Salaried = "mr-1.25 -mt-0.5 bg-wageningen-green",
  Commission = "mr-1.25 -mt-0.5 bg-democrat",
  Terminated = "mr-1.25 -mt-0.5 bg-tuscan-image"
}

export enum StatusTextStyles {
  Salaried = "text-wageningen-green",
  Commission = "text-democrat",
  Terminated = "text-tuscan-image",
}

export const whiteSpaceRegex = /^\s+|\s+$|\s+(?=\s)/g;

export const ARROW_UP_KEY = "ArrowUp";
export const ARROW_DOWN_KEY = "ArrowDown";
export const KEY_E = "KeyE";
