// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// import Layout from "../layout";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   function hasJWT() {
//     let flag = false;

//     //check user has JWT token
//     localStorage.getItem("token") ? (flag = true) : (flag = false);

//     return flag;
//   }

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         hasJWT() ? (
//           <>
//             <Layout />
//             <Component {...props} />
//           </>
//         ) : (
//           <Navigate to={{ pathname: "/admin/login" }} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;

import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

// import Layout from "../layout";


const PrivateRoute = ({ children }) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }
  //   const auth = null; // determine if authorized, from context or however you're doing it

  //   // If authorized, return an outlet that will render child elements
  //   // If not, return element that will navigate to login page
  //   return auth ? <Outlet /> : <Navigate to="/login" />;
  // };
  // export default PrivateRoute;
  return (
    // <>
    //   {/* <Route */}
    //   {/* // {...rest} */}
    //   {/* render={(props) => */}
    //   hasJWT() ? (
    //       // <>
    //     {/* <Layout /> */}
    //     children
    //       // </>
    //   ) : (
    //   <Navigate to={{ pathname: "/login" }} />
    //   )
    //   {/* } */}
    //   {/* /> */}
    // </>
    <>
      {hasJWT() ? children : <Navigate to="/login" />};
    </>
  );
};

export default PrivateRoute;