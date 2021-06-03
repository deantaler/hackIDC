import React from "react";
import footerStyles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      {/* <div className={footerStyles.icons}>
        {gameIcons.map((item, ind) => (
          <div
            key={`footer-game-icon-${ind}`}
            className={footerStyles.gameIcon}
          >
            <SmartLink href={item.linkUrl}>
              <Img
                fluid={item.fluid}
                loading="lazy"
                alt={item.description}
                width="100"
                height="100"
              />
            </SmartLink>
          </div>
        ))}
      </div>

      <div className={footerStyles.importantInfo}>
        <div className={footerStyles.copyrights}>{copyrights}</div>
        <div className={footerStyles.usefulLinks}>
          {pageLinksList.map((item, ind) => {
            const { title, slug } = item
            return (
              <div key={`footer-link-${ind}`} className={footerStyles.link}>
                {slug ? <Link to={`/${slug}`}>{title}</Link> : `${item}`}
              </div>
            )
          })}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
