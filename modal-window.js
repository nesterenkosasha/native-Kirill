class ModalWindow extends Element{
    constructor(){
        super()
        this.render()
        this.validation = this.validation.bind(this)
        this.handelClick = this.handelClick.bind(this)
    }
    
    render(){ 
        const task = this.createNode({ el:"div", style:"model-task" })
        const modalTitle = this.createNode({ el:"h2", text: "Enter new task" })
        const inputText = this.createNode({ el:"input", style:"input", id:"taskText", placeholder: "Task text" })
        const inputDate = this.createNode({ el:"input", style:"input", id:"taskDate", placeholder: "2018.06.14 11:22" })
        const taskBtns = this.createNode({ el:"div", style:"modal-btn" })
        taskBtns.addEventListener("click", (e) => this.handelClick(e))
        const btnCancel = this.createNode({ el:"button", style:"cancel", text:"Cancel" })
        const btnAdd = this.createNode({ el:"button", style:"add", text:"Add" })
        
        renderToDom(taskBtns, [btnCancel, btnAdd])
        renderToDom(task, [modalTitle, inputText, inputDate, taskBtns])
        renderToDom(modalWrapper, [task])

    }
    
    validation(text, date){
        try{  
            const regExpText = /^[a-z]+$/i
            const regExpDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}$/
            if (!regExpText.test(text) || !regExpDate.test(date) || !currentMs(date)) {
                throw new Error("Your data is not valid!")
                return false
            } else {
                return true
            }       
        }catch({ message }){
            console.error(message)
        }
    }
    
    async handelClick(e){
        switch(e.target.getAttribute("class")){
            case "cancel" : {
                modalWrapper.removeChild(e.target.parentNode.parentNode)
                break
            } 
            case "add" : {
                let text = e.target.parentNode.parentNode.childNodes[1].value
                let date = e.target.parentNode.parentNode.childNodes[2].value
                
                try{
                    if(this.validation(text, date)){
                        await postTasks({ text, date: Date.parse(date) })
                        .then(data => {
                            if(data.status === 201){
                                return data.json()
                            } else {
                                console.log(data.status)
                            }
                        })
                        .then(data => {
                            new Task(data)
                            modalWrapper.removeChild(e.target.parentNode.parentNode)
                        })
                    }
                } catch({ message }){
                    console.error(message)
                }
                break
            }
        }
    }
    
}