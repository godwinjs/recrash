import('https://unpkg.com/react@18/umd/react.development.js')
import('https://unpkg.com/react-dom@18/umd/react-dom.development.js')
import Layout from  '/Layout.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

// let h1 = React.createElement('h1', null, 'Hello World')

root.render(Layout)