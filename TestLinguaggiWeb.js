async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    const itemElements = document.getElementsByClassName('item_text');

    for (let i = 0; i < itemElements.length && i < json.programming_languages_popular.length; i++) {
        itemElements[i].textContent = json.programming_languages_popular[i];
    }

    console.log(itemElements);

    let logoSito = document.getElementsByClassName("eltdf-normal-logo")[0];

    logoSito.src = "https://vceup.com/wp-content/uploads/2015/09/W3School.jpg";

    let wikipediaUrl = "https://it.wikipedia.org/wiki/";

    for (let i = 0; i < itemElements.length && i < json.programming_languages_popular.length; i++) {

        let link = document.createElement("a");

        link.textContent = json.programming_languages_popular[i];

        link.href = wikipediaUrl + encodeURIComponent(json.programming_languages_popular[i]);

        link.target = "_blank";

        itemElements[i].innerHTML = '';
        itemElements[i].appendChild(link);
    }

}

exampleFetch();