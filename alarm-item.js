class AlarmItem extends Element{
    constructor(el, lenght){
        super()
        this.el = el
        this.lenght = lenght
        this.render()
    }

    render(){
        console.log("8888888888", this.el)
        const alarmItem =  this.createNode({ el:"div", style:"alarm-item" })
        const amount =  this.createNode({ el:"div", style:"", text: this.lenght }) 
        const alarmH1 = this.createNode({ el:"h1", style:"", text:"!" })
        const alarmH2 = this.createNode({ el:"h2", style:"", text:"Time is over" })
        const alarmH3 = this.createNode({ el:"h3", style:"", text: this.el.task })
        const btn = this.createNode({ el:"button", style:"alarm-btn", text: 'OK' })
        btn.addEventListener("click", async (e) => {
            console.log("NEED TO CLOSE")
            //console.log(e.target.parentNode)
            // alarm.style.display = "none"

            await deleteTasks(this.el.id)
            .then(data => {
                if(data.status === 200){
                    const taskToDelete = findById(this.el.id)
                    console.log("taskToDelete", taskToDelete)
                    taskToDelete.remove()
                    wrapper.dispatchEvent(new CustomEvent("change-alarm-list", {
                        detail:{
                            id: this.el.id
                        }
                    }))
                } else {
                    console.log(data.status)
                }
            }).catch(err => console.error(err))
        })

        renderToDom(alarmItem, [amount, alarmH1, alarmH2, alarmH3, btn])
        renderToDom(alarms, [alarmItem])
    }
}
