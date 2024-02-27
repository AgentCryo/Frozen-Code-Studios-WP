import { SignInWindow } from "../SignInWindow";
import { useState } from "react";

export const SignInButton = () => {
    const [showWindow, setShowWindow] = useState(false);

    return (
      <div style={{ padding: '0px 10px 0px 10px' }} onClick={() => setShowWindow(true) }>
          <div className="t">Login</div>
          {showWindow ? <SignInWindow /> : null}
      </div>
    );
  };

export default SignInButton;