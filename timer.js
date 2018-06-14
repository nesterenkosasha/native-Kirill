class Timer{
    constructor(date, render, alarms, id, task){
        this.date = date; //11111111111111
        this.interval = null
        this.id = id;
        this.task = task
        this.alarms = alarms
        this.render = render
        this.start()
        this.addToAlarms = this.addToAlarms.bind(this)
    }

    addToAlarms() {
        return this.alarms.push(this.id)
    }
    
    
    start(){
        this.interval = setInterval(() => {
            if(this.date < Date.now()){
                clearInterval(this.interval)
                wrapper.dispatchEvent(new CustomEvent("is-alarm-error", {
                    detail: {
                        id: this.id,
                        task: this.task
                    }
                }))
            } else {
                let hours = (this.date - Date.now()) /  msInHour;
                let minutes = ((this.date - Date.now()) % msInHour) / msInMinute;
                let seconds = (((this.date - Date.now()) % msInHour) % msInMinute) / msInSecond;
                let time = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`
                this.render(time)              
            }
        }, 1000)
    }
   
    cons(){
        console.log(this.date)
    }
}

