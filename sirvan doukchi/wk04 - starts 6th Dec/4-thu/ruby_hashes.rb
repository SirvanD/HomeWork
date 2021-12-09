require 'pry'
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

# 1. write code to print in the terminal the svg image url for the 4 of spades

# 4_spades_image_url = res[:data][:cards][2][:images][:svg]

puts res[:data][:cards][2][:images][:svg]

# 2. iterate over all the cards to print in the terminal the following:
puts "#```"
res[:data][:cards].each {|ele|
    puts "# #{ele[:value]} of #{ele[:suit]}"

}
puts "#```"

# ```
# KING of HEARTS
# 8 of CLUBS
# 4 of SPADES
# QUEEN of HEARTS
# ```