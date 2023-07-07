import React, { useState } from 'react';
import { LoginSocialFacebook, IResolveParams } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  const [profile, setProfile] = useState(null);
   const onLoginStart = () => {
    // Perform actions when login starts
  };
   const onLogoutSuccess = () => {
    // Perform actions when logout is successful
  };
   const REDIRECT_URI = 'your-redirect-uri';
   const handleResolve = ({ provider, data }) => {
    setProfile(data);
    // Perform actions with the resolved data
  };
   const handleReject = (err) => {
    console.log(err);
    // Handle rejection error
  };
   return (
    <div>
      <LoginSocialFacebook
        appId={process.env.REACT_APP_FB_APP_ID || '232486652952887'}
        fieldsProfile="id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        redirect_uri={REDIRECT_URI}
        onResolve={handleResolve}
        onReject={handleReject}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}
 export default App;