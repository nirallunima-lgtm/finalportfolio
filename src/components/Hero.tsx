import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const techIcons = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Flutter', color: 'text-cyan-400' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'NodeJS', color: 'text-green-400' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'MongoDB', color: 'text-green-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Social Links - Mobile/Desktop Left */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Greeting */}
            <div className="mb-6">
              <p className="text-primary text-lg font-medium mb-4">Hello there 👋</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                I'm <span className="text-gradient">Dhanush</span>
              </h1>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">
                  Mobile App Developer | Winner of 5+ Hackathons | Helping Startups
                </p>
                <p className="text-lg text-muted-foreground">
                  Soar 🚀 | FOSS Contributor | Fulltime Indie Hacker
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button className="btn-hero">
                Resume
              </button>
            </div>
          </div>

          {/* Right Side - Avatar & Tech Stack */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Main Avatar */}
              <div className="relative z-10 floating-animation">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[var(--glow-primary)]">
                  <img
                    src={developerAvatar}
                    alt="Developer Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute inset-0 -z-10">
                {techIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`absolute animate-float tech-tag ${
                      index === 0 ? 'top-4 right-8' :
                      index === 1 ? 'top-20 left-4' :
                      index === 2 ? 'bottom-20 right-12' :
                      index === 3 ? 'bottom-8 left-8' :
                      index === 4 ? 'top-32 right-0' :
                      'bottom-32 left-0'
                    }`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;