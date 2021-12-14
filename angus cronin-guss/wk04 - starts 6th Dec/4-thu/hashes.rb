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
# Question 1
p res[:data][:cards][2][:images][:svg]

# Question 2
array = []
array2 = []
res[:data][:cards].each do |key| 
  p key[:value]
end
res[:data][:cards].each do |value| 
 p value[:suit]
end 



  
  # res[:data][:cards].each do |value|
  #   p value[:suit]
  



