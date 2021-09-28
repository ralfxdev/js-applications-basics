const username = document.querySelector("#name");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const street = document.querySelector("#street");

const getUsuarios = async () => {
    const {data: usuarios} = await axios.get("https://jsonplaceholder.typicode.com/users");
    
    username.innerHTML = usuarios[0].name;
    email.innerHTML = usuarios[0].email;
    website.innerHTML = usuarios[0].website;
    street.innerHTML = usuarios[0].address.street;
};

getUsuarios();