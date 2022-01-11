import React from 'react'
import SearchResultsBody from '../../Components/Briks/Body/SearchResultsBody/SearchResultsBody';
import AppLayout from '../../Layouts/AppLayout';

export default function SearchResults() {
    return (
      <div>
        <AppLayout isPTags>
          <SearchResultsBody />
        </AppLayout>
      </div>
    );
}
