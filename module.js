const root = ReactDOM.createRoot(document.getElementById('root'))

class Fruits extends React.Component {
    render(){
        return <>
            <h1>React, For those who dare.<br  /> Node for those who overcome</h1>
            <ul>
                <li>Mango</li>
                <li>Orange</li>
                <li>Banana</li>
            </ul>
        </>
    }
}
root.render(<Fruits />)