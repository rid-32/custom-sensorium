import jsx, { Component } from 'custom-elements-jsx'
import cn from 'classnames'

import './styles'

class PageField extends Component {
    setInput = element => {
        if (this.props.ref) this.props.ref(element)

        this.input = element
    }

    setCleanIcon = element => (this.cleanIcon = element)

    onChange = value => {
        this.props.onChange(value)

        this.toggleCleanIcon()
    }

    toggleCleanIcon = () => {
        const display = this.input.value ? 'initial' : 'none'

        this.cleanIcon.style.display = display
    }

    cleanFeild = () => {
        this.onChange('')

        this.input.focus()
    }

    render() {
        const { className, ...other } = this.props

        return (
            <div className={cn('pageField', className)}>
                <custom-input
                    {...other}
                    ref={this.setInput}
                    className="pageField-input"
                    onChange={this.onChange}
                />
                <span
                    ref={this.setCleanIcon}
                    onClick={this.cleanFeild}
                    className="pageField-fieldClean"
                >
                    x
                </span>
            </div>
        )
    }
}

if (!window.customElements.get('page-field'))
    window.customElements.define('page-field', PageField)
