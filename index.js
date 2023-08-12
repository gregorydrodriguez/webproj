function goToHouse() {
  window.location.href = 'houses.html';
}

document.getElementById('card-house')
  .addEventListener('click', goToHouse);
document.getElementById('card-condo')
  .addEventListener('click', () => window.location.href = 'condominiums.html');
document.getElementById('card-business')
  .addEventListener('click', () => window.location.href = 'business.html');
document.getElementById('card-office')
  .addEventListener('click', () => window.location.href = 'officespace.html');