import Header from './Header/Header'
import { useState } from 'react'
import MoreInfoImg from '../../assets/images/more-info.svg'
import PrOfileOneImg from '../../assets/images/profile1.svg'
import PrOfileTwoImg from '../../assets/images/profile2.svg'
import ProgressImg from '../../assets/images/progress.svg'
import './Main.css'


export default function Main() {
    return (
        <main>
            <Header />
            <section className="main">
                <Trend />
                <Trend />
                <Trend />
            </section>
        </main>
    )
}

function Trend() {
    const [tasks, setTasks] = useState([1,2, 3, 4, 5, 6, 7, 8])
    const [taskForm, setTaskForm] = useState(true)

    function addTask() {
        setTaskForm(prev => !prev)
    }

    function changeTask() {
        setTasks(prev => prev )
    }
    return (
        <section className='trend'>
            <div className="head">
                <h4>To do (4)</h4>
                <span onClick={addTask}>Add new task</span>
            </div>
            <div className="tasks">
                {taskForm && <TaskForm /> }
                {tasks.length > 0? 
                    tasks.map((task)=> <Task key={task} />)
                    :    
                    <div className="no-task">
                        <p>There is no task.</p>
                    </div>
                }
                
            </div>
        </section>
    )
}

function Task() {
    return (
        <div className='task'>
            <h3>
                Design new ui presentation
                <img src={MoreInfoImg} alt="" />
            </h3>
            <p>Dribble marketing</p>
            <div className="progressbar">
                <div className='progress'>
                    <span>
                        <img src={ProgressImg} alt="" />
                        Progress
                    </span>
                    <span className='task-number'>3/10</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                </div>
            </div>
            <div className='details'>
                <div className="date">24 Aug 2025</div>
                <div className="associated">
                    <img src={PrOfileOneImg} alt="" />
                    <img src={PrOfileTwoImg} alt="" />
                    <div className="others">
                        <span>+3</span>
                    </div>
                </div>
            </div>
        </div> 
    )
}

function TaskForm() {
    function addNewTask() {
        console.log('add new task')
    }
    return (
        <div className="task-form">
            <h3>New task</h3>
            <form action="">
                
            </form>
        </div>
    )
}