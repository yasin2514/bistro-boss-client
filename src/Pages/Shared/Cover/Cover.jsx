import { Parallax } from 'react-parallax';
const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax className='mb-20'
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="cover"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-black py-20 px-40 bg-opacity-60 rounded-lg">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;