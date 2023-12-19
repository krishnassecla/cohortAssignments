let time = 0
function timer(){
    setTimeout(function(){
        console.log(time, "seconds has passed already.")
        time++
        timer()
    }, 1000)
}

timer()