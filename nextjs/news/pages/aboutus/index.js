// pages/aboutus/index.js
import Link from 'next/link';

function AboutPage() {
  return (
    <div>
      <h1>The About Us Page</h1>
      <ul>
        <li><Link href="/aboutus/1">Yash</Link></li>
        <li><Link href="/aboutus/2">Vaibhav</Link></li>
        <li><Link href="/aboutus/3">Suresh</Link></li>
      </ul>
    </div>
  );
}

export default AboutPage;
