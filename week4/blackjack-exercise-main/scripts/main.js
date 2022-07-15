const DealerHand = document.getElementById("dealer-hand");
const PlayerHand = document.getElementById("player-hand");
const HitButton = document.getElementById("hit-button");
const DealButton = document.getElementById("deal-button");
const StandButton = document.getElementById("stand-button");
const PlayerPoint = document.getElementById("player-points");
const Dealerpoint = document.getElementById("dealer-points");

window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load
});
//card    1-4=Ace/ 5-8=#2/ 9-12=#3/ 13-16=#4 /17-20=#5/ 21-24=#6/
//        25-28=#7/ 29-32=#8/ 33-36=#9/ 37-40=#10/ 41-44=#J/ 45-48=#Q/ 49-52=#K

const Deck = {
  Card1: {
    CardImage: `./images/ace_of_clubs.png`,
    Points: 11,
  },
  Card2: {
    CardImage: `./images/ace_of_diamonds.png`,
    Points: 11,
  },
  Card3: {
    CardImage: `./images/ace_of_hearts.png`,
    Points: 11,
  },
  Card4: {
    CardImage: `./images/ace_of_spades.png`,
    Points: 11,
  },
  Card5: {
    CardImage: `./images/2_of_clubs.png`,
    Points: 2,
  },
  Card6: {
    CardImage: `./images/2_of_diamonds.png`,
    Points: 2,
  },
  Card7: {
    CardImage: `./images/2_of_hearts.png`,
    Points: 2,
  },
  Card8: {
    CardImage: `./images/2_of_spades.png`,
    Points: 2,
  },
  Card9: {
    CardImage: `./images/3_of_clubs.png`,
    Points: 3,
  },
  Card10: {
    CardImage: `./images/3_of_diamonds.png`,
    Points: 3,
  },
  Card11: {
    CardImage: `./images/3_of_hearts.png`,
    Points: 3,
  },
  Card12: {
    CardImage: `./images/3_of_spades.png`,
    Points: 3,
  },
  Card13: {
    CardImage: `./images/4_of_clubs.png`,
    Points: 4,
  },
  Card14: {
    CardImage: `./images/4_of_diamonds.png`,
    Points: 4,
  },
  Card15: {
    CardImage: `./images/4_of_hearts.png`,
    Points: 4,
  },
  Card16: {
    CardImage: `./images/4_of_spades.png`,
    Points: 4,
  },
  Card17: {
    CardImage: `./images/5_of_clubs.png`,
    Points: 5,
  },
  Card18: {
    CardImage: `./images/5_of_diamonds.png`,
    Points: 5,
  },
  Card19: {
    CardImage: `./images/5_of_hearts.png`,
    Points: 5,
  },
  Card20: {
    CardImage: `./images/5_of_spades.png`,
    Points: 5,
  },
  Card21: {
    CardImage: `./images/6_of_clubs.png`,
    Points: 6,
  },
  Card22: {
    CardImage: `./images/6_of_diamonds.png`,
    Points: 6,
  },
  Card23: {
    CardImage: `./images/6_of_hearts.png`,
    Points: 6,
  },
  Card24: {
    CardImage: `./images/6_of_spades.png`,
    Points: 6,
  },
  Card25: {
    CardImage: `./images/7_of_clubs.png`,
    Points: 7,
  },
  Card26: {
    CardImage: `./images/7_of_diamonds.png`,
    Points: 7,
  },
  Card27: {
    CardImage: `./images/7_of_hearts.png`,
    Points: 7,
  },
  Card28: {
    CardImage: `./images/7_of_spades.png`,
    Points: 7,
  },
  Card29: {
    CardImage: `./images/8_of_clubs.png`,
    Points: 8,
  },
  Card30: {
    CardImage: `./images/8_of_diamonds.png`,
    Points: 8,
  },
  Card31: {
    CardImage: `./images/8_of_hearts.png`,
    Points: 8,
  },
  Card32: {
    CardImage: `./images/8_of_spades.png`,
    Points: 8,
  },
  Card33: {
    CardImage: `./images/9_of_clubs.png`,
    Points: 9,
  },
  Card34: {
    CardImage: `./images/9_of_diamonds.png`,
    Points: 9,
  },
  Card35: {
    CardImage: `./images/9_of_hearts.png`,
    Points: 9,
  },
  Card36: {
    CardImage: `./images/9_of_spades.png`,
    Points: 9,
  },
  Card37: {
    CardImage: `./images/10_of_clubs.png`,
    Points: 10,
  },
  Card38: {
    CardImage: `./images/10_of_diamonds.png`,
    Points: 10,
  },
  Card39: {
    CardImage: `./images/10_of_hearts.png`,
    Points: 10,
  },
  Card40: {
    CardImage: `./images/10_of_spades.png`,
    Points: 10,
  },
  Card41: {
    CardImage: `./images/jack_of_clubs.png`,
    Points: 10,
  },
  Card42: {
    CardImage: `./images/jack_of_diamonds.png`,
    Points: 10,
  },
  Card43: {
    CardImage: `./images/jack_of_hearts.png`,
    Points: 10,
  },
  Card44: {
    CardImage: `./images/jack_of_spades.png`,
    Points: 10,
  },
  Card45: {
    CardImage: `./images/queen_of_clubs.png`,
    Points: 10,
  },
  Card46: {
    CardImage: `./images/queen_of_diamonds.png`,
    Points: 10,
  },
  Card47: {
    CardImage: `./images/queen_of_hearts.png`,
    Points: 10,
  },
  Card48: {
    CardImage: `./images/queen_of_spades.png`,
    Points: 10,
  },
  Card49: {
    CardImage: `./images/king_of_clubs.png`,
    Points: 10,
  },
  Card50: {
    CardImage: `./images/king_of_diamonds.png`,
    Points: 10,
  },
  Card51: {
    CardImage: `./images/king_of_hearts.png`,
    Points: 10,
  },
  Card52: {
    CardImage: `./images/king_of_spadess.png`,
    Points: 10,
  },
};

const PlayingDeck = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];

const Randomcard = () => {
  const Randicard = PlayingDeck[Math.floor(Math.random() * PlayingDeck.length)];
  const CardRemoval = Randicard;
  const Card = PlayingDeck[CardRemoval];
  console.log(Card);
  PlayingDeck.splice(Randicard, 1);
  parseInt(Card);
  const DeckCard = Deck.Card;
  console.log(DeckCard);
};
const NewCardPlayer = () => {
  const Randicard = PlayingDeck[Math.floor(Math.random() * PlayingDeck.length)];
  const CardRemoval = Randicard;
  const Card = PlayingDeck[CardRemoval];
  const CardKey = "Card" + Card;
  const CardImagePath = Deck.CardKey;
  const CardImageLink = `CardImage`;
  PlayingDeck.splice(Randicard, 1);
  parseInt(Card);
  const NewCardImagePlayerhand = document.createElement("img");
  NewCardImagePlayerhand.className = "PlayerCard";
  console.log(Deck[CardKey][CardImageLink]);
  NewCardImagePlayerhand.src = Deck[CardKey][CardImageLink];
  PlayerHand.append(NewCardImagePlayerhand);
  console.log(PlayingDeck);
  const handpoints = PlayerPoint.innerHTML;
  console.log(handpoints);
  const PointsKey = `Points`;
  const PullPlayerCardPoints = Deck[CardKey][PointsKey];
  const AddingPoints = handpoints + PullPlayerCardPoints;
  PlayerPoint.append(AddingPoints);
  console.log(AddingPoints);
  return AddingPoints;
};
const NewCardDealer = () => {
  const Randicard = PlayingDeck[Math.floor(Math.random() * PlayingDeck.length)];
  const CardRemoval = Randicard;
  const Card = PlayingDeck[CardRemoval];
  const CardKey = "Card" + Card;
  const CardImagePath = Deck.CardKey;
  const CardImageLink = `CardImage`;
  console.log(CardImageLink);
  console.log(CardImagePath);
  console.log(CardKey);
  console.log(typeof CardKey);
  console.log(Card);
  PlayingDeck.splice(Randicard, 1);
  parseInt(Card);
  const NewCardImageDealerhand = document.createElement("img");
  NewCardImageDealerhand.className = "DealerCard";
  console.log(Deck[CardKey][CardImageLink]);
  NewCardImageDealerhand.src = Deck[CardKey][CardImageLink];
  DealerHand.append(NewCardImageDealerhand);
  console.log(PlayingDeck);
  const Dhandpoints = PlayerPoint.innerHTML;
  console.log(Dhandpoints);
  const PointsKey = `Points`;
  const PullDealerCardPoints = Deck[CardKey][PointsKey];
  const AddingDPoints = Dhandpoints + PullDealerCardPoints;
  PlayerPoint.append(AddingDPoints);
  console.log(AddingDPoints);
  return AddingDPoints;
};

const Newgame = () => {
  NewCardPlayer();
  NewCardDealer();
  NewCardPlayer();
};

const NewDealerCard = () => {
  console.log("NewDealerCard");
};
const GameStart = () => {
  for (let Run = 0; Run < 2; Run++) NewDealerCard(), NewPlayerCard();
};
const HitMe = (CardHit) => {
  const NewCardImage = document.createElement("img");
  NewCardImage.className = "PlayerCard";
  NewCardImage.src = `./images/2_of_clubs.png`;
  PlayerHand.append(NewCardImage);
  console.log(PlayingDeck);
};
const DealMe = () => {
  console.log("dealme");
  NewPlayerCard();

  console.log(PlayingDeck);
};
const StandMe = () => {
  NewCardDealer();
  if (PlayerPoint == 21) {
    window.alert("Blackjack");
  } else if (PlayerPoint < 21 && PlayerPoint > Dealerpoint) {
    window.alert("You Win");
  } else if (DealerPoint > 21) {
    window.alert("You Win");
  } else if (PlayerPoint > 21 && PlayerPoint > Dealerpoint) {
    window.alert("You lose");
  } else if (PlayerPoint > 21) {
    window.addalert("Bust");
  }
};
HitButton.onclick = NewCardPlayer;
StandButton.onclick = StandMe;
DealButton.onclick = Newgame;
