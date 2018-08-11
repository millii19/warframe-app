const ITEM_TYPES = {
  '/Lotus/StoreItems/Types/Recipes/Helmets/MirageAltBHelmetBlueprint': 'Mirage Alt Helmet B',
  '/Lotus/StoreItems/Types/Recipes/Helmets/NidusAltHelmetBlueprint': 'Nidus Alt Helmet',
  '/Lotus/Types/Items/MiscItems/Eventium': 'Synthula',
  '/Lotus/StoreItems/Types/Recipes/Weapons/JawBlueprint': 'Jaw Sword Blueprint'
}

const mapItemType = (raw) => {
  return ITEM_TYPES[raw]
    ? ITEM_TYPES[raw]
    : raw
}

export default mapItemType
