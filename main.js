function main() {
  const counter = document.querySelector('.counter');
  let count = sessionStorage.getItem('click') || 0;

  function getCount() {
  counter.textContent = count;
  };

  window.addEventListener('click', () => {
    count++;
    sessionStorage.setItem('click', count);

    getCount();    
  });

  getCount();
}

window.addEventListener('load', main); 
