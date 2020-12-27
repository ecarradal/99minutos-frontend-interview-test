import React from 'react'
import MissionsList from '../../Components/MissionsList'

const Launches = ({missions}) => (
  <>
    <div><MissionsList missions={missions.launchesPast} /></div>
  </>
)

export default Launches
