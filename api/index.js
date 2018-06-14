const api = ApiCreator(baseUrl);
getTasks = () => api.get(url); 

postTasks = (opt) => api.post('tasks', {
    body: JSON.stringify(opt),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

deleteTasks = (id) => api.delete(`tasks/${id}`)
