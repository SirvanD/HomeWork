data = {
  town: {
    residents: ["Maurice", "Belle", "Gaston"],
    castle: {
      num_rooms: 47,
      residents: [
        {
          name: "Robby Benson",
          year_of_birth: 1956
        }
      ],
      guests: ['birds']
    }
  }
}

puts(data[:town][:castle][:num_rooms])

data[:town][:castle][:guests].prepend "Belle"

puts(data[:town][:castle][:residents][0][:year_of_birth])

data[:town][:castle][:cook] = "Mrs. Potts"