import {Link} from "react-router-dom"

function Header() {
    return <nav>
        <ul style={{
            display: "flex",
            listStyle: "none",
            gap: "1rem",
            paddingLeft: "0"
        }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">About</Link>
            </li>
            <li>
                <Link to="/user-api">Userapi</Link>
            </li>
            <li>
                <Link to="/product-api">Productapi</Link>
            </li>
        
            <li>
                <Link to="/useeffect-api">Useeffectapi</Link>
            </li>
        
        </ul>
        <hr />
    </nav>
}

export default Header