import React from 'react';

const stateList = document.getElementById('state-list')


let stateSearch = document.getElementById('parksearch-box')
const stateSelect = document.getElementById('parksearch-btn')


function displayparks (event) {
  event.preventDefault();
  if(stateSelect.val().trim()!==""){
      stateSearch=stateSelect.val().trim();
      ParkSearch(stateSearch);
  }
}

function ParkSearch(stateSearch) {
 
      fetch('https://developer.nps.gov/api/v1/parks?stateCode=GA&stateCode=&api_key=Tk6fBL9Bwm4TDRp2fHSPEN8zDwt9ZHzowZbMSeI0')
      .then(res => res.json())
      .then(data => {
        data.data.forEach(state => {
          const element = document.createElement("div")
          element.innerText += state.name
          element.innerText += state.designation
          stateList.append(element)


          
        }) 
  });

 


  return (

    <div>


      <div className="input-group mb-3">
    

        <select id="state-select">
        <option selected hidden>Select a state</option>
        </select>
      </div>

      <form class="js-form">
      <input type="text" id="parksearch-box" class="form-control form-control-lg rounded" value="GA"/>
      <button type="button" id="parksearch-btn" class="btn btn-outline-primary">Search for a park</button>
      </form>
      <div id="state-list"></div>



      {/* <div class="container">
        <h3>National Park Finder</h3>
        <form class="js-form">
        <label for="search-term">Enter one or more state abbreviations, separated by commas: </label>
        <input type="text" class="form-control form-control-lg rounded" value="State" aria-label="readonly input example" readonly />
        <label for="max-results">Maximum number of results to return: </label>
        <input type="number" name="max-results" id="js-max-results" value="10"/>
        <input type="submit" value="Go!"></input>

        </form>
        <br></br>
        <button type="button" id="parksearch-btn" class="btn btn-outline-primary">Search for a park</button>
        </div> */}



    </div>
  )
}

export default ParkSearch;

