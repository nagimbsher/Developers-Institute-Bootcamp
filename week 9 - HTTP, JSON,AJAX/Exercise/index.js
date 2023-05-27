fetchCurrencies();
calculateTotal();
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch");

document.getElementById("input").addEventListener("keyup",
calculateTotal);
fromSelect.addEventListener("change", calculateTotal);
toSelect.addEventListener("change", calculateTotal);
switchButton.addEventListener("click", switchCurrencies);

function switchCurrencies(){
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    calculateTotal();
}

function fetchCurrencies(){
    const url = "https://v6.exchangerate-api.com/v6/6da4d3cdc657da50182b0fd5/codes";
    fetch(url)
    .then((res) => res.json())
    .then((res) => populateDropdown(res.supported_codes))
    .catch((error) => console.error(error));
}
  
function populateDropdown(){
    const entries = Object.entries(codes)

    for (const entry of entries){
        const [index, [code,name]] = entry
        const option = document.createElement("option");
        const option2 = document.createElement("option");
        option.innerText = code + ", " + name;
        option2.innerText = code + ", "  + name;
        option.value = code;
        option2.value = code;
        fromSelect.appendChild(option);
        toSelect.appendChild(option2);
    }
}

async function handleClick (){
    const curr1 = fromSelect.value;
    const curr2 = toSelect.value;
    const input = document.getElementById("input");
    const summary = document.getElementById("summary") 

    const url = `https://v6.exchangerate-api.com/v6/6da4d3cdc657da50182b0fd5/pair${curr1}/${curr2}`;
    try{
        const res = await fetch(url)
        const resJson = await res.json();
        const rate = resJson.conversion_rate;
        const amount = Number(input.value);
        const total = amount * rate
        summary.innerText = `${amount} ${curr1} = ${total} ${curr2}`;
    }catch(error){
        console.error(error);
    }
} 