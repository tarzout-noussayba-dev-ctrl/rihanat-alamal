// يجلب هذا الملف الأنشطة من content/activities.json ويبنيها تلقائيًا
// بنفس تصميم البطاقات الحالي — لا حاجة لتعديل HTML يدويًا بعد الآن.

fetch('content/activities.json')
  .then(function (res) { return res.json(); })
  .then(function (data) {
    var container = document.getElementById('activities-cards');
    if (!container || !data.items) return;

    data.items.forEach(function (item) {
      var article = document.createElement('article');
      article.className = 'card';
      article.innerHTML =
        '<div class="card-img-wrap">' +
          '<img class="card-img" src="' + item.image + '" alt="' + item.title + '">' +
        '</div>' +
        '<h3>' + item.title + '</h3>' +
        '<p>' + item.description + '</p>';
      container.appendChild(article);
    });
  })
  .catch(function (err) {
    console.error('تعذر تحميل الأنشطة:', err);
  });