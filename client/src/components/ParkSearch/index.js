import React from 'react';



function ParkSearch() {
  return (
<div class="container">
<h3>National Park Finder</h3>
<form class="js-form">
<label for="search-term">Enter one or more state abbreviations, separated by commas: </label>
<input type="text" class="form-control form-control-lg rounded" value="State" aria-label="readonly input example" readonly />
<label for="max-results">Maximum number of results to return: </label>
<input type="number" name="max-results" id="js-max-results" value="10"/>
<input type="submit" value="Go!"></input>

</form>
<br></br>
<button type="button" class="btn btn-outline-primary">Search for a park</button>


</div>


  )
}

export default ParkSearch;

