const REWARD_TYPE = {
  ITEM: 'Item',
  CREDITS: 'Credits',
  COUNTED_ITEMS: 'countedItems'
}


const REWARD_TYPES = {
  items: REWARD_TYPE.ITEM,
  credits: REWARD_TYPE.CREDITS
}

const mapRewardType = (raw) => {
  return REWARD_TYPES[raw]
    ? REWARD_TYPES[raw]
    : raw
}

export { REWARD_TYPE }
export default mapRewardType
