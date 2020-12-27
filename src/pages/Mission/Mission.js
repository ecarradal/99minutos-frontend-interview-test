import React from 'react'
import { Link } from 'react-router-dom'
import CoverImage from '../../Components/CoverImage'
import LeftArrow from '../../Statics/Icons/left-arrow.png'
import '../../Styles/ReturnButton.css'
import MissionDetails from '../../Components/MissionDetails'

class Mission extends React.Component {

  render() {
    return (
      <>
        <Link to="/launches" className="return-button">
          <img src={LeftArrow} className="arrow-left" alt="Return" />
        </Link>
        <CoverImage />
        <MissionDetails mission={this.props.location.state} />
      </>
    )

  }
}

export default Mission