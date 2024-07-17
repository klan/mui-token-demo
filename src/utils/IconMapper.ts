import React from "react";
import dynamic from "next/dynamic";

const iconMap = {
  add: dynamic(() => import("@mui/icons-material/Add")),
  delete: dynamic(() => import("@mui/icons-material/Delete")),
  notify: dynamic(() => import("@mui/icons-material/NotificationsActive")),
};

export type IconNames = keyof typeof iconMap;

export const getIconByName = (name: IconNames): React.ComponentType | null => {
  return iconMap[name] || null;
};
