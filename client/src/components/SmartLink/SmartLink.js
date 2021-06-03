import React from "react"
import { Link } from "gatsby"
const SmartLink = props => {
  const { href } = props
  delete props.href
  const regex = new RegExp(
    /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/gim
  )
  const isExternal = regex.test(href)
  return isExternal ? (
    <a href={href} {...props}>
      {props.children}
    </a>
  ) : (
    <Link to={href} {...props}>
      {props.children}
    </Link>
  )
}
export default SmartLink
