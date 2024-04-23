import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const h = React.createElement

const button = h('button',{"data-id": 123}, 'Button 1')

const app = h(button)

root.render(app)