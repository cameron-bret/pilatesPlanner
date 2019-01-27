import React, { Component } from 'react';
import axios from 'axios'
import EditLessonForm from './EditLessonForm';
import Exercise from '../Exercises/Exercise'
import styled from 'styled-components'

const PageStyles = styled.div`
    text-align: center;
`

class SingleLesson extends Component {
    state = {
        lesson: {
            exercises: [{}]
        },
        editFormVisible: false
    }

    componentDidMount() {
        this.getSingleLesson()
    }

    getSingleLesson = () => {
        const lessonId = this.props.match.params.lessonId
        axios.get(`/api/lessons/${lessonId}`)
            .then((res) => {
                this.setState({ lesson: res.data })
            })
    }

    deleteLesson = () => {
        const lessonId = this.props.match.params.lessonId
        axios.delete(`/api/lessons/${lessonId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditLessonForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    createNewExercise = () => {
        const lessonId = this.props.match.params.lessonId
        axios.post(`/api/lessons/${lessonId}/exercises`).then((res) => {
            console.log(res.data)
            this.getSingleLesson()
        })
    }

    render() {
        return (
            <PageStyles>
                <h1>{this.state.lesson.username}'s Exercises</h1>
                <p>Password: {this.state.lesson.password}</p>
                <div><button onClick={this.toggleEditLessonForm}>Edit Lesson</button></div>
                <div>
                    <button onClick={this.createNewExercise}>Add Exercise</button>
                </div>
                {this.state.editFormVisible ? <EditLessonForm
                    getSingleLesson={this.getSingleLesson}
                    lessonId={this.state.lesson._id}
                    toggleEditLessonForm={this.toggleEditLessonForm}
                /> : null}
                <div><button onClick={this.deleteLesson}>Delete Lesson</button></div>
                    <Exercise lesson={this.state.lesson}
                    getSingleLesson={this.getSingleLesson}
                    />
            </PageStyles>
        );
    }
}

export default SingleLesson;