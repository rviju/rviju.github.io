import SocialIcon from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-xs text-gray-500 dark:text-gray-400">
          DISCLAIMER: The owners/authors/publishers do not assume any responsibility for actions or
          non-actions taken by people who have read the content and no one shall be entitled to
          claim for detrimental reliance based upon any information provided or expressed herein.
          Your use of any information provided herein does not constitute any type of contractual
          relationship between yourself and the providers of this information. The
          owners/authors/publishers hereby disclaim all responsibility and liability for all use of
          any information in this material.
        </div>
      </div>
    </footer>
  );
}
