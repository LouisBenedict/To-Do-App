import React from 'react';

const Header = () => {
  return (
    <div>
        <h1 id='main-title'>To-Do List</h1>
        <p id='tag'>What do you want to do today?</p>

        <div className='instructions'>
            <ol>
                <li>Select the To-Do List and start typing to write your task</li>
                <li>Press Enter to create a new task</li>
                <li>Press Backspace to delete a task</li>
                <li>Click on the checkbox to mark a task as completed</li>
            </ol>
        </div>
    </div>
  )
}

export default Header