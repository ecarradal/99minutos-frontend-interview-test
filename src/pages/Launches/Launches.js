import React from 'react'
import MainTitle from '../../Components/MainTitle'
import MissionsList from '../../Components/MissionsList'

const Launches = ({data}) => (
  <>
    <MainTitle />
    <MissionsList missions={data} />
  </>
)

export default Launches
