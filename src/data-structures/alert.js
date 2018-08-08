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
  const alert = new Alert(
    new Date(Number(data.Activation.$date.$numberLong)),
    new Date(Number(data.Expiry.$date.$numberLong)),
    mission,
    data._id.$oid
  )
  return alert
}

export { generateAlert }
export default Alert
