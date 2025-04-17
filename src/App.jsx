import { Link } from 'react-router';
import axios from 'axios';
import './App.css'

function App() {

  axios.get('http://localhost:3000/')
  .then(response => console.log(response.data));


  return (
    <>
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

      <div className='flex justify-around h-[54px] bg-[#D7FCB4]'>

        <a href=""><p className='text-[30px] font-bold'>Все товары</p></a>

        <a href=""><p className='text-[30px] font-bold'>Рекомендуем</p></a>

        <a href=""><p className='text-[30px] font-bold'>Популярное</p></a>

        <a href=""><p className='text-[30px] font-bold'>Новинки</p></a>

        <a href=""><p className='text-[30px] font-bold'>Товары со скидкой </p></a>

      </div>

      <div className='' style={{ backgroundImage: "url('../src/assets/image_bg.png')" }}>
        <h1 className='font-extrabold text-white text-[48px] w-[1058px] pl-[89px] pt-[56px] tracking-tight'>Добро пожаловать в интернет магазин Eco Energy</h1>
        <p className='font-extrabold text-white text-[36px] w-[1100px] pl-[89px] tracking-tight'>Магазин эко-продуктов, начиная от хлебобулочных изделий, заканчивая натуральными продуктами природы</p>
      </div>
    </>
  )
}

export default App
