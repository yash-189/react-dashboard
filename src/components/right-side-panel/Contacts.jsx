import React, { useState } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import SectionContainer from '../ui/SectionContainer';
import ListItem from '../ui/ListItem';

const contactsData = [
  {
    id: 1,
    name: 'Natali Craig',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online'
  },
  {
    id: 2,
    name: 'Drew Cano',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'offline'
  },
  {
    id: 3,
    name: 'Orlando Diggs',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'online'
  },
  {
    id: 4,
    name: 'Andi Lane',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 'online'
  },
  {
    id: 5,
    name: 'Kate Morrison',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'offline'
  },
  {
    id: 6,
    name: 'Koray Okumus',
    avatar: 'https://i.pravatar.cc/150?img=6',
    status: 'online'
  }
];

const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <SectionContainer title="Contacts">
      {contactsData.map((contact) => (
        <ListItem
          key={contact.id}
          image={contact.avatar}
          title={contact.name}
          trailing={
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${
                contact.status === 'online' 
                  ? 'bg-green-500' 
                  : 'bg-gray-300'
              }`} />
              <button
                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedContact(
                    selectedContact === contact.id ? null : contact.id
                  );
                }}
              >
                <EllipsisHorizontalIcon className="size-4 text-gray-500" />
              </button>
            </div>
          }
          variant="compact"
          onClick={() => console.log('Contact clicked:', contact.name)}
        />
      ))}
    </SectionContainer>
  );
};

export default Contacts;