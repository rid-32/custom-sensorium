import jsx, { Component } from 'custom-elements-jsx'

class UsersPage extends Component {
    render() {
        return <h3>Users!</h3>
    }
}

if (!window.customElements.get('users-page'))
    window.customElements.define('users-page', UsersPage)
