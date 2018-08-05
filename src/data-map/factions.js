const FACTIONS = {
  FC_GRINEER: 'Grineer'
}

const mapFactionType = (raw) => {
  return FACTIONS[raw]
    ? FACTIONS[raw]
    : raw
}

export default mapFactionType
