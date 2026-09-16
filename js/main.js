(function () {
  "use strict";

  var menuToggle = document.getElementById("menu-toggle");
  var navMobile = document.getElementById("nav-mobile");
  var contactForm = document.getElementById("contact-form");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setMenuOpen(open) {
    if (!menuToggle || !navMobile) return;
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    navMobile.classList.toggle("is-open", open);
  }

  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    });
  }

  var faqTriggers = document.querySelectorAll(".faq-trigger");

  function closeFaqPanel(trigger, panel) {
    trigger.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    panel.style.maxHeight = "0";
  }

  function openFaqPanel(trigger, panel) {
    trigger.setAttribute("aria-expanded", "true");
    panel.classList.add("is-open");
    var inner = panel.querySelector(".faq-panel__inner");
    panel.style.maxHeight = inner ? inner.scrollHeight + 24 + "px" : "20rem";
  }

  faqTriggers.forEach(function (trigger) {
    var panelId = trigger.getAttribute("aria-controls");
    var panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    trigger.addEventListener("click", function () {
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";

      faqTriggers.forEach(function (other) {
        var otherPanelId = other.getAttribute("aria-controls");
        var otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
        if (otherPanel && other !== trigger) {
          closeFaqPanel(other, otherPanel);
        }
      });

      if (isExpanded) {
        closeFaqPanel(trigger, panel);
      } else {
        openFaqPanel(trigger, panel);
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");

      var name = nameInput && nameInput.value.trim();
      var email = emailInput && emailInput.value.trim();
      var message = messageInput && messageInput.value.trim();

      if (!name || !email || !message) {
        window.alert("이름, 이메일, 메시지를 모두 입력해 주세요.");
        return;
      }

      var mailtoLink = document.querySelector('a[href^="mailto:"]');
      var to =
        mailtoLink && mailtoLink.getAttribute("href")
          ? mailtoLink.getAttribute("href").replace(/^mailto:/i, "").split("?")[0]
          : "";

      if (!to || to.indexOf("[") !== -1) {
        window.alert(
          "index.html에서 [이메일]을 실제 주소로 바꾼 후 다시 시도해 주세요."
        );
        return;
      }

      var subject = encodeURIComponent("포트폴리오 문의 — " + name);
      var body = encodeURIComponent(
        "이름: " + name + "\n이메일: " + email + "\n\n" + message
      );
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
