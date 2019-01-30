import jsx, { Component } from 'custom-elements-jsx'

class Users extends Component {
    render() {
        return <h3>Users!</h3>
    }
}

if (!window.customElements.get('custom-users'))
    window.customElements.define('custom-users', Users)
