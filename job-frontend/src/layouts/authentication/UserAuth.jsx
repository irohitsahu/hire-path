import Cookie from 'js-cookie';

// const login = async (userData) => {
//   try{
//     const res = await Axios.post('https://localhost:7000/api/candidates/login', { userData })
//           if(res.data){

//           }
//         navigate('/dashboard')
//   }
// }

const SetCookie = (cookieValue, usrIn) => {
  Cookie.set(cookieValue, usrin, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: '/dashboard'
  });
}

const GetCookie = (cookieValue) => {
  return Cookie.get(cookieValue);
};

const RemoveCookie = (cookieValue) => {
  console.log(cookieValue);
  return Cookie.remove(cookieValue);
};

export { SetCookie, GetCookie, RemoveCookie };
