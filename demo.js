

//  let score = 200 ;


//  if (score<=200){
//     document.getElementById("total").innerHTML = "this is correct"
//     console.log("you got anapple")
// }

// else{
//      document.getElementById("total").innerHTML = "this is wrong"
// }


//     let vollyscore = 15 ;

// if (vollyscore<=5){
//     document.getElementById("total").innerHTML = "you are low performer"
// }

// else if (vollyscore<=10){
//      document.getElementById("total").innerHTML = "you are good performer"
// }
// else if (vollyscore<=15){
//     document.getElementById("total").innerHTML = "you are extrodinary performer"
// } 

// else{
//     document.getElementById("total").innerHTML = "you are waste"
// }


// let animal = prompt("Enter animal name")

// switch(animal){
//     case "lion":
     
//          document.getElementById("total").innerHTML = "king of the forrest";

//          break;

//     case "dog": 
//         document.getElementById("total").innerHTML = "king of street";
//         break;
    
//     case "peacock":

//     document.getElementById("total").innerHTML = "King of birds";
//     break;

//     default:
//         document.getElementById("total").innerHTML = "The animal is not here";
//         break;

    
        
    
// }


// var mark = 100;

// var gradeA = (mark<=90 && mark<=100)?"You are A grade" : "no grade"

// console.log(gradeA)

// let salary = Number(prompt("Enter your salary"))
// let expencive = Number(prompt("Enter your expensive"))

// let result = salary+expencive

// console.log(result)


// let mark = prompt("Enter your mark");

// let grade = (mark>=91 && mark<=100)?"You are A grade" :(mark>=81 && mark<=90)?"You are B Grade": (mark>=71 && mark<=80)?"you are C grade":(mark>=61 && mark<=70)?"You are D grade":(mark>=50 && mark<=60)?"You are E Grade":(mark<50 && mark>=0)?"You are fail":"invalid number" ;

// console.log(document.getElementById("total").innerHTML = grade);


// let bio = prompt("Enter your Name");

// let salary = Number(prompt("Enter your salary"));
// let medical = Number(prompt("Enter your Medical Expencive"));
// let grociery = Number(prompt("Enter your Grocieries"));
// let rent = Number(prompt("Enter your Rent amount"));

// let monthlysaving = salary - (medical+grociery+rent );

// console.log(document.getElementById("total").innerHTML = "Hi "+bio + " this is your monthly savings " +monthlysaving)

// console.log(document.getElementById("total").innerHTML = "Hi "+bio + " this is your five year savings " +(monthlysaving*60))



// let person = {
//     firstName:"bala",
//     age: "22",
//     alive: "yes",
//     parent:{
//         father:"sivakumar",
//         mother:'Gunavathi'
//     },
   
//     year:[],
    
//     getbirthyear(obj){

//         this.year.push({obj})
            
        
//     }
    
   
// }

// let merge = {
//         favcolor:'red',
//         favheroine:'danny daniels'
// }

// let merging = {...person,...merge}

// merging.firstName='siva'
// merging.favcolor='green'
// console.log(merging, person);

// // console.log( person.getbirthyear("bala", 'chandar'));
// let obj = person.getbirthyear('2002')
// console.log(person.year);


// let a=[4,5,3,2,1];
// let out=[a[0]]

// for(let i=1;i<a.length;i++){
//     out.push(a[i]+a[i-1])
// }
// console.log(out);


//  let arr = [{name:'bala'},{name:'ajith'}];

//   arr.sort(function(a,b){
//     let x=a.name.toLowerCase()
//     let y=b.name.toLowerCase()
//     return x>y ? 1: x<y ? -1:0;
//   })

//     console.log(arr);
    


// let l1=[1,3,4];
// let l2 = [4,3,2];
//  let resutl =adding(l1,l2)

//  function adding(a,b){
//     let c=Number(a.join(""))+Number(b.join(""))
//         c=c.toString().split("").reverse().join("")
//         let d=[];
//         for(let i=0;i<c.length;i++){
//             d.push(Number(c[i]))
//         }

//         return d;
    
//  }

// console.log(resutl);

    



    // let str = 'bala how are you hi diviki melon dove love mabe irukalam';

        
    // let rev = str.split(' ').map(function (v) {return v.length%2!=0 ? v: v.split("").reverse().join('');}).join(" ")
        
    //     console.log(rev)

    // let num = [9,8,6,5,4,3,2,1];
    
    //  for(let i=0;i<num.length;i++){
    //     for(let j=i+1;j<num.length;j++){
    //         if(num[j]<num[j-1]){
    //             out=num[i]
    //             num[i]=num[j]
    //             num[j]=out
    //         }
    //     }
    //  }
   
    //   console.log(num)
    //     console.log( str[0].length);
    //   let c=[] 

    // for(let i=0;i<str.length;i++){
    //     if(str[i].length>3){
    //         let b=str[i]

    //         for(let j=b.length-1;j<=0;j--){
    //              str=b[j]
    //         }
    //     }
    // }
    // console.log(str)




    // let arr = [100,5,6,1,9,3,-9]

    // let output=[arr[0]]
    
    // for(let i=1;i<arr.length;i++){
        
    //     output[i]=arr[i]+arr[i-1]
    // }
    
    // console.log(output);


//  

// let obj = [
//     {name : 'ziys'},
//     {name : 'mani'},
//     {name : 'kvai'},
//     {name : 'luffy'},
//     {name : 'aoro'}
// ]

// obj.sort(function (a,b){
//     x=a.name
//     y=b.name
//     return x>y ? 1:x<y ?-1:0;
// })
// console.log(obj);


// let arr='pwwkew';
// let out=[];

//     //  arr=arr.split('').map(function (b){return out.includes(b)? out=[] : b==b[1] ? out.push(b): b})

//   for(let i=0;i<arr.length;i++){
//     if(out.includes(arr[i]) ){

//     }
//     else if(arr[i]!=arr[i+1] && arr[i+1]!=arr[i+2]){
//         out.push(arr[i])
//     }
//     else if(arr[i]==arr[i+1] && arr[i]==arr[i+2]){
//         out.push(arr[i])
//     }
//   }
// console.log(out);


// let num=[1,2,5,4,6,3,7,8,9,10,11,12,13,14,15,16];

// for(let i=0;i<num.length;i++){
//     for(let j=0;j<num.length;j++){
//         if(num[j]>num[j+1]){
//             out=num[j]
//             num[j]=num[j+1]
//             num[j+1]=out
//         }
//     }
// }
// // console.log(num);

//  let n=Math.floor((num.length-1)/2)
//   let b=num[n]
//   let c=num[n+1]
// console.log((b+c)/2);


// let num = 100;

// let result = prime(num)

// function prime(n){
//     if(n<2){
//         return false;
        
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
            
//         }
//     }
//     return true
// }
//  for(let i=2;i<num;i++){
//     if(prime(i)){
//         console.log(i)
//     }
//  }

////base and inheritance

//  class  Parent {
//     constructor(name,animal) {
//         this.name=name
//         this.animal=animal
//     }
//     print(){
//         console.log(`This is ${this.animal} and his name is ${this.name}`); 
//     }
// }

// class child extends Parent{
//     constructor(name,animal,food){
//         super(name,animal)
//         this.food=food
//     }
//     next(){
//         super.print()
//         console.log(`and it eats ${this.food}`);
        
//     }
// }

// let check = new child('Buggy','Dog','pedigiry')

// check.next()
   
// //set method and get method

// class  Parnt {
//     constructor(name,animal) {
//         this.name=name
//         this.animal=animal
//     }
//     print(){
//         console.log(`This is ${this.animal} and his name is ${this.name}`); 
//     }
// }

// class childer extends Parnt{
//     constructor(name,animal,food){
//         super(name,animal)
//         this.food=food
//     }

//     set namer(name){ //this is set function or method
//         this.name=name
//     }

//     get get_name(){
//         return this.animal;
//     }

//     next(){
        
//         console.log(`and it eats ${this.food}`);
        
//     }
// }

// let checkr = new childer('Buggy','Dog','pedigiry')
// checkr.namer = 'Divakar' //set calling
// console.log(checkr.get_name)// get caling
// checkr.next()


/////Encapthulation with get set method like varable or property

// class Rblbank{
//     #privacy;
//     constructor(bool){
//         this.#privacy=bool;
//     }

//     set privacy_bank(data){
//         this.#privacy=data
//     }

//     get get_data(){
//         return this.#privacy;
//     }

//     check(){
//         console.log(`This bank ${this.#privacy}`)
//     }
// }

// let check = new Rblbank('High security')
// check.privacy_bank='low security' // set calling
// console.log(check.get_data)//get callig
// check.check();
   
//// Polimerism in JS oops

// class Sec_A{
//     constructor(name){
//         this.name=name
//     }

//     rewrite(){
//       return  console.log(`He is very bad person`);   
//     }
// }

// class Single_person extends Sec_A{
//     constructor(name){
//         super(name)
//     }

//     rewrite(){
//         console.log(`He is a good ${this.name}`)
//     }
// }

// let std = new Single_person('guna')

// std.rewrite()


////Static method and static property

// class Static{
//     static company_name ='Dckap palli';


//     static full_name(first,last){
//         return first+last
//     }

//     static course(){
//         return 'HTML, CSS, JAVA script'
//     }
// }

// class Join_company{
//     constructor(name,age,last) {
//         this.name=name
//         this.age=age
//         this.last=last
//     }

//     detail(){
//         console.log(`My name is ${Static.full_name(this.name,this.last)} and my office name is ${Static.company_name} i learned courses in this place is ${Static.course()}`)
//     }
// }

// let emp = new Join_company('Balachandar',22,'Sivakumar')

// emp.detail()


// let a = {
//     name : 'bala',
//     id : 23
// }

// console.log(Object.keys(a).includes('name'))


// let num = 100;

// function isPrime(data){
//     if(data<2)return false;
//     for(let i=2;i<data;i++){
//         if(data%i==0)return false;
//     }
//     return true
// }

// for(let i=0;i<num;i++){
//     if(isPrime(i)){
//         console.log(i)
//     }
// }



// let a = [
//     {
//         name : 'Bala',
//         id : 2
//     },
//     {
//         name : "balaji",
//         id : 3
//     },
//     {
//         name : 'ajith',
//         id : 1
//     }
// ]

// let flag = true;

// let b = a.sort((a,b)=>{
//     let x = a.name.toLowerCase(),
//         y=b.name.toLowerCase()
//     return  x>y ? 1: y>x ? -1:0;    
// })

// console.log(b)

// let obj = {
//     expiry : Date.now() + 60000,
//     name : 'bala'
// }
// sessionStorage.setItem('data',JSON.stringify(obj))

// let obj = {
//     name : 'blaa'

// }

// fetch(`${api}`,{
//     method : flag ? 'PUT' : 'POST',
//     headers :{'Content-type':'application/json'},
//     body :JSON.stringify({obj})
// })
// .then(data => data.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


// class Calculation {
//     static adition(a,b){
//         return a+b;
//     }
// }

// let a = '';

// if(!a){
//     console.log(true)
// }


// let a = [3,2,1];

// for (let i = 0; i < a.length-1; i++) {
//     if (a[i] > a[i + 1]) {
//         let temp = a[i];
//         a[i] = a[i + 1];
//         a[i + 1] = temp;
//         i = - 1;
//     }
// }


// console.log(a)

// let a = [2,5,1,4,2,10,9,2];

// let count=0,num;

// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]===a[j]){
//             num=a[i]
//             count+=1 
//         }
//     }
// }
// console.log(count,num)
// 1, Find a biggest number and second smallest number;
// let arr = [20,50,50,90,12,3],biggest=0,secondBigest=0;

// for(let i=0;i<arr.length;i++){
//     if (arr[i] > biggest) {
//         secondBigest = biggest;
//         biggest = arr[i];
//     } else if (arr[i] > secondBigest && arr[i] !== biggest) {
//         secondBigest = arr[i];
//     }
// }

// console.log(biggest,secondBigest)

// 2,reverarse without push

// let a = [1,2,3,4,5,6,7,8,9],b=[];

// for(let i=a.length-1;i>0;i--){
//     b[b.length]=a[i]
// }
// console.log(b)

// 3, Count the vowels;

// let a = 'balachandar',count=0;

// for(let i=0;i<a.length;i++){
//     a[i]=a[i].toLowerCase();
//     if(a[i]==='a' || a[i]==='e'|| a[i]==='i'|| a[i]==='o'|| a[i]==='u')count++;
// }
// console.log(count)

// 4,Remove duplicate and assending order

// let a = [1,1,1,1,2,22,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5];

// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length-1;j++){
//         if(a[i]===a[j]){
//             for(let k=j;k<a.length-1;k++){
//                 a[k]=a[k+1];
//             }
//             a.length=a.length-1;
//             a=a;
//             j--;   
//         }
//     }
// }
// a.length=a.length-1;

// for(let i=0;i<a.length;i++){
//     if (a[i] > a[i + 1]) {
//              [a[i],a[i+1]]=[a[i+1],a[i]];
//                 i=-1;
//         }
// }

// console.log(a)

// 5,Missing number 

// let a = [1,3,5,7,9];

// for(let i=0;i<a.length;i++){
//     for(let j=a[i]+1;j<a[i+1];j++){
//         console.log(j)
//     }
// }

// 6,count the decimal Numbers

// let a = 3.5678,count=0;
    // a = `"${a}"`

    // for(let i=0;i<a.length;i++){
    //    if(a[i]=='.'){
    //     for(let j=i+1;j<a.length-1;j++){
    //        count++;
    //     }
    //    }
    // }
    // console.log(count)

    // while(a%1!=0){ this one is refference
    //     a=a*10;
    //     count++
    // }
    // console.log(count)

// 7,Maximum repeated numbers
// let a = [2,5,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,2,10,9,2];

// let count=0,num;

// for(let i=0;i<a.length;i++){
//     let tempCount =0;
//     for(let j=0;j<a.length;j++){
//         if(a[i]===a[j]){ 
//             tempCount+=1 
//             if(tempCount>count){
//                 num=a[i]
//                 count=tempCount;
//             }
//         }
//     }
// }
// console.log(count,num)



// 8,search 

// let a = ['test','organisation','fruits','chicken'],input = 'test';

// let count = (function(){
//     for(let i=0;i<a.length;i++){
//         if(a[i]==input)return 1;
//     }
//     return -1;
// }())

// console.log(count)


// 9, letter count in object;

// let a = 'engeneering';

// let obj = {};

// for(let i=0;i<a.length;i++){
//     let tempCount=0;
//     for(let j=0;j<a.length;j++){
//         if(a[i]==a[j]){
//             tempCount++; 
//         }
//         obj[a[i]]=tempCount
//     }
// }
// console.log(obj)

// let a = 'dvdf',str='',tempstr='';

// for(let i=0;i<a.length;i++){
//     let tempstr=''
//     for(let j=i;j<a.length;j++){
//          if(tempstr.includes(a[j])){
//              break;
//          }
//          tempstr+=a[j]
//          if(tempstr.length>str.length){
//              str=tempstr
//          }
//     }
    
//  }



// let inp = "()";

// let a =[...inp];

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]=='(' && a[j]==')' || a[i]=='{' && a[j]=='}' || a[i]=='[' && a[j]==']' ){
//             a.splice(j,1);j--;
//             a.splice(i,1);i--;
//         }
//     }
// }
// if(!a.length){
//     console.log(true);
// }
// else{
//     console.log(false); 
// }

// let a = [[21,2],[1,2],[12,5],[7,2],[35,3],[32,2],[80,2],[91,5],[92,3],[27,3],[19,1],[37,3],[85,2],[33,4],[25,1],[91,4],[44,3],[93,3],[65,4],[82,3],[85,5],[81,3],[29,2],[25,1],[74,2],[58,1],[85,1],[84,2],[27,2],[47,5],[48,4],[3,2],[44,3],[60,5],[19,2],[9,4],[29,5],[15,3],[1,3],[60,2],[63,3],[79,3],[19,1],[7,1],[35,1],[55,4],[1,4],[41,1],[58,5]],count=0;
// let check=0;


// for (let i = 0; i < a.length; i++) {
//     let temp = 0;
//     for (let j = i; j < a.length; j++) {
        
//         temp += a[j][0];
      
//        let sum=0;
//         for(let k=j+a[j][1]+1;k<a.length;k++){
//             if(a[k][0]>sum){
//                 sum+=a[k][0];
//                 k=a[k][1]+k+1
//             }
//         }
//         temp+=sum;
//        break;
//     }
//     count = Math.max(count, temp);
//     console.log(count)
// }

// console.log(count)

// let a = 'lokesh';a=a.split('')
// let b = 'vignesh';b=b.split('')

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//             a.splice(i,1);
//             b.splice(j,1);
//             j--;i--;
//         }
//     }
// }

//  a = [...a,...b];

// let arr = ['f','l','a','m','e','s'],loop=a.length;

// for(let i=0;i<a.length;i++){
//    if(arr.length==1)break;
//    if(arr.length==i){i=0};
//    if(loop==1){
//     arr.splice(i,1);
//     i--;
//     loop=a.length
//    }else{
//    loop--;
// }
// }
// console.log(arr)

// 1, Flated the nested Array

// let arr=[2,[4,[4]]]

// let result = [];

//   function merge(input) {
//     for (let i = 0; i < input.length; i++) {
//       if (Array.isArray(input[i])) {
//         merge(input[i]); 
//       } else {
//         result[result.length] = input[i]; 
//       }
//     }
//   }

//   merge(arr);

//   console.log(result)
 
// 2,Capitalize the first word

// let a = "hello world how are you",b='';
//     a=[...a];

// for(let i=0;i<a.length;i++){
//     a[0]=a[0].toUpperCase()
//     if(a[i]==' '){
//         a[i+1]=a[i+1].toUpperCase()
//     }
//     b+=a[i];
// }
// console.log(b)

// 3,Find the longest word in the sentance

// let a = 'hello world welcome to javascript',temp='',large='';


// for(let i=0;i<a.length;i++){
//     if(a[i]==' '){
//        if(temp.length>large.length){
//         large=temp;
//        }
//        temp='';
//     }else{
//         temp+=a[i]
//     }
// }
// if(temp.length>large.length){
//     large=temp;
// }

// console.log(large)

// 4,valid paranthisses

// let a = '(())',count=0
  
//     for(let i=0;i<a.length;i++){
//         for(let j=i+1;j<a.length;j++){
//             if(a[i]=='(' && a[j]==')' ||a[i]=='{' && a[j]=='}' ||a[i]=='[' && a[j]==']'){
//                 count+=2;
//                 break;
//             }
//         }
//     }
//     if(count==a.length){
//         console.log(true)
//     }else(console.log(false))

// 5,Anagram this one is wrong

// let a = ['top','pot','listen','opt','silent'],result=[];

// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i].length==a[j].length){
//             anagram(a[i],a[j])
//         }
//     }
// }


// function anagram(i_ind,j_ind){
//     let count = 0;
//     for(let i=0;i<i_ind.length;i++){
//         for(j=0;j<j_ind.length;j++){
//             if(i_ind[i]==j_ind[j]){
//                 count++
//             }
//         }
//     }
//     if(count==i_ind.length){
//         result[result.length]=[i_ind,j_ind]
//     }
// }
// console.log(result)

// 6, Junk array

// let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],count=3;
// let junk = [],resutl=[];
// for(let i=0;i<a.length;i++){
//     if(junk.length===count){
//         resutl[resutl.length]=junk;
//         junk=[];
//     }
//     junk[junk.length]=a[i];
// }
// if(junk.length>0){
//     resutl[resutl.length]=junk
// }

// console.log(resutl)


// 7,Truthy value false value;

// let a = [undefined,null,0,-0,'bala',-4,false,true],truthy_value=[],falsy_value=[];

// for(let i=0;i<a.length;i++){
//     if(a[i])truthy_value[truthy_value.length]=a[i];
//     else falsy_value[falsy_value.length]=a[i];
    
// }
// console.log(truthy_value,falsy_value)