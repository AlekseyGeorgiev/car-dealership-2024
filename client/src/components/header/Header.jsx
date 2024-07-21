import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>

            <h1><Link className="home" to="/">Super Car Offers</Link></h1>
            <nav>
                

                <div id="user">
                    <a href="#">Create Offer</a>
                    <a href="#">Logout</a>
                </div>

                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )

}