'use-strict';
// 배열 선언 방법1

// 배열 선언과 동시에 초기화
const arr1=[10,20,30];
console.log(`배열의 길이 -> ${arr1.length}`);

console.log(arr1[0]); // 배열[0]
console.log(arr1[1]); // 배열[1]
console.log(arr1[2]); // 배열[2]
// 배열의 값이 없으면 undefined로 출력
console.log(arr1[3]); // 배열[3] 

// 배열 선언
const arr2=[];
// 10, 20, 30 -> 0번지, 1번지, 2번지
// 배열의 0번지~2번지까지 초기화(저장)
arr2[0]=10;
arr2[1]=20;
arr2[2]=30;
// arr2 3번지, 4번지 100, 200;
arr2[3]=100;
arr2[4]=200;
// arr2의 배열의 총 갯수
console.log(`배열의 길이 -> ${arr2.length}`);

// 배열 arr3을 선언 0부터 9까지 초기화

// 콘솔에 `arr[0]=0`
const arr3=[];
arr3[0]=0;
arr3[1]=1;
arr3[2]=2;
arr3[3]=3;
arr3[4]=4;
arr3[5]=5;
arr3[6]=6;
arr3[7]=7;
arr3[8]=8;
arr3[9]=9;

console.log(`arr3[0] = ${arr3[0]}`)
console.log(`arr3[1] = ${arr3[1]}`)
console.log(`arr3[2] = ${arr3[2]}`)
console.log(`arr3[3] = ${arr3[3]}`)
console.log(`arr3[4] = ${arr3[4]}`)
console.log(`arr3[5] = ${arr3[5]}`)
console.log(`arr3[6] = ${arr3[6]}`)
console.log(`arr3[7] = ${arr3[7]}`)
console.log(`arr3[8] = ${arr3[8]}`)
console.log(`arr3[9] = ${arr3[9]}`)

console.clear();

for(let i=0;i<10;i++){
    arr3[i]=i;
    console.log(`arr3[${i}] = ${i}`)
}

console.clear();

// 5개의 .gallery>ul>li 배경이미지를 저장

const arrBg=[];

// arrBg[0]=`url(img/a0.jpg) no-repeat 50%/cover`;
// arrBg[1]=`url(img/a1.jpg) no-repeat 50%/cover`;
// arrBg[2]=`url(img/a2.jpg) no-repeat 50%/cover`;
// arrBg[3]=`url(img/a3.jpg) no-repeat 50%/cover`;
// arrBg[4]=`url(img/a4.jpg) no-repeat 50%/cover`;

// 배열 arrBg에 img/a0.jpg ~ img/a4.jpg 0번지 ~ 4번지 배경이미지형식으로 저장
// for문 이용
for(let i=0;i<5;i++){
    arrBg[i]=`img/a${[i]}.jpg`;
    console.log(`img/a${i}.jpg`)
}

console.clear();

const galleryLi=document.querySelectorAll('.gallery>ul>li');

// galleryLi[0].style.background=`url(img/a0.jpg) no-repeat 50%/cover`
// galleryLi[1].style.background=`url(img/a1.jpg) no-repeat 50%/cover`
// galleryLi[2].style.background=`url(img/a2.jpg) no-repeat 50%/cover`
// galleryLi[3].style.background=`url(img/a3.jpg) no-repeat 50%/cover`
// galleryLi[4].style.background=`url(img/a4.jpg) no-repeat 50%/cover`

// 배열 arrBg2 만들어서 url(img/a0.jpg) no-repeat 50%/cover 저장
// galleryLi 갯수 만큼

const arrBg2=[];
arrBg2[0]=`url(img/a0.jpg) no-repeat 50%/cover`;
arrBg2[1]=`url(img/a1.jpg) no-repeat 50%/cover`;
arrBg2[2]=`url(img/a2.jpg) no-repeat 50%/cover`;
arrBg2[3]=`url(img/a3.jpg) no-repeat 50%/cover`;
arrBg2[4]=`url(img/a4.jpg) no-repeat 50%/cover`;

for(let i=0;i<galleryLi.length;i++){
    arrBg2[i]=`url(img/a${i}.jpg) no-repeat 50%/cover`;
    galleryLi[i].style.background=arrBg2[i];
}

// 배열 선언 방법2
const arr22=new Array();
for(let i=0;i<5;i++){
    arr22[i]=`url(img/a${i}.jpg) no-repeat 50%/cover`;
    console.log(`arr22${i}=${arr22[i]}`);
}

// 배열 선언 방법3
const arr32=new Array(1,2,3);
for(let i=0;i<arr32.length;i++){
    // arr32[i]=i;
    console.log(`arr32[${i}] = ${arr32[i]}`)
}