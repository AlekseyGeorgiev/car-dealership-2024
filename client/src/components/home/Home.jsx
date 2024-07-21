export default function Home() {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
            <h2>get your desired car in resonable price</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua. 
					</p>
					<button className="welcome-btn" href="#">Catalogue</button>
            </div>
           

            <div id="home-page">
                <h1>Latest Car Offers</h1>

               
                <div className="game">
                    <div className="image-wrap">
                     
                    </div>
                    <h3>Honda</h3>
                    
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                
                
               
                {/* <p className="no-articles">No offers yet</p> */}
            </div>
        </section>
    )
}