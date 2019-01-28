import React, { Component } from 'react'
import axios from 'axios'

class AddLessonForm extends Component {
    state = {
        lesson: {
            muscleGroup: '',
            level: '',
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.lesson }
        newState[event.target.name] = event.target.value
        this.setState({ lesson: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const datapass = this.state.lesson
        axios.post('/api/lessons', datapass)
        .then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <div><input type="text" name="muscleGroup" placeholder="Muscle Group" onChange={(event)=> this.handleChange(event)}/></div>
                    <div><input type="text" name="level" placeholder="Level" onChange={(event)=> this.handleChange(event)}/></div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddLessonForm