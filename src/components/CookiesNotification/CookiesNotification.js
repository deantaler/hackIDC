import React from "react"
import cookiesNotificationStyles from "./CookiesNotification.module.scss"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
const CookiesNotification = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      buttonClasses={cookiesNotificationStyles.button}
      declineButtonClasses={`${cookiesNotificationStyles.button} ${cookiesNotificationStyles.declineButton}`}
      containerClasses={cookiesNotificationStyles.container}
      contentClasses={cookiesNotificationStyles.content}
      // enableDeclineButton
      flipButtons
    >
      This site uses cookies.
      <Link to="/cookies" className={cookiesNotificationStyles.policyLink}>
        Read our policy.
      </Link>
    </CookieConsent>
  )
}
export default CookiesNotification
