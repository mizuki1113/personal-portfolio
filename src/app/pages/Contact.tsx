import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubmitMessage('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <div className="text-white">
      {/* Contact Header */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl mb-6">Get In Touch</h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-400 max-w-2xl">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-3xl md:text-4xl mb-6">Contact Information</h2>
                  <p className="text-gray-400 mb-8">
                    Feel free to reach out through any of these channels. I'm always
                    open to discussing new projects and opportunities.
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
                      <Mail className="text-pink-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Email</h3>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-gray-400 hover:text-pink-400 transition-colors"
                      >
                        Pgamalo56@gmail.com
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
                      <Phone className="text-pink-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-400 hover:text-pink-400 transition-colors"
                      >
                        +63 997 655 5867
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50">
                      <MapPin className="text-pink-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">Location</h3>
                      <p className="text-gray-400">
                        Cagayan de Oro City,
                        <br />
                        Philippines
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.6}>
                <div className="pt-8 border-t border-gray-800/50">
                  <h3 className="text-lg mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/mizuki1113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-pink-500/50 transition-all"
                    >
                      <Github className="text-gray-400 hover:text-pink-400 transition-colors" size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/precious-gamalo-b81156382/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-pink-500/50 transition-all"
                    >
                      <Linkedin className="text-gray-400 hover:text-pink-400 transition-colors" size={24} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-pink-500/50 transition-all"
                    >
                      <Twitter className="text-gray-400 hover:text-pink-400 transition-colors" size={24} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.3} className="md:col-span-3">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                <h2 className="text-3xl mb-6">Send Me a Message</h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-pink-500/10 text-pink-400 rounded-xl border border-pink-500/20">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      placeholder="Last Name, First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2 text-gray-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-white"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}