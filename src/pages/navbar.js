export default function Navbar(){
    return <div>
        <div className="flex flex-row justify-between">
            <img src="logo.png" className="h-[4em]"></img>
            <div className="flex flex-row gap-4">
            <p>Home</p>
            <p>About us</p>
            <p>Service</p>
            <p>People </p>
            <p>Featured articles</p>
            <p>Careers</p>
            <p>Contact us</p></div>
            <div className="flex flex-row gap-4">
            <img src="search.png" className="h-[2em]" ></img>
            <img src="menu.png" className="h-[2em]"></img></div>

            
        
        </div>
    </div>
}