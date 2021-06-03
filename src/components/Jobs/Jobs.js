import React, { useState, useEffect, useCallback } from "react"
import JobsStyles from "./Jobs.module.scss"
import JobsCountriesMenu from "../JobsCountriesMenu/JobsCountriesMenu"
import JobListingList from "../JobListingList/JobListingList"
import { ComeetToJson } from "./ComeetToJson"
import { useStaticQuery, graphql } from "gatsby"
import { useTimeout } from "../../hooks/useTimeout"
import { useInterval } from "../../useInterval"
import axios from "axios"
const capitalize = phrase =>
  phrase
    .match(/\w+/gim)
    .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ")

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulJobsList {
        nodes {
          usaJobs {
            department
            country
            location
            link
            title
          }
          comeet {
            companyUid
            companyName
            token
          }
          workdayJobsApi
        }
      }
      allContentfulFlagIcon {
        nodes {
          country
          flagIcon {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const [jobs, setJobs] = useState([])
  const flags = data.allContentfulFlagIcon.nodes.reduce((acc, curr) => {
    const newAcc = { ...acc }
    newAcc[curr.country.toLowerCase().trim()] = curr.flagIcon.fluid
    return newAcc
  }, {})
  const getJobs = useCallback(() => {
    const { workdayJobsApi, comeet } = data.allContentfulJobsList.nodes[0]
    const { companyUid, token } = comeet
    try {
      // TODO: to be used in prod, getting the content by scraping
      const workdayJobsChecker = workdayJobsApi =>
        setTimeout(async () => {
          const res = await axios.get(workdayJobsApi)
          const { success, data } = res.data
          if (!success) {
            workdayJobsChecker(workdayJobsApi)
          } else {
            // console.log(jobs)
            setJobs(j => [...j, ...data])
          }
        }, 1000 * 10)

      axios.get(workdayJobsApi).then(res => {
        const { success, data } = res.data
        if (!success) {
          workdayJobsChecker(workdayJobsApi)
        } else {
          setJobs(j => [...j, ...data])
        }
      })

      ComeetToJson(token, companyUid).then(comeetJobs =>
        setJobs(j => [...j, ...comeetJobs])
      )
    } catch (e) {
      // console.log(e)
    }
  }, [data.allContentfulJobsList.nodes])

  useEffect(() => {
    getJobs()
  }, [getJobs])

  const [countries, setCountries] = useState([])

  // I should have all the cards built and ready for display, and use the filter
  // just to display them, and not rebuilt the JSX
  return (
    <div className={JobsStyles.jobsSection}>
      <div className={JobsStyles.countriesMenu}>
        <JobsCountriesMenu setCountries={setCountries} jobs={jobs} />
      </div>
      <div className={JobsStyles.cardsList}>
        <JobListingList countries={countries} jobs={jobs} flags={flags} />
      </div>
    </div>
  )
}
export default Jobs
