import { PLATFORM } from '../constants/warframe'

// warframestat.us
const get_url = (platform=PLATFORM.PC) => {
  switch (platform) {
  case PLATFORM.PC:
    return 'http://content.warframe.com/dynamic/worldState.php'
  case PLATFORM.PS4:
    return 'http://content.warframe.ps4.com/dynamic/worldState.php'
  case PLATFORM.XBOX1:
    return 'http://content.warframe.xb1.com/dynamic/worldState.php'
  default:
    throw new Error('Invalid Platform', 'Invalid platform provided')
  }
}

const fetch_world_state = (platform=PLATFORM.PC) => {
  const url = get_url(platform)
  return fetch(url)
    .then(res => res.json())
}

export { fetch_world_state }
