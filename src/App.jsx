import { Link } from 'react-router';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  const token = localStorage.getItem('jwt');
  console.log(token);

  const user = localStorage.getItem('user');
  console.log(user);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const base64Payload = token.split('.')[1];
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Проверяем, не истек ли токен
        const payload = JSON.parse(atob(base64Payload));
        const isExpired = payload < Date.now() / 1000;
        
        const token = localStorage.getItem('jwt');
        console.log(token);

        if (decodedData.exp && decodedData.exp < Date.now() / 1000) {
          console.log("Токен просрочен!");
        } else {
          setIsAuthenticated(true);
          console.log(payload);
        }
      } catch (err) {
        localStorage.removeItem('jwt');
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);






  const products =  [
    {id: 1, img: "https://ecomarket.ru/imgs/producthttpss/5444/thumb/klubnika-sezonnaya-1.jpg", name: "Клубника", price: 127},
    {id: 2, img: "https://ecomarket.ru/imgs/products/22406/thumb/franui-malina-v-molochnom-shokolade-morozhennoe-150g--ispaniya-1.jpg", name: "Малина в молоном шоколаде fdsfsdfsdfsdfsdfssdfdfsfsdfdsfsdsddfsdfds", price: 725}
  ]


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

      <div className='h-[650px]' style={{ backgroundImage: "url('../src/assets/image_bg.png')" }}>
        <h1 className='font-extrabold text-white text-[48px] w-[1058px] pl-[89px] pt-[56px] tracking-tight'>Добро пожаловать в интернет магазин Eco Energy</h1>
        <p className='font-extrabold text-white text-[36px] w-[1100px] pl-[89px] tracking-tight'>Магазин эко-продуктов, начиная от хлебобулочных изделий, заканчивая натуральными продуктами природы</p>
        <Link to={"/register"}><button className='ml-[89px] mt-[56px] font-extrabold w-[500px] h-[100px] text-[36px] m-auto rounded-[20px] text-white bg-[#73D26B]'>
          Зарегистрироваться
        </button>
        </Link>
      </div>

      <div>
        <div>
          <h1 className='font-bold text-[40px] pl-[54px]'>Все товары</h1>
          <div className='flex flex-row'>
            <div className='flex gap-[40px] ml-[132px]'>
              {products.map((product) => (
                <div key={product.id} className='flex flex-col border border-white w-[250px] h-[350px] rounded-[20px] bg-[#EBEBEB]'>
                  <img src={product.img} alt={product.name} className='w-[230px] h-[180px] justify-center justify-items-center m-auto border rounded-[20px] border-white mt-[10px]'/>
                  <p className='w-[230px] truncate font-bold mb-auto'>{product.name}</p>
                  <a href="">
                    <div className='border border-black rounded-[20px] w-[200px] h-[70px] m-auto content-center mt-auto'>
                      <button className='m-auto flex items-center justify-center '>{product.price}</button>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
