import { register } from 'dop'
import VIEWS from 'const/views'

const state = {
    view: VIEWS.HOME,
    nickname: ''
    // get composed() {
    //     return `${this.route} ${this.nickname}`
    // },
}

// window.getState = () => state['~DOP'].p // useful for development

export default register(state)
