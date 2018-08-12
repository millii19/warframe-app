const DESCRIPTORS = {
  RunSpeedArmorMod: 'Armored Agility'
}

const mapItemType = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  return DESCRIPTORS[res[1]]
    ? DESCRIPTORS[res[1]]
    : raw
}

export default mapItemType
