const FACTIONS = {
  FC_GRINEER: 'Grineer',
  FC_INFESTATION: 'Infested',
  FC_CORPUS: 'Corpus',
  FC_OROKIN: 'Corrupted'
}

const mapFactionType = (raw) => {
  return FACTIONS[raw]
    ? FACTIONS[raw]
    : raw
}

export default mapFactionType
