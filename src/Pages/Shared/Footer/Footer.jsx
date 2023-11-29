import logo from '../../../assets/vote.png';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-300 text-base-content my-6 rounded-lg">
            <aside>
                <img className='h-[100px] w-[100px]' src={logo} alt="" />
                <h2 className=' text-2xl'>Polling Survey</h2>
                <p>Best Online Polling Survey Website</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
            <header className="footer-title">company</header>
                <a className="link link-hover">about us</a>
                <a className="link link-hover">contact </a>
                <a className="link link-hover">jobs</a>
            </nav>
            <nav>
            <header className="footer-title">Social Media</header>
                <div className=' flex gap-6'>
               <a className=' text-2xl'><FaGoogle></FaGoogle></a>
               <a className=' text-2xl'><FaFacebook></FaFacebook></a>
               <a className=' text-2xl'><FaGithub></FaGithub></a>
               <a className=' text-2xl'><FaTwitter></FaTwitter></a>
                </div>
                <p className=' my-4'>Copyright © 2023 - All right reserved</p>
            </nav>
        </footer>
    );
};

export default Footer;