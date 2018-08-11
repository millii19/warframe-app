import mapStoreItemsItemType from './StoreItems'
import mapTypesItemType from './Types'

const DESCRIPTORS = {
  STOREITEMS: 'StoreItems',
  TYPES: 'Types'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.STOREITEMS:
    return mapStoreItemsItemType(res[2])
  case DESCRIPTORS.TYPES:
    return mapTypesItemType(res[2])
  default:
    return res
  }
}

export default mapItemType
