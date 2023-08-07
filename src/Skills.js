import { Icon } from '@iconify/react' 

const skillSet = {
    'HTML': 'devicon:html5', 
    'CSS3': 'devicon:css3', 
    'JavaScript': 'vscode-icons:file-type-js', 
    'Git Version Control': 'devicon:git', 
    'GitHub': 'devicon:github', 
    'React Js' : 'logos:react', 
    'Tailwind CSS': 'devicon:tailwindcss', 
    'UI Design and Slicing': 'devicon:figma', 
    'Search Engine Optimization' : 'fluent:globe-search-20-filled'
}

export default function Skills() {
    return (
        <>
            {Object.entries(skillSet).map(([skillName, iconId], index) => (
                <span key={index} id={index} className='absolute font-normal text-[var(--text-color)] font-["Poppins"] leading-normal tracking-[-0.48px] px-6 py-4 text-lg bg-white rounded-2xl flex gap-3 items-center shadow-1 w-max ' >
                    <Icon icon={iconId}
                        color={iconId.includes('search')
                        ? 'var(--accent-color, #AF48FF)'
                        : 'currentColor'} />
                    {skillName}
                </span>
            ))}
        </>
    )
}