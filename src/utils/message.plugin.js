import messages from '@/utils/messages'

export default {
    install(Vue) {
        Vue.prototype.$message = function (html) {
            M.toast({html})
        }

        Vue.prototype.$errorMsg = function (html) {
            M.toast({html: `[Error]: ${messages[html] || html}`})
        }
    }
}