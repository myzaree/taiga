import { useState } from 'react';

export const Header = () => {
  const [locale, setLocale] = useState('en');
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-5 px-10 border-b-2 border-grey-100 border-solid bg-white z-50">
      <div className="flex items-center font-sans font-bold">
        <img src="/logo.svg"/>
        <span className="pl-3">taiga</span>
      </div>

      <ul className="flex">
        <li className="px-5 cursor-pointer">About us</li>
        <li className="px-5 cursor-pointer">Portfolio</li>
        <li className="px-5 cursor-pointer">Contact us</li>
      </ul>

      <div>
        <span className={`pr-2.5 cursor-pointer ${locale !== 'en' && 'opacity-50'}`} onClick={() => setLocale('en')}>en</span>
        <span className={`cursor-pointer ${locale !== 'ru' && 'opacity-50'}`} onClick={() => setLocale('ru')}>ru</span>
      </div>
    </nav>
  );
};
