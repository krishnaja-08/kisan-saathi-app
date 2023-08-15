export default function Navbar(){
    return <div>
        <div className="flex flex-row justify-between px-12 py-8">
            <img src="logo.png" className="h-[4em] px-8"></img>
            <div className="flex flex-row gap-8 text-[#093A01] font-semibold">
            <p>Home</p>
            <p>About us</p>
            <p>Service</p>
            <p>People </p>
            <p>Featured articles</p>
            <p>Careers</p>
            <p>Contact us</p></div>
            <div className="flex flex-row gap-8">
            <img src="search.png" className="h-[2em]" ></img>
            <img src="menu.png" className="h-[2em]"></img></div>

            
        
        </div>
    </div>
}