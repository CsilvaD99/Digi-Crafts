const API = "https://eldenring.fanapis.com/api/";

const DropdownBoss = document.getElementById("Boss");
const Card = document.getElementById("Container");
const DropdownChest = document.getElementById("Armor");
const DropdownLeg = document.getElementById("Leg");
const DropdownArrow = document.getElementById("Arrows");
const DropdownGauntlet = document.getElementById("Gauntlet");
const Hero = document.getElementById("Hero");
const DropdownHelm = document.getElementById("Helm");
const BossButton = document.getElementById("BossBut");
const ArmorButton = document.getElementById("ArmorBut");
const HeroButton = document.getElementById("HeroBut");
const ArrowButton = document.getElementById("ArrowBut");
const NextPageButton = document.getElementById("Next");
const PrevPageButton = document.getElementById("Prev");

const PageNumber = 0;
const NextPage = () => {
  PageNumber + 1;
  return PageNumber;
};
const PrevPage = () => {
  PageNumber - 1;
  return PageNumber;
};

// const BossChoice = async () => {
//   Card.innerHTML = null;
//   console.log("Changed Boss");
//   const BossId = DropdownBoss.value;
//   const UrlBoss = `https://eldenring.fanapis.com/api/bosses/${BossId}`;
//   const BossInfo = await fetch(UrlBoss);
//   const JsonBoss = await BossInfo.json();
//   console.log(JsonBoss);
//   const BossName = document.createElement("h2");
//   BossName.innerHTML = JsonBoss.data.name;
//   Card.append(BossName);
//   const BossImage = document.createElement("img");
//   BossImage.src = JsonBoss.data.image;
//   BossImage.className = "Pic";
//   console.log(BossImage);
//   Card.append(BossImage);
//   console.log("Image sent");
//   const BossDesc = document.createElement("p");
//   BossDesc.innerHTML = JsonBoss.data.description;
//   Card.append(BossDesc);
//   const BossLocation = document.createElement("p");
//   BossLocation.innerText = JsonBoss.data.location;
//   Card.append(BossLocation);
//   const BossDrops = document.createElement("p");
//   BossDrops.innerHTML = JsonBoss.data.drops;
//   console.log(BossDrops);
//   Card.append(BossDrops);
// };

// const ArmorChoice = async () => {
//   Card.innerHTML = null;
//   console.log("Changed Armor");
//   const ArmorId = DropdownChest.value;
//   const UrlArmor = `https://eldenring.fanapis.com/api/armors/${ArmorId}`;
//   const ArmorInfo = await fetch(UrlArmor);
//   const JsonArmor = await ArmorInfo.json();
//   console.log(JsonArmor);
//   const ArmorName = document.createElement("h2");
//   ArmorName.innerHTML = JsonArmor.data.name;
//   Card.append(ArmorName);
//   const ArmorImage = document.createElement("img");
//   ArmorImage.src = JsonArmor.data.image;
//   ArmorImage.classname = "Pic";
//   console.log(ArmorImage);
//   Card.append(ArmorImage);
//   console.log("Image Sent");
//   const ArmorDesc = document.createElement("p");
//   ArmorDesc.innertext = JsonArmor.data.description;
//   Card.append(ArmorDesc);
//   const ArmordmgN = document.createElement("p");
//   ArmordmgN.innerText = JsonArmor.data.dmgNegation;
//   Card.append(ArmordmgN);
//   const ArmorRes = document.createElement("p");
//   ArmorRes.innertext = JsonArmor.data.resistance;
//   Card.append(ArmorRes);
// };

// const ArrowChoice = async () => {
//   Card.innerHTML = null;
//   console.log("Changed Arrow");
//   const ArrowId = DropdownArrow.value;
//   const UrlArrow = `https://eldenring.fanapis.com/api/ammos/${ArrowId}`;
//   const ArrowInfo = await fetch(UrlArrow);
//   const JsonArrow = await ArrowInfo.json();
//   console.log(JsonArrow);
//   const ArrowName = document.createElement("h2");
//   ArrowName.innerHTML = JsonArrow.data.name;
//   Card.append(ArrowName);
//   const ArrowImage = document.createElement("img");
//   ArrowImage.src = JsonArmor.data.image;
//   ArrowImage.classname = "Pic";
//   console.log(ArrowImage);
//   Card.append(ArrowImage);
//   console.log("Image Sent arrow");
//   const ArrowDesc = document.createElement("p");
//   ArrowDesc.innertext = JsonArrow.data.description;
//   Card.append(ArrowDesc);
//   const ArrowdmgN = document.createElement("p");
//   ArrowdmgN.innerText = JsonArrow.data.dmgNegation;
//   Card.append(ArrowdmgN);
//   const ArrowRes = document.createElement("p");
//   ArrowRes.innertext = JsonArrow.data.resistance;
//   Card.append(ArrowRes);
// };

// const Htmlpage = () => {
//   if (window.location.pathname == "/Elden-Ring/index.html") {
//     console.log("index.html");
//   } else if (window.location.pathname == "/Elden-Ring/Armor.html") {
//     console.log("armor.html");
//     DropdownChest.onchange = ArmorChoice;
//     DropdownLeg.onchange = ArmorChoice;
//     DropdownGauntlet.onchange = ArmorChoice;
//     DropdownHelm.onchange = ArmorChoice;
//   } else if (window.location.pathname == "/Elden-Ring/Hero.html") {
//     console.log("Hero.html");
//   } else if (window.location.pathname == "/Elden-Ring/Arrow") {
//     console.log("Arrow.html");
//     DropdownArrow.onchange = ArrowChoice;
//   } else if (window.location.pathname == "/Elden-Ring/Boss.html") {
//     console.log("Boss.html");
//     DropdownBoss.onchange = BossChoice;
//   }
// };

const FetchHeroesCard = async () => {
  const HeroUrl = `https://eldenring.fanapis.com/api/classes`;
  const HeroFetch = await fetch(HeroUrl);
  const HeroJson = await HeroFetch.json();
  let HerroData = HeroJson.data;
  for (let Herro of HerroData) {
    const HerroCard = document.createElement("div");
    const HerroName = document.createElement("H1");
    const HerroImage = document.createElement("Img");
    const HerroDesc = document.createElement("p");
    const HerroLevel = document.createElement("p");
    const HerroVigor = document.createElement("p");
    const Herromind = document.createElement("p");
    const HerroEndu = document.createElement("p");
    const HerroStren = document.createElement("p");
    const HerroDex = document.createElement("p");
    const HerroInt = document.createElement("p");
    const HerroFaith = document.createElement("p");
    const HerroArc = document.createElement("p");
    const StatCard = document.createElement("div");
    console.log(Herro.stats);

    const HerroStatInfo = HerroData;
    console.log(HerroStatInfo);
    HerroName.innerText = Herro.name;
    HerroImage.src = Herro.image;
    HerroDesc.innerText = "Class Description: " + Herro.description;
    HerroLevel.innerText = "Level: " + Herro.stats.level;
    HerroVigor.innerText = "Vigor: " + Herro.stats.vigor;
    Herromind.innerText = "Mind: " + Herro.stats.mind;
    HerroEndu.innerText = "Endurance: " + Herro.stats.endurance;
    HerroStren.innerText = "Strength: " + Herro.stats.strength;
    HerroDex.innerText = "Dexterity: " + Herro.stats.dexterity;
    HerroInt.innerText = "Intelligence: " + Herro.stats.intelligence;
    HerroFaith.innerText = "Faith: " + Herro.stats.faith;
    HerroArc.innerText = "Arcane: " + Herro.stats.arcane;
    StatCard.className = "StatCard";
    StatCard.append(
      HerroLevel,
      HerroVigor,
      Herromind,
      HerroEndu,
      HerroStren,
      HerroDex,
      HerroInt,
      HerroFaith,
      HerroArc
    );
    HerroCard.append(HerroName, HerroImage, HerroDesc, StatCard);
    Card.append(HerroCard);
  }
};

const BossCard = async () => {
  const BossUrl = `https://eldenring.fanapis.com/api/bosses?limit=20&page=${PageNumber}`;
  const FetchBoss = await fetch(BossUrl);
  const BossJson = await FetchBoss.json();
  const BossData = BossJson.data;
  console.log(BossData);
  for (let Data of BossData) {
    const BossOption = document.createElement("option");
    BossOption.value = Data.id;
    console.log(BossOption.value);
    BossOption.innerText = Data.name;
    console.log(BossOption.innerText);
    DropdownBoss.appendChild(BossOption);
    const BossCard = document.createElement("div");
    const BossName = document.createElement("h2");
    const BossPicture = document.createElement("img");
    const BossDescription = document.createElement("p");
    const BossLocation = document.createElement("p");
    const BossDropsSec = document.createElement("div");
    const BossDrops = document.createElement("p");
    console.log("Created the divs");
    BossCard.className = "BossCard";
    BossName.innerText = Data.name;
    BossPicture.src = Data.image;
    BossDescription.innerText = "Description: " + Data.description;
    BossLocation.innerText = "Location: " + Data.region;
    BossDrops.innerText = "Drops:" + Data.drops;
    BossDropsSec.className = "BossDrops";
    BossDropsSec.append(BossDrops);
    BossCard.append(
      BossName,
      BossPicture,
      BossDescription,
      BossLocation,
      BossDropsSec
    );
    Card.append(BossCard);
    console.log("got to loop around");
    console.log(BossPicture);
    console.log;
  }
};

const ArmorCard = async () => {
  const ArmorUrl = `https://eldenring.fanapis.com/api/armors?limit=60&page=${PageNumber}`;
  const FetchArmor = await fetch(ArmorUrl);
  const ArmorJson = await FetchArmor.json();
};

console.log(window.location.pathname);
// DropdownBoss.onchange = BossChoice;
// DropdownChest.onchange = ArmorChoice;
// DropdownLeg.onchange = ArmorChoice;
// DropdownGauntlet.onchange = ArmorChoice;
// DropdownHelm.onchange = ArmorChoice;
// DropdownArrow.onchange = ArrowChoice;
// Hero.onload = console.log("loaded");
// FetchHeroesCard();
BossCard();
