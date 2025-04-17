import { Header } from '../components/header';
import '../App.css'


export default function Registration() {
    return (
        <>
            <Header />

            <div className='bg-[#FFF8F2] w-[1000px] mt-[30px] m-auto rounded-[20px]'>
                <h1 className='font-bold text-[45px] text-[#498946] text-center'>Регистрация</h1>

                <div className='flex m-auto justify-items-center justify-center'>
                    <form action="submit">
                        <input type="text" name='Имя' placeholder='Имя' className='bg-amber-500 block mt-[34px]'/>
                        <input type="text" name='Фамилия' placeholder='Фамилия' className='bg-amber-500 block mt-[37px]'/>
                        <input type="text" name='Email' placeholder='Email' className='bg-amber-500 block mt-[37px]'/>
                        <input type="text" name='Пароль' placeholder='Пароль' className='bg-amber-500 block mt-[37px]'/>
                        <input type="text" name='Повторите пароль' placeholder='Повторите пароль' className='bg-amber-500 block mt-[37px]'/>
                        <button type="submit" className='mt-[37px]'>Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </>
    );
}