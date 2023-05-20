// import React, {useState, createContext} from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//   const [userInfo, setUserInfo] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const register = (name, email, password) => {
//     setIsLoading(true);
//     axios
//       .post('https://auth-backend-lesson.herokuapp.com/api/users/signup', {
//         name,
//         email,
//         password,
//       })
//       .then(res => {
//         let userData = res.data;
//         setUserInfo(userData);
//         console.log(userData);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userData));
//       })
//       .catch(e => {
//         console.log(`register error - ${e}`);
//       });
//     setIsLoading(false);
//   };

//   const login = (email, password) => {
//     setIsLoading(true);
//     axios
//       .post('https://auth-backend-lesson.herokuapp.com/api/users/login', {
//         email,
//         password,
//       })
//       .then(res => {
//         let userData = res.data;
//         setUserInfo(userData);
//         console.log(userData);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userData));
//       })
//       .catch(e => {
//         console.log(`register error - ${e}`);
//       });
//     setIsLoading(false);
//   };

//   const logout = () => {
//     setIsLoading(true);
//     axios
//       .post(
//         'https://auth-backend-lesson.herokuapp.com/api/users/logout',
//         {},
//         {headers: {Authorization: `Bearer ${userInfo.token}`}},
//       )
//       .then(res => {
//         console.log(res.data);
//         AsyncStorage.removeItem('userInfo');
//         setUserInfo({});
//       })
//       .catch(e => {
//         console.log(`register error - ${e}`);
//       });
//     setIsLoading(false);
//   };

//   // const isLoggedIn = async () => {
//   //   try {
//   //     let userData = await AsyncStorage.getItem('userInfo');
//   //     userData = JSON.parse(userData);
//   //     if (userData) {
//   //       setUserInfo(userData);
//   //     }
//   //   } catch (e) {
//   //     console.log(`is logged in error ${e}`);
//   //   }
//   // };

//   // useEffect(() => {
//   //   console.log('success loggedIn');
//   //   isLoggedIn();
//   // }, []);

//   return (
//     <AuthContext.Provider
//       value={{isLoading, userInfo, register, login, logout}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthProvider;
