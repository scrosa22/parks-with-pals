import React from 'react';

export default function Home() {
  return (
    <div>
      <p>
      Parks with Pals provides you with a user-friendly and intuitive resource for finding the national parks in 
        each state. The website provides users with an opportunity to leave comments
        on their experiences at the parks so that other users can glean insights and suggestions
        for their upcoming travel plans. To start, sign up and enjoy. Happy travels. 
        <br></br><br></br>
        <div>
        <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/t4sK8d48Exs`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
      </p>
    </div>
  );
}
