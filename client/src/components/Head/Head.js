import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, metaDescription }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // useEffect(() => {
  //   const scriptTag = document.createElement('script');
  //   scriptTag.type = 'text/javascript';
  //   scriptTag.innerHTML = `
  // window._tfa = window._tfa || [];
  // window._tfa.push({notify: 'event', name: 'page_view', id: 1209622});
  // !function (t, f, a, x) {
  //        if (!document.getElementById(x)) {
  //           t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
  //        }
  // }
  // (document.createElement('script'),
  // document.getElementsByTagName('script')[0],
  // '//cdn.taboola.com/libtrc/unip/1209622/tfa.js',
  // 'tb_tfa_script');
  //   `;

  //   const noScriptTag = document.createElement('noscript');
  //   const imageTag = document.createElement('img');
  //   imageTag.src = 'https://trc.taboola.com/1209622/log/3/unip?en=page_view';
  //   imageTag.style.display = 'none';
  //   noScriptTag.appendChild(imageTag);
  //   document.querySelector("head").appendChild(scriptTag);
  //   document.querySelector("head").appendChild(noScriptTag);
  // }, []);

  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default Head
