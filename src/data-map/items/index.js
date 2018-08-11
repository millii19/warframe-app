import mapLotusItemType from './Lotus'

const DESCRIPTORS = {
  LOTUS: 'Lotus'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.LOTUS:
    return mapLotusItemType(res[2])
  default:
    return res
  }
}

const mapItem = (str) => {
  const item = mapItemType(str)
  if (item.includes('/')) {
    console.warn(str)
  }
  return item
}

export default mapItem
