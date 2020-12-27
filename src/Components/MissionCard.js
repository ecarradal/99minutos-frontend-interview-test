import React from 'react'
import '../Styles/MissionCard.css'
import { Link } from 'react-router-dom'

const MissionCard = ({ mission }) => (
  <Link
    to={{pathname:"/mission/", state: mission}}
    className="mission-card"
  >
    <div>
      <h2>
        { mission.mission_name }
      </h2>
    </div>
    <div>
      <p>
        { mission.launch_site.site_name_long }
      </p>
    </div>
  </Link>
)

export default MissionCard