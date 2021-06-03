import React from "react"
import JobListingStyles from "./JobListing.module.scss"
import Img from "gatsby-image"
const JobListing = ({ title, department, country, city, link, flags }) => {
  const svgCarret = (
    <div className={JobListingStyles.carret}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 100 100"
      >
        <circle className="cls-1" cx="50" cy="50" r="50" />
        <path
          id="Arrow_105_-_Shapes4FREE_1"
          data-name="Arrow 105 - Shapes4FREE 1"
          className="cls-2"
          d="M77,50L32,13s-3.663,2.667-1,6c3.863,4.836,25,17.1,25,31S34.852,76.152,31,81c-2.655,3.341,1.334,6.332,1.334,6.332Z"
        />
      </svg>
    </div>
  )
  return (
    <div className={JobListingStyles.card}>
      <a href={link}>
        <div className={JobListingStyles.container}>
          <div className={JobListingStyles.info}>
            <div className={JobListingStyles.flagImageContainer}>
              <Img
                fluid={flags[country.toLowerCase()]}
                loading="lazy"
                alt={`${country} flag icon`}
              />
            </div>
            <div className={JobListingStyles.description}>
              <div className={JobListingStyles.title}>
                <h2>{title}</h2>
              </div>
              <div className={JobListingStyles.department}>
                <h3>{department.toLowerCase()}</h3>
              </div>
            </div>
            <div className={JobListingStyles.location}>
              <h5>{`${city.toLowerCase()}, ${country.toLowerCase()}`}</h5>
            </div>
          </div>
          {svgCarret}
        </div>
      </a>
    </div>
  )
}
export default JobListing
