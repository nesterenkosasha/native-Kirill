const bntAddNewTask = document.getElementById("button-add-task")
const modalWrapper = document.getElementById("wrapper-modal")
const tasksWrapper = document.getElementById("wrapper-tasks")
const alarm = document.getElementById("alarm")
const wrapper = document.getElementById("wrapper")
const wrapperAlarms = document.getElementById("alarm-border-all")
const alarms = document.getElementById("alarms")
const leftBtn = document.getElementById("leftBtn")
const rightBtn = document.getElementById("rightBtn")
const currentTime = Date.now()

const msInHour = 3600000
const msInMinute = 60000
const msInSecond = 1000
const baseUrl = "localhost:3000"
const url = "tasks"