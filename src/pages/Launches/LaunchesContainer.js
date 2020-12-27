import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Constants from '../../Constants'
import Launches from './LaunchesContainer'

const LAST_LAUNCHES = gql`${Constants.LAST_LAUNCHES_QUERY}`

function LaunchesContainer() {
  const { loading, error, data } = useQuery(LAST_LAUNCHES)

  if (loading)
    return <p>Loading...</p>;
  if (error)
    return <p>Error :(</p>;

  console.log('data :>> ', data);
    // return <Launches data={data} />

}

export default LaunchesContainer
