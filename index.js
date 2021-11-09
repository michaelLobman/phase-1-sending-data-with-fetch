function submitData(userName, userEmail){
    const body = document.querySelector('body');
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(resp => resp.json())
    .then(object => {
        const id = object.id;
        body.append(id)
    })
    .catch(object => {
        body.append(object.message)
    })
}


































const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
};

fetch('http://localhost:3000/dogs', configurationObject)
.then(response => response.json())
.then((object) => console.log(object))