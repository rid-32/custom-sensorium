import jsx, { Component } from 'custom-elements-jsx'

class CustomRouter extends Component {
    componentDidMount() {
        const { history, routes } = this.props

        this.unlisten = history.listen((location, action) => {
            console.log(location)
            console.log(action)
        })
    }

    componentWillUnmount() {
        this.unlisten()
    }

    render() {
        return this.props.children
    }
}

if (!window.customElements.get('custom-router'))
    window.customElements.define('custom-router', CustomRouter)
