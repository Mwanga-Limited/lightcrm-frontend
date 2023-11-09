import LightLogo from '@assets/images/logo-light.png';
import DarkLogo from '@assets/images/logo-dark.png';
const Logo = () => {
  return (
    <div>
      <>
        <img
          src={LightLogo}
          alt="Light CRM"
          className="block dark:hidden h-8"
        />
        <img src={DarkLogo} alt="Light CRM" className="dark:block hidden h-8" />
      </>
    </div>
  );
};

export default Logo;
