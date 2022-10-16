import React from 'react';

const stateList = document.getElementById('state-list')
const stateList2 = "AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY"

let stateSearch = document.getElementById('parksearch-box')
const stateSelect = document.getElementById('parksearch-btn')


// function displayparks (event) {
//   event.preventDefault();
//   if(stateSearch.val().trim()!==""){
//       stateSearch=stateSearch.val().trim();
//       ParkSearch(stateSearch);
//     }
//   }
  
  // stateSelect.addEventListener('onclick', e => {
    //     const statexx = stateSearch.value
    //   ParkSearch(statexx)
    
    // })
    
    
    // continentSelect.addEventListener('change', async e => {
    //   const continentCode = e.target.value
    //   const countries = await getContinentCountries(continentCode)
    //   countryList.innerHTML = ''
    //   countries.forEach(country => {
    //     const element = document.createElement('div')
    //     element.innerText = country.name
    //     countryList.append(element)
    //   })
    // })


function ParkSearch() {
    const stateSearchxx = stateList
      fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateSearchxx}&stateCode=&api_key=Tk6fBL9Bwm4TDRp2fHSPEN8zDwt9ZHzowZbMSeI0`)
      .then(res => res.json())
      .then(data => {
        data.data.forEach(state => {
          const element = document.createElement("div")
          element.innerHTML += "Name:" + state.fullName + "<br />"
          element.innerHTML += "Description:" +state.description + "<br />"
          element.innerHTML += "Weather Info:" +state.weatherInfo + "<br />"
          element.innerHTML += "Fees :" +state.entranceFees + "<br />"

          element.innerHTML += "<br />"+ "<br />" + "<br />"
          stateList.append(element)


          
        }) 
  });






  return (

    <div>


      <div class="input-group mb-3">
    

        {/* <select id="state-select">
        <option selected hidden>Select a state</option>
        </select> */}
      </div>

      <h3>National Park Search</h3>
      
      <form class="js-form">
      <input type="text" id="parksearch-box" class="form-control form-control-lg rounded" />
      <button type="button" id="parksearch-btn" class="btn btn-outline-primary" >Search by state</button>
      </form>


      <div class="card-header text-dark p-5 m-2" id="state-list"></div>



      {/* <div class="container">
      
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

