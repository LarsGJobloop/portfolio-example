export function ExternalLink(props) {
  const {
    href,
    children
  } = props

  return (
    <a href={href} target="_blank" referrerPolicy="no-referrer">
      {children}
    </a>
  )
}