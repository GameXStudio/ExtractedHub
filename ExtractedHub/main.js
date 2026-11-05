const oopsSomethingWentWrongText = document.getElementById("something-went-wrong-text");
const container = document.getElementsByClassName("button-container")[0];

async function InitializeButtons() {

    const url = 'https://raw.githubusercontent.com/GameXStudio/ExtractedHub/main/allButtons.json';

    try{
        const answer = await fetch(url);

        if(!answer.ok){
            throw new Error(`HTTP Error! Status: ${answer.status}`);
        }

        const data = await answer.json();

        return data;
    }
    catch(ex){
        oopsSomethingWentWrongText.textContent = `Oops something went wrong: ${ex.message}`;

        console.error(`Oops something went wrong: ${ex.message}`);
    }
}

async function GetButtonData() {

    const data = await InitializeButtons();

    for(let i = 0; i < data.length; i++){
        const button = document.createElement('button');

        button.textContent = data[i].ButtonName;

        container.appendChild(button);
    }
}

GetButtonData();