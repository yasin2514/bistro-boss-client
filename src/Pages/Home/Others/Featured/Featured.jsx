import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import img from '../../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <section className='mb-20 featured-item bg-fixed text-white py-20 px-36'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='md:flex justify-between items-center gap-x-20'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='space-y-3'>
                    <p>July 20, 2023</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae debitis inventore rem nam ut veritatis praesentium atque impedit illo sunt fugit, laborum expedita nulla ducimus amet officia aliquam nostrum. Tenetur officia corporis ducimus cupiditate nihil commodi blanditiis, asperiores id aspernatur impedit dicta. Non quasi ab distinctio deleniti! Dolorem, illo?</p>

                    <button className='btn btn-error btn-outline border-0 border-b-4 '>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;