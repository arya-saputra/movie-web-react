const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer className="footer bg-[maroon] py-3 px-4 text-[white] w-full text-[12px] flex flex-wrap justify-between">
            <p className="w-full lg:text-left lg:w-[30%]">© {thisYear} <a href="https://aryasaputra.my.id" target="_blank" rel="noreferrer" className="font-bold">Arya Saputra</a>. All rights reserved.</p>
            <p className="w-full lg:w-[70%] lg:text-right">This web is aiming to demonstrate my React.js capabilities to my potential clients or employers.</p>
        </footer>
    )
}

export default Footer;