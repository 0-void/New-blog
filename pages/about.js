import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img src={siteMetadata.image} alt="avatar" className="w-auto" />
            </div>
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Mern full stack developer</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hi there! My name is Muthukumar, author of{' '}
              <a href="https://devutilities.nullish.in">DevTools and Utilities</a> and I'm currently
              working as a junior developer at Actyv.
            </p>
            <p></p>
            <p>
              My hobbies are trying out new technologies that recently caught my eye and watching
              anime. If you are interested in what animes I watched, check out{' '}
              <a href="https://www7.animeseries.io/shared-list/6023a0759d6121bb3879c34522f9e66c28ee3ce1e452b">
                my anime list.
              </a>
            </p>
            <p>
              And I like to brag about technologies I like and new stuff I learned on the Internet.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
