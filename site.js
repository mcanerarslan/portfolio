(() => {
  const THEME_STORAGE_KEY = 'theme';
  const LANGUAGE_STORAGE_KEY = 'portfolio-language';

  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_skill: 'Skill',
      nav_projects: 'Projects',
      nav_experience: 'Experience',
      nav_contact: 'Contact',
      page_title_home: 'My Portfolio WebPage',
      page_title_projects: 'Projects',
      lang_tr: 'TR',
      lang_en: 'EN',
      lang_toggle_label: 'Language switcher',
      nav_toggle: 'Toggle navigation',
      theme_day: 'Day',
      theme_night: 'Night',
      theme_switch_light: 'Switch to light theme',
      theme_switch_dark: 'Switch to dark theme',
      hero_greeting: "Hi, I'm M. Caner Arslan 👋",
      hero_title: 'Aspiring Software Developer',
      hero_titles: [
        'Aspiring Software Developer',
        'Python Enthusiast',
        'Java & C# Builder',
        'Full Stack Developer in Progress',
        'Problem Solver',
      ],
      hero_contact: 'Contact Me',
      hero_download: 'Download CV',
      about_title: 'About Me',
      about_text:
        'I am a Computer Engineering student at Istanbul Okan University. I completed the English Preparatory Program during the 2023-2024 academic year. I am currently strengthening my software development fundamentals by working with Python, C, C#, and Java. My goal is to evolve into a Full Stack Developer, and I have a deep interest in software development, problem-solving, and emerging technologies. I am eager to enhance my technical skills and teamwork competencies through internships and hands-on projects.',
      skills_title: 'Skills',
      projects_title: 'Projects',
      projects_subtitle: "Some current projects I'm working on.",
      projects_view_all: 'See all projects',
      project_1_title: 'Tic-Tac-Toe Java Swing',
      project_1_kicker: 'OOP & GUI Development',
      project_1_desc:
        'A modern desktop implementation of the classic Tic-Tac-Toe game built with Java. This project emphasizes robust game logic and responsive UI design. Key features include real-time win-condition algorithms, interactive grid buttons, and a polished aesthetic that moves beyond the standard Java look-and-feel.',
      project_1_tag_1: 'Java',
      project_1_tag_2: 'Swing',
      project_1_tag_3: 'OOP',
      project_2_title: 'Fishing Simulator (Java Swing)',
      project_2_kicker: 'Desktop-based Simulation & Economy Engine',
      project_2_desc:
        'An interactive desktop application that simulates a fishing ecosystem. Built with Java Swing, it includes a fully functional store for equipment, player statistics tracking, and persistent data storage. This project showcases the ability to transform complex back-end logic into a user-friendly graphical interface.',
      project_2_tag_1: 'Java',
      project_2_tag_2: 'Swing',
      project_2_tag_3: 'File I/O',
      project_2_tag_4: 'OOP',
      project_2_tag_5: 'Game Economy',
      project_3_title: 'Python Vocabulary Trainer',
      project_3_kicker: 'Python-Based Educational Automation',
      project_3_desc:
        'A lightweight Python application for efficient memorization. Features dynamic question sampling, real-time validation, and session summaries. Showcases clean scripting, modular loops, and stylized terminal UX for a focused learning experience.',
      project_3_tag_1: 'Python',
      project_3_tag_2: 'Automation',
      project_3_tag_3: 'Data Structures',
      experience_title: 'Experience',
      experience_education: 'Education',
      experience_community: 'Community',
      experience_work: 'Work Experience',
      experience_edu_1_title: 'Computer Engineering',
      experience_edu_1_sub: 'Istanbul Okan University',
      experience_edu_1_date: 'Oct 2024 - Jun 2028',
      experience_edu_1_bullet_1:
        'Focused on mastering software development fundamentals and core computer engineering principles.',
      experience_edu_1_bullet_2: 'Improving skills in programming, algorithms, and problem-solving.',
      experience_edu_1_bullet_3: 'Focusing on supporting theoretical knowledge with practical projects.',
      experience_edu_1_bullet_4:
        'Strengthening technical skills by developing small and medium-scale projects.',
      experience_edu_2_title: 'English Preparatory Class',
      experience_edu_2_sub: 'Istanbul Okan University',
      experience_edu_2_date: 'Oct 2023 - Jun 2024',
      experience_edu_2_bullet_1: 'Successfully completed the English Preparatory Program.',
      experience_edu_2_bullet_2: 'Developed academic reading, writing, and communication skills in English.',
      experience_edu_3_title: 'High School',
      experience_edu_3_sub: 'Kurtköy Anatolian High School',
      experience_edu_3_date: 'Sept 2018 - Jun 2022',
      experience_edu_3_bullet_1: 'Established a strong engineering foundation through a science-oriented curriculum.',
      experience_edu_3_bullet_2: 'Developed analytical thinking and problem-solving skills.',
      experience_edu_3_bullet_3: 'Gained a goal-oriented and disciplined approach to work.',
      experience_comm_1_title: 'Social Media Team Lead',
      experience_comm_1_sub: 'Huawei Student Developers - Okan University (HSDOKAN)',
      experience_comm_1_date: 'July 2025 - Feb 2026',
      experience_comm_1_bullet_1: "Led the HSDOKAN club's social media operations.",
      experience_comm_1_bullet_2:
        'Directed a 6–7 person social media team, managing coordination and task distribution.',
      experience_comm_1_bullet_3:
        'Planned content and publishing calendars to keep the accounts consistent and strategic.',
      experience_comm_1_bullet_4: "Handled the club's event and activity communications on social platforms.",
      experience_comm_1_bullet_5: "Implemented initiatives to increase the club's digital visibility and engagement.",
      experience_comm_1_tag_1: 'Social Media',
      experience_comm_1_tag_2: 'Team Leadership',
      experience_comm_1_tag_3: 'Content Planning',
      experience_comm_1_tag_4: 'Coordination',
      experience_comm_1_tag_5: 'Communication',
      experience_comm_1_tag_6: 'Engagement',
      experience_comm_2_title: 'Project Development Officer',
      experience_comm_2_sub: 'Huawei Student Developers - Okan University (HSDOKAN)',
      experience_comm_2_date: 'Dec 2025 - Feb 2026',
      experience_comm_2_bullet_1:
        'Contributing to the development phase of "CampusHub.com.tr," a university student platform project.',
      experience_comm_2_tag_1: 'Project Development',
      experience_comm_2_tag_2: 'Team Collaboration',
      experience_comm_2_tag_3: 'Problem Solving',
      experience_work_1_title: 'Real Estate Consultant',
      experience_work_1_sub: 'Kurtkoy Real Estate Agency',
      experience_work_1_date: '01.01.2026 - Present',
      experience_work_1_bullet_1:
        'I provide end-to-end real estate consultancy services, including portfolio management, client communication, property marketing, market analysis, and negotiation processes for sales and rental transactions.',
      experience_work_1_tag_1: 'Real Estate Sales',
      experience_work_1_tag_2: 'Leasing',
      experience_work_1_tag_3: 'Portfolio Management',
      experience_work_1_tag_4: 'Property Marketing',
      experience_work_1_tag_5: 'Market Research',
      experience_work_1_tag_6: 'Negotiation',
      contact_title: 'Contact',
      contact_name: 'Name',
      contact_surname: 'Surname',
      contact_email: 'example@website.com',
      contact_message: 'Type your message',
      contact_send: 'Send',
      contact_clear: 'Clear',
      contact_info_title: 'Contact Information',
      contact_info_subtitle: 'To get in touch with me directly:',
      contact_github: 'Github',
      contact_linkedin: 'Linkedin',
      footer_rights: '© 2026 Mahmut Caner Arslan. All rights reserved.',
      footer_admin: 'Admin panel',
      admin_total: 'Total',
      admin_featured: 'Featured',
      admin_storage: 'Storage',
      projects_github: 'GitHub',
      projects_live: 'Live',
      admin_kicker: 'Portfolio Admin',
      admin_title: 'Project Manager',
      admin_subtitle:
        'Add, edit, remove, and feature your projects from one place. Changes are stored in this browser and immediately reflected on the public site.',
      admin_unlock_title: 'Unlock Admin',
      admin_unlock_subtitle: 'Enter the admin pin to manage the project library.',
      admin_pin: 'Admin pin',
      admin_unlock: 'Unlock',
      admin_unlock_hint: 'Enter your admin pin to unlock the panel.',
      admin_editor_kicker: 'Editor',
      admin_add_project: 'Add Project',
      admin_edit_project: 'Edit Project',
      admin_lock: 'Lock',
      admin_title_placeholder: 'Project title',
      admin_description_placeholder: 'Project description',
      admin_tags_placeholder: 'Tags, separated by commas',
      admin_github_placeholder: 'GitHub URL',
      admin_live_placeholder: 'Live demo URL',
      admin_featured: 'Feature on home page',
      admin_save: 'Save Project',
      admin_cancel: 'Cancel',
      admin_reset: 'Reset Demo Data',
      admin_library_kicker: 'Library',
      admin_library_title: 'Saved Projects',
      admin_back: 'Back to site',
    },
    tr: {
      nav_home: 'Ana Sayfa',
      nav_about: 'Hakkımda',
      nav_skill: 'Yetenek',
      nav_projects: 'Projeler',
      nav_experience: 'Deneyim',
      nav_contact: 'İletişim',
      page_title_home: 'Portföyüm',
      page_title_projects: 'Projeler',
      lang_tr: 'TR',
      lang_en: 'EN',
      lang_toggle_label: 'Dil seçici',
      nav_toggle: 'Gezinmeyi aç/kapat',
      theme_day: 'Gündüz',
      theme_night: 'Gece',
      theme_switch_light: 'Açık temaya geç',
      theme_switch_dark: 'Koyu temaya geç',
      hero_greeting: 'Merhaba, ben M. Caner Arslan 👋',
      hero_title: 'Yazılım Geliştirici Adayı',
      hero_titles: [
        'Yazılım Geliştirici Adayı',
        'Python Meraklısı',
        'Java ve C# Geliştirici',
        'Full Stack Geliştirici Adayı',
        'Problem Çözen',
      ],
      hero_contact: 'İletişime Geç',
      hero_download: 'CV İndir',
      about_title: 'Hakkımda',
      about_text:
        'Istanbul Okan Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. 2023-2024 akademik yılında İngilizce hazırlık programını tamamladım. Şu anda Python, C, C# ve Java ile çalışarak yazılım geliştirme temellerimi güçlendiriyorum. Hedefim Full Stack Developer olmak. Yazılım geliştirme, problem çözme ve yeni teknolojilere özel bir ilgim var. Stajlar ve uygulamalı projelerle teknik becerilerimi ve ekip çalışması yetkinliklerimi geliştirmeye hazırım.',
      skills_title: 'Yetenekler',
      projects_title: 'Projeler',
      projects_subtitle: 'Şu anda üzerinde çalıştığım bazı projeler.',
      projects_view_all: 'Tüm projeleri gör',
      project_1_title: 'Tic-Tac-Toe Java Swing',
      project_1_kicker: 'OOP ve GUI Geliştirme',
      project_1_desc:
        'Java ile geliştirilmiş klasik XOX oyununun modern bir masaüstü uygulaması. Bu proje, sağlam oyun mantığı ve duyarlı arayüz tasarımına odaklanıyor. Gerçek zamanlı kazanma koşulu algoritmaları, etkileşimli ızgara butonları ve standart Java görünümünün ötesine geçen şık bir estetik içeriyor.',
      project_1_tag_1: 'Java',
      project_1_tag_2: 'Swing',
      project_1_tag_3: 'OOP',
      project_2_title: 'Fishing Simulator (Java Swing)',
      project_2_kicker: 'Masaüstü Simülasyon ve Ekonomi Motoru',
      project_2_desc:
        'Bir balıkçılık ekosistemini simüle eden etkileşimli masaüstü uygulaması. Java Swing ile geliştirilen bu proje; ekipmanlar için tam işlevli bir mağaza, oyuncu istatistik takibi ve kalıcı veri saklama özelliklerini içeriyor. Karmaşık arka uç mantığını kullanıcı dostu bir grafik arayüze dönüştürme becerisini gösteriyor.',
      project_2_tag_1: 'Java',
      project_2_tag_2: 'Swing',
      project_2_tag_3: 'Dosya G/Ç',
      project_2_tag_4: 'OOP',
      project_2_tag_5: 'Oyun Ekonomisi',
      project_3_title: 'Python Vocabulary Trainer',
      project_3_kicker: 'Python Tabanlı Eğitim Otomasyonu',
      project_3_desc:
        'Verimli ezberleme için geliştirilmiş hafif bir Python uygulaması. Dinamik soru seçimi, gerçek zamanlı doğrulama ve oturum özetleri sunuyor. Temiz script yapısı, modüler döngüler ve stilize terminal arayüzü ile odaklı bir öğrenme deneyimi sağlıyor.',
      project_3_tag_1: 'Python',
      project_3_tag_2: 'Otomasyon',
      project_3_tag_3: 'Veri Yapıları',
      experience_title: 'Deneyim',
      experience_education: 'Eğitim',
      experience_community: 'Topluluk',
      experience_work: 'İş Deneyimi',
      experience_edu_1_title: 'Bilgisayar Mühendisliği',
      experience_edu_1_sub: 'İstanbul Okan Üniversitesi',
      experience_edu_1_date: 'Eki 2024 - Haz 2028',
      experience_edu_1_bullet_1:
        'Yazılım geliştirme temelleri ve temel bilgisayar mühendisliği prensiplerinde uzmanlaşmaya odaklandım.',
      experience_edu_1_bullet_2: 'Programlama, algoritmalar ve problem çözme becerilerimi geliştirdim.',
      experience_edu_1_bullet_3: 'Teorik bilgiyi pratik projelerle desteklemeye odaklandım.',
      experience_edu_1_bullet_4:
        'Küçük ve orta ölçekli projeler geliştirerek teknik becerilerimi güçlendirdim.',
      experience_edu_2_title: 'İngilizce Hazırlık Sınıfı',
      experience_edu_2_sub: 'İstanbul Okan Üniversitesi',
      experience_edu_2_date: 'Eki 2023 - Haz 2024',
      experience_edu_2_bullet_1: 'İngilizce Hazırlık Programını başarıyla tamamladım.',
      experience_edu_2_bullet_2: 'İngilizce akademik okuma, yazma ve iletişim becerileri geliştirdim.',
      experience_edu_3_title: 'Lise',
      experience_edu_3_sub: 'Kurtköy Anadolu Lisesi',
      experience_edu_3_date: 'Eyl 2018 - Haz 2022',
      experience_edu_3_bullet_1: 'Fen ağırlıklı bir müfredatla güçlü bir mühendislik temeli oluşturdum.',
      experience_edu_3_bullet_2: 'Analitik düşünme ve problem çözme becerileri geliştirdim.',
      experience_edu_3_bullet_3: 'Hedef odaklı ve disiplinli bir çalışma yaklaşımı kazandım.',
      experience_comm_1_title: 'Sosyal Medya Takım Lideri',
      experience_comm_1_sub: 'Huawei Student Developers - Okan Üniversitesi (HSDOKAN)',
      experience_comm_1_date: 'Tem 2025 - Şub 2026',
      experience_comm_1_bullet_1: 'HSDOKAN topluluğunun sosyal medya operasyonlarını yönettim.',
      experience_comm_1_bullet_2:
        '6-7 kişilik sosyal medya ekibini yönlendirerek koordinasyon ve görev dağılımını sağladım.',
      experience_comm_1_bullet_3:
        'Hesapların tutarlı ve stratejik kalması için içerik ve yayın takvimleri planladım.',
      experience_comm_1_bullet_4: 'Topluluğun etkinlik ve faaliyet iletişimlerini sosyal platformlarda yürüttüm.',
      experience_comm_1_bullet_5: 'Topluluğun dijital görünürlüğünü ve etkileşimini artırmaya yönelik girişimler uyguladım.',
      experience_comm_1_tag_1: 'Sosyal Medya',
      experience_comm_1_tag_2: 'Takım Liderliği',
      experience_comm_1_tag_3: 'İçerik Planlama',
      experience_comm_1_tag_4: 'Koordinasyon',
      experience_comm_1_tag_5: 'İletişim',
      experience_comm_1_tag_6: 'Etkileşim',
      experience_comm_2_title: 'Proje Geliştirme Sorumlusu',
      experience_comm_2_sub: 'Huawei Student Developers - Okan Üniversitesi (HSDOKAN)',
      experience_comm_2_date: 'Ara 2025 - Şub 2026',
      experience_comm_2_bullet_1:
        '"CampusHub.com.tr" adlı üniversite öğrenci platformu projesinin geliştirme aşamasına katkı sağladım.',
      experience_comm_2_tag_1: 'Proje Geliştirme',
      experience_comm_2_tag_2: 'Takım Çalışması',
      experience_comm_2_tag_3: 'Problem Çözme',
      experience_work_1_title: 'Gayrimenkul Danışmanı',
      experience_work_1_sub: 'Kurtköy Emlak Ofisi',
      experience_work_1_date: '01.01.2026 - Devam Ediyor',
      experience_work_1_bullet_1:
        'Portföy yönetimi, müşteri iletişimi, gayrimenkul pazarlaması, piyasa analizi ve satış ile kiralama işlemlerinde pazarlık süreçlerini kapsayan uçtan uca gayrimenkul danışmanlığı hizmeti veriyorum.',
      experience_work_1_tag_1: 'Gayrimenkul Satışı',
      experience_work_1_tag_2: 'Kiralama',
      experience_work_1_tag_3: 'Portföy Yönetimi',
      experience_work_1_tag_4: 'Gayrimenkul Pazarlaması',
      experience_work_1_tag_5: 'Piyasa Araştırması',
      experience_work_1_tag_6: 'Müzakere',
      contact_title: 'İletişim',
      contact_name: 'Ad',
      contact_surname: 'Soyad',
      contact_email: 'ornek@siteniz.com',
      contact_message: 'Mesajınızı yazın',
      contact_send: 'Gönder',
      contact_clear: 'Temizle',
      contact_info_title: 'İletişim Bilgileri',
      contact_info_subtitle: 'Benimle doğrudan iletişime geçmek için:',
      contact_github: 'Github',
      contact_linkedin: 'Linkedin',
      footer_rights: '© 2026 Mahmut Caner Arslan. Tüm hakları saklıdır.',
      footer_admin: 'Yönetim paneli',
      admin_total: 'Toplam',
      admin_featured: 'Öne çıkan',
      admin_storage: 'Depolama',
      projects_github: 'GitHub',
      projects_live: 'Canlı',
      admin_kicker: 'Portföy Yönetimi',
      admin_title: 'Proje Yöneticisi',
      admin_subtitle:
        'Projelerini tek yerden ekle, düzenle, sil ve öne çıkar. Değişiklikler bu tarayıcıda saklanır ve anında herkese açık siteye yansır.',
      admin_unlock_title: 'Paneli Aç',
      admin_unlock_subtitle: 'Proje kütüphanesini yönetmek için admin pinini gir.',
      admin_pin: 'Admin pini',
      admin_unlock: 'Aç',
      admin_unlock_hint: 'Paneli açmak için admin pinini gir.',
      admin_editor_kicker: 'Düzenleyici',
      admin_add_project: 'Proje Ekle',
      admin_edit_project: 'Projeyi Düzenle',
      admin_lock: 'Kilitle',
      admin_title_placeholder: 'Proje başlığı',
      admin_description_placeholder: 'Proje açıklaması',
      admin_tags_placeholder: 'Etiketler, virgülle ayır',
      admin_github_placeholder: 'GitHub bağlantısı',
      admin_live_placeholder: 'Canlı demo bağlantısı',
      admin_featured: 'Ana sayfada öne çıkar',
      admin_save: 'Projeyi Kaydet',
      admin_cancel: 'İptal',
      admin_reset: 'Demo Verisini Sıfırla',
      admin_library_kicker: 'Kütüphane',
      admin_library_title: 'Kaydedilmiş Projeler',
      admin_back: 'Siteye dön',
    },
  };

  const state = {
    theme: 'dark',
    language: 'en',
  };

  const HERO_TITLE_TYPE_DELAY = 45;
  const HERO_TITLE_DELETE_DELAY = 25;
  const HERO_TITLE_PAUSE_DELAY = 1200;
  let heroTitleTypingTimer = null;
  let heroTitlePausingTimer = null;

  const storageAvailable = () => {
    try {
      const key = '__portfolio_test__';
      localStorage.setItem(key, '1');
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  };

  const hasLocalStorage = storageAvailable();

  const getStoredValue = (key) => {
    if (!hasLocalStorage) {
      return null;
    }

    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  const setStoredValue = (key, value) => {
    if (!hasLocalStorage) {
      return;
    }

    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures.
    }
  };

  const t = (key) => translations[state.language]?.[key] ?? translations.en[key] ?? key;

  const getHeroTitleWrapper = () => document.querySelector('[data-rotating-title]');
  const getHeroTitleText = () => getHeroTitleWrapper()?.querySelector('[data-i18n="hero_title"]');

  const clearHeroTitleRotation = () => {
    if (heroTitleTypingTimer) {
      window.clearTimeout(heroTitleTypingTimer);
      heroTitleTypingTimer = null;
    }

    if (heroTitlePausingTimer) {
      window.clearTimeout(heroTitlePausingTimer);
      heroTitlePausingTimer = null;
    }

  };

  const startHeroTitleRotation = () => {
    const heroTitleWrapper = getHeroTitleWrapper();
    const heroTitleText = getHeroTitleText();
    const titles = translations[state.language]?.hero_titles ?? translations.en.hero_titles ?? [];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    clearHeroTitleRotation();

    if (!heroTitleWrapper || !heroTitleText || titles.length === 0) {
      return;
    }

    if (reduceMotion) {
      heroTitleText.textContent = titles[0];
      heroTitleWrapper.classList.remove('is-typing', 'is-pausing');
      return;
    }

    let titleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const renderTypingStep = () => {
      const currentTitle = titles[titleIndex];

      heroTitleWrapper.classList.add('is-typing');
      heroTitleWrapper.classList.remove('is-pausing');

      if (!deleting) {
        charIndex += 1;
        heroTitleText.textContent = currentTitle.slice(0, charIndex);

        if (charIndex >= currentTitle.length) {
          deleting = true;
          heroTitleWrapper.classList.remove('is-typing');
          heroTitleWrapper.classList.add('is-pausing');

          heroTitlePausingTimer = window.setTimeout(() => {
            renderTypingStep();
          }, HERO_TITLE_PAUSE_DELAY);

          return;
        }

        heroTitleTypingTimer = window.setTimeout(renderTypingStep, HERO_TITLE_TYPE_DELAY);
        return;
      }

      charIndex -= 1;
      heroTitleText.textContent = currentTitle.slice(0, charIndex);

      if (charIndex <= 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        heroTitleWrapper.classList.remove('is-pausing');
        heroTitleTypingTimer = window.setTimeout(renderTypingStep, HERO_TITLE_DELETE_DELAY);
        return;
      }

      heroTitleTypingTimer = window.setTimeout(renderTypingStep, HERO_TITLE_DELETE_DELAY);
    };

    renderTypingStep();
  };

  const getPreferredLanguage = () => {
    const savedLanguage = getStoredValue(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      return savedLanguage;
    }

    return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  };

  const getTheme = () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

  const applyTheme = (theme) => {
    const isLight = theme === 'light';
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle__icon i');
    const themeLabel = document.querySelector('.theme-toggle__label');

    state.theme = theme;
    document.documentElement.dataset.theme = theme;

    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', isLight ? t('theme_switch_dark') : t('theme_switch_light'));
    }

    if (themeIcon) {
      themeIcon.className = isLight ? 'ri-sun-line' : 'ri-moon-line';
    }

    if (themeLabel) {
      themeLabel.textContent = isLight ? t('theme_day') : t('theme_night');
    }

    setStoredValue(THEME_STORAGE_KEY, theme);
  };

  const applyLanguage = (language) => {
    state.language = language;
    document.documentElement.lang = language === 'tr' ? 'tr' : 'en';
    const langToggle = document.querySelector('.lang-toggle');
    const hamburger = document.querySelector('.hamburger');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = t(key);
      } else {
        element.textContent = t(key);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll('[data-i18n-value]').forEach((element) => {
      const value = t(element.dataset.i18nValue);
      if (element.tagName === 'INPUT') {
        element.value = value;
      } else {
        element.textContent = value;
      }
    });

    const pageTitle = document.querySelector('title[data-i18n]');
    if (pageTitle) {
      pageTitle.textContent = t(pageTitle.dataset.i18n);
    }

    document.querySelectorAll('[data-lang-option]').forEach((button) => {
      const isActive = button.dataset.langOption === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (langToggle) {
      langToggle.setAttribute('aria-label', t('lang_toggle_label'));
    }

    if (hamburger) {
      hamburger.setAttribute('aria-label', t('nav_toggle'));
    }

    const themeLabel = document.querySelector('.theme-toggle__label');
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeLabel) {
      themeLabel.textContent = getTheme() === 'light' ? t('theme_day') : t('theme_night');
    }

    if (themeToggle) {
      themeToggle.setAttribute('aria-label', getTheme() === 'light' ? t('theme_switch_dark') : t('theme_switch_light'));
    }

    const adminFormTitle = document.querySelector('#project-form-title');
    if (adminFormTitle && adminFormTitle.dataset.i18nDynamic === 'project-form-title') {
      adminFormTitle.textContent = adminFormTitle.dataset.i18nEdit === 'true' ? t('admin_edit_project') : t('admin_add_project');
    }

    startHeroTitleRotation();
    setStoredValue(LANGUAGE_STORAGE_KEY, language);
  };

  const initLanguageToggle = () => {
    const toggleButtons = document.querySelectorAll('[data-lang-option]');
    if (!toggleButtons.length) {
      return;
    }

    toggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const nextLanguage = button.dataset.langOption === 'tr' ? 'tr' : 'en';
        applyLanguage(nextLanguage);
      });
    });
  };

  const initTheme = () => {
    const savedTheme = getStoredValue(THEME_STORAGE_KEY);
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = savedTheme || (prefersLight ? 'light' : 'dark');

    applyTheme(theme);
  };

  const initLanguage = () => {
    applyLanguage(getPreferredLanguage());
  };

  const initNavigation = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav');
    const hamburger = document.querySelector('.hamburger');

    if (!header || !nav || !hamburger) {
      return;
    }

    const syncMenuState = (isOpen) => {
      nav.classList.toggle('active', isOpen);
      header.classList.toggle('menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    hamburger.setAttribute('aria-expanded', 'false');

    hamburger.addEventListener('click', () => {
      syncMenuState(!nav.classList.contains('active'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        syncMenuState(false);
      });
    });

    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) {
        syncMenuState(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        syncMenuState(false);
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    initLanguageToggle();

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        applyTheme(getTheme() === 'light' ? 'dark' : 'light');
      });
    }
  });
})();
