import './App.css';

const user = {
  firstName: 'Alejandro',
  lastName: 'Ciravegna',
  avatar: 'https://watson.mg/wp-content/uploads/2019/12/avatar.png'
}

function getName(user) {
  return `${user.firstName} ${user.lastName}` // “template literals” o “template strings”
}

function App() {

  const elemento = (
    <div>
      <h1>Hello, {getName(user)}!</h1>  {/* JSX: extensión de JS, no es String ni HTML */}
      <img src={user.avatar}></img>
    </div>
  )

  return (
    <div className="App">
      {elemento}
    </div>);
}

export default App;
