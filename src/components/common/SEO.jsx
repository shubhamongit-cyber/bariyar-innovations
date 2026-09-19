import { useEffect } from 'react';

export const SEO = ({ title, description }) => {
  useEffect(() => {
    const baseTitle = "BARIYAR INNOVATIONS — Web, Mobile App & Custom Software Development";
    document.title = title ? `${title} | BARIYAR INNOVATIONS` : baseTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
