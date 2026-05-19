import { useState } from "react";
import monsterHunterWeapons from "../../data/weapons.js";

function Weapon() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  // has keys: greatSword, longSword, swordAndShield, ...
  const weaponTypes = Object.keys(monsterHunterWeapons); //Liste an Waffentypen wie Great Sword, Long Sword, etc

  const handleChange = (event) => {
    const weaponId = Number(event.target.value);
    const all = Object.values(monsterHunterWeapons).flat();
    const w = all.find((item) => item.id === weaponId);
    setSelectedWeapon(w || null);
  };

  return (
    <div className="weapon">
      {weaponTypes.map((type) => (
        <div key={type} className="weapon-type-group">
          <label htmlFor={type}>{type}</label>
          <select id={type} onChange={handleChange}>
            <option value="">Select {type}</option>
            {monsterHunterWeapons[type].map((weapon) => (
              <option key={weapon.id} value={weapon.id}>
                {weapon.name}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="weapon-info">
        <h2>Waffeninformationen</h2>
        {selectedWeapon ? (
          <div>
            <p>Name: {selectedWeapon.name}</p>
            <p>Rarity: {selectedWeapon.rarity}</p>
            <p>Attack: {selectedWeapon.attack}</p>
            <p>Sharpness: {selectedWeapon.sharpness}</p>
          </div>
        ) : (
          <p>Wähle eine Waffe aus einer Kategorie aus.</p>
        )}
      </div>
    </div>
  );
}

export default Weapon;
