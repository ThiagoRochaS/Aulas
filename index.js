let txtVendido = document.querySelector('button');

txtVendido.addEventListener('click', () =>{
    txtVendido.innerText = 'Vendido';
  });
  
 let corVendido = document.querySelector('#vendido');
 corVendido.addEventListener('click', () => corVendido.style.backgroundColor = '#b91212')