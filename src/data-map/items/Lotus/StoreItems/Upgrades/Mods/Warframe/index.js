import mapDualStatMod from './DualStat'

const DESCRIPTORS = {
  DUALSTAT: 'DualStat'
}


const mapItem = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  switch (res[1]) {
  case DESCRIPTORS.DUALSTAT:
    return mapDualStatMod(res[2])
  default:
    return raw
  }
}

export default mapItem
