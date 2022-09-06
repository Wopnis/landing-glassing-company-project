const checkNumInputs = (selector) => {
  const numInuts = document.querySelectorAll(selector);

  numInuts.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '')
    })
  });
};
export default checkNumInputs;