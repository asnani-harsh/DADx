const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0611a2e2eamsh0426340e76c5690p16eba5jsnba9a74930eb4',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));