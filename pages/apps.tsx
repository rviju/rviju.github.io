import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import appsData from '@/data/appsData';
import siteMetadata from '@/data/siteMetadata';

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Apps - ${siteMetadata.author}`}
        description="Links to tools, apps and utilities built to help the viewers in their financial journey"
      />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Apps
          </h1>
        </div>
        <div className="container">
          <div className="flex flex-wrap -m-4">
            {appsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
