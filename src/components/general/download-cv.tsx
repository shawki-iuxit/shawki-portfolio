'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Md_Mustakim_Hayder_CV.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
