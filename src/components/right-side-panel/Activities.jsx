import React from 'react';
import { 
  BugAntIcon, 
  RocketLaunchIcon,
  DocumentIcon,
  PencilIcon,
  TrashIcon 
} from '@heroicons/react/24/outline';
import SectionContainer from '../ui/SectionContainer';
import ListItem from '../ui/ListItem';

const activitiesData = [
  {
    id: 1,
    user: 'You',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1',
    action: 'have a bug that needs...',
    timestamp: 'Just now',
    type: 'bug',
    icon: <BugAntIcon className="size-3" />,
    iconBgClassName: 'bg-red-100 text-red-600'
  },
  {
    id: 2,
    user: 'Released',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=release',
    action: 'a new version',
    timestamp: '59 minutes ago',
    type: 'release',
    icon: <RocketLaunchIcon className="size-3" />,
    iconBgClassName: 'bg-green-100 text-green-600'
  },
  {
    id: 3,
    user: 'Submitted',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=submit',
    action: 'a bug',
    timestamp: '12 hours ago',
    type: 'bug',
    icon: <BugAntIcon className="size-3" />,
    iconBgClassName: 'bg-red-100 text-red-600'
  },
  {
    id: 4,
    user: 'Modified',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=modify',
    action: 'A data in Page X',
    timestamp: 'Today, 11:59 AM',
    type: 'edit',
    icon: <PencilIcon className="size-3" />,
    iconBgClassName: 'bg-blue-100 text-blue-600'
  },
  {
    id: 5,
    user: 'Deleted',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=delete',
    action: 'a page in Project X',
    timestamp: 'Feb 2, 2023',
    type: 'delete',
    icon: <TrashIcon className="size-3" />,
    iconBgClassName: 'bg-orange-100 text-orange-600'
  }
];

const Activities = () => {
  return (
    <SectionContainer title="Activities">
      {activitiesData.map((activity, index) => (
        <ListItem
          key={activity.id}
          image={activity.avatar}
          title={`${activity.user} ${activity.action}`}
          timestamp={activity.timestamp}
          showTimeline={true}
          isLastTimelineItem={index === activitiesData.length - 1}
          timelineIcon={activity.icon}
          timelineIconBgClassName={activity.iconBgClassName}
        />
      ))}
    </SectionContainer>
  );
};

export default Activities;