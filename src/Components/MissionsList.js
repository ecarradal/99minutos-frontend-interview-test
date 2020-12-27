import React from 'react'
import MissionCard from './MissionsList'

const MissionsList = ({exercises}) => (
  <>
    {
      exercises.map((mission) => {
        return (
          <MissionCard
          mission={mission}
          />
        )
      })
    }
  </>
)

export default MissionsList