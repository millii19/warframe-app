const MISSION_TYPES = {
  MT_INTEL: 'Interception',
  MT_CAPTURE: 'Capture',
  MT_DEFENSE: 'Defense',
  MT_SABOTAGE: 'Sabotage'
}

const mapMissionType = (raw) => {
  return MISSION_TYPES[raw]
    ? MISSION_TYPES[raw]
    : raw
}

export default mapMissionType
