import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hoisting_token = import.meta.env.VITE_Image_Upload_Token;
console.log({ img_hoisting_token });
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`;

    const onSubmit = data => {
        console.log(data)
        const fromData = new FormData();
        fromData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: fromData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: 'Item added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };
    return (
        <div className="w-full">
            <SectionTitle heading="Add an Item" subHeading="What's New">

            </SectionTitle>
            <form className="p-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full" {...register("name", { required: true, maxLength: 80 })} />
                </div>
                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Category*</span>
                        </label>
                        <select defaultValue={'Pick One'} className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled>Pick One</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'soup'}>Soup</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'drinks'}>Drinks</option>
                            <option value={"dessert"}>Dessert</option>
                        </select>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Price*</span>
                        </label>
                        <input type="number" step="any" placeholder="Item price" className="input input-bordered w-full" {...register("price", { required: true, maxLength: 20 })} />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Recipe details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                </div>
                <input type="submit" className="btn btn-sm mt-4" value="Add Item" />

            </form>
        </div>
    );
};

export default AddItem;