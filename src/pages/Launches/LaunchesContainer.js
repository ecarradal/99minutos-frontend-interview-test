import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Constants from '../../Constants'
import Launches from './Launches'
import MainTitle from '../../Components/MainTitle'

const LAST_LAUNCHES = gql`${Constants.LAST_LAUNCHES_QUERY}`

function LaunchesContainer() {
  const { loading, error, data } = useQuery(LAST_LAUNCHES)

  if (loading)
    return <p>Loading...</p>;
  if (error)
    return <p>Error :(</p>;
  if (data)
    return (
      <div>
        <MainTitle />
        <Launches missions={data} />
      </div>
    )

}

export default LaunchesContainer
