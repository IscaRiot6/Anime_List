import { useEffect, useState } from 'react'

function RandomImageGenerator() {
    const [randomImage, setRandomImage] = useState('');

    const renderImage = () => {
        const Images = [
            { image: 'https://wallpapercave.com/dwp1x/wp6779435.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp5085173.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp5535573.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp1893620.png' },
            { image: 'https://wallpapercave.com/dwp1x/wp6779438.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp5882404.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp5832019.jpg' },
            { image: 'https://wallpapercave.com/wp/wp6779464.jpg' },
            { image: 'https://wallpapercave.com/dwp1x/wp2349534.png' },
            { image: 'https://wallpapercave.com/dwp1x/wp5341764.jpg' },            
        ]
        const randomImageIndex = Math.floor(Math.random() * Math.floor(10))
        return Images[randomImageIndex].image
    }
    useEffect(() => {
        setRandomImage(renderImage);
    })

    return (
        <section>
        <div>
            <div style={{ backgroundColor:'#3ae9ef' }}>
                <div style={{ textAlign:'center',marginBottom:15 }}>React Native Random Image</div>
            </div>
            <div source={{ uri: renderImage() }}></div>
        </div>
    </section>
    )
}

export default RandomImageGenerator