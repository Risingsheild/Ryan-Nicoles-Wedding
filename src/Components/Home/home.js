import { NavLink as Link } from "react-router-dom"

function Home(){
    return (
        <div>
            <Link to='/RSVP'>Please RSVP</Link>
            <Link to='/Gallery'>Photos of Us</Link>
        </div>

    )    
}

export default Home; 