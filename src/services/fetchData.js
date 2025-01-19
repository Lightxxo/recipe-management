
export default async function fetchData(){
    const response = await fetch('https://jsonplaceholder.org/users');
    const data = await response.json();

    return data;
}