import '../Styles/MissionDetails.css'
import React from 'react'
import SeeMoreButton from './SeeMoreButton'

const MissionDetails = ({mission}) => (
  <div className="mission-details-wrapper">
    <h1 className="center">
      {mission.mission_name}
    </h1>
    <p>
      {mission.details}
    </p>
    <SeeMoreButton url={mission.links.video_link} />
  </div>
)

export default MissionDetails