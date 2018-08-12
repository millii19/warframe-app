import mapItemType from './FusionBundles'
import mapWarframeMods from './Warframe'

const DESCRIPTORS = {
  FUSION_BUNDLES: 'FusionBundles',
  WARFRAME: 'Warframe'
}


const mapItem = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  switch (res[1]) {
  case DESCRIPTORS.FUSION_BUNDLES:
    return mapItemType(res[2])
  case DESCRIPTORS.WARFRAME:
    return mapWarframeMods(res[2])
  default:
    return raw
  }
}

export default mapItem
