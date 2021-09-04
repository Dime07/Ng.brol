import Logo from "../Images/logo.png";

export default function Footer() {
  return (
    <footer className="mt-auto w-full py-6 bg-main-color">
      <img src={Logo} alt="Logo Ng.brol" className="h-10 w-auto mx-auto" />
    </footer>
  );
}
