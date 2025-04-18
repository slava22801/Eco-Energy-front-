import { Header } from '../components/header';
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';



export default function Login() {
    const navigate = useNavigate();


    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:8080/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
            });
      
            if (!response.ok) {
              throw new Error('Ошибка при отправке данных');
            }
      
            // const result = await response.json();
            // console.log('Успешно:', result);

            const data = await response.json();

            // Сохраняем токен в localStorage
            localStorage.setItem('jwt', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/');
            // Сброс формы после успешной отправки
            setFormData({ 
                email: '',
                password: '',
            });
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        };



    return (
        <>
            <Header />

            <div className='bg-[#FFF8F2] w-[1000px] mt-[30px] m-auto rounded-[20px]'>
                <h1 className='font-bold text-[45px] text-[#498946] text-center'>Вход в Профиль</h1>

                <div className='flex m-auto justify-items-center justify-center'>
                    <form onSubmit={handleSubmit}>
                        <input value={formData.email} onChange={handleChange} required type="text" name='email' placeholder='email' className='bg-amber-500 block mt-[37px]'/>
                        <input value={formData.password} onChange={handleChange} required type="text" name='password' placeholder='password' className='bg-amber-500 block mt-[37px]'/>

                        <button type="submit" className='mt-[37px]'>Войти</button>
                    </form>
                </div>
            </div>
        </>
    );
}