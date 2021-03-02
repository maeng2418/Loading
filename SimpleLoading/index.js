const onLoadData = () => {
  const dummyData = [
    { id: 1, name: '라이언' },
    { id: 2, name: '무지' },
    { id: 3, name: '어피치' },
  ];
  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 5000);
  });

  return response;
};

const $loader = document.querySelector('#loader');
const $loadBtn = document.querySelector('.loadBtn');
const $list = document.querySelector('.list');

$loadBtn.addEventListener('click', async (event) => {
  $list.innerHTML = "";
  $loader.style.display = 'block';
  const response = await onLoadData();
  $loader.style.display = 'none';
  response.forEach((item) => {
    const $item = document.createElement('div');
    $item.id = item.id;
    $item.innerText = item.name;
    $list.append($item);
  });
});