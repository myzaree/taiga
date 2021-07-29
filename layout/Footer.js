export const Footer = () => {
  return (
    <footer className="w-full px-48 font-sans wrapper"> 
      <a href="mailto:hello@taiga.studio" className="text-8xl font-bold text-red-500">hello@taiga.studio</a>
      <div className="flex items-end py-20 mt-16 border-t">
        <div className="flex-col mr-36">
          <div className="text-lg font-bold">International collaboration of specialists</div>
          <div className="text-customgrey mr-5 mt-5">Russia, Ukraine, Kazakhstan</div>
        </div>

        <div className="flex-col">
          <span className="text-lg font-bold">We are here</span>
          <div className="flex text-customgrey mt-5">
            <a className="mr-5 cursor-pointer">Dribbble</a>
            <a className="mr-5 cursor-pointer">Behance</a>
            <a className="cursor-pointer">Linkedin</a>
          </div>

        </div>

        <span className="text-customgrey ml-auto">@taiga 2021</span>
      </div>
    </footer>
  );
};
