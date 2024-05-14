import {Link} from "react-router-dom";

const AdminNavForm = ({token}) => {

    const isLoggedIn = token !== null;

    return (
        <>{!isLoggedIn?("no"):
            (<>
                <Link to={'/admin/user'}>Manage Users</Link>
                <Link to={'/admin/artwork'}>Manage Artworks</Link>
            </>
            )
        }
        </>
    );
}

export default AdminNavForm;