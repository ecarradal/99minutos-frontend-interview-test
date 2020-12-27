import React from 'react'
import MissionCard from './MissionCard'
import '../Styles/MissionCard.css'

const MissionsList = ({missions}) => (
  <>
    {
      missions.map((mission) => {
        return (
            <MissionCard mission={mission} key={mission.mission_name} />
        )
      })
    }
  </>
)


export default MissionsList