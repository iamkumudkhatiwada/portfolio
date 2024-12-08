import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from './ui/dialog';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import logo from '/kumud.png';
import about from '/about.jpeg';

function Navbar() {
  const socials = [
    {
      type: 'facebook',
      label: <CiFacebook />,
      address: 'https://www.facebook.com/kumud.khatiwada/',
    },
    {
      type: 'insta',
      label: <CiInstagram />,
      address: 'https://www.instagram.com/iamkumud_khatiwada/',
    },
    {
      type: 'linkedin',
      label: <CiLinkedin />,
      address: 'https://www.linkedin.com/in/kumud-khatiwada/',
    },
  ];
  return (
    <div className="flex justify-between mt-2">
      <img className="w-36" src={logo} alt="logo" />
      <div className="flex gap-10 md:mr-32 self-center">
        <Dialog>
          <DialogTrigger>
            <p className="font-medium transition-all duration-300 hover:border-b-2 cursor-pointer  border-slate-800">
              About Me
            </p>
          </DialogTrigger>
          <DialogContent className="flex bg-slate-700 w-[75%] ">
            <div className="w-32 md:w-96 ">
              <img className="rounded-xl" src={about} alt="about" />
            </div>
            <DialogDescription className="self-center">
              <p className="text-slate-50  font-bold text-2xl text-center">
                Full Stack Developer Based in Kathmandu
              </p>
              <div className="text-slate-50 text-left ml-3   gap-y-1">
                <span>
                  2+ years of Experience thrieving as a team player as well as
                  independent developer
                </span>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <p className="font-medium transition-all duration-300 hover:border-b-2 cursor-pointer  border-slate-800">
              Contact
            </p>
          </DialogTrigger>
          <DialogContent className="flex bg-slate-700 ">
            <div className=" md:w-96 flex flex-col items-center gap-3 w-[75%]  ">
              <p className="text-slate-50 font-bold  md:text-3xl block ">
                Find Me On
              </p>
              <div className="flex  gap-x-7 ">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className={`text-slate-50 text-2xl md:text-4xl md:2xl  ${
                      social.type === 'insta'
                        ? 'hover:text-red-400'
                        : 'hover:text-sky-700'
                    }`}
                    target="_blank"
                    rel="noreferrer"
                    href={social.address}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Navbar;
