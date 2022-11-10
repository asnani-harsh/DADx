const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bcd7d9e63cmsh54d9a1bb11bced6p1810a8jsnd8b2858a96c8',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};
// 0611a2e2eamsh0426340e76c5690p16eba5jsnba9a74930eb4
fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));