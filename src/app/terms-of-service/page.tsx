
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertTriangle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Privacy Policy',
  description: 'Read the Terms of Service and Privacy Policy for TradingisEZ. Understand our disclaimers, affiliate disclosure, and data practices.',
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service & Privacy Policy | TradingisEZ',
    description: 'Read the Terms of Service and Privacy Policy for TradingisEZ.',
    url: '/terms-of-service',
  }
};

export default function TermsAndPrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-4">
          <FileText className="w-12 h-12 text-primary-foreground" />
          <Shield className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold text-primary-foreground mb-2 mt-4">Terms of Service & Privacy Policy</h1>
        <p className="text-lg text-primary-foreground/90">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <Card className="shadow-lg border-2 border-destructive">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center text-destructive">
            <AlertTriangle className="w-6 h-6 mr-2" /> Important Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="text-destructive-foreground">
            All content, reviews, comparisons, tools, and resources provided on TradingisEZ (the "Website") are for <strong>informational and educational purposes only</strong>. The information is general in nature and does not take into account your individual financial circumstances, investment objectives, or risk tolerance.
          </p>
          <p  className="text-destructive-foreground">
            The information on this website is not, and should not be interpreted as, financial advice, investment advice, a recommendation to buy or sell any security or asset, or an offer to enter into any transaction. Trading, especially in futures, forex, and cryptocurrencies, involves a substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.
          </p>
           <p  className="text-destructive-foreground">
            You should not make any financial, investment, or trading decisions based on any of the information presented on this website without undertaking independent due diligence and consultation with a qualified professional financial advisor. We are not liable for any loss or damage which may arise directly or indirectly from use of or reliance on such information.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-6 mb-2">1. Agreement to Terms</h3>
          <p>By accessing or using the Website, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you disagree with any part of the terms, then you may not access the Website.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on TradingisEZ's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on the Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
           <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by TradingisEZ at any time.</p>

           <h3 className="text-xl font-semibold mt-6 mb-2">3. Affiliate Disclosure & Third-Party Content</h3>
           <p>At TradingisEZ, our mission is to provide traders with valuable, unbiased information and resources to help them succeed. To support our work and keep our content free, we participate in affiliate marketing programs. Throughout our website, you may find links to third-party products and services (such as proprietary trading firms, trading tools, courses, etc.). These links may be affiliate links. This means that if you click on one of these links and subsequently make a purchase or sign up for a service on the third-party website, we may receive a small commission or referral fee. This comes at <strong>no additional cost to you</strong>.</p>
           <p>Using our affiliate links helps support TradingisEZ, allowing us to continue creating high-quality content. Our reviews, comparisons, and recommendations are based on thorough research, analysis, and experience. While we may receive compensation, this does not influence our editorial content. We only recommend products and services that we believe will provide value to our readers. The trust of our audience is paramount.</p>
           <p>The Website may contain links to third-party websites or services that are not owned or controlled by TradingisEZ. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that TradingisEZ shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>


          <h3 className="text-xl font-semibold mt-6 mb-2">4. Disclaimer of Warranties</h3>
          <p>The materials on the Website are provided on an 'as is' basis. TradingisEZ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, TradingisEZ does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">5. Limitations of Liability</h3>
          <p>In no event shall TradingisEZ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TradingisEZ's Website, even if TradingisEZ or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
           <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
          <p>We do not require user accounts to use our Website. However, like most website operators, we may collect non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. We may also collect potentially personally-identifying information like Internet Protocol (IP) addresses.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Information</h3>
          <p>We use the collected information to better understand how our visitors use the Website, to monitor and protect the security of the Website, and to improve our content and services. We do not sell or rent potentially personally-identifying information to anyone.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Cookies and Tracking Technologies</h3>
          <p>A cookie is a small file of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. We use cookies and similar tracking technologies (like web beacons) to help us identify and track visitors, their usage of the Website, and their website access preferences. Our affiliate partners also use cookies to track referrals from our Website. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using our Website, with the drawback that certain features may not function properly without the aid of cookies.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Links, Content, and Services</h3>
          <p>Our Website may contain links to third-party websites or services, such as the proprietary trading firms we review. This Privacy Policy does not apply to these third-party platforms, and we are not responsible for their privacy practices. If you click on links (including affiliate links) or interact with third-party services, their privacy policies will govern the collection and use of your data. We encourage you to review their policies before sharing any information.</p>
          <p>Some pages on our Website may also include embedded content from third parties (e.g., YouTube videos). Interacting with such content may result in data being shared directly with the respective third party according to their privacy policy.</p>
        
          <h3 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h3>
          <p>The security of your information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">6. Children's Privacy</h3>
          <p>Our Service is not intended for use by children under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and you are aware that your Child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from children without verification of parental consent, we take steps to remove that information from our servers.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">General Provisions</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
          <p>These terms and conditions are governed by and construed in accordance with the laws of The United States of America and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to These Terms</h3>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will note the "Last Updated" date at the top of this page. By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p>If you have any questions about these Terms, please <a href="/contact">contact us</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
