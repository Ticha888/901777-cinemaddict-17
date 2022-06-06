//функция на получение рандомного числа из диапазона
export const getRandomNumber = function (min,max) {
  if ((min>=0 && max>=0) && (min<max)){
    min = Math.ceil(min); //делаем целое число, округляем в меньшую сторону
    max = Math.floor(max); // делаем целове число округляя в большую сторону
    return Math.floor(Math.random() * (max - min + 1)) + min; //возвращаем рандомное число
  }
};

//функция переводит минуты в формат h m
export const getRuntime = function (time)  {
  const mins = time % 60;
  const hours = (time - mins) / 60;
  const result = `${hours  }h ${  mins  }m `; // нужный вам формат
  return result;
};

//функция переводит в нужный формат даты публикации коменнтария к фильму
export const getTimeComment = function (time) {
  return `${new Date(time).getFullYear() }/${ new Date(time).getMonth()}/${new Date(time).getDay()} ${new Date(time).getHours()}:${new Date(time).getMinutes()}`;
};

