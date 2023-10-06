

const Carousel = () => {
    return (
        <div>
            <div className="w-full carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/3vGYbTV/carosel-images-1.jpg" alt="carosel-images-1" className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/cyd05M2/carosel-images-2.jpg" alt="carosel-images-2" className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/GJ7B3hz/carosel-images-3.jpg" alt="carosel-images-3" className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img src="https://i.ibb.co/GJ7B3hz/carosel-images-3.jpg" alt="carosel-images-3" className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carousel;