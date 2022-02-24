import Image from 'next/image';

const Loader = () => {
    return <Image 
                    src='/weather.gif' 
                    alt="Picture of the author"
                    width={100}
                    height={100}
            />
}

export default Loader;