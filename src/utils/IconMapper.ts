import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// Import more icons as needed

const iconMap = {
  add: AddIcon,
  delete: DeleteIcon,
  notify: NotificationsActiveIcon
  // Add more mappings here
};

export type IconNames = keyof typeof iconMap;

export const getIconByName = (name: IconNames): React.ComponentType | null => {
  return iconMap[name] || null;
};
