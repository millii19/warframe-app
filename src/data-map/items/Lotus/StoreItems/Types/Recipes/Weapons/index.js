import mapSkinItemType from './Skins'

const DESCRIPTORS = {
  SKINS: 'Skins'
}

const ITEMS = {
  JawBlueprint: 'Jaw Sword BP',
  PangolinSwordBlueprint: 'Pangolin Sword BP'
}

const mapItemType = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  switch (res[1]) {
  case DESCRIPTORS.SKINS:
    return mapSkinItemType(res[2])
  default:
    return ITEMS[res[1]]
      ? ITEMS[res[1]]
      : raw
  }
}

export default mapItemType
