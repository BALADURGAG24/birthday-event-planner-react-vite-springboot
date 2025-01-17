import {Route, Routes} from  "react-router-dom" 
import { lazy } from 'react'
import LazySuspense from "./assets/Components/LazySuspense.jsx"
const LazySignin = lazy(()=> import ("./assets/Auth/Signin.jsx"))
const LazySignUp = lazy(()=> import ("./assets/Auth/Signup.jsx"))
const LazyForgot= lazy(()=> import ("./assets/Auth/Forgot.jsx"))
const Lazyhome= lazy(()=> import ("./assets/Pages/Home.jsx"))
const Lazyprivacy= lazy(()=> import ("./assets/Pages/Privacy.jsx"))
const Lazyterms= lazy(()=> import ("./assets/Pages/Terms.jsx"))
const Lazyfaq= lazy(()=> import ("./assets/Pages/Faq.jsx"))
const Lazyfooter= lazy(()=> import ("./assets/Pages/Footer.jsx"))
const Lazynavbar= lazy(()=> import ("./assets/Pages/Navbar.jsx"))
const LazyEventRegistrationForm= lazy(()=> import ("./assets/Pages/EventRegistrationForm.jsx"))
const LazyEventViewForm= lazy(()=> import ("./assets/Pages/EventViewForm.jsx"))
const LazyEventDisplay= lazy(()=> import ("./assets/Pages/EventDisplay.jsx"))
const LazyFoodItems= lazy(()=> import ("./assets/Pages/FoodItems.jsx"))
const LazyEventList= lazy(()=> import ("./assets/Pages/EventList.jsx"))
const LazyAdminLogin= lazy(()=> import ("./assets/Admin/AdminLogin.jsx"))
const LazyContactus= lazy(()=> import ("./assets/Pages/Contactus.jsx"))
const LazyAboutUs= lazy(()=> import ("./assets/Pages/AboutUs.jsx"))
const LazyServices= lazy(()=> import ("./assets/Pages/Services.jsx"))
const LazyProfileDashboard= lazy(()=> import ("./assets/Pages/ProfileDashboard.jsx"))
const LazyAdminHome= lazy(()=> import ("./assets/Admin/AdminHome.jsx"))
const LazyAdminUserDetails= lazy(()=> import ("./assets/Admin/AdminUserDetails.jsx"))
const LazyFeedback= lazy(()=> import ("./assets/Admin/Feedback.jsx"))
const LazyEventView= lazy(()=> import ("./assets/Admin/EventView.jsx"))
const LazyEventListadmin= lazy(()=> import ("./assets/Admin/EventList.jsx"))
const LazyGallery= lazy(()=> import ("./assets/Pages/Gallery.jsx"))
const LazyWhyUs= lazy(()=> import ("./assets/Pages/WhyUs.jsx"))
const LazyWhatWeDo= lazy(()=> import ("./assets/Pages/WhatWeDo.jsx"))
const LazyRazorPay= lazy(()=> import ("./assets/Pages/RazorPay.jsx"))

const UserRoutes=()=>{
     return(
    <Routes>
    <Route path="Signin" element = {<LazySignin/>}></Route>
    </Routes>
  )
 }
function App() {
  return (
    <Routes>

        {/* <Route path="/" element={<Navigate to={role === 'role1' ? "/login" : "/login"} />} /> */}
        <Route path="/" element={<LazySuspense component={LazySignin}/>}></Route>
        <Route path="/signup" element={<LazySuspense component={LazySignUp}/>}></Route>
        <Route path="/forgot" element={<LazySuspense component={LazyForgot}/>}></Route>

        <Route path="/home" element={<LazySuspense component={Lazyhome}/>}></Route>
        <Route path="/privacy" element={<LazySuspense component={Lazyprivacy}/>}></Route>
        <Route path="/terms" element={<LazySuspense component={Lazyterms}/>}></Route>
        <Route path="/faq" element={<LazySuspense component={Lazyfaq}/>}></Route>
        <Route path="/footer" element={<LazySuspense component={Lazyfooter}/>}></Route>
        <Route path="/navbar" element={<LazySuspense component={Lazynavbar}/>}></Route>
        <Route path="/eventform" element={<LazySuspense component={LazyEventRegistrationForm}/>}></Route>
        <Route path="/eventviewform" element={<LazySuspense component={LazyEventViewForm}/>}></Route>
        <Route path="/eventdisplay" element={<LazySuspense component={LazyEventDisplay}/>}></Route>
        <Route path="/fooditem" element={<LazySuspense component={LazyFoodItems}/>}></Route>
        <Route path="/eventlist" element={<LazySuspense component={LazyEventList}/>}></Route>
        <Route path="/contactus" element={<LazySuspense component={LazyContactus}/>}></Route>
        <Route path="/aboutus" element={<LazySuspense component={LazyAboutUs}/>}></Route>
        <Route path="/services" element={<LazySuspense component={LazyServices}/>}></Route>
        <Route path="/profiledashboard" element={<LazySuspense component={LazyProfileDashboard}/>}></Route>
        <Route path="/gallery" element={<LazySuspense component={LazyGallery}/>}></Route>
        <Route path="/why-us" element={<LazySuspense component={LazyWhyUs}/>}></Route>
        <Route path="/what-we-do" element={<LazySuspense component={LazyWhatWeDo}/>}></Route>
        
        <Route path="/adminlogin" element={<LazySuspense component={LazyAdminLogin}/>}></Route>
        <Route path="/adminhome" element={<LazySuspense component={LazyAdminHome}/>}></Route>
        <Route path="/adminuserdetails" element={<LazySuspense component={LazyAdminUserDetails}/>}></Route>
        <Route path="/eventlistadmin" element={<LazySuspense component={LazyEventListadmin}/>}></Route>
        <Route path="/eventview" element={<LazySuspense component={LazyEventView}/>}></Route>
        <Route path="/feedback" element={<LazySuspense component={LazyFeedback}/>}></Route>
        <Route path="/razorpay" element={<LazySuspense component={LazyRazorPay}/>}></Route>

        {/* {role === 'role1' && (
        <>
          <Route path="/home" element={<LazySuspense component={LazyHome} />} />
          <Route path="/certificate" element={<LazySuspense component={LazyCertificate} />} />
          <Route path="/Enquiry" element={<LazySuspense component={LazyEnquiry} />} />
          <Route path="/lc" element={<LazySuspense component={LazyLC} />} />
          <Route path="/ielts" element={<LazySuspense component={LazyIELTS} />} />
          <Route path="/TOEFL" element={<LazySuspense component={LazyITOEFL} />} />
          <Route path="/pte" element={<LazySuspense component={Lazypte} />} />
          <Route path="/bec" element={<LazySuspense component={LazyBec} />} />
          <Route path="/trinity" element={<LazySuspense component={LazyTrinity} />} />
          <Route path="/udash" element={<LazySuspense component={LazyUdash} />} />
          <Route path="/ctable" element={<LazySuspense component={Lazyctable} />} />
          <Route path="/etable" element={<LazySuspense component={Lazyetable} />} />
          <Route path="/pay" element={<LazySuspense component={Lazypay} />} />
          <Route path="/Faq" element={<LazySuspense component={LazyFaq} />} />
        </>
      )}

  
      {role === 'role2' && (
        <>
        <Route path="/home" element={<LazySuspense component={LazyHome} />} />
        <Route path="/adminL" element={<LazySuspense component={LazyadminL} />} />
          <Route path="/adash" element={<LazySuspense component={Lazyadash} />} />
          <Route path="/addc" element={<LazySuspense component={Lazyaddc} />} />
          <Route path="/payt" element={<LazySuspense component={Lazypayt} />} />
          <Route path="/advc" element={<LazySuspense component={Lazyadvc} />} />
          <Route path="/etable" element={<LazySuspense component={Lazyetable} />} />
        </>
      )} */}

    </Routes>
  )
}

export default App