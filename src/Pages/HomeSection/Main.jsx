import React from "react"
import { Container} from "react-bootstrap";
import MainNavigation from "../../Components/MainNavigation"
import MainCard from "../../Components/MainCard"

function Main(){
    return(
        <div>
        <header className='stickyHeader'>
        <MainNavigation/>
        </header>
        <Container className="container">
           {/* Will use mapping function when connecting to database */}
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
        </Container>
</div>
    )
}
export default Main