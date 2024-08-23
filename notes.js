const fs= require('fs')
const chalk = require('chalk')

const getnotes =() => {
    console.log("Your notes are:")
}

const addnotes =(title,body)=>{
    const notes = loadnotes()
    // const dupnotes =   notes.filter((note)=>note.title === title )
    const duplicatenote = notes.find((note)=> note.title ===title) 
      // returns undefined if no notes found 
//  filter can also be return without the return statement as usko edit nahi krna ab      notes.filter(note)=> note.title === title
    debugger    

if (!duplicatenote) {
        notes.push({
            title: title,
            body: body,
        })
        savenotes(notes)
        console.log('New Note Added')
    } else {
        console.log('Note title already present')
    }  
}     

const removenote =(title)=>{
    const notes = loadnotes()
    const dupnotes =   notes.filter((note)=>{
        return note.title === title 
    })

    if (dupnotes.length ===1) {
        notes.pop({
            title: title,
        })
        savenotes(notes)
        console.log(chalk.bgGreen('Note Removed'))
    } else {
        console.log(chalk.bgRed('No note with given title present'))
    }  
}

const savenotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
} 


const listnotes = () =>{
    const notes = loadnotes()
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readnotes = (title) =>{
    const notes = loadnotes()
    const note = notes.find((note=>note.title === title))
    if(note){
        console.log(chalk.inverse.green(note.title))
        console.log(chalk.inverse.green(note.body))
    }else{
        console.log("No notes found for the given title")
    }
}

const loadnotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

module.exports={ 
    getnotes:getnotes,      // nametobeexported : function name
    addnotes:addnotes,
    loadnotes:loadnotes,
    removenote: removenote,
    listnotes:listnotes,
    readnotes:readnotes,
}