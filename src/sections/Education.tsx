import { Arrow, UnderlinedLink } from '../components';
import { education } from '../constants';

const Education = () => {
  return (
    <section className="my-5">
      <h2>Education</h2>
      {education.map(({ time, link, description }, index) => (
        <div
          key={index}
          className="mx-6 mb-2 flex flex-col sm:mx-0 sm:flex-row sm:items-center"
        >
          <p className="time sm:w-[25%]">{time}</p>
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
