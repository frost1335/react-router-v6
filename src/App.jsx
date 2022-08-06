import React from "react";
import {
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import { BookLayout } from "./BookLayout";
import { BookRoutes } from "./pages/BookRoutes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./pages/style.css";

const App = () => {
  const location = useLocation();
  console.log(location);

  //   let element = useRoutes([
  //     {
  //       path: "/",
  //       element: <Home />,
  //         children: [
  //           {
  //             index: true,
  //             element: <Home />,
  //           },
  //           {
  //             path: 'about',
  //             element: <Home />,
  //           },
  //           {
  //             index: 'contract',
  //             element: <Home />,
  //           },
  //         ],
  //     },
  //     {
  //       path: "*",
  //       element: <NotFound />,
  //     },
  //   ]);

  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: "red",
                    }
                  : {};
              }}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              to="/"
              // state="Hi"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/books" /* replace */>
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
