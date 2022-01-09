const posts=[
    {title:"Post one", body:"This is post one "},
    {title:"Post two", body:"This is post two "}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Somthing Error')
            }
        },2000);
    });
  
}
// createPost({title:'Post three',body:'This is Three'}).then(getPosts)
// .catch(err=>console.log(err));
// Promise all 
// const promise1=Promise.resolve('Promise 1');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{setTimeout(resolve,2000,'Promise 3')})
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));
// Async/Await
async function init(){
    await createPost({title:'Post three',body:'This is Three'});
    getPosts();
}
init();
// Async / Await / Fetch
async function fetchUser(){
   const res= await fetch('https://jsonplaceholder.typicode.com/users');
   const data=await res.json();
   console.log(data)
}
fetchUser();