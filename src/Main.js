import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import Login from './pages/Login';
import jwt_decode from 'jwt-decode'
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import AuthServices from './services/AuthServices';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState({})
	
	useEffect(()=>{
		if (localStorage.getItem('refresh') && AuthServices.isRefreshValid()){
			setIsLoggedIn(true)
			AuthServices.getUserInfo(jwt_decode(localStorage.getItem('access')).user_id)
			.then(data => setUser({...data}))
		}else{
			setIsLoggedIn(false)
		}
	}, [])
	
	return (
		<Router>
			<div>
				<Navbar 
					isLoggedIn={isLoggedIn} 
					setIsLoggedIn={setIsLoggedIn}
					setUser = {setUser}
					user={user} 
				/>
				<Route path="/" exact component={Home} />
				<Route path="/item/:id" >
					<ItemPage isLoggedIn={isLoggedIn} user={user}/>
				</Route>
				<Route 
					path="/login" 
					component={()=> <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} 
				/>
				<Route path="/signup" component={SignUp}/>
				<Route path="/user/:id" exact component={() => <Profile user={user} />}/>
				<ProtectedRoute path="/messages" component={() => <Messages user={user}/> } isLoggedIn={isLoggedIn}/>

			</div>
		</Router>
	);
}

export default App;
