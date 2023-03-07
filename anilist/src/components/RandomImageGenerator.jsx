import { useEffect, useState } from 'react'

function RandomImageGenerator() {
    const [randomImage, setRandomImage] = useState('');

    const renderImage = () => {
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
            { image: 'https://wallpapercave.com/dwp1x/wp4918424.jpg' },            
        ]
        const randomImageIndex = Math.floor(Math.random() * Images.length)
        return Images[randomImageIndex].image
    }
    useEffect(() => {
        setRandomImage(renderImage());
    }, []);

    return (
        
        <div>
        <img src={randomImage} alt="random" />
        </div>
    )
}

export default RandomImageGenerator