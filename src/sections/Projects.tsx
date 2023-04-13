import { Arrow, UnderlinedLink } from '../components';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className="my-10">
      <h2>Projects</h2>
      {projects.map(
        ({ time, src, name, description, link, liveLink }, index) => {
          return (
            <div key={index} className="mb-4 flex w-full">
              <p className="time w-[25%]">{time}</p>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-1 text-gray1">
                  <UnderlinedLink
                    title={name}
                    link={link}
                    color={'light' as string}
                  />{' '}
                  <Arrow />
                </p>
                <p>{description}</p>
                <img
                  src={src}
                  alt="preview"
                  className="h-16 w-32 cursor-pointer rounded-md"
                  onClick={() => window.open(liveLink, '_blank')}
                />
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Projects;
