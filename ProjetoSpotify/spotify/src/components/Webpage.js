import '../App.css';
import Main from './Main';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Webpage = () => {
    const [playlist, setPlaylist] = useState('');
    useEffect(()=>{
        const loadData = async() =>{
            setPlaylist('')};
            console.log(playlist)
        loadData();
      },[])
    return (
        <div className='principal'>
            <div className="App">
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='main-page'>
                    <Header />
                    <Outlet/>
                </div>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )

}

export default Webpage;