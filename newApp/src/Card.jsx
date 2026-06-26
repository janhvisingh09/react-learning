import Profile from './assets/picture-profile.jfif';

function Card () {
    return (
        <div className='Card'>
            <img src={Profile} alt='profile-picture' />
        <h1>Janhvi Singh</h1>
        <p>this is my card</p>
        </div>
    )


    
}
export default Card;