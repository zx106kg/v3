import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.prototype.$message = ElementUI.Message
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
