import { useEffect, useState } from 'react'

function RandomImageGeneratorInitialPage() {
    const [images, setImages] = useState([]);
    

    useEffect(() => {
        const Images = [
            { image: `https://wallpapercave.com/dwp1x/wp9909496.jpg`},
            { image: 'https://wallpapercave.com/dwp1x/wp4676900.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/DhIaAEA.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/4whOLMX.jpg' },  
            { image: 'https://wallpapercave.com/dwp1x/wp4043066.jpg' },
            { image: `https://wallpapercave.com/dwp1x/wp6037361.jpg` },
            { image: 'https://wallpapercave.com/dwp1x/wp5882404.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp5832019.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp10450416.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp2349534.png' },
            { image: 'https://wallpapercave.com/dwp1x/wp4918424.jpg' }          
        ];
        setImages(Images);
    }, []);

    const handleImageClick = (index) => {
        const newImages = [...images];
        const randomIndex = Math.floor(Math.random() * newImages.length);
        [newImages[index], newImages[randomIndex]] = [newImages[randomIndex], newImages[index]];
        setImages(newImages);
    }

    return (
        <div className='random-images-container'>
            
            {images.map((image, index) => (
                <img key={index} src={image.image} alt={`random ${index}`} onClick={() => handleImageClick(index)} />
            ))}
        </div>
    )
}

export default RandomImageGeneratorInitialPage;

