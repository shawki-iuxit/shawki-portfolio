import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full justify-center">
        {/* Content */}
        <div className="flex max-w-4xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              Senior Software Engineer
            </Link>{' '}
            who specializes in backend development and cloud engineering (PHP, Laravel, Node.js). I am
            enthusiastic about building scalable, enterprise-level applications that serve millions of users.
            Performance optimization, secure architecture, and writing clean, maintainable code matters to me.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2017, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            with 8 years of experience in my backend development journey, I&apos;m building
            enterprise-grade applications using modern technologies such as Laravel,
            PHP, Vue.js, Node.js, Docker, AWS, Azure, MySQL, and much more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from system architecture design all the way to deployment and scaling.
            I have successfully led teams and mentored developers, contributing to faster development
            cycles and improved code quality.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            exploring new technologies, contributing to open source projects, or
            working on side projects. You can follow my work on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>{' '}
            where I share my latest projects and contributions, or connect with me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Eng. in Computer Science & Engineering
              </Typography>
              <Typography component="li">Senior Backend Engineer</Typography>
              <Typography component="li">IELTS Score 7</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">AWS & Azure Cloud Expert</Typography>
              <Typography component="li">Product Owner (EVRM)</Typography>
              <Typography component="li">Team Leadership & Mentoring</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m always interested in challenging projects and
            opportunities to work with innovative teams. Feel free to reach out
            and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
