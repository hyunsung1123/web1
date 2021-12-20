function linkssetcolor(color)
{
  var a_list = document.querySelectorAll('a');
  var i=0;
  while(i<a_list.length)
  {
    a_list[i].style.color=color;
    i=i+1;
  }
}
function selectsetcolor(color1,color2)
{
  var b_list=document.querySelectorAll('select');
  var j=0;
  while(j<b_list.length)
  {
    b_list[j].style.backgroundColor=color1;
    b_list[j].style.color=color2;
    j=j+1;
  }
}
function changemode(){
var a= document.querySelector('body');
if(document.querySelector('.dark_mode').value==='다크 모드로 보기')
{
  a.style.color='white';
  a.style.backgroundColor='gray';
  document.querySelector('.search').style.backgroundColor='lightgray';
  document.querySelector('.id').style.backgroundColor='lightgray';
  document.querySelector('.pw').style.backgroundColor='lightgray';
  document.querySelector('.idsearch').style.backgroundColor='gray';
  document.querySelector('.pwsearch').style.backgroundColor='gray';
  document.querySelector('.join').style.backgroundColor='gray';
  document.querySelector('.dark_mode').value = '화이트 모드로 보기';
  linkssetcolor('white');
  selectsetcolor('gray','white');
}
else
{
  a.style.color='black';
  a.style.backgroundColor='white';
  document.querySelector('.search').style.backgroundColor='white';
  document.querySelector('.id').style.backgroundColor='white';
  document.querySelector('.pw').style.backgroundColor='white';
  document.querySelector('.idsearch').style.backgroundColor='white';
  document.querySelector('.pwsearch').style.backgroundColor='white';
  document.querySelector('.join').style.backgroundColor='white';
  document.querySelector('.dark_mode').value='다크 모드로 보기';
  var a_list = document.querySelectorAll('a');
  linkssetcolor('black');
  selectsetcolor('white','black');
}
}
