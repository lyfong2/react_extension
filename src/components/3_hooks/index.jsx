import React from 'react'

// export default class Demo extends React.Component {
    
//     state = {count:0}
    
//     add = () => {
//         this.setState(state => ({count: state.count+1}))
//     }

//     render() {
//         return (
//             <div>
//                 <h2>當前求和為{this.state.count}</h2>
//                 <button onClick={this.add}>點我+1</button>
//             </div>
//         )
//     }
// }
function Demo(){
    console.log('Demo');
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('tom');

    //加的回調
    function add(){
        // setCount(count+1);  // 第一種寫法
        setCount(count => count+1)
    }

    function changeName(){
        setName('jack');
    }

    return(
        <div>
            <h2>當前求和為{count}</h2>
            <h2>我的名子是:{name}</h2>
            <button onClick={add}>點我+1</button>
            <button onClick={changeName}>點我改名</button>
        </div>
    )
}

export default Demo
