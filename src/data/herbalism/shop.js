export const shopItems = [
  {
    id: "empty_vial",
    name: "Leeres Fläschchen",
    description: "Ein leeres Fläschchen zum Brauen von Tränken.",
    price: 5,
    category: "vial",
    icon: "🧪",
  },
  {
    id: "leaded_vial",
    name: "Bleibeschwertes Fläschchen",
    description: "Ein stabileres Fläschchen für anspruchsvollere Tränke.",
    price: 20,
    category: "vial",
    icon: "⚗️",
  },
  {
    id: "crystal_vial",
    name: "Kristallfläschchen",
    description: "Ein magisches Fläschchen für epische Tränke.",
    price: 100,
    category: "vial",
    icon: "💎",
  },
  {
    id: "imbued_vial",
    name: "Durchdrungenes Fläschchen",
    description: "Ein legendäres Fläschchen für die mächtigsten Tränke.",
    price: 500,
    category: "vial",
    icon: "🔮",
  },
  {
    id: "herb_bag",
    name: "Kräutertasche",
    description: "Erhöht die maximale Anzahl an Kräutern die du tragen kannst.",
    price: 50,
    category: "equipment",
    icon: "🎒",
    effect: "increases_inventory_limit",
  },
  {
    id: "potion_belt",
    name: "Trankgürtel",
    description: "Erhöht die maximale Anzahl an Tränken die du tragen kannst.",
    price: 75,
    category: "equipment",
    icon: "🗂️",
    effect: "increases_potion_limit",
  },
];

export const getShopItemById = (id) => shopItems.find((item) => item.id === id);

export const getShopItemsByCategory = (category) =>
  shopItems.filter((item) => item.category === category);
