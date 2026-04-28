import { Cookie, Gear, Eye, Shield } from "phosphor-react";
import Layout from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Cookie size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Cookie Policy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cookie size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Gear size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Types of Cookies We Use</h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p>We use these cookies to understand how visitors interact with our website, helping us improve our content and user experience.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                    <p>These cookies may be used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.</p>
                  </div>

                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Third-Party Cookies</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may also use third-party services that place cookies on your device, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for social sharing features</li>
                    <li>Customer support tools</li>
                    <li>Marketing and advertising platforms</li>
                  </ul>
                  <p>These third parties have their own privacy policies and cookie practices.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Gear size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Managing Your Cookie Preferences</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>You can control and manage cookies in several ways:</p>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                    <p>Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or alert you when cookies are being sent.</p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Cookie Preferences</h3>
                    <p>You can manage your cookie preferences through the cookie banner that appears when you first visit our website.</p>
                  </div>

                  <p className="text-sm bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <strong>Note:</strong> Disabling certain cookies may impact the functionality of our website and your user experience.
                  </p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Contact Us</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="mb-2"><strong>Email:</strong> privacy@revgrow.com</p>
                    <p className="mb-2"><strong>Phone:</strong> +44 (0) 207 123 4567</p>
                    <p><strong>Address:</strong> 123 Growth Street, London, EC1A 1BB, United Kingdom</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;