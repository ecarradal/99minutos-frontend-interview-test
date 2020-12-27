const Constants = {
  LAST_LAUNCHES_QUERY: `{
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
  }`,

}

export default Constants