import { useState } from 'react';
import { Link } from 'react-router';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="pt-24 lg:pt-28 pb-16 lg:pb-24 page-enter">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-[10px] font-semibold text-[#c4956a] uppercase tracking-[2px] mb-4">Contact</p>
          <h1 className="font-display text-4xl lg:text-6xl font-semibold mb-4 leading-[1.1]">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Have questions about our products, partnerships, or want to collaborate? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f5ede4] dark:bg-[#2a2420] flex items-center justify-center flex-shrink-0 text-[#c4956a]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                    <a href="mailto:queuette.clothing@gmail.com" className="text-sm font-medium hover:text-[#c4956a] transition-colors">
                      queuette.clothing@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f5ede4] dark:bg-[#2a2420] flex items-center justify-center flex-shrink-0 text-[#c4956a]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Phone</p>
                    <a href="tel:+27673031232" className="text-sm font-medium hover:text-[#c4956a] transition-colors">
                      067 303 1232
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f5ede4] dark:bg-[#2a2420] flex items-center justify-center flex-shrink-0 text-[#c4956a]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Location</p>
                    <p className="text-sm font-medium">South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['Instagram', 'TikTok', 'Facebook', 'X'].map(social => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-[#c4956a] hover:text-white hover:border-[#c4956a] transition-all"
                    aria-label={social}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {social === 'Instagram' && <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                      {social === 'TikTok' && <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>}
                      {social === 'Facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                      {social === 'X' && <><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"/></>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-display text-base font-semibold mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span className="font-medium">9:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-10">
              <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>

              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-2">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24–48 hours. God bless!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}
                    >
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Partnership</option>
                      <option>Wholesale</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-[#c4956a] transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="bg-[#c4956a] rounded-2xl py-10 lg:py-14 px-6">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-3">
              Join Our Community
            </h2>
            <p className="text-white/90 text-sm lg:text-base max-w-md mx-auto mb-6">
              Subscribe for early access to new drops, exclusive offers, and faith-filled content.
            </p>
            <Link to="/" className="btn bg-foreground text-background hover:bg-foreground/90 inline-flex">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
