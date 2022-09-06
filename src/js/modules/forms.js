import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');



  checkNumInputs('input[name="user_phone"]');


  const message = {
    loading: 'Идет загрузка',
    success: 'Сообщение отправлено. Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  const sendData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let result = await fetch(url, {
      method: "POST",
      body: data
    });
    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    })
  }

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      let messageStatus = document.createElement('div');
      messageStatus.classList.add('status');
      item.appendChild(messageStatus);

      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      sendData('https://httpbin.org/anything', formData)
        .then(res => {
          console.log(res);
          messageStatus.textContent = message.success;
        })
        .catch(err => {
          console.log(err);
          messageStatus.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            messageStatus.remove()
          }, 2000)
        })

    })
  });
};
export default forms;