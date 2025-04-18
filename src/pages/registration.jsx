import { Header } from '../components/header';
import '../App.css'
import { useState } from 'react';
import { Link } from 'react-router';

export default function Registration() {

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
            const response = await fetch('/user/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
            });
      
            if (!response.ok) {
              throw new Error('Ошибка при отправке данных');
            }
      
            const result = await response.json();
            console.log('Успешно:', result);
            alert("Профиль успешно создан!");
            // Сброс формы после успешной отправки
            setFormData({ 
                name: '',
                surname: '',
                email: '',
                password: '',
                role: '' });
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        };



    return (
        <>
            <Header />

            <div className='bg-[#FFF8F2] w-[1000px] mt-[30px] m-auto rounded-[20px]'>
                <h1 className='font-bold text-[45px] text-[#498946] text-center'>Регистрация</h1>

                <div className='flex m-auto justify-items-center justify-center'>
                    <form onSubmit={handleSubmit}>
                        <input value={formData.name} onChange={handleChange}  type="text" name='name' placeholder='name' className='bg-white block mt-[34px] border border-[#8F8F8F] w-[350px] h-[70px] rounded-[20px] text-start'/>
                        <input value={formData.surname} onChange={handleChange} required type="text" name='surname' placeholder='surname' className='bg-white block mt-[34px] border border-[#8F8F8F] w-[350px] h-[70px] rounded-[20px] '/>
                        <input value={formData.email} onChange={handleChange} required type="text" name='email' placeholder='email' className='bg-white block mt-[34px] border border-[#8F8F8F] w-[350px] h-[70px] rounded-[20px]'/>
                        <input value={formData.password} onChange={handleChange} required type="password" name='password' placeholder='password' className='bg-white block mt-[34px] border border-[#8F8F8F] w-[350px] h-[70px] rounded-[20px]'/>

                        <button type="submit" className='mt-[37px] m-auto justify-items-center justify-center border border-[#8F8F8F] rounded-[20px] w-[250px] h-[70px]'>Зарегистрироваться</button>

                        
                        <div className='block'>
                        <Link to={"/login"} className='font-bold'>
                            или войти в профиль
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}