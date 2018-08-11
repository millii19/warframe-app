const ITEMS = {
  AlertFusionBundleSmall: '80 Endo',
  AlertFusionBundleMedium: '100 Endo'
}

const mapItemType = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  switch (res[1]) {
  default:
    return ITEMS[res[1]]
      ? ITEMS[res[1]]
      : raw
  }
}

export default mapItemType
