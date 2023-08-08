import simpli from './Project/simpli.webp'
import younotes from './Project/younotes.webp'
import { Icon } from '@iconify/react'
import { skillSet } from './Skills'

const techList = {
    ...skillSet,
    "jQuery": "devicon:jquery-wordmark",
    "Blogger": "logos:blogger",
    "Figma": "devicon:figma", 
}


const projectList = {
    "Figma Land Business Landing Page": {
        "type": "Personal Project",
        "label": ["Landing Page"], 
        "tech": ["HTML5", "CSS3", "JavaScript"],
        "bgUrl": '', 
        "repo": "https://github.com/kurnia-dev/Figma-Land", 
        "preview": "https://kurnia-dev.github.io/Figma-Land/", 
        "inProgress": false,
    }, 
    "Simpli": {
        "type": "Commercial",
        "label": ["Blogger Template", "SEO"], 
        "tech": ["Figma", "HTML5", "CSS3", "JavaScript", "Blogger"],
        "bgUrl": simpli,
        "repo": "https://github.com/kurnia-dev/simpli", 
        "preview": "https://simpli-template.zendcode.web.id/", 
        "inProgress": false,
    }, 
    "YouNotes": {
        "type": "Personal Project",
        "label": ["Web Application", "Android Apk"], 
        "tech": ["Figma", "HTML5", "CSS3", "jQuery"],
        "bgUrl": younotes, 
        "repo": "https://github.com/kurnia-dev/you-notes", 
        "preview": "https://github.com/kurnia-dev/you-notes/releases/tag/v1.2", 
        "inProgress": false,
    }
}


function Tech({tech}) {
    return (    
        <ul className='flex gap-3 flex-wrap max-w-[40%] '>
            {tech.map((techName, index) => (
                <li key={index} title={techName} className='py-[6px] px-[6px] rounded-[6px] bg-white shadow-2'>
                    <Icon icon={techList[techName]} className='w-4 h-4'/>
                </li>
            ))}
        </ul>
    )
}

export default function Project() {
    return (
        <section id="project" className='grid gap-7 grid-cols-3 auto-rows-max'>
            {Object.entries(projectList).map(([title], index) => {
                const {type, label, tech, bgUrl, repo, preview, inProgress} = projectList[title]
                
                return (
                    <div className='group relative cursor-pointer transition duration-200 ease-linear'>
                        <div className='group-hover:opacity-40 group-hover:blur-[1px] group-hover:-skew-x-5 group-hover:skew-y-1 transition duration-150 ease-linear py-5 px-5 h-full rounded-[6px] shadow-2 flex flex-col gap-3 justify-between bg-no-repeat bg-auto bg-clip-border bg-center bg-cover' style={{backgroundImage : `url(${bgUrl})`}}> 
                        <span className='text-[var(--project-type-color)] text-sm font-medium leading-[110%] tracking-[0.24px]'>{type}</span>
                        <div className='flex flex-col gap-2 max-w-[50%]'>
                            <h2 className='font-semibold leading-[120%] text-lg text-main'>{title}</h2>    
                            <span className='text-base leading-tight text-2nd font-normal'>
                                {label.map((item, index) => (
                                    index == label.length - 1 ? item : item + ", " 
                                ))}
                            </span>
                        </div>
                        <Tech tech={tech} />
                    </div>
                    <div id='project-button' className='w-full h-full absolute top-0 left-0 transition duration-150 ease-linear group-hover:flex opacity-100 flex-col gap-3 items-center justify-center hidden'>                 
                        {inProgress ?
                            <>
                                <span
                                    className="main-button translate-y-1/2 ">
                                    In Progress
                                </span>
                                <a href={repo} className='secondary-button translate-y-1/2' title="This Project GitHub Repository">Repo</a>
                            </>
                            : 
                            <>
                                <a href={preview}
                                    className="main-button translate-y-1/2 "
                                    title="See this project's preview">
                                    Preview
                                </a>
                                <a href={repo} className="secondary-button translate-y-1/2" title="This Project GitHub Repository">Repo</a>
                            </>
                        }
                    </div>
                    </div>
                )
            })}
        </section>
    )
}