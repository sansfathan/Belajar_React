import {Outlet, Link} from 'react-router-dom';

export default function Computer() {
    return(
       
        <div>
             <div>This is Computer</div>
            <div>
                <Link to="/settings/Computer/Lenovo">Lenovo</Link>
                <Link to="/settings/Computer/Asus">Asus</Link>
                <Link to="/settings/Computer/Apple">Apple</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}