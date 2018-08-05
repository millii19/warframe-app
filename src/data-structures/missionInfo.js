import mapMissionType from '../data-map/mission-types'
import mapFactionType from '../data-map/factions'

class MissionInfo {
  constructor(type, faction, location, minEnemyLevel, maxEnemyLevel,
    difficulty, rewards, rounds=-1) {
    this.type = type
    this.faction = faction
    this.location = location
    this.minEnemyLevel = minEnemyLevel
    this.maxEnemyLevel = maxEnemyLevel
    this.difficulty = difficulty
    this.rounds = rounds
    Object.freeze(this)
  }
}

const generateMissionInfo = (data) => {
  return new MissionInfo(
    mapMissionType(data.missionType),
    mapFactionType(data.faction),
    data.location,
    data.minEnemyLevel,
    data.maxEnemyLevel,
    data.difficulty,
    data.missionRewards,
    data.maxWaveNum
  )
}

export { generateMissionInfo }
export default MissionInfo