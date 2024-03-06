import TenantNavigation from '../../Components/TenantNavigation';
import TenantCard from '../../Components/TenantCard';
import { Container } from 'react-bootstrap';
function TenantMain(){
    return(
        <div>
            <header className='stickyHeader'>
                <TenantNavigation/>
            </header>
            <Container className="container">
           {/* Will use mapping function when connecting to database */}
            <TenantCard/>
            <TenantCard/>
            <TenantCard/>
            <TenantCard/>
            <TenantCard/>
            <TenantCard/>
            
        </Container>

        </div>
    )
}
export default TenantMain;