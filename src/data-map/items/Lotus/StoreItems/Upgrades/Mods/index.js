import mapItemType from './FusionBundles'

const DESCRIPTORS = {
  FUSION_BUNDLES: 'FusionBundles'
}


const mapItem = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  switch (res[1]) {
  case DESCRIPTORS.FUSION_BUNDLES:
    return mapItemType(res[2])
  default:
    return raw
  }
}

export default mapItem
