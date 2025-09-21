import React from 'react';
import {
  BugAntIcon,
  UserIcon,
  WifiIcon
} from '@heroicons/react/24/outline';
import SectionContainer from '../ui/SectionContainer';
import ListItem from '../ui/ListItem';
import Typography from '../ui/Typography';

const notificationsData = [
  {
    id: 1,
    type: 'bug',
    icon: <BugAntIcon className="size-4" />,
    title: 'You have a bug that needs...',
    timestamp: 'Just now',
    isUnread: true,
    iconBgClassName: 'bg-primary-blue'
  },
  {
    id: 2,
    type: 'user',
    icon: <UserIcon className="size-4" />,
    title: 'New user registered',
    timestamp: '59 minutes ago',
    isUnread: true,
    iconBgClassName: 'bg-primary-blue'
  },
  {
    id: 3,
    type: 'bug',
    icon: <BugAntIcon className="size-4" />,
    title: 'You have a bug that needs...',
    timestamp: '12 hours ago',
    isUnread: false,
    iconBgClassName: 'bg-primary-blue'
  },
  {
    id: 4,
    type: 'subscription',
    icon: <WifiIcon className="size-4" />,
    title: 'Andi Lane subscribed to you',
    timestamp: 'Today, 11:59 AM',
    isUnread: false,
    iconBgClassName: 'bg-primary-blue'
  }
];

const Notifications = () => {
  return (
    <SectionContainer
      title="Notifications"
     
    >
      {notificationsData.map((notification) => (
        <ListItem
          key={notification.id}
          icon={notification.icon}
          title={notification.title}
          timestamp={notification.timestamp}
          iconBgClassName={notification.iconBgClassName}
        />
      ))}
    </SectionContainer>
  );
};

export default Notifications;