import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"; 
export function DemoCarousel() {
    
    return(
    <Carousel>
                    <div>
                    <img src="https://robohash.org/2?size=150x150" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://static.timesofisrael.com/www/uploads/2020/02/Untitled-4-6.jpg" />
                    <p className="legend">tel aviv</p>
                </div>
                <div>
                    <img src="https://picsum.photos/200/300" />
                    <p className="legend">Legend 3</p>
                </div>

    </Carousel>
    );
} 