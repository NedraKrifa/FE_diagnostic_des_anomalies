import React from 'react'
import AppLayout from '../../Layouts/AppLayout';
import HomeBody from '../../Components/Briks/Body/HomeBody/HomeBody';

export default function Home() {
    return (
      <div>
        <AppLayout isPTags>
          <HomeBody />
        </AppLayout>
      </div>
    );
}
