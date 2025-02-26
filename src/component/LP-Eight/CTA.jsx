// CSS
import styles from "./styles/cta.module.css"

export default function CTA({
  link = "javascript:;",
  text = "Get Started",
  css = "",
  handle = "",
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="${link}" class="${styles.cta} ${css}" ${
          handle ? `onclick="${handle}"` : ""}>${text}</a>`,
      }}
    />
  )
}
