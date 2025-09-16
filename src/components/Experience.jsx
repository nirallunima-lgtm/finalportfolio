import { Play, ExternalLink } from 'lucide-react';

const Experience = () => {
  const workExperience = {
    company: 'Cloudflare',
    role: 'Software Engineering Intern',
    type: 'Freelancer',
    description: 'Developed the Zero Trust Desktop Client in Flutter and optimized the Rust daemon for the client, ensuring secure and efficient data transfer.',
  };

  const achievements = [
    {
      id: 1,
      title: '#1 Winner at Princeton (Vibewire Track)',
      event: 'HackPrinceton',
      year: '2023',
      color: 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-orange-500/30',
    },
    {
      id: 2,
      title: '#3 Winner at Calhacks (MindsDB)',
      event: 'CalHacks',
      year: '2023',
      color: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    },
    {
      id: 3,
      title: '#1 Winner at Massey Hacks',
      event: 'Massey Hacks',
      year: '2023',
      color: 'bg-gradient-to-br from-gray-600/20 to-gray-400/20 border-gray-500/30',
    },
    {
      id: 4,
      title: 'Invited to Pinnacle (Olympics of Hackathons)',
      event: 'Pinnacle',
      year: '2023',
      color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30',
    },
  ];

  const techStack = [
    'Java', 'Git', 'Kotlin', 'Redis', 'Postgres', 'Java', 'Git', 'MySQL', 'Dart',
    'FastAPI', 'Python', 'MongoDB', 'Compose', 'Firebase', 'Docker', 'NodeJS',
    'Express', 'Flutter', 'JavaScript', 'Dart', 'Compose', 'Redis', 'Flutter',
    'Postgres', 'NodeJS', 'Express', 'MongoDB', 'FastAPI', 'Docker'
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          <span className="text-primary">02.</span> My Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Work Experience */}
          <div className="lg:col-span-1">
            <div className="card-glass p-6 rounded-xl animate-fade-in">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{workExperience.company}</h3>
                  <p className="text-sm text-muted-foreground">{workExperience.type}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">{workExperience.role}</h4>
                  <p className="text-sm text-muted-foreground">@{workExperience.company}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {workExperience.description}
                </p>
              </div>
            </div>
          </div>

          {/* Center - Achievements Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`card-glass p-6 rounded-xl border ${achievement.color} relative group hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="space-y-4">
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{achievement.event}</span>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Play size={12} className="text-primary" />
                        </div>
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <ExternalLink size={12} className="text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tech Stack Cloud */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="relative w-80 h-80">
            {techStack.map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="absolute tech-tag animate-float"
                style={{
                  top: `${Math.random() * 70 + 10}%`,
                  left: `${Math.random() * 70 + 10}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  fontSize: `${Math.random() * 0.3 + 0.7}rem`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;