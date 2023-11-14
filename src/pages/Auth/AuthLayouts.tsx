import { Outlet } from "react-router-dom";



const AuthLayouts = () => {
    return (
        <>
            <article className="article">
                {/*  */}

                {/* <Outlet /> */}
                {/*  */}
                <Outlet/>
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
                                    <select
                                        name="language"
                                        className="select">
                                        <option value="#">
                                            English
                                        </option>
                                        <option value="http://ru-instafollow.bitballoon.com">
                                            Russian
                                        </option>
                                    </select>
                                </span>
                            </li>
                        </ul>
                    </nav>

                    <span className="footer-logo">
                        &copy; 2018 Instagram
                    </span>
                </div>
            </footer>
        </>
    );
};

export default AuthLayouts;

const Ul = [
    "About Us",
    "Support",
    "Blog",
    "Press",
    "Api",
    "Jobs",
    "Privacy",
    "Terms",
    "Directory",
];
