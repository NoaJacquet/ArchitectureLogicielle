class Task{
    #title;
    #description;
    #done;

    construct(title, description, done){
        this.#title = title;
        this.#description = description;
        this.#done = done;
    }

    get title(){
        return this.#title;
    }

    get description(){
        return this.#description;
    }

    get done(){
        return this.#done;
    }

    set title(title){
        this.#title = title;
    }

    set description(description){
        this.#description = description;
    }

    set done(done){
        this.#done = done;
    } 
}

const buttonGet = document.getElementById('button-get');
const listeTasks = document.getElementById('tasks');

buttonGet.addEventListener('click', function(){
    fetch('http://127.0.0.1:5000/todo/api/v1.0/tasks')
    .then(response => response.json())
    .then(data => {
        console.log(data.tasks)
        for(let tache of data.tasks){
            const newTask = document.createElement('li');
            listeTasks.innerHTML = "";
            newTask.textContent = tache["title"];
            listeTasks.appendChild(newTask);
        }
    })
    .catch(error => console.error('Erreur :', error));
})