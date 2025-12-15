import { useState, useRef } from 'react'; 
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aymane-guelbaoui',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/aymane-guelbaoui',
      icon: Github,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/aymaneguelbaoui',
      icon: Twitter,
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm(
        'service_y94zw9r',     
        'template_akrgh3p',    
        formRef.current,
        'pyl6BTLvL9uKAgtN2'      
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
      });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In <span className="text-amber-600">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold uppercase tracking-wide mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gray-100">
                    <MapPin className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Morocco</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gray-100">
                    <Mail className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:aymaneguelbaoui@gmail.com"
                      className="font-medium hover:text-amber-600 transition"
                    >
                      aymaneguelbaoui@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold uppercase tracking-wide mb-4">
                Follow Me
              </h3>

              <div className="flex gap-4">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-lg bg-gray-100 hover:bg-amber-100 text-gray-700 hover:text-amber-600 transition"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="rounded-lg bg-amber-100 text-amber-800 px-4 py-3 text-sm">
                  Message sent successfully! I’ll get back to you soon.
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-600 text-white py-3 font-medium hover:bg-amber-700 transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
