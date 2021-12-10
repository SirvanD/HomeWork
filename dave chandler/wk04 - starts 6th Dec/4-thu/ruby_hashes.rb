res = {
  data: {
    success: true,
    cards: [
      {
        image: 'https://deckofcardsapi.com/static/img/KH.png',
        value: 'KING',
        suit: 'HEARTS',
        code: 'KH'
      },
      {
        image: 'https://deckofcardsapi.com/static/img/8C.png',
        value: '8',
        suit: 'CLUBS',
        code: '8C'
      },
      {
        image: 'https://deckofcardsapi.com/static/img/4S.png',
        images: {
          svg: 'https://deckofcardsapi.com/static/img/4S.svg',
          png: 'https://deckofcardsapi.com/static/img/4S.png'
        },
        value: '4',
        suit: 'SPADES',
        code: '4S'
      },
      {
        image: 'https://deckofcardsapi.com/static/img/QH.png',
        value: 'QUEEN',
        suit: 'HEARTS',
        code: 'QH'
      }
    ],
    deck_id: '3p40paa87x90',
    remaining: 50
  }
}

# get the image urls
res[:data][:cards].each do |_x|
  # if the element has a hash node (not all do)
  puts(_x[:images][:svg]) if _x[:images].instance_of?(Hash)
end

# KING of HEARTS
# 8 of CLUBS
# 4 of SPADES
# QUEEN of HEARTS
res[:data][:cards].each do |_x|
  puts("#{_x[:value]} of #{_x[:suit]}")
end
