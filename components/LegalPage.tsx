import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import heroImage from '../images/hero.jpg';

const LegalPage: React.FC<{ section?: 'privacy' | 'terms' }> = ({ section }) => (
  <div className="min-h-screen bg-white">
    <Navigation />

    <header className="relative pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.55) contrast(1.05)'
        }}
      ></div>
      <div className="absolute inset-0 bg-[#2d3e33]/70 z-0"></div>

      <div className="relative z-10 text-center px-4">
        <p className="text-stone-200 uppercase tracking-[0.3em] text-sm font-light mb-3">Faith Naff for Caldwell County</p>
        <h1 className="text-4xl md:text-5xl text-white font-bold serif tracking-tight">
          {section === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
        </h1>
      </div>
    </header>

    <main className="mx-auto max-w-4xl px-6 pb-16 space-y-8">
      {section === 'terms' ? (
        <>
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Agreement to Terms</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the FaithForCaldwell website located at faithforcaldwell.com (the &ldquo;Service&rdquo;) operated by FaithForCaldwell (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Description of Service</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              FaithForCaldwell is a campaign website that provides:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>Information about Faith Naff's campaign and platform</li>
              <li>Blog posts and articles about local issues and community concerns</li>
              <li>Showcase of campaign initiatives and community engagement</li>
              <li>Contact information and professional networking opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">User Accounts</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Acceptable Use</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Post content that is defamatory, obscene, or offensive</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service for any commercial purpose without our express written consent</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Content and Comments</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              Users may have the opportunity to post comments on blog posts. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your content on the Service.
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              You are solely responsible for the content you post and represent that you have all necessary rights to grant us the license described above. We reserve the right to remove any content that violates these Terms or is otherwise objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Intellectual Property</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of FaithForCaldwell and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Privacy</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Links to Other Websites</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              Our Service may contain links to third-party websites or services that are not owned or controlled by FaithForCaldwell. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              You acknowledge and agree that FaithForCaldwell shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Termination</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Limitation of Liability</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              In no event shall FaithForCaldwell, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, transmitted, or otherwise made available via the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Disclaimer</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              The information on this Service is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted by law, this Company:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>Excludes all representations, warranties, conditions and terms whether express or implied</li>
              <li>Does not warrant that the Service will be uninterrupted or error-free</li>
              <li>Does not warrant that defects will be corrected</li>
              <li>Does not warrant that the Service or the server that makes it available are free of viruses or other harmful components</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Governing Law</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Changes to Terms</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Contact Information</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-2 text-base-content/80">
              <li>Email: <a href="mailto:faithnaff@outlook.com" className="text-primary hover:underline">faithnaff@outlook.com</a></li>
              <li>Website: <a href="https://faithforcaldwell.com" className="text-primary hover:underline">faithforcaldwell.com</a></li>
            </ul>
          </section>
          </>
      ) : (
        <>
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Introduction</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              FaithForCaldwell (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website faithforcaldwell.com (the &ldquo;Service&rdquo;).
            </p>
            <p className="text-base-content/80 leading-relaxed">
              By using our Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-primary">Personal Information</h3>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              When you interact with our Service, we may collect personal information that you voluntarily provide, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>Name and email address (when leaving comments)</li>
              <li>Authentication information (when accessing admin features)</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-primary">Automatically Collected Information</h3>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We automatically collect certain information when you visit our Service:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Usage patterns and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">How We Use Your Information</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To fulfill any other purpose for which you provide it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Information Sharing and Disclosure</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
              <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our users</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Data Security</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Cookies and Tracking Technologies</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Your Rights</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base-content/80">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Children&rsquo;s Privacy</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Changes to This Privacy Policy</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Contact Us</h2>
            <p className="mb-4 text-base-content/80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2 text-base-content/80">
              <li>Email: <a href="mailto:faithnaff@outlook.com" className="text-primary hover:underline">faithnaff@outlook.com</a></li>
              <li>Website: <a href="https://faithforcaldwell.com" className="text-primary hover:underline">faithforcaldwell.com</a></li>
            </ul>
          </section>
        </>
      )}
    </main>
    <Footer />
  </div>
);

export default LegalPage;
