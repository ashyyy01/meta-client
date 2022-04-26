import DashBoard from '../components/home/DashBoard.vue'
import LogIn from '../components/sign-in/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashBoard
  }, {
    path: '/datastream',
    name: 'Data Stream',
    // component: SignIn
  },
  {
    path: '/lineage',
    name: 'Lineage Tree',
    // component: SignIn
  },{
    path: "/login",
    name: "Login",
    component: LogIn
  }
]


export default routes