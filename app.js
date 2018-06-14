class App{
    constructor(){
        this.render()
        this.tasks = []
    }


    async render(){
        try{
            await getTasks()
                .then(data => {
                    if(data.status === 200){
                        return data.json()
                    } else {
                        console.log(data.status)
                    }
                })
                .then(res => {
                    console.log(res)
                    this.tasks = res
                    this.tasks.forEach(el => {
                        new Task(el)
                    }) 
                })
        } catch(err){
            console.log(err)
        }
    }   
}

