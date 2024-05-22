#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer"

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 10
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 10
        this.fuel = fuel
    }
}

let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"PLease Enter your Name:"

})

let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:" Select your Opponent:",
    choices:["Ninja","Zombie","Ghost"]
})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    
    if  (opponent.select == "Ninja"){
        let ask = await inquirer.prompt({
     type:"list",
    name:"option",
    message:" Select an option:",
    choices:["Attack","Drink Portion","Close game"]
        });

        if (ask.option == "Attack"){
            let num = Math.floor(Math.random ()* 2)
            if (num > 0 ){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0){
                console.log(chalk.bold.bgMagentaBright.black.italic(" ~~~~ *Game Over* ~~~~"));
                process.exit()
            }
            if (num <= 0 ){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(o1.fuel <= 0){
                console.log(chalk.bold.bgYellowBright.blackBright.italic("**** ~~~YOU WIN~~~ ****"))
                process.exit()
            }
        }
             if(ask.option == "Drink Portion"){
                p1.fuelIncrease()
                console.log(chalk.bold.italic.bgBlueBright`Your fuel is ${p1.fuel}`);
            }
              if (ask.option == "Close game"){
                console.log(chalk.bold.bgMagentaBright.italic(" ~~~~ *Game Over* ~~~~"));
                process.exit()
            }
        }
    

    if  (opponent.select == "Zombie"){
        let ask = await inquirer.prompt({
     type:"list",
    name:"option",
    message:" Select an option:",
    choices:["Attack","Drink Portion","Close game"]
        });
        if (ask.option == "Attack"){
            let num = Math.floor(Math.random ()* 2)
            if (num > 0 ){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0){
                console.log(chalk.bold.bgMagentaBright.black.italic(" ~~~~ *Game Over* ~~~~"));
                process.exit()
            }
            if (num <= 0 ){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(o1.fuel <= 0){
                console.log(chalk.bold.bgYellowBright.blackBright.italic("**** ~~~YOU WIN~~~ ****"))
                process.exit()
            }
        }
            
             if(ask.option == "Drink Portion"){
                p1.fuelIncrease()
                console.log(chalk.bold.italic.bgBlueBright(`Your fuel is ${p1.fuel}`));
            }
              if (ask.option == "Close game"){
                console.log(chalk.bold.bgMagentaBright.italic(" ~~~~ *Game Over* ~~~~"));
                process.exit()
            }
        
    }

    if  (opponent.select == "Ghost"){
        let ask = await inquirer.prompt({
     type:"list",
    name:"option",
    message:" Select an option:",
    choices:["Attack","Drink Portion","Close game"]
        });
        if (ask.option == "Attack"){
            let num = Math.floor(Math.random ()* 2)
            if (num > 0 ){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0){
                console.log(chalk.bold.bgMagentaBright.black.italic(" ~~~~ *Game Over* ~~~~"));
           
            process.exit()
            }
            if (num <= 0 ){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(o1.fuel <= 0){
                console.log(chalk.bold.bgYellowBright.blackBright.italic("**** ~~~YOU WIN~~~ ****"))
            process.exit()
            }
        }
            
             if(ask.option == "Drink Portion"){
                p1.fuelIncrease()
                console.log(chalk.bold.italic.bgBlueBright(`Your fuel is ${p1.fuel}`));
            }
              if (ask.option == "Close game"){
                console.log(chalk.bold.bgMagentaBright.italic(" ~~~~ *Game Over* ~~~~"));
                process.exit()
            }
        
    }
}while(true)