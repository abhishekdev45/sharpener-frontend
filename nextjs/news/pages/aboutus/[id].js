// pages/aboutus/[id].js
import { useRouter } from 'next/router';
import { developerDetails } from './data';

function AboutDeveloper() {
  const router = useRouter();
  const { id } = router.query;
  const developer = developerDetails.find(dev => dev.id === parseInt(id));

  if (!developer) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{developer.name}</h1>
      <p>Role: {developer.role}</p>
    </div>
  );
}

export default AboutDeveloper;
