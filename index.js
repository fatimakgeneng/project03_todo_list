#! /usr/bin/env node
import inquirer from "inquirer";
//1 TODO ARRAY
//2 FUNCTION
//3 OPERATION
// 1
let toDos = ['Fatima', 'Sara'];
// 2
async function createToDo(parameter) {
    //USED DO WHILE FOR PROGRAM CONTINUATION
    do {
        let ans = await inquirer.prompt({
            type: 'list',
            message: 'Select from the following',
            name: 'selected',
            choices: ['add', 'update', 'view', 'delete']
        });
        // 3
        //ADD ITEM
        if (ans.selected == 'add') {
            let addToDo = await inquirer.prompt({
                type: 'input',
                message: 'add item',
                name: 'items'
            });
            parameter.push(addToDo.items);
            console.log(parameter);
        }
        ;
        //UPDATE ITEM    
        if (ans.selected == 'update') {
            let updateToDo = await inquirer.prompt({
                type: 'list',
                message: 'Select the item you want to update',
                name: 'todo',
                choices: toDos.map(item => item)
            });
            let addToDo = await inquirer.prompt({
                type: 'input',
                message: 'add item',
                name: 'items'
            });
            let newToDos = toDos.filter(val => val !== updateToDo.todo);
            toDos = [...newToDos, addToDo.items];
            console.log(toDos);
        }
        //VIEW ITEM    
        if (ans.selected == 'view') {
            console.log(toDos);
        }
        //DELETE ITEM    
        if (ans.selected == 'delete') {
            let deleteToDo = await inquirer.prompt({
                type: 'list',
                message: 'Select an item you want to remove',
                name: 'todo',
                choices: toDos.map(item => item)
            });
            let newToDos = toDos.filter(val => val !== deleteToDo.todo);
            toDos = [...newToDos];
            console.log(toDos);
        }
    } while (true);
}
//Invoke
createToDo(toDos);
