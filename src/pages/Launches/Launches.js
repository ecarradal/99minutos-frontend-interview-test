import React from 'react'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      flickr_images
    }
    rocket {
      rocket_name
    }
    ships {
      name
      home_port
      image
    }
    details
  }
}

`;

function Launches() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launchesPast.map(mission => (
    <div key={mission.mission_name}>
      <h1> {mission.mission_name}</h1>
      <p> {mission.launch_site.site_name_long} </p>
    </div>

  ));
}

export default Launches
