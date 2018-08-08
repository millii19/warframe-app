import mapRewardType, { REWARD_TYPE } from '../data-map/rewards'
import mapItemType from '../data-map/items'

class Reward {
  constructor(type, value) {
    this.type = type
    this.value = value
  }
}

const convertReward = (type, reward) => {
  switch (type) {
  case REWARD_TYPE.CREDITS:
    return Number(reward)
  case REWARD_TYPE.ITEM:
    return mapItemType(reward)
  default:
    return reward
  }
}


const generateReward = (type, reward) => {
  const rType = mapRewardType(type)
  return new Reward(
    rType,
    convertReward(rType, reward)
  )
}

export { generateReward }
export default Reward
