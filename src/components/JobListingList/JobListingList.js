import React from "react"
import JobListing from "../JobListing/JobListing"
const JobListingList = ({ jobs, countries, flags }) => {
  return (
    <div>
      {jobs
        .filter(
          curr => countries.length === 0 || countries.includes(curr.country)
        )
        .map((listing, ind) => (
          <JobListing key={`job-listing-${ind}`} {...listing} flags={flags} />
        ))}
    </div>
  )
}
export default JobListingList
