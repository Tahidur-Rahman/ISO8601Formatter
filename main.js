document.getElementById('dateSubmit').onclick=function(){
    let dateStr = document.getElementById('dateString').value;
    let convDt = convertISO8601toDate(dateStr);
    document.getElementById('result').innerHTML = convDt;
    
}

function convertISO8601toDate(dateStr){
    dateStr = dateStr.replace(/\D/g,' ');
    dateStr = dateStr.replace(/\s+$/,'');
    let dateComp = dateStr.split(' ');
    if(dateComp.length < 3) return 'invalid date'
    if(dateComp.length < 4) {
        dateComp[4] = 0,
        dateComp[5] = 0,
        dateComp[6] = 0
    }
    dateComp[1]--;
    let convdate = new Date(Date.UTC.apply(null,dateComp))
    return convdate.toUTCString()

}