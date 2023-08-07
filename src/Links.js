import { Icon } from '@iconify/react'

const links = {
    'github|fe:github': 'https://github.com/kurnia-dev', 
    'site|iconoir:internet' : 'https://www.zendcode.web.id',
    'linkedin|mdi:linkedin' : 'https://id.linkedin.com/in/kurniawan-saputro-44bb81200'
}

export default function Links({iconColor}) {
    return (
        <>
            {Object.entries(links).map(([icon, url], index) => (
                <a href={url} key={index} title={icon.substring(0, icon.indexOf('|'))}
                className=''>
                    <Icon width={20} height={20} color={iconColor} icon={icon.substring(icon.indexOf('|') + 1)} />
                </a>
            ))}
        </>
    )
}