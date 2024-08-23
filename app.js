const yargs = require('yargs')
const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')

//helps to set the version of the app
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Note Body/ Description',
            demandOption:true,
            type:'string',
        }
    },
    handler:function(argv){
        notes.addnotes(argv.title,argv.body)
}
})

//create a remove command
yargs.command({
    command:'remove',   // command joh terminal me name doge
    describe:'Removes a note',
    handler:function(argv){                  // handler function mein actual function jo perform hoga (like add me add a note and stuff)
        notes.removenote(argv.title)
    }
})
//create a list and read a note
yargs.command({
    command: 'read',
    describe:'Reads a note',
    builder:{
        title : {
            describe: 'Reads a note',
            type: 'string',
            demandOption: true,
        }
    },
    handler:function(argv){
        notes.readnotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Describes all your notes',
    handler: function(){
        console.log(chalk.green.bold("Your notes are:"))
        notes.listnotes()
    }
})

yargs.parse()  // console.log(yargs.argv) [both are same]
