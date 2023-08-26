const summaryBtn = document.querySelector("#page-content");
const result = document.querySelector(".result");

const userAction = async () => {
    document.querySelector(".summary").classList.remove("hide");
    const text = document.body.innerText;
    const options = {
        method: 'POST',
        body: JSON.stringify({
            prompt: `Summarize the following text: ${text}`
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    result.innerHTML = `
    <li class="data">
        <span class="result">Summarizing the Text</span>
    </li>
`
const response = await fetch('http://localhost:3000/api/get-prompt', options);
const myJson = await response.json(); //extract JSON from the http response
result.innerHTML = `
    <div class="data">
        <span class="result">${myJson.message}</span>
    </div>
`
}
summaryBtn.addEventListener("click", userAction);