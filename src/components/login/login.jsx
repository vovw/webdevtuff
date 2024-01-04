import { GoogleLogin } from "@react-oauth/google";

let login = () => {
  return (
    <div id="login" className="flex justify-center mt-36 text-white gap-8">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default login;
