const name = 'M. Caner Arslan';
const phone = '+905385624928';
const email = 'mahmutcanerarslan@gmail.com';

const copyText = async (value) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error) {
      // Try the fallback below.
    }
  }

  const input = document.createElement('textarea');
  input.value = value;
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.append(input);
  input.select();
  const copied = document.execCommand('copy');
  input.remove();
  return copied;
};

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = document.getElementById('payment-status');
    try {
      status.textContent = await copyText(button.dataset.copy)
        ? `${button.dataset.copyLabel} kopyalandı.`
        : 'Kopyalanamadı. Metni seçerek kopyalayabilirsiniz.';
    } catch (error) {
      status.textContent = 'Kopyalanamadı. Metni seçerek kopyalayabilirsiniz.';
    }
  });
});

const paymentToggle = document.getElementById('payment-toggle');
const paymentContent = document.getElementById('payment-content');
const paymentSection = document.getElementById('payment-section');

if (paymentToggle && paymentContent) {
  paymentToggle.addEventListener('click', () => {
    const isExpanded = paymentToggle.getAttribute('aria-expanded') === 'true';
    paymentToggle.setAttribute('aria-expanded', String(!isExpanded));
    paymentContent.hidden = isExpanded;
    if (paymentSection) {
      paymentSection.classList.toggle('open', !isExpanded);
    }
  });
}

document.getElementById('save-contact').addEventListener('click', () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Arslan;Mahmut Caner;;;',
    `FN:${name}`,
    'TITLE:Bilgisayar Müh. Öğr. - Kurtköy Emlakçısı',
    `TEL;TYPE=CELL:${phone}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    'END:VCARD',
  ].join('\r\n');

  const url = URL.createObjectURL(new Blob([vcard], { type: 'text/vcard;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'M-Caner-Arslan.vcf';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

document.getElementById('share-card').addEventListener('click', async () => {
  const status = document.getElementById('share-status');
  const shareText = 'M. Caner Arslan - Dijital Kartvizit\nhttps://mcanerarslan.com.tr/kartvizit/';

  if (navigator.share) {
    try {
      await navigator.share({ text: shareText });
      status.textContent = '';
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }

  try {
    status.textContent = await copyText(shareText)
      ? 'Kartvizit bilgileri kopyalandı.'
      : 'Kartvizit bilgileri kopyalanamadı.';
  } catch (error) {
    status.textContent = 'Kartvizit bilgileri kopyalanamadı.';
  }
});
