import { Link } from 'react-router-dom'

export default function Home() {
    return (
        

            <div className="welcome-message">
            <h2>get your desired car in resonable price</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua. 
					</p>
                    <Link to="/catalogue">
                    <button  type="button" className="welcome-btn" >Catalogue</button>
                    </Link>
					
            </div>
           

            
      
    )
}