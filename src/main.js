// Импортируем зависимости
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// импортируем About компонент
import About from './components/About'
import Login from './components/Login'

Vue.use(VueRouter)
// Определяем роуты
const routes = [
  { path: '/about', component: About },
  { path: '/login', component: Login }
]

// Создаем экземпляр роутера и передайте опцию `routes`
const router = new VueRouter({
  routes,
  mode: 'history'
})
// Создаем экземпляр vue
new Vue({
// Определяем селектор для корневого компонента
  el: '#app',
  // передаем шаблон корневому компаненту
  template: '<App/>',
  // Объявляем компоненты, к которым может обращаться корневой компонент;
  components: { App },
  // Передаем в роутер экземпляр Vue
  router
}).$mount('#app')