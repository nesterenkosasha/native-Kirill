class Alarm extends Element{
    constructor(){
        super()
        this.alarms = []
        this.alarmActiveIndex = 0
        wrapper.addEventListener("is-alarm-error", ({ detail: { id, task }}) => {
            this.alarms.push({ id, task })
            if(this.alarms.length){ 
                alarm.style.display = "block"
            } else {
                alarm.style.display = "none"
            }
            this.render(this.alarm)
        })
        
        wrapper.addEventListener("change-alarm-list", ({ detail: { id }}) => {
            this.alarms = this.alarms.filter(el => el.id !== id)
            if(this.alarms.length){ 
                alarm.style.display = "block"
                this.render(this.alarms)
            } else {
                alarm.style.display = "none"
            }
        })
        
        rightBtn.addEventListener("click", (e) => this.handelClick(e))
        leftBtn.addEventListener("click", (e) => this.handelClick(e))
    }
    
    render(alarm){
        var element = document.getElementById("alarms");
        while (element.firstChild) {
        element.removeChild(element.firstChild);
        }
        if(this.alarmActiveIndex >= this.alarms.length){
            this.alarmActiveIndex = 0
        }
        new AlarmItem(this.alarms[this.alarmActiveIndex], this.alarms.length)
    }    

    handelClick(e) {
        switch(e.target.dataset.side){
            case "left":{
                if(this.alarmActiveIndex == 0){
                    this.alarmActiveIndex = this.alarms.length-1
                } else {
                    this.alarmActiveIndex = this.alarmActiveIndex-1
                }
                console.log("left", this.alarmActiveIndex)
                break
            }
            case "right":{
                if(this.alarmActiveIndex == this.alarms.length-1){
                    this.alarmActiveIndex = 0
                } else {
                    this.alarmActiveIndex = this.alarmActiveIndex+1
                }
                console.log("ri", this.alarmActiveIndex)
                break
            }
        }
        this.render(this.alarm)
    }
}
new Alarm()
