import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';
import { Link } from 'react-router-dom';

import { QUERY_PROFILES } from '../utils/queries';

const Reviews = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="✨ Parks Reviews ✨"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Reviews;
