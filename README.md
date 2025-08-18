# ui building for makefriends
1.install vite+react
2.install tailwind css
3.install daisyUI css-framework
4.follow the documents for installing daisyUI & tailwindss
5.install react router dom
6.make routes for child and parent componets
7.create login,logout,profile componets 
8.create login forms and create async functions for login api call

## note
when you call the login api it returns cors error cause it doesnt match the ports of frontend and backend server,so you have to install "cors" from npm.

in the backend
1.npm i cors
2.const cors=require("cors")
3.app.use(cors({
    origin:"htpp://localhpost/5173" //frontend link
    credentials:true
}))

in the frontend
1.const data=await axios.post("http://localhost/login",{email:email,password:password},{withCredentials:true})
then you get cookie in the application cookies

