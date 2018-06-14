function currentMs(date){
    const parsed = Date.parse(new Date(date))
    const ms = parsed-currentTime
    if(ms > 0){
        return ms
    } else {
        throw new Error("Data is not valid")
    }
}

function showTime(time){
    let hours = (time - Date.now()) /  msInHour;
    let minutes = ((time - Date.now()) % msInHour) / msInMinute;
    let seconds = (((time - Date.now()) % msInHour) % msInMinute) / msInSecond;
    return `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`
}

function renderToDom(domEl, childrens){
    return childrens.forEach(element => {
        domEl.appendChild(element)
    });
}

function findById(id){
    return document.getElementById(id)
}
