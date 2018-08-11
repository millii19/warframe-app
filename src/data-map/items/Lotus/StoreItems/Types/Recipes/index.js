import mapHelmetsItemType from './Helmets'
import mapWeaponsItemType from './Weapons'

const DESCRIPTORS = {
  HELMETS: 'Helmets',
  WEAPONS: 'Weapons'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.HELMETS:
    return mapHelmetsItemType(res[2])
  case DESCRIPTORS.WEAPONS:
    return mapWeaponsItemType(res[2])
  default:
    return res
  }
}

export default mapItemType
