// <--------Basic "async" Function--------->

async function myFunction () {
    return "Hello World!";
};
myFunction().then (console.log);



// <------Using "await" with 'Promises'------->

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data Fetched!"), 2000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}
getData();


// <-------Handling "Errors" with 'try...catch'------->

function myTask () {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Somthing Went Wrong!"), 2000);
    });
}

async function handleTask() {
    try{
        const result = await myTask();
        console.log(result);
    } catch (error) {
        console.error("Error", error);
    }
}
handleTask();



// <------------Multiple 'Awaits'------------>


function myMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), delay);
    });
}

async function showMessage(params) {
    const msg1 = await myMessage("First Message!", 2000);
    console.log(msg1);
    const msg2 = await myMessage("Second Message!", 2000);
    console.log(msg2);
    const msg3 = await myMessage("Third Message!", 2000);
    console.log(msg3);
    
}
showMessage();



