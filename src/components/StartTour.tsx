import { driver, DriveStep, Config, AllowedButtons } from "driver.js";
import "driver.js/dist/driver.css";

interface TourStep extends DriveStep {
  element: string;
  popover: {
    title: string;
    description: string;
    side: "top" | "bottom" | "left" | "right";
    align: "start" | "center" | "end";
  };
}

const driverOptions: Config = {
  animate: true,

  allowClose: true,
  showProgress: false,
  showButtons: ["next", "previous", "close"] as AllowedButtons[],
  steps: [
    {
      element: ".tour-home",
      popover: {
        title: "Home",
        description: "This button takes you to the home page.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-search",
      popover: {
        title: "Search",
        description: "Use this button to search for users.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-mail",
      popover: {
        title: "Mail",
        description: "Click here to view your emails.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-send",
      popover: {
        title: "Send",
        description: "This button allows you to send messages.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-stack",
      popover: {
        title: "Stack",
        description: "Manage your stacks with this button.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-inbox",
      popover: {
        title: "Inbox",
        description: "Access your inbox here.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-stats",
      popover: {
        title: "Stats",
        description: "View your statistics here.",
        side: "right",
        align: "start",
      },
    },
    {
      element: ".tour-logout",
      popover: {
        title: "Logout",
        description: "Click here to log out of the application.",
        side: "right",
        align: "start",
      },
    },
  ] as TourStep[],
};

export const driverObj = driver(driverOptions);
