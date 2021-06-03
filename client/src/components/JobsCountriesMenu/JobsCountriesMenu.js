import React, { useState, useRef } from "react"
import JobsCountriesMenuStyles from "./JobsCountriesMenu.module.scss"
const JobsCountriesMenu = ({ jobs, setCountries }) => {
  const allCountriesEl = useRef(null)
  const [chosenCountry, setChosenCountry] = useState(allCountriesEl)

  const countriesList = jobs.map(curr => curr.country)
  const filteredCountries = countriesList
    .filter((curr, ind) => countriesList.indexOf(curr) === ind)
    .map(country => {
      return {
        country,
        count: jobs.reduce(
          (acc, curr) => (curr.country === country ? acc + 1 : acc),
          0
        ),
      }
    })
  const totalCount = filteredCountries.reduce(
    (acc, { count }) => acc + count,
    0
  )
  const toggleCountry = event => {
    const element = event.target
    const country = element.textContent.match(/[a-zA-Z]+(\s[a-zA-Z]+)*/gim)[0]
    const lastChosen = chosenCountry.current
      ? chosenCountry.current
      : chosenCountry
    setChosenCountry(element)
    lastChosen.classList.remove(JobsCountriesMenuStyles.active)
    element.classList.add(JobsCountriesMenuStyles.active)
    setCountries(country === "All" ? [] : [country])
  }

  return (
    <div>
      <ul>
        <li
          className={`${JobsCountriesMenuStyles.country} ${JobsCountriesMenuStyles.active}`}
          ref={allCountriesEl}
        >
          <div
            onClick={toggleCountry}
            onKeyDown={toggleCountry}
            role="button"
            tabIndex={0}
          >
            All {`(${totalCount})`}
          </div>
        </li>
        {filteredCountries.map(({ country, count }, ind) => (
          <li
            key={`country-filter-menu-item-${ind}`}
            className={JobsCountriesMenuStyles.country}
          >
            <div
              onClick={toggleCountry}
              onKeyDown={toggleCountry}
              role="button"
              tabIndex={0}
            >{`${country} (${count})`}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default JobsCountriesMenu
