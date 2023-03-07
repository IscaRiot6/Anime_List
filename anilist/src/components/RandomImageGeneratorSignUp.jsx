import { useEffect, useState } from 'react'

function RandomImageGeneratorSignUp() {
    const [randomImage, setRandomImage] = useState('');

    const renderImage = () => {
        const Images = [
            { image: 'https://wallpapercave.com/dwp1x/wp10450403.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp10404011.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp4676971.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp11538897.jpg' },
            { image: `https://wallpapercave.com/dwp1x/wp11538899.jpg` },
            { image: 'https://wallpapercave.com/dwp1x/wp11538911.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp9909523.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp5237890.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/yydGmey.png' },
            { image: 'https://wallpapercave.com/dwp1x/wp8676142.jpg' },            
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

export default RandomImageGeneratorSignUp