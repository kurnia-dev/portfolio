import Skills from './Skills' 
import Photo from './photo.webp'

export default function ProfileCard() {
    return (
            <div className='relative mx-auto flex flex-col gap-2 items-center justify-center shadow-1 rounded-3 h-max w-max py-7 px-9 bg-white'>
                <img src={ Photo } alt='Kurnia Profile Picture' className="rounded-full w-[100px]  aspect-square" />  
                <div className='flex flex-col gap-2 items-center mt-[-14%]'>
                    <span className='block mb-1 py-[6px] w-max px-5 rounded-full text-white bg-gradient-to-br from-[#FF26B2] via-[#851BD9] via-[64.86%] to-[#3F0FFF]  font-bold text-sm mx-auto'>Front End</span>
                    <span className='text-[var(--main-text-color)] font-bold text-lg leading-normal'>Kurniawan Saputro</span>
                    <span className='text-[var(--text-color)] text-base font-normal'>Indonesia</span>
                </div>
                <Skills />
            </div>
    )
}