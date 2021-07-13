import React from 'react'
import ReactDOM from 'react-dom';

// 類式組件
class Demo extends React.Component {
    
    state = {count:0}
    
    add = () => {
        this.setState(state => ({count: state.count+1}))
    }

    unmount = () =>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    componentDidMount(){
        this.timer = setInterval(() =>{
            this.setState(state => ({count: state.count+1}))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h2>當前求和為{this.state.count}</h2>
                <button onClick={this.add}>點我+1</button>
                <button onClick={this.unmount}>卸載組件</button>
            </div>
        )
    }
}


// function Demo(){
//     // console.log('Demo');
//     const [count, setCount] = React.useState(0);

//     React.useEffect(()=>{
//        let timer = setInterval(()=>{
//             setCount(count => count+1);
//        },1000) 

//        return ()=>{
//             clearInterval(timer)    
//        }
//     },[])


//     //加的回調
//     function add(){
//         // setCount(count+1);  // 第一種寫法
//         setCount(count => count + 1)
//     }

//     //卸載組件的回調
//     function unmount(){
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     }

//     return(
//         <div>
//             <h2>當前求和為{count}</h2>
//             <button onClick={add}>點我+1</button>
//             <button onClick={unmount}>卸載組件</button>
//         </div>
//     )
// }

export default Demo
