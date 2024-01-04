import { observer } from "mobx-react";
import Button from "../../../common/Button";
import Input from "../../../common/Input";
import { RegisterViewModel } from "./Register.vm";

interface IRegister {
    registerViewModel: RegisterViewModel;
}

const Register = ({ registerViewModel }: IRegister) => (
    <form className="w-72 mt-4">
        <label className="text-gray-800 text-sm font-semibold">Type your best e-mail</label>
        <Input value={registerViewModel.email} onChange={(e) => registerViewModel.setEmail(e.target.value)} type="email" placeholder="E-mail..." className="bg-transparent border border-gray-600 outline-none text-xs text-gray-800 placeholder-gray-600" />

        <label className="text-gray-800 text-sm font-semibold">Pick a cool username</label>
        <div className="flex">
            <Input value={registerViewModel.username} onChange={(e) => registerViewModel.setUsername(e.target.value)} type="text" placeholder="Username..." className="bg-transparent border border-gray-600 outline-none text-xs text-gray-800 placeholder-gray-600" />
            <Button
                className="ml-2 border-2 border-red-500 text-xs font-semibold text-red-500 rounded-lg px-2"
                onClick={() => console.log('Clicked!')}
            >
                Randomize!
            </Button>
        </div>

        <label className="text-gray-800 text-sm font-semibold">Select your Nationality</label>
        <select value={registerViewModel.country} onChange={(e) => registerViewModel.setCountry(e.target.value)} className="w-full rounded-lg h-8 p-2 bg-transparent border border-gray-600 outline-none text-xs text-gray-800 placeholder-gray-600">
            <option value="">Country...</option>
            <option value="Brazil">Brazil</option>
            <option value="United States">United States</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
        </select>

        <label className="text-gray-800 text-sm font-semibold">Select your language</label>
        <select value={registerViewModel.language} onChange={(e) => registerViewModel.setLanguage(e.target.value)} className="w-full rounded-lg h-8 p-2 bg-transparent border border-gray-600 outline-none text-xs text-gray-800 placeholder-gray-600">
            <option value="">Language...</option>
            <option value="pt-br">Brazilian Portuguese</option>
            <option value="en">American English</option>
            <option value="jp">Japanese</option>
            <option value="mandarim">Mandarim</option>
        </select>
        <label className="text-gray-800 text-sm font-semibold">Enter a password</label>
        <Input onChange={(e) => registerViewModel.setPassword(e.target.value)} value={registerViewModel.password} type="password" placeholder="Password..." className="bg-transparent border border-gray-600 outline-none text-xs text-gray-800 placeholder-gray-600" />

        <label className="text-gray-800 text-sm font-semibold">Confirm your password</label>
        <Input onChange={(e) => registerViewModel.confirmPassword(e.target.value)} type="password" placeholder="Password..." className="bg-transparent border border-gray-600 outline-none text-xs text-gray-800 placeholder-gray-600" />
        {!registerViewModel.passwordsMatch && <p className="text-red-500 text-[10px] mt-2 ml-2 font-semibold">Passwords aren't matching</p>}
    </form>
)

export default observer(Register);