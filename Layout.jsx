import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
    return ( 
        <>
            <Sidebar>
                <Navbar />
            </Sidebar>
        </>
     );
}

export default Layout;