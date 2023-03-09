import { Outlet } from "react-router-dom";

function MainLayout(){
    return (
      <div className="main-layout">
            <header>
                <ul>
                    <li><a href="/">Monday</a></li>
                    <li><a href="tuesday">Tuesday</a></li>
                    <li><a href="wednesday">Wednesday</a></li>
                    <li><a href="thursday">Thursday</a></li>
                    <li><a href="friday">Friday</a></li>
                </ul>
            </header>

            <Outlet />
            
      </div> 
    )
}

export default MainLayout;