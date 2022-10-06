import React from 'react';

function ParkSearch() {
  return (
<div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">Search for a park</button>
</div>

  )
}

export default ParkSearch;