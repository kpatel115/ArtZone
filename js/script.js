// TODO
let portrait = document.getElementsByTagName('img')
fetch('https://api.artic.edu/api/v1/artworks/129884')
    .then(res => res.json())
    .then(data => console.log(data))


// Fetch the art insititute api
const _getData = async () => {
    const data = await fetch (`https://api.artic.edu/api/v1/artworks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const info = await data.json();
    console.log(info)
}
// collect the necessary data from the api for each image

// function to get specific info for each image when hovered - getInfo()

async function hoverEvent(img_index, item_id) {
    let portrait = document.getElementsByTagName('img')[img_index].attributes[1].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],

    ]);
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${portrait}`, {
        method: 'GET',
        headers: headers
    });
    let result = await fetch(request);
    let response = await result.json()
    console.log(response)

    let portraitDataTitle = response.data.title
    let portraitDataArtist = response.data.artist_title
    let portraitDataType = response.data.medium_display
    let portraitDataDate = response.data.date_display
    let portraitDataOrigin = response.data.place_of_origin

    let portraitData = {
        "Title": portraitDataTitle,
        "Artist": portraitDataArtist,
        "Type": portraitDataType,
        "Date": portraitDataDate,
        "Origin": portraitDataOrigin
    }

    
    //function call to get data on mouse over
    displayData(portraitData)

}
// get the data to show up when hovering over the images 


function getArt(id, event) {
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            hoverEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            hoverEvent(1,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            hoverEvent(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            hoverEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            hoverEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            hoverEvent(5,0)
            break;
        }
    }
}



/// function to get data on hover
portrait.addEventListener('mouseover', (event) => {

})

function displayData(data) {
    const formattedData = JSON.stringify(data, null, "\n");
    const toast = document.getElementById('toast');
    toast.textContent = formattedData;
    toast.style.opacity = 1;
    setTimeout(() => {
        toast.style.opacity = 0;
     }, 5000);
}

//     const popup = window.open();
//     popup.document.write('<pre>' + JSON.stringify(title) + '</pre>');
//     popup.document.write('<pre>' + JSON.stringify(artist) + '</pre>');
//     popup.document.write('<pre>' + JSON.stringify(type) + '</pre>');
//     popup.document.write('<pre>' + JSON.stringify(date) + '</pre>');
//     popup.document.write('<pre>' + JSON.stringify(origin) + '</pre>');
// 