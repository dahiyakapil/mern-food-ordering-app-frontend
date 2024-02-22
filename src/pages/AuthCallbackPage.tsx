// import { useCreateMyUser } from "@/api/MyUserApi";
// import { useAuth0 } from "@auth0/auth0-react"
// import { useRef } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AuthCallbackPage() {

//     const AuthCallbackPage = () => {
//         const navigate = useNavigate();


//         const { user } = useAuth0();
//         const { createUser } = useCreateMyUser();

//         const hasCreatedUser = useRef(false);

//          useEffect(() => {
//             if (user?.sub && user?.email && !hasCreatedUser.current) {
//                 createUser({auth0Id: user.sub, email: user.email});
//                 hasCreatedUser.current=true;
//               }
//               navigate("/");
//          }, [createUser, navigate, user]);
//          return <>Loading...</>;
//     }
// }


import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallbackPage() {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();
    const hasCreatedUser = useRef(false);

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email });
            hasCreatedUser.current = true;
        }
        navigate("/");
    }, [createUser, navigate, user]);

    return <>Loading...</>;
}
