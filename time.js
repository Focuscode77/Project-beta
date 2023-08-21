

//Get Hours
const getHr = () => {
    const getTime = new Date()
    const hours = getTime.getHours();
    return hours;
}

//Get mintues
const getMin = () => {
    const getTime = new Date()
    const mintues = getTime.getMinutes();
    return mintues;
}

//Get seconds
const getSec = () => {
    const getTime = new Date()
    const seconds = getTime.getSeconds();
    return seconds;
}



//Get Html
const setHTML = (hr, min, sec) => {
    const hours = document.getElementById("hr");
    const mintues = document.getElementById("min");
    const seconds = document.getElementById("sec");

    hours.innerText = hr;
    mintues.innerText = min;
    seconds.innerText = sec;

}


const setDate = () => {
    const hr = getHr();
    const min = getMin();
    const sec = getSec();
    setHTML(hr, min, sec);

}
//Set Interval is the feature that actully gets the numbers moving important
setInterval(() => {
    setDate()

}, 1000);

