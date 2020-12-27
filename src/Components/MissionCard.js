import React from 'react'

const MissionCard = ({ mission }) => (
  <div
    style={{
      backgroundImage: `url(${mission.imageUrl})`
    }}
  >
    <div>
      <h3>
        { mission.title }
      </h3>
    </div>
    <div>
      <p>
        { mission.description }
      </p>
    </div>
  </div>
)

export default MissionCard