import Links from "./Links"

export default function Footer() {
    return (
        <footer className="bg-[var(--footer-bg-color)] w-full py-10 font-thin">
            <div className="max-w-[1080px] mx-auto flex justify-between">
                <p className="text-sm text-[var(--text-color)]">
                    This portfolio build with React JS and Tailwind CSS. 
                    <br/>
                    <a href="" title="GitHub Repo" className="underline font-medium">View source on GitHub.</a>
                </p>

                <ul className="list-none text-[var(--text-color)] text-sm flex flex-col gap-2 items-center" >
                    <li>kurnia@onetekno.my.id</li>
                    <li className="flex gap-8">
                        <Links iconColor={"var(--text-color)"} />
                    </li>
                </ul>
            </div>
        </footer>
    )
}