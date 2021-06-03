const fetch = require("node-fetch")

const capitalize = phrase =>
  phrase
    .match(/\w+/gim)
    .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ")

const ComeetToJson = async (token, uid, companyName, currJobs, setJobs) => {
  const jobsReq = await fetch(
    `https://www.comeet.co/careers-api/2.0/company/${uid}/positions?token=${token}`
  )
  const jobs = await jobsReq.json()

  return await Promise.all(
    jobs.map(async entry => {
      const jobDetReq = await fetch(
        `https://www.comeet.co/careers-api/2.0/company/D5.00A/positions/${entry.uid}?token=${token}&details=true`
      )
      const jobDetails = await jobDetReq.json()

      return {
        title: entry.name,
        department: entry.department,
        city: capitalize(entry.location.city),
        country: capitalize(entry.location.name),
        link: jobDetails.url_comeet_hosted_page,
      }
    })
  )
  // setJobs([...currJobs, ...allJobs])
}
module.exports = {
  ComeetToJson,
}
