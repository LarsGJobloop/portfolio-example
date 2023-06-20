import { useParams } from "react-router-dom"

export function ProjectPage() {
  const { projectSlug } = useParams()

  return (
    <h1>{projectSlug}</h1>
  )
}