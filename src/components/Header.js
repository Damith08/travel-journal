import FILLLOGO from "../assets/images/Fill 213.svg";

export default function Header() {
  return (
    <nav className="header">
      <img src={FILLLOGO} className="header--logo" alt="header-logo" />
      <p className="header--text">my travel journal.</p>
    </nav>
  );
}
