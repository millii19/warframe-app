import mapTypesItemType from './Types'
import mapUpgradesItemType from './Upgrades'

const DESCRIPTORS = {
  TYPES: 'Types',
  UPGRADES: 'Upgrades'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.TYPES:
    return mapTypesItemType(res[2])
   case DESCRIPTORS.UPGRADES:
    return mapUpgradesItemType(res[2])
  default:
    return res
  }
}

export default mapItemType
