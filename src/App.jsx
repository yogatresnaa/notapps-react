import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePageWrapper from './pages/HomePage';
import AddNote from './pages/AddPages';
import DetailPageWrapper from './pages/PageDetail';
import ArchivedPageWrapper from './pages/ArchivedPage';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import PageLogin from './pages/PageLogin';
import { getUserLogged, putAccessToken } from './utils/api';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

async onLoginSuccess({ accessToken }) {
  putAccessToken(accessToken);
  const { data } = await getUserLogged();
  console.log(data)

  this.setState(() => {
    return {
      authedUser: data,
    };
  });
}


  render() {

    if (this.state.authedUser === null) {
      return (
        <div className='app-container'>
            <header>
                    <h1><Link to={`/`}>Aplikasi Catatan</Link></h1>
                    <h2><Link to={'/arsip'}>Arsip</Link></h2>
            </header>

            <main>
                 <Routes>
                  <Route path='/*' element={<PageLogin loginSuccess={this.onLoginSuccess} />}></Route>
                   <Route path='/register' element={<RegisterPage />}></Route>
                 </Routes>      
           </main>
        </div>
      )
    }
      return (
        <div className="app-container">
        <header>
          <h1><Link to={`/`}>Aplikasi Catatan</Link></h1>
          <h2><Link to={'/arsip'}>Arsip</Link></h2>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePageWrapper/>}></Route>
            <Route path='/detail/:id' element={<DetailPageWrapper/>}></Route>
            <Route path='/add' element={<AddNote/>}></Route>
            <Route path='/arsip' element={<ArchivedPageWrapper/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>      
        </main>
      </div>
      )
    }

  }

  export default App;

// function App() {
//   const [authedUser,setauthedUser] = React.useState(null);

// useEffect(() =>{
//     getUserLogged().then(({data} ) =>{
//       setauthedUser(data);
//     });
// }, [])

// useEffect(() => {
//     async function getUser() {
//       const { data } =  await getUserLogged()
//       setauthedUser(data)
//     }
//     getUser()
    
//   }, [])



//   if (authedUser === null) {
//     return(
//       <div className='app-container'>
//       <header>
//             <h1><Link to={`/`}>Aplikasi Catatan</Link></h1>
//             <h2><Link to={'/arsip'}>Arsip</Link></h2>
//         </header>
  
//           <main>
//                 <Routes>
//                   <Route path='/*' element={<PageLogin />}></Route>
//                   <Route path='/register' element={<RegisterPage />}></Route>
//                 </Routes>      
//           </main>
//       </div>
//     )
    
//   }


//   return (
//     <div className="app-container">
//       <header>
//         <h1><Link to={`/`}>Aplikasi Catatan</Link></h1>
//         <h2><Link to={'/arsip'}>Arsip</Link></h2>
//       </header>
//       <main>
//         <Routes>
//           <Route path='/' element={<HomePageWrapper/>}></Route>
//           <Route path='/detail/:id' element={<DetailPageWrapper/>}></Route>
//           <Route path='/add' element={<AddNote/>}></Route>
//           <Route path='/arsip' element={<ArchivedPageWrapper/>}></Route>
//           <Route path='/*' element={<NotFound/>}></Route>
//         </Routes>      
//       </main>
//     </div>
//   );
// }

