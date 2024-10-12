import './Hero.css';
const Hero = () =>{
    return (
        <div class='hero'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>Your feet deserve the best and we're here to help you with our shoes.Your feet deserve the best and we're here to help you with our shoes</p>
                <div className="hero-buttons">
                <button>Show Now</button>
                <button className='secondaryBtn'>Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="shop_images">
                    <img src="/images/amazon.png" alt="amazon"  />
                    <img src="/images/flipkart.png" alt="flipkart"  />

                </div>
            </div>
            </div>
            <div className="shoe_images">
                    <img src="/images/shoe_image.png" alt="shoe"  />

                </div>
            
        </div>
    )
}

export default Hero;