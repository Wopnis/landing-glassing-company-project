const timer = (id, deadline) => {

  const addZero = (num) => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const getTimeRemaning = (endOfAction) => {
    const timeRemainder = Date.parse(endOfAction) - Date.parse(new Date());
    const seconds = Math.floor((timeRemainder / 1000) % 60);
    const minutes = Math.floor((timeRemainder / 1000 / 60) % 60);
    const hours = Math.floor((timeRemainder / (1000 * 60 * 60)) % 24);
    const days = Math.floor((timeRemainder / (1000 * 60 * 60 * 24)));
    return {
      'total': timeRemainder,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  const renderTimer = (selector, endOfAction) => {
    const timer = document.querySelector(selector);
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaning(endOfAction);
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    };
  };

  renderTimer(id, deadline);

};

export default timer;