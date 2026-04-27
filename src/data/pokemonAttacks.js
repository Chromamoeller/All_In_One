const attackPool = {
  Normal: [
    { name: "Tackle", damage: 40, ap: 35 },
    { name: "Ruckzuckhieb", damage: 40, ap: 30 },
  ],
  Feuer: [
    { name: "Glut", damage: 40, ap: 25 },
    { name: "Flammenwurf", damage: 90, ap: 15 },
  ],
  Wasser: [
    { name: "Aquaknarre", damage: 40, ap: 25 },
    { name: "Hydropumpe", damage: 110, ap: 5 },
  ],
  Pflanze: [
    { name: "Rankenhieb", damage: 45, ap: 25 },
    { name: "Solarstrahl", damage: 120, ap: 10 },
  ],
  Elektro: [
    { name: "Donnerschock", damage: 40, ap: 30 },
    { name: "Donnerblitz", damage: 90, ap: 15 },
  ],
  Gestein: [
    { name: "Steinwurf", damage: 50, ap: 15 },
    { name: "Felswurf", damage: 60, ap: 10 },
  ],
  Gift: [
    { name: "Giftstachel", damage: 30, ap: 35 },
    { name: "Matschbombe", damage: 90, ap: 10 },
  ],
  Flug: [
    { name: "Flügelschlag", damage: 60, ap: 20 },
    { name: "Himmelsfeger", damage: 85, ap: 15 },
  ],
  Psycho: [
    { name: "Konfusion", damage: 50, ap: 25 },
    { name: "Psychoklinge", damage: 70, ap: 20 },
  ],
  Eis: [
    { name: "Eissplitter", damage: 40, ap: 30 },
    { name: "Eisstrahl", damage: 90, ap: 10 },
  ],
  Kampf: [
    { name: "Karateschlag", damage: 50, ap: 25 },
    { name: "Wuchtschlag", damage: 100, ap: 5 },
  ],
  Boden: [
    { name: "Lehmschelle", damage: 40, ap: 20 },
    { name: "Erdbeben", damage: 100, ap: 10 },
  ],
  Käfer: [
    { name: "Käferbiss", damage: 60, ap: 20 },
    { name: "Signalstrahl", damage: 75, ap: 15 },
  ],
  Geist: [
    { name: "Schlecker", damage: 30, ap: 30 },
    { name: "Spukball", damage: 80, ap: 15 },
  ],
  Drache: [
    { name: "Drachenwut", damage: 60, ap: 20 },
    { name: "Drachenklaue", damage: 80, ap: 15 },
  ],
  Stahl: [
    { name: "Metallklaue", damage: 50, ap: 25 },
    { name: "Eisenschweif", damage: 100, ap: 10 },
  ],
  Unlicht: [
    { name: "Biss", damage: 60, ap: 25 },
    { name: "Knirscher", damage: 80, ap: 15 },
  ],
  Fee: [
    { name: "Charme", damage: 30, ap: 20 },
    { name: "Mondgewalt", damage: 95, ap: 15 },
  ],
};

export default attackPool;
