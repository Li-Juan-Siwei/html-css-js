//1
function getData() {
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data))
}

//2
async function getData() {
    let response = await fetch('/api/data');
    let data = await response.json();
    console.log(data);
}