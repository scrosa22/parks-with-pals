import React from 'react';
import ParkSearch from '../components/ParkSearch';
// import Background from '../Images/trees.jpg';


export default function Home() {
  return (
    <div class="p-5 text-center bg-image" 
    // id="Home" style={{ backgroundImage: "url(" + Background + ")"
// }} 
>
      <p>
      Parks with Pals provides you with a user-friendly and intuitive resource for finding the national parks in 
        each state. The website provides users with an opportunity to leave comments
        on their experiences at the parks so that other users can glean insights and suggestions
        for their upcoming travel plans. To start, sign up and enjoy. Happy travels. 
        <br></br><br></br>
        <div>
        <iframe
      width="653"
      height="280"
      src={`https://www.youtube.com/embed/zTBmv-Gzf2w`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
      </p>
      <ParkSearch />
    </div>
  );
}
