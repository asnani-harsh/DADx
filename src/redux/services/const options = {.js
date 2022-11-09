const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd09a7fca82msh64eedbb6d35bdb2p185609jsne4a6979c7f85',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};
// 0611a2e2eamsh0426340e76c5690p16eba5jsnba9a74930eb4
fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));