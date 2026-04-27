import React, { useState, useCallback } from "react";
import { herbs, getHerbById } from "../data/herbalism/herbs.js";
import { potions, getPotionById } from "../data/herbalism/potions.js";
import { shopItems, getShopItemById } from "../data/herbalism/shop.js";
function Herbalism() {
  const [inventory, setInventory] = useState({});
  const [gold, setGold] = useState(0);
  const [craftedPotions, setCraftedPotions] = useState({});
  const [selectedZone, setSelectedZone] = useState("Elwynn Forest");
  const [message, setMessage] = useState("");
  const [vials, setVials] = useState({});

  // Available zones for harvesting
  const zones = [
    "Elwynn Forest",
    "Dun Morogh",
    "Westfall",
    "Loch Modan",
    "Hillsbrad Foothills",
    "Silverpine Forest",
    "Duskwood",
    "Ashenvale",
    "Wetlands",
    "Thousand Needles",
    "Arathi Highlands",
    "Alterac Mountains",
    "Swamp of Sorrows",
    "The Hinterlands",
    "Tanaris",
    "Feralas",
    "Winterspring",
    "Searing Gorge",
    "Burning Steppes",
    "Eastern Plaguelands",
    "Western Plaguelands",
    "Felwood",
    "Un'Goro Crater",
    "Maraudon",
    "Razorfen Downs",
    "Azshara",
    "Silithus",
    "Blasted Lands",
  ];

  // Get herbs available in current zone
  const getAvailableHerbs = () => {
    return herbs.filter((herb) => herb.zones.includes(selectedZone));
  };

  // Calculate total inventory value
  const getTotalInventoryValue = () => {
    return Object.entries(inventory).reduce((total, [herbId, amount]) => {
      const herb = getHerbById(herbId);
      return total + (herb ? herb.sellValue * amount : 0);
    }, 0);
  };

  // Harvest a herb
  const harvestHerb = useCallback((herbId) => {
    const herb = getHerbById(herbId);
    if (!herb) return;

    // Random chance to find herb (simulating gathering skill)
    const successChance = Math.random();
    const skillLevel = 50; // Could be made dynamic later

    if (successChance < 0.7 + skillLevel / 1000) {
      // 70% + skill bonus
      setInventory((prev) => ({
        ...prev,
        [herbId]: (prev[herbId] || 0) + 1,
      }));
      setMessage(`Du hast ${herb.name} gesammelt!`);
    } else {
      setMessage("Die Kräutersuche war erfolglos.");
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  }, []);

  // Sell all herbs
  const sellAllHerbs = () => {
    const totalValue = getTotalInventoryValue();
    if (totalValue === 0) {
      setMessage("Du hast keine Kräuter zum Verkaufen.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setGold((prev) => prev + totalValue);
    setInventory({});
    setMessage(`Du hast alle Kräuter für ${totalValue} Gold verkauft!`);
    setTimeout(() => setMessage(""), 3000);
  };

  // Check if player has enough ingredients for a potion
  const canCraftPotion = (potion) => {
    return potion.ingredients.every((ingredient) => {
      if (ingredient.herbId) {
        const currentAmount = inventory[ingredient.herbId] || 0;
        return currentAmount >= ingredient.amount;
      } else if (ingredient.vialId) {
        const currentAmount = vials[ingredient.vialId] || 0;
        return currentAmount >= ingredient.amount;
      }
      return false;
    });
  };

  // Craft a potion
  const craftPotion = (potionId) => {
    const potion = getPotionById(potionId);
    if (!potion || !canCraftPotion(potion)) return;

    // Remove ingredients from inventory
    const newInventory = { ...inventory };
    const newVials = { ...vials };

    potion.ingredients.forEach((ingredient) => {
      if (ingredient.herbId) {
        newInventory[ingredient.herbId] -= ingredient.amount;
        if (newInventory[ingredient.herbId] <= 0) {
          delete newInventory[ingredient.herbId];
        }
      } else if (ingredient.vialId) {
        newVials[ingredient.vialId] -= ingredient.amount;
        if (newVials[ingredient.vialId] <= 0) {
          delete newVials[ingredient.vialId];
        }
      }
    });

    setInventory(newInventory);
    setVials(newVials);
    setCraftedPotions((prev) => ({
      ...prev,
      [potionId]: (prev[potionId] || 0) + 1,
    }));
    setMessage(`Du hast ${potion.name} hergestellt!`);
    setTimeout(() => setMessage(""), 3000);
  };

  // Sell a potion
  const sellPotion = (potionId) => {
    const potion = getPotionById(potionId);
    if (!potion || !craftedPotions[potionId]) return;

    setGold((prev) => prev + potion.sellValue);
    setCraftedPotions((prev) => {
      const newPotions = { ...prev };
      newPotions[potionId] -= 1;
      if (newPotions[potionId] <= 0) {
        delete newPotions[potionId];
      }
      return newPotions;
    });
    setMessage(`Du hast ${potion.name} für ${potion.sellValue} Gold verkauft!`);
    setTimeout(() => setMessage(""), 3000);
  };

  // Buy item from shop
  const buyItem = (itemId) => {
    const item = getShopItemById(itemId);
    if (!item || gold < item.price) {
      setMessage(
        item ? "Du hast nicht genug Gold!" : "Gegenstand nicht gefunden.",
      );
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setGold((prev) => prev - item.price);

    if (item.category === "vial") {
      setVials((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));
    }

    setMessage(`Du hast ${item.name} gekauft!`);
    setTimeout(() => setMessage(""), 3000);
  };

  // Get rarity color
  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "text-gray-600";
      case "uncommon":
        return "text-green-600";
      case "rare":
        return "text-blue-600";
      case "epic":
        return "text-purple-600";
      case "legendary":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with inventory and gold */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-green-800">
              🌿 Kräuterkunde
            </h1>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">
                💰 {gold} Gold
              </div>
              <div className="text-sm text-gray-600">
                Inventarwert: {getTotalInventoryValue()} Gold
              </div>
            </div>
          </div>

          {/* Inventory Display */}
          <div className="mb-4">
            {/* Herbs */}
            {Object.keys(inventory).length > 0 && (
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Kräuter:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {Object.entries(inventory).map(([herbId, amount]) => {
                    const herb = getHerbById(herbId);
                    if (!herb) return null;
                    return (
                      <div
                        key={herbId}
                        className="bg-green-50 p-2 rounded border text-center"
                      >
                        <div className="text-xs font-medium">{herb.name}</div>
                        <div className="text-lg font-bold">{amount}x</div>
                        <div className="text-xs text-gray-500">
                          {herb.sellValue * amount}g
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Vials */}
            {Object.keys(vials).length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Fläschchen:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {Object.entries(vials).map(([vialId, amount]) => {
                    const vial = getShopItemById(vialId);
                    if (!vial) return null;
                    return (
                      <div
                        key={vialId}
                        className="bg-blue-50 p-2 rounded border text-center"
                      >
                        <div className="text-lg mb-1">{vial.icon}</div>
                        <div className="text-xs font-medium">{vial.name}</div>
                        <div className="text-lg font-bold">{amount}x</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {Object.keys(inventory).length > 0 && (
            <button
              onClick={sellAllHerbs}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-medium"
            >
              Alle Kräuter verkaufen
            </button>
          )}
        </div>

        {/* Fixed Notification in Top Right */}
        {message && (
          <div className="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm">
            <div className="flex items-center">
              <span className="text-lg mr-2">💬</span>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Harvesting Area */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-800">
              🌾 Kräuter sammeln
            </h2>

            {/* Zone Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gebiet wählen:
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            {/* Available Herbs */}
            <div className="grid grid-cols-1 gap-3">
              {getAvailableHerbs().map((herb) => (
                <div
                  key={herb.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-green-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3
                        className={`font-bold ${getRarityColor(herb.rarity)}`}
                      >
                        {herb.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {herb.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-yellow-600">
                        {herb.sellValue} Gold
                      </div>
                      <div
                        className={`text-xs uppercase ${getRarityColor(herb.rarity)}`}
                      >
                        {herb.rarity}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => harvestHerb(herb.id)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-medium"
                  >
                    Sammeln
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shop Area */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">🛒 Laden</h2>

            {/* Shop Items */}
            <div className="space-y-4">
              {shopItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">
                        {item.price} Gold
                      </div>
                      <div className="text-xs text-gray-500 uppercase">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => buyItem(item.id)}
                    disabled={gold < item.price}
                    className={`w-full py-2 px-4 rounded font-medium ${
                      gold >= item.price
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {gold >= item.price ? "Kaufen" : "Nicht genug Gold"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Crafting Area */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              ⚗️ Tränke brauen
            </h2>

            {/* Crafted Potions */}
            {Object.keys(craftedPotions).length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Hergestellte Tränke:
                </h3>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {Object.entries(craftedPotions).map(([potionId, amount]) => {
                    const potion = getPotionById(potionId);
                    if (!potion) return null;
                    return (
                      <div
                        key={potionId}
                        className="flex justify-between items-center bg-purple-50 p-3 rounded"
                      >
                        <div>
                          <span
                            className={`font-medium ${getRarityColor(potion.rarity)}`}
                          >
                            {potion.name}
                          </span>
                          <span className="text-sm text-gray-600 ml-2">
                            ({amount}x)
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-sm text-yellow-600">
                            {potion.sellValue}g
                          </span>
                          <button
                            onClick={() => sellPotion(potionId)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Verkaufen
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Potion Recipes */}
            <div className="space-y-4">
              {potions.map((potion) => (
                <div
                  key={potion.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3
                        className={`font-bold ${getRarityColor(potion.rarity)}`}
                      >
                        {potion.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {potion.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-yellow-600">
                        {potion.sellValue} Gold
                      </div>
                      <div
                        className={`text-xs uppercase ${getRarityColor(potion.rarity)}`}
                      >
                        {potion.rarity}
                      </div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      Zutaten:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {potion.ingredients.map((ingredient, index) => {
                        if (ingredient.herbId) {
                          const herb = getHerbById(ingredient.herbId);
                          const hasEnough =
                            (inventory[ingredient.herbId] || 0) >=
                            ingredient.amount;
                          return (
                            <span
                              key={index}
                              className={`text-xs px-2 py-1 rounded ${
                                hasEnough
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {herb?.name} ({ingredient.amount}x)
                            </span>
                          );
                        } else if (ingredient.vialId) {
                          const vial = getShopItemById(ingredient.vialId);
                          const hasEnough =
                            (vials[ingredient.vialId] || 0) >=
                            ingredient.amount;
                          return (
                            <span
                              key={index}
                              className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${
                                hasEnough
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {vial?.icon} {vial?.name} ({ingredient.amount}x)
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => craftPotion(potion.id)}
                    disabled={!canCraftPotion(potion)}
                    className={`w-full py-2 px-4 rounded font-medium ${
                      canCraftPotion(potion)
                        ? "bg-purple-500 hover:bg-purple-600 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {canCraftPotion(potion) ? "Brauen" : "Zutaten fehlen"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herbalism;
