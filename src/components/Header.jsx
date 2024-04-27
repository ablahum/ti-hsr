import list from '../assets/list.svg'
import notification from '../assets/notification.svg'

const Header = () => (
  <div className='bg-primary h-screen'>
    <div className='flex items-center justify-between text-center p-6'>
      <button
        type='button'
        className='bg-white rounded-full p-3'
      >
        <img
          src={list}
          alt='menu'
          className='w-5 h-5'
        />
      </button>

      <div className='grow text-white'>
        <p className='capitalize'>selamat datang,</p>

        <h1 className='font-semibold capitalize'>
          outlet <span className='uppercase'>ckp</span> bogor
        </h1>
      </div>

      <button
        type='button'
        className='bg-white rounded-full p-3'
      >
        <img
          src={notification}
          alt='notification'
          className='w-5 h-5'
        />
      </button>
    </div>
  </div>
)

export default Header
