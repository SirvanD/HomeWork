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
# p [2][:images][:svg]

# Question 2
array1 = []
res[:data][:cards].each do |value|
   array1.push(value[:value]) 
end

array2 = []
 res[:data][:cards].each do |suit|
  array2.push(suit[:suit])
end

array1.each_with_index{ |values, i| puts values + " of " + array2[i] }
