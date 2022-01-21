res = {
  data: {
    success: true,
    cards: [
        {
          image: "https://deckofcardsapi.com/static/img/KH.png",
          value: "KING",
          suit: "HEARTS",
          code: "KH"
        },
        {
          image: "https://deckofcardsapi.com/static/img/8C.png",
          value: "8",
          suit: "CLUBS",
          code: "8C"
        },
        {
          image: "https://deckofcardsapi.com/static/img/4S.png",
          images: {
            svg: "https://deckofcardsapi.com/static/img/4S.svg",
            png: "https://deckofcardsapi.com/static/img/4S.png"
          },
          value: "4",
          suit: "SPADES",
          code: "4S",
        },
        {
          image: "https://deckofcardsapi.com/static/img/QH.png",
          value: "QUEEN",
          suit: "HEARTS",
          code: "QH"
        }
    ],
    deck_id: "3p40paa87x90",
    remaining: 50
  }
}

# 1. Write code to print in the terminal the svg image url for the 4 of spades
p res[:data][:cards][2][:images][:svg]


cardsArray = res[:data][:cards]
# 2. Iterate over all the cards to print in the terminal the following:
for item in cardsArray
    p "#{item[:value]} of #{item[:suit]}"
end

 