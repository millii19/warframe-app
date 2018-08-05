const MISSION_TYPES = {
  MT_INTEL: 'Interception'
}

const mapMissionType = (raw) => {
  return MISSION_TYPES[raw]
    ? MISSION_TYPES[raw]
    : raw
}

export default mapMissionType
