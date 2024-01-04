import logo from '../../assets/logo.png';
import Button from '../../common/Button';
import { HomepageViewModel } from './Homepage.vm';
import Register from './containers/Register';
import { RegisterViewModel } from './containers/Register.vm';
import { observer } from 'mobx-react';

interface IHomepage {
    homepageViewModel: HomepageViewModel;
}

const Homepage = ({ homepageViewModel }: IHomepage) => {
    const registerViewModel = new RegisterViewModel();
    return (
        <div className="w-2/3 m-auto translate-y-10">
            <img className="" src={logo} alt="Logo" width="320" height="50" />
            <p className="text-gray-800 mt-2">Learn a new language by making friends online.</p>
            {homepageViewModel.showRegisterForm && <Register registerViewModel={registerViewModel} />}
            <div className="flex mt-4 w-1/2 items-center">
                <Button
                    className='w-32 bg-red-500 text-white block h-11 rounded-sm'
                    onClick={() => homepageViewModel.setShowRegisterForm(true)}
                >
                    Register
                </Button>
                <span className='text-gray-800 ml-4'>
                    Already have an account? <a href="#" className="text-red-500 font-semibold">Login</a>
                </span>
            </div>
        </div>
    )
}

export default observer(Homepage);