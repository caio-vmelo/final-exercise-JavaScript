const jobs = []

function listJobs(){
  const jobsInText = jobs.reduce(function (finalText, job, index){
    //1. name, number of candidates
    finalText += index + ". "
    finalText += job.name
    finalText += " (" + job.candidates.lenght + " candidates)\n"
    return finalText
  }, "")

  alert(jobsInText )
}

function newJob () {
  const name = prompt("inform a name:")
  const description = prompt("Inform a description:")
  const deadline = prompt("inform one deadline (dd/mm/yy)")

  const confirmation = confirm (
    "Do you want to create a new job with this information?\n" +
    "Name: " + name + "\nDescription: " + description + "\n" +
    "Deadline: " + deadline
  )
    if(confirmation){
      const newJob = {name: name, description, deadline, candidates: []}
      jobs.push(newJob)
      alert("job created!")
    }
}

function showJob() {
  const index = prompt("Inform the index of the job: ")
  
  if (index >= jobs.lenght || index < 0) {
    alert("invalid index")
    return
  }

  const job = jobs[index]

  const candidatesInText = job.candidate.reduce(function (finalText, candidate){
    return finalText + "\n - " + candidate
  }, "")

  alert(
    "Job nº " + index + 
    "\nName: " + job.name +
    "\nDescription: " + job.description +
    "\nDeadline: " + job.deadline +
    "\nNumber of canditates: " + job.candidates.lenght +
    "\nSubscribers candidates: " + candidatesInText
  )
}

function enrollCandidate(){
  const candidate = prompt("Inform the name of the candidate: ")
  const index = prompt("Inform the index of the job in wich the candidate wants to apply: ")
  const job = jobs[index]

  const confirmation = alert(
    "Wants to subscribe the candidate " + candidate + " on the job " + index + "?\n" +
    "Name: " + job.description + 
    "\nDescription: " + job.description +
    "\nDeadline: " + job.deadline 
  )

  if(confirmation){
    job.candidates.push(candidate)
    alert("Subscription realized!")
  }
}

function deleteJob () {
  const index = prompt("Inform the index: ")
  const job = jobs[index]

  const confirmation = confirm(
    "Are you sure you want to delete the job " + index + "\n?" + 
    "Name: " + job.description + 
    "\nDescription: " + job.description +
    "\nDeadline: " + job.deadline 
  )
  
  if(confirmation){
    jobs.splice(index, 1)
    alert("Job deleted with success!!")
  }
}


function displayMenu(){
  const option = prompt (
    "Register new job" +
    "\n\nChoose one of the options: " +
    "\n1. List the avaliable jobs" +
    "\n2. Create a new job" +
    "\n3. Show one job" +
    "\n4. Subscribe one candidact" +
    "\n5. Delete a job" +
    "\n6. Exit"
  )

  return option 
}

function execute(){
  let option = ""

  do{
    option = displayMenu()

    switch (option) {
      case "1":
        listJobs()
        break;
      case "2":
        newJob()
        break;  
      case "3":
        showJob()
        break;
      case "4":
        enrollCandidate()
        break;
      case "5":
        deleteJob()
        break;
      case "6":
         alert("Closing the program...")
        break;
      default:
        alert("Invalid option!")
    }
  }while(option !== "6")
}

execute()