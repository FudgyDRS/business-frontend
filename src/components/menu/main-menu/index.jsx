import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/service"}>
                        Service
                    </NavLink>

                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/service"}
                            >
                                Service
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/service-details/1"}
                            >
                                single service
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/">Pages</NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/faq"}
                            >
                                faq
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/team"}
                            >
                                team
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={"/blog"}>
                        Blog
                    </NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/blog"}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/blog-left-sidebar"}
                            >
                                blog grid left sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/blog-right-sidebar"}
                            >
                                blog grid right sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={"/blog-details/1"}
                            >
                                blog details
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={"/contact"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
