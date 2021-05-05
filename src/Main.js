import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemPage from './pages/ItemPage';
import Login from './pages/Login';
import BookServices from './services/BookServices';
import jwt_decode from 'jwt-decode'
import Profile from './pages/Profile';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState({})
	
	useEffect(()=>{
		if (localStorage.getItem('refresh') && BookServices.isRefreshValid()){
			setIsLoggedIn(true)
			BookServices.getUserInfo(jwt_decode(localStorage.getItem('access')).user_id)
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
					user={user} 
				/>
				<Route path="/" exact component={Home} />
				<Route path="/item/:id" >
					<ItemPage isLoggedIn={isLoggedIn}/>
				</Route>
				<Route 
					path="/login" 
					component={()=> <Login setIsLoggedIn={setIsLoggedIn} />} 
				/>
				<Route path="/user/:id" component={() => <Profile user={user} />}/>

			</div>
		</Router>
	);
}

export default App;
