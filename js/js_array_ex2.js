'use-strict';
// 배열선언
const arr1 = [];
for (let i = 0; i < 5; i++) {
    arr1[i] = i;
}

const arr2 = new Array();
for (let i = 0; i < 5; i++) {
    arr2[i] = i;
}

const arr3 = new Array(1,2,3,4,5);

console.clear();

const arr4=[10,20,30,40,50];
console.log(`arr4배열의 길이 -> ${arr4.length}`);

for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}

console.log('=================================')

const arrBg=[];
//arr42배열의 0번지부터 4번지 까지
//'url(img/a0.jpg) no-repeat 50%/cover'
//'url(img/a1.jpg) no-repeat 50%/cover'
//'url(img/a2.jpg) no-repeat 50%/cover'
//'url(img/a3.jpg) no-repeat 50%/cover'
//'url(img/a4.jpg) no-repeat 50%/cover'
// arrBg.push(`url(img/a0.jpg) no-repeat 50%/cover`);
// arrBg.push(`url(img/a1.jpg) no-repeat 50%/cover`);
// arrBg.push(`url(img/a2.jpg) no-repeat 50%/cover`);
// arrBg.push(`url(img/a3.jpg) no-repeat 50%/cover`);
// arrBg.push(`url(img/a4.jpg) no-repeat 50%/cover`);


const galleryLi=document.querySelectorAll('.gallery>ul>li');
console.log(`galleryLi의 길이 -> ${galleryLi.length}`);

for(let i=0;i<5;i++){
    arrBg.push(`url(img/a${i}.jpg) no-repeat 50%/cover`)
    galleryLi[i].style.background=arrBg[i];
}

console.log('=================================')

console.clear();

const arr5=[];

for(let i=0;i<5;i++){
    arr5.push(i*10+10);
}
console.log(arr5)
// arr5.pop(); // 배열의 마지막 요소를 제거
// arr5.shift(); // 배열의 맨 처음 요소를 제거
// arr5.unshift(); // 배열의 맨 처음 요소에 추가
// arr5.indexOf(1000); // 배열 요소의 값을, 인덱스 값 반환,, 없으면 -1 출력 
// arr5.splice(0,2); // 제거(0번지부터 n개),,        원본 손상 O
// arr5.slice(0,2); // 0번지부터 n번지까지 잘라내라,, 원본 손상 X

const a1=['a','b'];
const a2=['c','d','e'];
const a3=a1.concat(a2);


console.clear();

console.log('=================================')

const arrImgs=[];

for(let i=0;i<5;i++){
    arrImgs.push(`img/a${i}.jpg`);
}
console.log('=================================')

console.log(arrImgs)

arrImgs.forEach(function(element,index,array){
    console.log(`element -> ${element}`)
    console.log(`index -> ${index}`)
    console.log(`array -> ${array}`)
});

console.log('=================================')

arrImgs.forEach(function(el,idx,arr){
    console.log(`el -> ${el}`)
    console.log(`idx -> ${idx}`)
    console.log(`arr -> ${arr}`)
});

console.log('=================================')

arrImgs.forEach(function(el,idx){
    console.log(`el -> ${el}`)
    console.log(`idx -> ${idx}`)
});

console.log('=================================')

arrImgs.forEach(function(el){
    console.log(`el -> ${el}`)
});

console.log('=================================')