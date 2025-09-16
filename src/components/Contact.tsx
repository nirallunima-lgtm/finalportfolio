import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="card-glass p-12 rounded-2xl max-w-4xl mx-auto relative group">
            {/* Decorative Emoji */}
            <div className="absolute top-6 right-6 text-4xl animate-bounce">
              🤝
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-primary text-lg font-medium mb-2">What's Next?</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <a
                  href="mailto:dhanush.kalaisetvan@gmail.com"
                  className="btn-hero inline-flex items-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Say Hello</span>
                </a>
                
                <span className="text-muted-foreground text-sm">or</span>
                
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6">Dhanush Vardhan</h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            <p>mailto:dhanush.kalaisetvan@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;