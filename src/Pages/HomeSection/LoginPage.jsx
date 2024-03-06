import Login from "../../Components/Login";
import MainNavigation from "../../Components/MainNavigation";
function LoginPage(){
    return(
        <div>
        <header className='stickyHeader'>
        <MainNavigation/>
        </header>

            <Login/>
    
         
        </div>
    )
}
export default LoginPage;