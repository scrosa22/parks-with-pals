import React from 'react';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link to="/Home">back to the Home</Link>
      <h2 className="card-header" style={{  }}>
       {profile.name}'s comments:
      </h2>

      {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

      <div className="my-12 p-12" style={{ backgroundColor: 'lightblue' }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
