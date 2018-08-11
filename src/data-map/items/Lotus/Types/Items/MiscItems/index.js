const DESCRIPTORS = {
  Eventium: 'Synthula',
  NeuralSensor: 'Neural Sensors',
  Ferrite: 'Ferrite',
  Tellurium: 'Tellurium'
}

const mapItemType = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  return DESCRIPTORS[res[1]]
    ? DESCRIPTORS[res[1]]
    : raw
}

export default mapItemType
