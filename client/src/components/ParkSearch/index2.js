import React from 'react';
import { Link } from 'react-router-dom';




const parkSearch2 = () => {
  if (!profiles.length) {
    return <h3>You don't have any reviews</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-8 col-xl-12">
              <div className="card mb-4">
                <h4 className="card-header bg-light text-dark p-5 m-2">
                  {profile.name} <br />
                  <span className="text-dark" style={{ fontSize: '1rem' }}>
                    currently wrote {profile.skills ? profile.skills.length : 0}{' '}
                    reviews {profile.skills && profile.skills.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link 
                  className="btn btn-info text-center"
                  to={`/profiles/${profile._id}`}
                >Click here to write and read reviews
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default parkSearch2;