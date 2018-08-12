const MISSION_TYPES = {
  MT_CAPTURE: 'Capture',
  MT_DEFENSE: 'Defense',
  MT_SABOTAGE: 'Sabotage',
  MT_EXTERMINATION: 'Exterminate',
  MT_MOBILE_DEFENSE: 'Mobile Defense',
  MT_SURVIVAL: 'Survival',
  MT_TERRITORY: 'Interception',
  MT_RETRIEVAL: 'Hijack',
  MT_EXCAVATE: 'Excavation'
}

const mapMissionType = (raw) => {
  return MISSION_TYPES[raw]
    ? MISSION_TYPES[raw]
    : raw
}

export default mapMissionType
