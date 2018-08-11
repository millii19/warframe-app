import mapItemsItemType from './Items'

const DESCRIPTORS = {
  ITEMS: 'Items'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.ITEMS:
    return mapItemsItemType(res[2])
  default:
    return res
  }
}

export default mapItemType
