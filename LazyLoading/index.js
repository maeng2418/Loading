const $container = document.querySelector('.container');
const $loader = document.querySelector('#loader');

const onLoadData = () => {
  const dummyData = [];
  for (let i = 0; i < 10; i++) {
    const colorCode  = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    dummyData.push(colorCode);
  }
  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });

  return response;
};

window.addEventListener('DOMContentLoaded', async (event) => {
  $loader.style.display = 'block';
  const response = await onLoadData();
  response.forEach((item) => {
    const $img = document.createElement('div');
    $img.style.background = item;
    $img.classList.add('img');
    $container.append($img);
  });
  $loader.style.display = 'none';
});

$container.addEventListener('scroll', async (event) => {
  if(event.target.scrollHeight - event.target.scrollTop  === event.target.clientHeight) {
    $loader.style.display = 'block';
    const response = await onLoadData();
    response.forEach((item) => {
      const $img = document.createElement('div');
      $img.style.background = item;
      $img.classList.add('img');
      $container.append($img);
    });
    $loader.style.display = 'none';
  }
});