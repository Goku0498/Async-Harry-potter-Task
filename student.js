let cont = document.createElement("div")
cont.className = "cont"


async function generator() {
    let api_url = "https://hp-api.herokuapp.com/api/characters/students"
    try {
        let info = await get_info(api_url);
        console.log(info)

        for(let i=0; i<info.length; i++){
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `<div class="card">
            <img src="${info[i].image}" alt="${info[i].name}" width=200px height=300px/>
            </div>
            <div>
            <p>Name: ${info[i].name}</p>
            <p>Species ${info[i].species}</p>
            </div>`
            cont.appendChild(card)
        }
    } catch (error) {
            console.error(`Failed to fetch image info: ${error}`);
    }
    }

async function get_info(link) {
    let response = await fetch(link);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
}

document.body.append(cont)

generator();