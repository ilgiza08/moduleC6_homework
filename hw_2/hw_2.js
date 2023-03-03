const btnNode = document.querySelector(".i-btn");
const resultNode = document.querySelector(".result");

btnNode.addEventListener('click', () => {
   const width = document.documentElement.clientWidth;
   const height = document.documentElement.clientHeight;
   //console.log(width, height);
   window.alert(`Ширина экрана: ${width}px, высота ${height}px.`);
 });
