const getUsuarios = () => {
    fetch("https://jsonplaceholder.typicode.com/user")
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .then((data) => {
        console.log(data);
    });
};

getUsuarios();