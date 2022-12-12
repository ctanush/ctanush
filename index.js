const y = 0;
function turnover(){
  const e = document.getElementById('jk');
  if (y==0){
    e.querySelector('p').innerHTML='javascript is a usefull language.';
    document.getElementsByClassName('card').querySelector('i').ClassList.add('hidden');
    y=1;
  }
  if(y==1){
    e.querySelector('p').innerHTML='javascript';
    document.getElementsByClassName('card').querySelector('i').ClassList.remove('hidden');
    y=0;
  }
}

const x = document.getElementsByClassName('card');
x.addEventListener('onClick',turnover());