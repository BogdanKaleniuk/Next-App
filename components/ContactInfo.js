import { useRouter } from "next/dist/client/router";
import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  const router = useRouter();

  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <button onClick={() => router.push("/contacts")}>Back to contacts</button>

      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
