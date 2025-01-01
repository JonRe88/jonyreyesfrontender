
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/JonRe88',
    color: 'hover:text-gray-600',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jony-reyes-developer/',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:jreyesturismo@hotmail.com',
    color: 'hover:text-red-600',
  },
  {
    name: 'Phone',
    icon: MessageCircle,
    url: 'https://wa.me/525511856139',
    color: 'hover:text-green-600',
  },
];

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
              <h1 className="text-4xl md:text-7xl font-thin                       text-center mb-8 text-white" 
            style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}>
          Contacto
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white p-6 border-2 rounded-lg  transition-transform transform hover:-translate-y-2"    style={{boxShadow: '1px 1px 2px blue, 0 0 1em white, 0 0 0.2em blue'}}>
                <div className={`flex flex-col items-center space-y-4 ${link.color}`}>
                  <link.icon className="w-12 h-12 transition-colors" />
                  <span className="text-lg font-medium">{link.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}