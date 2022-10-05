import React from 'react';

const SkillsList = ({ skills }) => {
  if (!skills.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-6">
        {skills &&
          skills.map((skill) => (
            <div key={skill} className="col-12 col-xl-12">
              <div className="card mb-12">
                <h4 className="card-header bg-light text-dark p-5 m-0">
                  {skill} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsList;
