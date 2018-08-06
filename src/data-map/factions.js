const FACTIONS = {
  FC_GRINEER: 'Grineer',
  FC_INFESTATION: 'Infested',
  FC_CORPUS: 'Corpus'
}

const mapFactionType = (raw) => {
  return FACTIONS[raw]
    ? FACTIONS[raw]
    : raw
}

export default mapFactionType
