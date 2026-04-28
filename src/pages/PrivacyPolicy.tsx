import { Shield, Eye, Lock, FileText } from "phosphor-react";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Shield size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
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
                  <Eye size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fill out our contact forms or request information</li>
                    <li>Subscribe to our newsletter or communications</li>
                    <li>Participate in surveys or provide feedback</li>
                    <li>Contact us for support or with questions</li>
                  </ul>
                  <p>This may include your name, email address, company information, and any other information you choose to provide.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you information about our services and industry insights</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect our rights and prevent fraud</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To service providers who assist us in operating our website and conducting business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Data Security</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Your Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Correct any inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground mb-0">Contact Us</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
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

export default PrivacyPolicy;