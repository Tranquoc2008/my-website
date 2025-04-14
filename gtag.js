// analytics.js

// Nạp Google Tag Manager script
const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-58B9ZW2H07';
document.head.appendChild(gtagScript);

// Cấu hình gtag
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-58B9ZW2H07');