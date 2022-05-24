document.addEventListener('DOMContentLoaded', () => {
  const selectDrop = document.getElementById('selectCountry');
  fetch('https://restcountries.com/v2/all')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let output = "";
      data.forEach(country => {
        output += `<option value="${country.name}">${country.name}</option>`;
      });
      selectDrop.innerHTML += output;
    })
    .catch(error => {
      console.error(error);
    });
});
