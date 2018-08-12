const DESCRIPTORS = {
  Eventium: 'Synthula',
  NeuralSensor: 'Neural Sensors',
  Ferrite: 'Ferrite',
  Tellurium: 'Tellurium',
  Alertium: 'Nitain Extract',
  VoidTearDrop: 'Void Traces',
  OxiumAlloy: 'Oxium',
  ArgonCrystal: 'Argon Crystal'
}

const mapItemType = (raw) => {
  const res = /\/(\w+)(.*)/.exec(raw)
  return DESCRIPTORS[res[1]]
    ? DESCRIPTORS[res[1]]
    : raw
}

export default mapItemType
