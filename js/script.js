(function () {
  "use strict";

  var translations = {
    ar: {
      meta_title: "الجمعية الخيرية ريحانة الأمل - بلدية زموري",
      meta_desc : "نزرع الأمل، ونمدّ يد العون لكل محتاج.",
      brand_name: "ريحانة الأمل",
      nav_about: "من نحن",
      nav_activities: "أنشطتنا",
      nav_contact: "اتصل بنا",

      hero_eyebrow: "بلدية زموري - ولاية بومرداس",
      hero_title: "الجمعية الخيرية ريحانة الأمل",
      hero_tagline: "نزرع الأمل، ونمدّ يد العون لكل محتاج.",
      hero_btn_activities: "تعرّف على أنشطتنا",
      hero_btn_contact: "تواصل معنا",

      about_eyebrow: "تعريف بالجمعية",
      about_title: "من نحن",
      about_text: "جمعية خيرية محلية تُعنى بخدمة ومساعدة الأيتام، والأرامل، والمعوزين، والمحتاجين المقيمين ببلدية زموري فقط ,بالإضافة إلى تنظيم الزيارات الميدانية والأنشطة التضامنية والإنسانية الهادفة إلى تعزيز التكافل الاجتماعي",
      about_stat1_num: "100%",
      about_stat1_label: "تطوّع",
     
      
      about_stat3_num: "زموري",
      about_stat3_label: "مقر الجمعية",

      activities_eyebrow: "ما الذي نقوم به",
      activities_title: "أنشطتنا",

      act1_title: "زيارة الأطفال المرضى بمستشفى الثنية",
      act1_text: "نظّمت الجمعية أولى أنشطتها بزيارة إلى مستشفى الثنية، لإدخال الفرحة والسرور على قلوب الأطفال المرضى ورسم الابتسامة على وجوههم ولو للحظات بسيطة مليئة بالمحبة والإنسانية. وتتقدّم الجمعية بجزيل الشكر إلى المهرّج \"عمو حسان\" على حضوره المميز ومساهمته في إسعاد الأطفال، سائلين الله أن يبارك في كل من ساهم في هذا العمل الخيري، وأن تكون هذه المبادرة بداية لما هو أجمل بإذن الله.",

      act2_title: "مبادرة تشجيعية لتلاميذ متوسطة القشيري",
      act2_text: "بالتنسيق مع الكشافة الإسلامية الجزائرية - فوج الصمود زموري، نظّمت الجمعية مبادرة تشجيعية لتلاميذ متوسطة مسلم بن حجاج القشيري المقبلين على امتحاناتهم، تضمّنت توزيع المياه والحلويات والقصاصات التحفيزية، لزرع الأمل والطاقة الإيجابية في نفوسهم.",

      act3_title: "مساندة مترشحي شهادة البكالوريا 2026",
      act3_text: "في إطار دعم أبنائنا المترشحين لشهادة البكالوريا 2026، وزّعت الجمعية المياه المعدنية والحلويات والقصاصات التشجيعية على الممتحنين، لمساندتهم ورفع معنوياتهم في هذا اليوم المهم من مسيرتهم الدراسية.",

      act4_title: "يوم ترفيهي وتعليمي لأطفالنا الأيتام",
      act4_text: "بالتنسيق مع الأخصائية في التربية الخاصة السيدة آمال حمداش، نظّمت الجمعية يومًا ترفيهيًا وتعليميًا لفائدة الأطفال الأيتام، تضمّن ألعابًا تعليمية وورشات متنوعة نمّت مهاراتهم وزرعت في قلوبهم الأمل والثقة.",

      act5_title: "تكريم التوأم الحافظتين لكتاب الله",
      act5_text: "تشرّفت الجمعية بتكريم التوأم بن شوك هبة الرحمن وبن شوك إكرام، احتفاءً بإتمامهما حفظ كتاب الله تعالى كاملاً، في لحظة فخر واعتزاز لأهلهما وللجمعية، سائلين الله أن يجعل القرآن ربيع قلبيهما ونورًا لدربهما.",

      act6_title: "خلف الكواليس: تحضيرات حفل تكريم المتفوقين",
      act6_text: "قبل انطلاق حفل تكريم أبنائنا الأيتام المتفوقين، عمل فريق الجمعية بإخلاص على التحضيرات وترتيب أدق التفاصيل، لأن كل لحظة فرح تستحق أن تُصنع بكل حب واهتمام.",

      act7_title: "اليوم الختامي لدعم تلاميذ ثانوية الإخوة ريال",
      act7_text: "في اليوم الثالث والأخير من امتحانات شهادة التعليم المتوسط، اختتمت الجمعية مبادرتها التحفيزية بثانوية الإخوة ريال، بتوزيع المياه والحلويات والقصاصات التشجيعية، في أجواء مفعمة بالدعوات الصادقة بالتوفيق والنجاح.",

      act8_title: "مواصلة دعم مترشحي البكالوريا بثانوية الإخوة ريال",
      act8_text: "واصلت الجمعية مبادراتها التحفيزية لصالح تلاميذ ثانوية الإخوة ريال المقبلين على امتحاناتهم، بتوزيع المياه والحلويات والقصاصات التشجيعية، إيمانًا منها بأن كلمة طيبة قد تصنع أملاً، ودعوة صادقة قد تفتح أبواب النجاح.",

      act9_title: "توزيع اللحوم بمناسبة عيد الأضحى",
      act9_text: "بمناسبة عيد الأضحى المبارك 2026، نظّمت الجمعية حملة لتوزيع اللحوم على الأسر المحتاجة والأيتام والأرامل ببلدية زموري، تجسيدًا لقيم التكافل والمشاركة في أجواء العيد.",

      act10_title: "زيارة تطوعية لدار العجزة \"دار الآمال\" ببليدة",
      act10_text: "نظّمت الجمعية خرجة تطوعية لزيارة نزلاء دار العجزة \"دار الآمال\" بولاية البليدة، لإدخال البهجة والمؤانسة على قلوبهم وقضاء وقت مليء بالدفء الإنساني برفقتهم.",

      act11_title: "زيارة تطوعية لمترشحي البكالوريا ببلدية جنات",
      act11_text: "امتدت مبادرات الجمعية إلى بلدية جنات بولاية بومرداس، حيث نظّم فريق من المتطوعين زيارة ميدانية لتوزيع مياه الشرب وغيرها على مترشحي شهادة البكالوريا 2026، دعمًا لهم في أداء امتحاناتهم.",
act12_title: "إفطار تكريمي لحفظة القرآن الكريم بمخيم أنس",
act12_text: "في أجواء إيمانية طيبة، نظّمت الجمعية إفطارًا خاصًا لفائدة حفظة كتاب الله المشاركين في مخيم أنس، تكريمًا لجهدهم المتواصل في حفظ القرآن الكريم وتشجيعًا لهم على مواصلة مسيرتهم مع كتاب الله عز وجل. وحرصت الجمعية على توفير أجواء أخوية دافئة جمعت الحفظة وأسرهم والمشرفين على المخيم، في مبادرة تجسّد قيم التكافل والتشجيع على طلب العلم الشرعي ورعاية حفظة كتاب الله. وتتقدّم الجمعية بالشكر الجزيل لكل من ساهم في إنجاح هذا اليوم المبارك، سائلين الله أن يجعل القرآن الكريم ربيع قلوب أبنائنا الحفظة، وأن يبارك في هذا الصرح التربوي وفي القائمين عليه.",

act13_title: "تكريمٌ يليق بأهل القرآن",
act13_text: "كان للجمعية شرف تكريم الحافظة بلحبشية فايزة بهداية بمناسبة ختمها لكتاب الله الكريم، تقديرًا لاجتهادها وتشجيعًا لها على مواصلة مسيرتها مع القرآن الكريم. كما تم تقديم هدية مالية قدرها 150,000 دج مع تكريم والدتها الكريمة، عرفانًا بدورها في التربية والدعم، فالأم شريكة في كل نجاح. ولم تنسَ الجمعية صاحبة الفضل بعد الله، الأستاذة الفاضلة حدوش أمينة، التي كان لها الأثر الطيب في تعليم وتوجيه هذه الخاتمة، فجزاها الله خير الجزاء. نسأل الله أن يجعل القرآن ربيع قلوبنا، وأن يبارك في أهل القرآن، فهم أهل الله وخاصته.",
act14_title: "يوم ترفيهي لأطفال مرضى السرطان",
act14_text: "نظّمت الجمعية يوم ترفيه خاص لفائدة الأطفال المصابين بالسرطان، في إطار التزامها المستمر بدعم هؤلاء الأبطال الصغار ومرافقتهم في رحلتهم نحو الشفاء، وقضاء وقت مليء بالفرح والابتسامات برفقتهم.",

act15_title: "جمعية ريحانة الأمل في نجدة متضرري حرائق الغابات",
act15_text: "في ظل حرائق الغابات التي شهدتها بلادنا، بادرت الجمعية بتقديم يد العون للعائلات المتضررة، من خلال توزيع الحليب، الأدوية، الأكفان، والمواد الغذائية.",
      contact_eyebrow: "ابقَ على تواصل",
      contact_title: "اتصل بنا",
      contact_note: "للاستفسار أو المساهمة في أنشطة الجمعية، يسعدنا تواصلكم معنا عبر:",
      contact_phone: "+213 791 47 36 59",
      contact_email: "Rayhanaalmal@gmail.com",
      contact_address: "بلدية زموري، ولاية بومرداس، الجزائر",
      contact_fb: "صفحتنا على فيسبوك",

      footer_text: "© {year} الجمعية الخيرية ريحانة الأمل لبلدية زموري - جميع الحقوق محفوظة."
    },
    en: {
      meta_title: "Rihanat Al-Amal Charity Association - Zemmouri",
      meta_desc: "A newly founded charity association in Zemmouri supporting orphans, widows, the sick, and those in need",
      brand_name: "Rihanat Al-Amal",
      nav_about: "About Us",
      nav_activities: "Our Activities",
      nav_contact: "Contact",

      hero_eyebrow: "Zemmouri Municipality - Boumerdès Province",
      hero_title: "Rihanat Al-Amal Charity Association",
      hero_tagline: "Planting hope, extending a hand to those in need.",
      hero_btn_activities: "See Our Activities",
      hero_btn_contact: "Get in Touch",

      about_eyebrow: "About the Association",
      about_title: "About Us",
      about_text: "A local charity association dedicated to serving and supporting orphans, widows, and those in need residing within the municipality of Zemmouri only, in addition to organizing field visits and solidarity and humanitarian activities aimed at strengthening social cohesion.",
      about_stat1_num: "100%",
      about_stat1_label: "Volunteer-run",
      
      
      about_stat3_num: "Zemmouri",
      about_stat3_label: "Head office of the association",

      activities_eyebrow: "What We Do",
      activities_title: "Our Activities",

      act1_title: "Visiting Sick Children at Thenia Hospital",
      act1_text: "The association organized its very first activity with a visit to Thenia Hospital, bringing joy to sick children and drawing smiles on their faces, even if just for a few heartfelt moments. Special thanks go to entertainer \"Amou Hassan\" for his wonderful contribution to the children's happiness. May God bless everyone who took part — this was only the beginning of even more good to come.",

      act2_title: "Encouragement Initiative at El Kacheri Middle School",
      act2_text: "In coordination with the Algerian Muslim Scouts – Zemmouri Troop, the association organized a morale-boosting initiative for students of Mesloub Ben Hadjadj El Kacheri Middle School ahead of their exams, distributing water, sweets, and motivational notes to inspire hope and positive energy.",

      act3_title: "Supporting 2026 Baccalaureate Candidates",
      act3_text: "As part of supporting our Baccalaureate 2026 candidates, the association distributed mineral water, sweets, and encouraging notes to students, lifting their spirits on this important day of their academic journey.",

      act4_title: "A Day of Fun and Learning for Our Orphans",
      act4_text: "In coordination with special-education specialist Ms. Amel Hamdache, the association organized a recreational and educational day for orphaned children, featuring learning games and hands-on workshops that nurtured their skills and planted hope and confidence in their hearts.",

      act5_title: "Honoring Twin Sisters for Completing Quran Memorization",
      act5_text: "The association was honored to celebrate twins Ben Chouk Hiba Errahmane and Ben Chouk Ikram for completing the full memorization of the Holy Quran — a proud and joyful moment for their family and the association alike, praying God makes the Quran a light on their path.",

      act6_title: "Behind the Scenes: Preparing the Achievers' Ceremony",
      act6_text: "Before the ceremony honoring our top-achieving orphan students began, the association's team worked with dedication on every detail of the preparations — because every moment of joy deserves to be crafted with care.",

      act7_title: "Closing Day of Support at Ikhwa Riyal Mohamed wa said High School",
      act7_text: "On the third and final day of the middle school certificate exams, the association wrapped up its motivational initiative at Ikhwa Riyal Mohammed wa Said  High School, distributing water, sweets, and encouraging notes in an atmosphere filled with heartfelt wishes for success.",

      act8_title: "Continued Support for BAC Candidates at Ikhwane Riyal",
      act8_text: "The association continued its motivational initiatives for students of Ikhwane Riyal High School ahead of their exams, distributing water, sweets, and encouraging notes — believing that a kind word can plant hope, and a sincere prayer can open the doors to success.",

      act9_title: "Eid Al-Adha Meat Distribution",
      act9_text: "On the occasion of Eid Al-Adha 2026, the association organized a meat distribution campaign for families in need, orphans, and widows in Zemmouri — embodying the values of solidarity and sharing during the holiday.",

      act10_title: "Volunteer Visit to Dar Al-Amal Elderly Home in Blida",
      act10_text: "The association organized a volunteer visit to the residents of \"Dar Al-Amal\" elderly care home in Blida, bringing warmth and companionship and spending meaningful time filled with human connection.",

      act11_title: "Volunteer Visit for BAC Candidates in Djinet",
      act11_text: "The association's initiatives extended to the municipality of Djinet in Boumerdès Province, where a team of volunteers organized a field visit to distribute drinking water and other supplies to 2026 Baccalaureate candidates, supporting them through their exams.",

      act12_title: "Honorary Breakfast for the Quran Memorizers of Anas Camp",
act12_text: "In a warm and faith-filled atmosphere, the association organized a special breakfast for the Quran memorizers taking part in Anas Camp, honoring their continuous effort in memorizing the Holy Quran and encouraging them to continue their journey with God's book. The association made sure to create a welcoming, brotherly atmosphere bringing together the memorizers, their families, and the camp supervisors, in an initiative reflecting the values of solidarity and support for those pursuing religious knowledge. The association extends its sincere thanks to everyone who helped make this blessed day a success, praying that God makes the Quran a source of joy in the hearts of our young memorizers and blesses this educational endeavor and all those behind it.",

act13_title: "An Honor Befitting the People of the Quran",
act13_text: "The association was honored to celebrate Belhabchia Faiza Behdaya on completing her memorization of the Holy Quran, in recognition of her dedication and to encourage her to continue her journey with the Quran. A financial gift of 150,000 DA was also presented, along with an honor for her mother, in recognition of her role in raising and supporting her — for a mother is a partner in every success. The association also did not forget the one who, after God, deserves the credit: the esteemed teacher Haddouche Amina, whose guidance and teaching left a lasting mark on this achievement. May God reward her abundantly. We ask God to make the Quran a source of joy in our hearts and to bless the people of the Quran.",
     act14_title: "A Day of Joy for Our Little Heroes Battling Cancer",
act14_text: "The association organized a special recreational day for children battling cancer, as part of its ongoing commitment to supporting these young heroes and accompanying them on their journey toward healing. Despite the health challenges they face, these children once again proved the strength of their will and their attachment to life and hope, through genuine smiles and spontaneous moments of joy experienced throughout this day filled with games and recreational activities. This event was more than just a passing activity — it was a true space for spreading hope and joy in the hearts of our children, a reminder that even the smallest moments can create a great impact. We extend our thanks to everyone who contributed to the success of this day, and we reaffirm our commitment to continuing such initiatives, because hope grows when we share it.",

act15_title: "Riahana Al-Amal Association Comes to the Aid of Wildfire Victims",
act15_text: "Amid the wildfires that struck our country, Riahana Al-Amal Association took the initiative to lend a helping hand to affected families, distributing milk, medicine, burial shrouds, and food supplies. We extend our sincere thanks to everyone who contributed and stood with us in this initiative, praying that God rewards them abundantly and counts their good deeds in their favor.",

contact_eyebrow: "Stay in Touch",
      contact_title: "Contact Us",
      contact_note: "For questions or to contribute to our activities, we'd love to hear from you via:",
      contact_phone: "+213 791 47 36 59",
      contact_email: "Rayhanaalmal@gmail.com",
      contact_address: "Zemmouri Municipality, Boumerdès Province, Algeria",
      contact_fb: "Our Facebook Page",

      footer_text: "© {year} Rihanat Al-Amal Charity Association, Zemmouri - All rights reserved."
    }
  };

  var STORAGE_KEY = "rihanat-amal-lang";

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.ar;
    var year = new Date().getFullYear();

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key];
      if (value === undefined) return;
      value = value.replace("{year}", year);

      if (el.hasAttribute("data-i18n-attr")) {
        el.setAttribute(el.getAttribute("data-i18n-attr"), value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initLangSwitch() {
    var buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    applyLanguage(saved || "ar");
  }

  function initMobileNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initMobileNav();
  });
})();
