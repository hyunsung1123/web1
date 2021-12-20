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
function changemode(self){
var a= document.querySelector('body');
if(self.value==='다크 모드로 보기')
{
  a.style.color='white';
  a.style.backgroundColor='gray';
  document.querySelector('.search').style.backgroundColor='lightgray';
  document.querySelector('.id').style.backgroundColor='lightgray';
  document.querySelector('.pw').style.backgroundColor='lightgray';
  document.querySelector('.idsearch').style.backgroundColor='gray';
  document.querySelector('.pwsearch').style.backgroundColor='gray';
  document.querySelector('.join').style.backgroundColor='gray';
  self.value='화이트 모드로 보기';
  linkssetcolor('white')
  var b_list=document.querySelectorAll('select');
  var j=0;
  while(j<b_list.length)
  {
    b_list[j].style.backgroundColor='gray';
    b_list[j].style.color='white';
    j=j+1;
  }
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
  self.value='다크 모드로 보기';
  var a_list = document.querySelectorAll('a');
  links setcolor('black');
  var b_list=document.querySelectorAll('select');
  var j=0;
  while(j<b_list.length)
  {
    b_list[j].style.backgroundColor='white';
    b_list[j].style.color='black';
    j++;
  }
}
