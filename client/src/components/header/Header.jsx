export default function Header() {

    return (
        <header>

            <h1><a className="home" href="#">Super Car Offers</a></h1>
            <nav>
                

                <div id="user">
                    <a href="#">Create Offer</a>
                    <a href="#">Logout</a>
                </div>

                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )

}