const DESCRIPTORS = {
  MirageAltBHelmetBlueprint: 'Mirage Alt Helmet B BP',
  NidusAltHelmetBlueprint: 'Nidus Alt Helmet BP'
}

const mapItemType = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  return DESCRIPTORS[res[1]]
    ? DESCRIPTORS[res[1]]
    : raw
}

export default mapItemType
