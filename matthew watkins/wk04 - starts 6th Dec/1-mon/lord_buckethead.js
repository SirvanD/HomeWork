var users = {
    theresa: {
      party: "Conserative",
      favoriteNumbers: [12, 42, 75]
    },
    Lord_Buckethead: {
      party: "Gremloids",
      favoriteNumbers: [8, 12, 24, 9]
    },
    mr_fishfinger: {
      party: "Independent",
      favoriteNumbers: [12, 14, 85, 99, 1001]
    }
  }

  //to access theresa's party
  users.theresa.party

  //to access lord buckethead's party
  users.Lord_Buckethead.party

  //to access and change mr fishfinger's party to `bird's eye`
  users.mr_fishfinger.party = `bird's eye`
