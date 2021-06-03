import React from "react"
import SmartLink from "../SmartLink/SmartLink"
const SocialLinks = ({ socialLinks, groupClass, linkClass }) => {
  return (
    <div className={groupClass}>
      {socialLinks.map(social => {
        return (
          <SmartLink
            href={social.href}
            className={linkClass}
            dangerouslySetInnerHTML={{ __html: social.icon }}
          />
        )
      })}
    </div>
  )
}
export default SocialLinks
