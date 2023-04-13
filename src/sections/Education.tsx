import { Arrow, UnderlinedLink } from '../components';
import { education } from '../constants';

const Education = () => {
  return (
    <section className="my-5">
      <h2>Education</h2>
      {education.map(({ time, link, description }, index) => (
        <div key={index} className="mb-2 flex items-center">
          <p className="time w-[25%]">{time}</p>
          <p className="flex items-center gap-1 text-gray1">
            <UnderlinedLink
              title={description}
              link={link}
              color={'light' as string}
            />{' '}
            <Arrow />
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
