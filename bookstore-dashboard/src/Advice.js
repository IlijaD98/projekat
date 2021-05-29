import React from 'react'
import axios from 'axios'
import Header from './Header'
import './Advice.css'
class Advice extends React.Component{
    state={advice:''};
    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then((response)=>{
            const {advice} = response.data.slip;
            this.setState({advice:advice});
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        const {advice} = this.state;
        return(
            <>
            <Header/>
            <h1>Potrebna ti je motivacija?</h1>
            <div className="neki-div">
        
            
                <div ClassName="neki-card">
                    <h1 className="heading">{advice}</h1>
                    <button onClick={this.fetchAdvice}><span>GIVE ME ADVICE!</span></button>
                </div>
            </div>
    </>
        );
    }
}

export default Advice;