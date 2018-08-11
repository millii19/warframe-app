import mapRewardType, { REWARD_TYPE } from '../data-map/rewards'
import mapItemType from '../data-map/items'

class Reward {
  constructor(type, value) {
    this.type = type
    this.value = value
  }

  string = () => {
    if (this.type === REWARD_TYPE.ITEM) {
      return this.value
    }
    if (this.value === 1) {
      return this.type
    }

    return this.value + ' ' + this.type
  }
}

const convertReward = (type, reward) => {
  switch (type) {
  case REWARD_TYPE.CREDITS:
    return Number(reward)
  case REWARD_TYPE.ITEM:
    const item = mapItemType(reward)
    if (item.includes('/')) {
      console.warn(reward)
    }
    return item
  default:
    return reward
  }
}

function firstOrArray(arr) {
  return (arr.length === 1)
    ? arr[0]
    : arr
}

const generateReward = (type, reward) => {
  const rType = mapRewardType(type)

  if (rType === REWARD_TYPE.COUNTED_ITEMS) {
    return firstOrArray(reward.map(r =>
      generateReward(mapItemType(r.ItemType), r.ItemCount)
    ))
  }

  return new Reward(
    rType,
    convertReward(rType, reward)
  )
}

export { generateReward }
export default Reward
