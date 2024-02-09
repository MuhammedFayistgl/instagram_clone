import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
    return (
        <>
            <Container>
                <div className="relative h-screen flex flex-col justify-between ">
                    <article className="w-full flex items-center h-full justify-center  ">
                        <Outlet />
                    </article>

                    <footer className="footer" role="contentinfo">
                        <div className="footer-container">
                            <nav className="footer-nav" role="navigation">
                                <ul className="flex justify-evenly">
                                    {Ul.map((i) => (
                                        <li key={i}>
                                            <a href="">{i}</a>
                                        </li>
                                    ))}

                                    <li>
                                        <span className="language">
                                            Language
                                            <select name="language" className="select">
                                                <option value="#">English</option>
                                                <option value="http://ru-instafollow.bitballoon.com">Russian</option>
                                            </select>
                                        </span>
                                    </li>
                                </ul>
                            </nav>

                            <span className="footer-logo">&copy; 2018 Instagram</span>
                        </div>
                    </footer>
                </div>
            </Container>
        </>
    );
};

export default AuthLayouts;

const Ul = ["About Us", "Support", "Blog", "Press", "Api", "Jobs", "Privacy", "Terms", "Directory"];
