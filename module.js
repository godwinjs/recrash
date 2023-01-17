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

class Share extends React.Component {
    render(){
        return(<a {...this.props} >visit Website</a>)
    }
}


root.render(
        <>
        <Fruits /> 
        <Share href="https://www.google" target="_blank" title="Visit Us" />
        </>
        )