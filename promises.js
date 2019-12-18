const posts = [
    {title : 'Post One', body : 'body One'},
    {title : 'Post Two', body : 'body Two'}
];

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    },1000);
}



function createPosts(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong.')
            }
        },2000);

    });
    
}

// createPosts({title : 'Post Three', body : 'body Three'})
// .then(getPosts)
// .catch((err) => {
//     console.log(err);
// });

// Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10
// const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'GoodBye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));


// Async Wait  - A way to handle responses
// async function init(){
//     await createPosts({title : 'Post Three', body : 'body Three'});
//     getPosts();
// }
// init();

// Async Wait with fetch

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

