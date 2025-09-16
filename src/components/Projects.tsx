import { ExternalLink, Github } from 'lucide-react';
import shopwiseMockup from '@/assets/shopwise-mockup.jpg';
import cryptoAppMockup from '@/assets/crypto-app-mockup.jpg';
import medicalAppMockup from '@/assets/medical-app-mockup.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Shopwise',
      description: 'Shopwise is your ultimate shopping companion that helps you find the best deals and save money effortlessly 🛍️.',
      image: shopwiseMockup,
      gradient: 'bg-gradient-to-br from-teal-500/20 to-blue-600/30',
      tags: ['Flutter', 'Firebase', 'Node.js'],
      links: {
        github: 'https://github.com',
        live: 'https://shopwise.app'
      }
    },
    {
      id: 2,
      title: 'Blik',
      description: 'An app that predicts crypto and analyzes prices using AI 🤖🔥',
      image: cryptoAppMockup,
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/30',
      tags: ['React Native', 'AI/ML', 'Python'],
      links: {
        github: 'https://github.com',
        live: 'https://blik.app'
      }
    },
    {
      id: 3,
      title: 'MedicOn',
      description: 'Medicon brings medical consultations to your home!',
      image: medicalAppMockup,
      gradient: 'bg-gradient-to-br from-blue-400/20 to-cyan-500/30',
      tags: ['Flutter', 'WebRTC', 'Node.js'],
      links: {
        github: 'https://github.com',
        live: 'https://medicon.app'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          <span className="text-primary">03.</span> Cool Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First project - Large card */}
          <div className="lg:col-span-2">
            <div className={`card-glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${projects[0].gradient} border-2 border-teal-500/30`}>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">{projects[0].title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{projects[0].description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {projects[0].tags.map((tag) => (
                        <span key={tag} className="tech-tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={projects[0].links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={projects[0].links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side projects - Smaller cards */}
          <div className="space-y-8">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className={`card-glass rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 ${project.gradient} border-2 ${
                  project.id === 2 ? 'border-purple-500/30' : 'border-blue-500/30'
                }`}
              >
                <div className="p-6 space-y-4">
                  <div className="relative h-32 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;