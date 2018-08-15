import mapLotusItemType from './Lotus'
// import Items from 'warframe-items'

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


// const items = new Items()
// const items = require('../../../node_modules/warframe-items/data/json/All.json')
/*
const mapWarframeItem = (str) => {
  const arr = items.filter(item => item.uniqueName === str)
  return arr.length === 1
    ? arr[0].name
    : str
}


export { items }
export default mapWarframeItem
*/
export default mapItem
