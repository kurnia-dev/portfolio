export default function Intro() {
    return (
        <section id="intro" className="text-[var(--text-color)] text-base leading-snug font-normal mt-9">
            <h1 className="text-[var(--main-text-color)] mb-9 text-5xl font-['Poppins'] font-bold leading-snug tracking-tight">👋 Hi, I’m Kurnia</h1>
            <div className="flex flex-col gap-6 mb-12">
                <p>I have a deep interest in <b>Frontend Website Development</b> and <b>SEO</b>. I am passionate about crafting visually stunning and user-friendly websites. I am eager to learn and improve my skills.</p>
                <div className="flex gap-[60px] items-center">
                    <p >Currently I’m looking for an opportunity to begin my journey as FE Developer. </p>
                    <ul className="flex flex-col gap-1.5">
                        <li>Kebumen Regency <br /> Central Java, Indonesia</li>
                        <li className="text-[var(--accent-color)]"><a href="mailto:kurnia@onetekno.my.id" target="_blank" rel='noreferrer'>kurnia@onetekno.my.id</a></li>
                    </ul>
                </div>
            </div>
            <span>👇 <a href="#project" className="underline font-medium">Check Some of My Projects</a></span>
        </section>
    )
}