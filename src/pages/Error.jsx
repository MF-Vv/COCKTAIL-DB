import Wrapper from "../wrappers/ErrorPage"
import { Link, useRouteError } from "react-router-dom"
import img from "../assets/not-found.svg"

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>404 - Page Not Found</h3>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/">Go to Home</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
