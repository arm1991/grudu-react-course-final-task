/* eslint-disable react/no-danger */

function RenderHTML({ htmlContent, className }: { htmlContent: string; className?: string }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={className || ''} />;
}

export default RenderHTML;
