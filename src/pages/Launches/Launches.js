import MissionsList from '../../Components/MissionsList'
import React from 'react'

const Launches = ({missions}) => (
  <>
    <div><MissionsList missions={missions.launchesPast} /></div>
  </>
)

export default Launches
