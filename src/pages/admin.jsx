import { Link } from 'react-router';

export default function Admin() {
    return (
        <>
            <div className='flex bg-[#89C153] h-[100px] justify-between p-[15px]'>
                <Link to={"/"}>
                    <img className="ml-[15px]" src="../src/assets/logo.png" alt="Eco Energy" />
                </Link>
                <h1>Admin Panel</h1>
            </div>



            <div className='pl-[20px] pt-[20px]'>
                <Link to={"/admin/addproduct"}>
                    <h1 className='text-center border w-[250px] h-[70px] rounded-[20px] content-center'>Добавить товар</h1>
                </Link>


                <div>

                </div>
            </div>
        </>
    );
}