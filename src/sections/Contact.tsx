import { Arrow, UnderlinedLink } from '../components';
import { contacts } from '../constants';

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      {contacts.map(({ name, username, link }, index) => (
        <div
          key={`${name}-${index}`}
          className="mx-6 mb-2 flex w-full flex-col sm:mx-0 sm:flex-row sm:items-center"
        >
          <p className="w-[25%] text-gray3">{name}</p>
          <p className="flex items-center gap-1">
            <UnderlinedLink link={link} title={username} color="light" />
            <Arrow />
          </p>
        </div>
      ))}
    </section>
  );
};

export default Contact;
