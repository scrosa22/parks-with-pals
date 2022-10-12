import React from 'react';


    const continentSelect = document.getElementById('state-select')
    const stateList = document.getElementById('state-list')



function ParkSearch() {

  
  
      fetch('https://developer.nps.gov/api/v1/parks?stateCode=GA&stateCode=&api_key=Tk6fBL9Bwm4TDRp2fHSPEN8zDwt9ZHzowZbMSeI0')
      .then(res => res.json())
      .then(data => {
        data.data.forEach(continent => {
          const element = document.createElement('div')
          element.innerText += continent.name
          element.innerText += continent.designation
          stateList.append(element)
          
          
        }) 
  })


  return (

    <div>


      <div class="input-group mb-3">
        {/* <input type="text" class="form-control form-control-lg rounded" value="State" aria-label="readonly input example" readonly />
        <button type="button" id="" class="btn btn-outline-primary">Search for a park</button> */}

        <select id="state-select">
        <option selected hidden>Select a state</option>
        </select>
      </div>


      <div id="state-list"></div>


    </div>

  )
}

export default ParkSearch;

