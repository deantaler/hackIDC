import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import GameCardsList from "../GameCardsList/GameCardsList"
import RuleCardList from "../RuleCardList/RuleCardList"
import CareerCardList from "../CareerCardList/CareerCardList"
import InlineButton from "../InlineButton/InlineButton"
import RichTextRendererStyles from "../RichTextRenderer/RichTextRenderer.module.scss"
import CoreValue from "../CoreValue/CoreValue"
import Jobs from "../Jobs/Jobs"
import SmartLink from "../SmartLink/SmartLink"
const embbededEntryBlockParser = node => {
  const nodeSysInfo = node.data.target.sys
  const nodeFields = node.data.target.fields
  if (nodeSysInfo.contentType.sys.id === `gameCardsList`) {
    return (
      <GameCardsList
        cards={nodeFields.gameCards[`en-US`]}
        visuals={nodeFields.visuals[`en-US`]}
      />
    )
  } else if (nodeSysInfo.contentType.sys.id === `ruleCardList`) {
    return <RuleCardList cards={nodeFields.ruleCards[`en-US`]} />
  } else if (nodeSysInfo.contentType.sys.id === `careerCardList`) {
    return <CareerCardList cards={nodeFields.careerCards[`en-US`]} />
  } else if (nodeSysInfo.contentType.sys.id === `jobsList`) {
    return <Jobs></Jobs>
  } else if (nodeSysInfo.contentType.sys.id === `inlineButton`) {
    const text = nodeFields.text[`en-US`]
    const textColor = nodeFields.textColor[`en-US`]
    const backgroundColor = nodeFields.backgroundColor[`en-US`]
    const href = nodeFields.href[`en-US`]
    const info = { text, textColor, href, backgroundColor }
    return <InlineButton {...info}></InlineButton>
  } else if (nodeSysInfo.contentType.sys.id === `coreValue`) {
    const title = nodeFields.title[`en-US`]
    const content = nodeFields.content[`en-US`]
    return <CoreValue title={title} content={content} />
  } else {
    return <p>Another entry</p>
  }
}

const embeddedEntryInlineParser = node => {
  const nodeSysInfo = node.data.target.sys
  const nodeFields = node.data.target.fields
  if (nodeSysInfo.contentType.sys.id === `linkableImage`) {
    const { altText, image, url } = nodeFields
    const alt = altText["en-US"]
    const imgSrc = image["en-US"].fields.file["en-US"].url
    const { height, width } = image["en-US"].fields.file["en-US"].details
    return (
      <SmartLink href={url["en-US"]}>
        <img
          src={imgSrc}
          alt={alt}
          height={height}
          width={width}
          className={RichTextRendererStyles.downloadButton}
        />
      </SmartLink>
    )
  } else {
    return <p>Another entry</p>
  }
}

const inlineRenderrer = node => {
  return (
    <span className={RichTextRendererStyles.linkList}>
      {node.content.map(link => (
        <SmartLink
          key={link.value.substring(0, 8)}
          href={node.data.uri}
          className={RichTextRendererStyles.link}
        >
          {link.value}
        </SmartLink>
      ))}
    </span>
  )
}
const hrRenderrer = node => {
  return (
    <div className={RichTextRendererStyles.seperator}>
      <span className={RichTextRendererStyles.leftHolder}>
        <span className={RichTextRendererStyles.line}></span>
      </span>
      <span className={RichTextRendererStyles.rightHolder}>
        <span className={RichTextRendererStyles.line}></span>
      </span>
    </div>
  )
}
const RichTextRenderer = props => {
  const { content } = props
  const options = {
    renderNode: {
      "embedded-entry-block": embbededEntryBlockParser,
      "embedded-entry-inline": embeddedEntryInlineParser,
      // paragraph: node => <p>Hello</p>,
      [INLINES.HYPERLINK]: inlineRenderrer,
      [BLOCKS.HR]: hrRenderrer,
    },
  }

  return <div>{documentToReactComponents(content, options)}</div>
}
export default RichTextRenderer
