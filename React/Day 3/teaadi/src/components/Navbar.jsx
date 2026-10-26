import logo from '../assets/logo/tea.png'
const Navbar =()=>{

    return(<>
    <div className='navbar'>
        <div><img src={logo} alt="" className='logo' /></div>
        <div className='link'>
            <a href="" >Home</a>
            <a href="" >About</a>
        </div>
        
    </div>
    </>)
}
export default Navbar