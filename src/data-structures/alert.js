import { generateMissionInfo } from './missionInfo'

class Alert {
  constructor(from, to, mission, id=null) {
    this.from = from
    this.to = to
    this.mission = mission
    this.id = id
    Object.freeze(this)
  }
}

const generateAlert = (data) => {
  const mission = generateMissionInfo(data.MissionInfo)
  return new Alert(
    new Date(data.Activation),
    new Date(data.Expiry),
    mission,
    data._id.$oid
  )
}

export { generateAlert }
export default Alert
