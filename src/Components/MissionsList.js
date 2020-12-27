import '../Styles/MissionCard.css'
import MissionCard from './MissionCard'
import React from 'react'

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