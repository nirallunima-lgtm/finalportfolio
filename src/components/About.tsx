const About = () => {
  const skills = [
    { name: 'Flutter', category: 'mobile' },
    { name: 'NodeJS', category: 'backend' },
    { name: 'MySQL', category: 'database' },
    { name: 'Kotlin', category: 'mobile' },
    { name: 'Redis', category: 'database' },
    { name: 'Postgres', category: 'database' },
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
  ];

  const achievements = [
    'Google IO Extended 2022',
    'Sunhacks 2023',
    'Coders Evoke',
    'CalHacks',
    'HackPrinceton'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative animate-fade-in">
            <div className="card-glass p-8 rounded-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-slide-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-primary">01.</span> About Me
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi there! I'm Dhanush Vardhan, a <span className="text-primary font-medium">software engineer</span> who loves diving into mobile app development. My
                toolbox is packed with cool stuff like Flutter, Node.js, Redis, and more... 
              </p>

              <p>
                I've also had some awesome times speaking at <span className="text-primary font-medium">Google IO Extended 2022</span>, <span className="text-primary font-medium">Sunhacks 2023</span> and <span className="text-primary font-medium">Coders Evoke</span>, where I talked about Flutter 3.0 and Firebase. Sharing what I know and learning from others is
                something I really enjoy.
              </p>

              <p>
                Oh, and hackathons? Totally my thing. I've snagged wins at <span className="text-primary font-medium">CalHacks</span> and <span className="text-primary font-medium">HackPrinceton</span>, which were
                both super exciting and challenging.
              </p>

              <p>
                In a nutshell, I'm all about building neat apps, sharing tech insights, and always up for a good coding
                challenge!
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;