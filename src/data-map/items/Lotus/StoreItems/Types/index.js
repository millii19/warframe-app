import mapRecipesItemType from './Recipes'

const DESCRIPTORS = {
  RECIPES: 'Recipes'
}

const mapItemType = (str) => {
  const res = /\/(\w+)(\/.+)/.exec(str)
  switch (res[1]) {
  case DESCRIPTORS.RECIPES:
    return mapRecipesItemType(res[2])
  default:
    return res
  }
}

export default mapItemType
