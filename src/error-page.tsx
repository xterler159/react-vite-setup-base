import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage: FC = () => {
  const error = useRouteError() as Error

  return (
    <div id='error-page'>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage