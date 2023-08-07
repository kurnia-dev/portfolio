import Intro from './Intro' 
import ProfileCard from './ProfileCard'

export default function Hero() {
    return (
        <div id='hero' className='grid grid-cols-2 gap-28 items-center'>
            <Intro />
            <ProfileCard />
        </div>
    )
}