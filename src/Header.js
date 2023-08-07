import Links from './Links'


export default function Header() {
    return (
        <header className='w-full h-auto flex justify-between items-center max-w-[1080px] mt-[50px] mx-auto'>
            <section id="header-logo-text" className='flex gap-6'>
                <span className='h-max text-[var(--main-text-color)] font-bold text-xl  '>Kurniawan Saputro</span>
                <span className='h-max text-[var(--accent-color)] bg-[var(--main-bg-color)] py-[6px] px-[14px] text-base font-medium rounded-full'>Ready to Hire</span>
            </section>
            <section id="header-link" className='flex gap-8'>
                <Links iconColor='var(--accent-color)' />
            </section>
        </header>
    )
}