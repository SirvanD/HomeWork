# given the following hash:

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

# write code to print in the terminal the svg image url for the 4 of spades

puts(res[:data][:cards][2][:images][:svg])


# iterate over all the cards to print in the terminal the following:

# KING of HEARTS
# 8 of CLUBS
# 4 of SPADES
# QUEEN of HEARTS

king = res[:data][:cards][0][:value]
hearts = res[:data][:cards][0][:suit]

eight = res[:data][:cards][1][:value]
clubs = res[:data][:cards][1][:suit]

four = res[:data][:cards][2][:value]
spades = res[:data][:cards][2][:suit]

queen = res[:data][:cards][3][:value]
queensHeart = res[:data][:cards][3][:suit]

i=0
loop do
  puts "#{res[:data][:cards][i][:value]} of #{res[:data][:cards][i][:suit]}"
    i = i+1
    if i ==4
        break
    end
end