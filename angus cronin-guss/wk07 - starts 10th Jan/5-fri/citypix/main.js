const select = document.querySelector('select');
var body = document.querySelector('body');


cities = [
    'NYC', 
    'SF',
    'LA',
    'SYD',
    'ATX'
]
images = [
    'https://i.insider.com/5d0150e06fc9200b5a05f042?width=1000&format=jpeg&auto=webp',
    'https://lp-cms-production.imgix.net/2021-06/shutterstockRF_1572458020.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/288px-Los_Angeles_with_Mount_Baldy.jpg',
    'https://static.onecms.io/wp-content/uploads/sites/28/2021/06/22/sydney-australia-SYDNEYTG0621.jpg',
    'https://www.newstatesman.com/wp-content/uploads/sites/2/2021/11/Austin.jpg'
]


cities.forEach(city => {
    let option = document.createElement('option')
    option.textContent = city
    option.value = city
    select.appendChild(option)
    
});


document.querySelector('select').addEventListener("change", function() {
    if (this.value == "NYC") {
      body.style.backgroundImage = "url('https://i.insider.com/5d0150e06fc9200b5a05f042?width=1000&format=jpeg&auto=webp')"
    } else if (this.value == "SF") {
        body.style.backgroundImage = "url('https://lp-cms-production.imgix.net/2021-06/shutterstockRF_1572458020.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850')"
    } else if (this.value == "LA") {
        body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/288px-Los_Angeles_with_Mount_Baldy.jpg')"
    } else if (this.value == "SYD") {
        body.style.backgroundImage = "url('https://static.onecms.io/wp-content/uploads/sites/28/2021/06/22/sydney-australia-SYDNEYTG0621.jpg')"
    } else if (this.value == "ATX") {
        body.style.backgroundImage = "url('https://www.newstatesman.com/wp-content/uploads/sites/2/2021/11/Austin.jpg')"
    }
  });




