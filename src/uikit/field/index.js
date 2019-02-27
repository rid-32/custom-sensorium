import jsx, { Component } from 'custom-elements-jsx'
import cn from 'classnames'

import './styles'

class PageField extends Component {
    setRef = element => (this.input = element)

    onChange = event => {
        const value = event.target.value + event.key

        this.props.onChange(value)

        if (this.input) this.input.value = value

        event.preventDefault()
    }

    render() {
        /* eslint-disable-next-line */
        const { ref, className, onChange, ...other } = this.props

        return (
            <input
                {...other}
                ref={ref || this.setRef}
                className={cn('pageField', className)}
                onKeyPress={this.onChange}
            />
        )
    }
}

if (!window.customElements.get('page-field'))
    window.customElements.define('page-field', PageField)
