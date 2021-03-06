import VLogin from './VLogin'
import VContact from './VContact'
import VArea from './VArea'
import VCity from './VCity'
// import UniPopup from './UniPopup'


let ComponentCaches ={}

function registerCommonComponent(vue,name,Component,options = {}){
    if(!vue.prototype.$alert){
        vue.prototype.$alert = {}
    }
    vue.prototype.$alert[name] = function () {
        if (ComponentCaches[name]) {
            return ComponentCaches[name]
        }
        var componentClass = vue.extend(Component)
        var component = new componentClass(options).$mount()
        document.body.appendChild(component.$el)
        return ComponentCaches[name] = component
    }
}

export default {
    registerComponent: vue => {
		vue.component('v-login', VLogin);
		vue.component('v-contact', VContact);
		vue.component('v-area', VArea);
		vue.component('v-city', VCity);
		// vue.component('uni-popup', UniPopup);
        // registerCommonComponent(vue,'loading',Loading)
        // registerCommonComponent(vue,'tost',Tost)
    }
}