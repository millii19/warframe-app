import mapItemType from './Mods'

const DESCRIPTORS = {
  MODS: 'Mods'
}

const mapItem = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  switch (res[1]) {
  case DESCRIPTORS.MODS:
    return mapItemType(res[2])
  default:
    return raw
  }
}

export default mapItem
