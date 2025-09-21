import React from 'react';
import Notifications from './Notifications';
import Activities from './Activities';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <aside className="w-80 bg-background border-l border-foreground/10 h-screen flex flex-col">

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          <Notifications />
          <Activities />
          <Contacts />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;