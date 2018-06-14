class Task extends Element{
    constructor({ text, date, id, alarms }){
        super()
        this.id = id;
        this.alarms = alarms;
        this.task = text;
        this.date = new Timer(date, this.renderDate.bind(this), alarms, this.id, this.task); //11111111111
        this.renderTask()
    }

    async renderTask(){
        console.log(this.id)
        const taskWrapper = this.createNode({ el:"div", style:"task", id:this.id})
        const taskText = this.createNode({ el:"div", style:"task-text", text:this.task })
        const taskDate = this.createNode({ el:"div", style:"task-text", text: '0:0:0' })
        const trash = this.createNode({ el:"button", style:"trash", text: 'delete' })
        trash.addEventListener("click", async (e) => {
            await deleteTasks(this.id)
            .then(data => {
                if(data.status === 200){
                    return e.target.parentNode.remove()
                } else {
                    console.log(data.status)
                }
            })
        })
        this.dateElement = taskDate;
        
        renderToDom(taskWrapper, [taskText, taskDate, trash])
        renderToDom(tasksWrapper, [taskWrapper])
    }
    
    renderDate(time) {
        this.dateElement.innerHTML = time
    }
}

