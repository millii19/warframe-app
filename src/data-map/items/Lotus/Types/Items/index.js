import mapMiscItemsItemType from './MiscItems'

const DESCRIPTORS = {
  MISC_ITEMS: 'MiscItems'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.MISC_ITEMS:
    return mapMiscItemsItemType(res[2])
  default:
    return res
  }
}

export default mapItemType
