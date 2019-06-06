function main() {
  const counter = document.querySelector('.counter');
  let count = sessionStorage.getItem('click') || 0;

  function setCountToDOM() {
    counter.textContent = count;
  };

  window.addEventListener('click', () => {
    count++;
    sessionStorage.setItem('click', count);

    setCountToDOM();    
  });

  setCountToDOM();
}

window.addEventListener('load', main); 
