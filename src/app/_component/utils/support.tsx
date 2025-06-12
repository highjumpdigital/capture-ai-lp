









  export const openSupportEmail = () => {
    const now = new Date().toLocaleString();
    const subject = encodeURIComponent(`Requesting support - ${now}`);
    window.location.href = `mailto:support@cptr.ai?subject=${subject}`;
  };