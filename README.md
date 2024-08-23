# Note-Taking CLI Application

This is a command-line interface (CLI) application for managing notes. It allows users to add, remove, list, and read notes through simple commands.

## Features

- Add a new note with a title and body
- Remove an existing note by title
- List all saved notes
- Read a specific note by title

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies

## Usage

The application uses the following commands:

### Add a new note
node app.js add --title="Note Title" --body="Note Body"
Copy
### Remove a note
node app.js remove --title="Note Title"
Copy
### List all notes
node app.js list
Copy
### Read a specific note
node app.js read --title="Note Title"
Copy
## Dependencies

- yargs: For parsing command-line arguments
- validator: For input validation
- chalk: For colorful console output
- fs: Node.js built-in module for file system operations

## File Structure

- `app.js`: Main application file that handles command-line parsing and execution
- `notes.js`: Contains the core functionality for managing notes
- `utils.js`: Utility functions (currently not used in the main application)

## Data Storage

Notes are stored in a `notes.json` file in JSON format.
