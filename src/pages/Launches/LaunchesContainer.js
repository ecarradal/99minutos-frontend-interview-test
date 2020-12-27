import Constants from '../../Constants'
import Launches from './Launches'
import MainTitle from '../../Components/MainTitle'
import React from 'react'
import Spinner from '../../Components/spinner'
import { useQuery, gql } from '@apollo/client';

const LAST_LAUNCHES = gql`${Constants.LAST_LAUNCHES_QUERY}`

function LaunchesContainer() {
  const { loading, error, data } = useQuery(LAST_LAUNCHES)

  return (
    <div>
      <MainTitle />
      <div>
        {loading && <Spinner />}
        {error && <h2>SpaceX API Error :C</h2>}
        {data && <Launches missions={data} />}
      </div>
    </div>
  )

}

export default LaunchesContainer
