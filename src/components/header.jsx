import { Link } from 'react-router';
import '../App.css'

export function Header() {
    return (
        
    <div className='flex pl-[24px] pt-[15px] pb-[15px] bg-[#89C153] justify-between content-center'>
        <a href="/"><img src="../src/assets/logo.png" alt="Eco Energy" /></a>

        

        <div className='border border-white rounded-tl-[20px] rounded-tr-[20px] h-[50px] w-[860px] bg-white content-center'>
          <p className='font-bold text-[#767676] text-[24px]'>Поиск</p>
        </div>


        <div className='flex justify-between pr-[69px] gap-[50px]'>
          <div>
            <a href=""><img src="../src/assets/basket_icon.svg" alt="Корзина" /></a>
            <a href=""><p className='text-center'>Корзина</p></a>
          </div>
         
          <div>
            <Link to={"/register"}>
            <img src="../src/assets/user_icon.svg" alt="Пользователь" />
            <p className='text-center'>Войти</p>
            </Link>
          </div>
        </div>
    </div>
    
    );
}
